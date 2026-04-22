import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import type { OrderStatus } from "@/lib/supabase";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD ?? "berns2025";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

type Order = {
  id: string;
  created_at: string;
  buyer_name: string;
  contact_number: string;
  delivery_address: string;
  item_id: string;
  item_name: string;
  brand: string;
  size: string;
  price: number;
  payment_method: string;
  status: OrderStatus;
  notes?: string;
};

const STATUS_COLORS: Record<OrderStatus, string> = {
  Reserved: "border-yellow-500/40 bg-yellow-500/10 text-yellow-400",
  Paid: "border-blue-500/40 bg-blue-500/10 text-blue-400",
  Shipped: "border-green-500/40 bg-green-500/10 text-green-400",
  Cancelled: "border-red-500/40 bg-red-500/10 text-red-400",
};

const STATUSES: OrderStatus[] = ["Reserved", "Paid", "Shipped", "Cancelled"];

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin_auth", "true");
      onLogin();
    } else {
      setError("Mali ang password. Subukan ulit.");
      setPw("");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#070709] px-4">
      <div className="w-full max-w-sm rounded-2xl border border-[#1e1e1e] bg-[#0f0f14] p-8">
        <div className="mb-6 text-center">
          <div className="mb-2 text-xs font-bold uppercase tracking-[2px] text-[#39FF14]">
            BERNS Kalsada Kicks
          </div>
          <div className="text-xl font-black text-white">Admin Dashboard</div>
          <div className="mt-1 text-xs text-gray-500">Enter password to continue</div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Password"
            className="mb-3 w-full rounded-lg border border-[#222] bg-[#0a0a0d] px-4 py-3 text-sm text-white outline-none focus:border-[#39FF14]/50"
            autoFocus
          />
          {error && (
            <div className="mb-3 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-400">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#39FF14] py-3 text-sm font-black text-black transition hover:opacity-90"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<OrderStatus | "All">("All");
  const [updating, setUpdating] = useState<string | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "true") {
      setAuthed(true);
    }
  }, []);

  const fetchOrders = useCallback(async () => {
    const { data } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setOrders(data as Order[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!authed) return;
    fetchOrders();

    const channel = supabase
      .channel("orders-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "orders" }, () => {
        fetchOrders();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [authed, fetchOrders]);

  const updateStatus = async (id: string, status: OrderStatus) => {
    setUpdating(id);
    await supabase.from("orders").update({ status }).eq("id", id);
    setUpdating(null);
  };

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;

  const filtered = orders.filter((o) => {
    const matchSearch =
      o.buyer_name.toLowerCase().includes(search.toLowerCase()) ||
      o.item_name.toLowerCase().includes(search.toLowerCase()) ||
      o.brand.toLowerCase().includes(search.toLowerCase()) ||
      o.contact_number.includes(search);
    const matchStatus = filterStatus === "All" || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const stats = {
    total: orders.length,
    reserved: orders.filter((o) => o.status === "Reserved").length,
    paid: orders.filter((o) => o.status === "Paid").length,
    shipped: orders.filter((o) => o.status === "Shipped").length,
    cancelled: orders.filter((o) => o.status === "Cancelled").length,
  };

  const totalRevenue = orders
    .filter((o) => o.status === "Paid" || o.status === "Shipped")
    .reduce((sum, o) => sum + (o.price ?? 0), 0);

  return (
    <div className="min-h-screen bg-[#070709] text-white">
      <div className="border-b border-[#1a1a1a] bg-[#0f0f14] px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-[2px] text-[#39FF14]">
              BERNS Kalsada Kicks
            </div>
            <div className="text-lg font-black text-white">Orders Dashboard</div>
          </div>
          <button
            onClick={() => { sessionStorage.removeItem("admin_auth"); setAuthed(false); }}
            className="rounded-lg border border-[#222] px-4 py-2 text-xs font-bold text-gray-400 transition hover:border-red-500/40 hover:text-red-400"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { label: "Total Orders", value: stats.total, color: "text-white" },
            { label: "Reserved", value: stats.reserved, color: "text-yellow-400" },
            { label: "Paid", value: stats.paid, color: "text-blue-400" },
            { label: "Shipped", value: stats.shipped, color: "text-green-400" },
            { label: "Cancelled", value: stats.cancelled, color: "text-red-400" },
            { label: "Revenue", value: `₱${totalRevenue.toLocaleString()}`, color: "text-[#39FF14]" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-[#1e1e1e] bg-[#0f0f14] p-4">
              <div className="mb-1 text-xs text-gray-500 uppercase tracking-[0.5px]">{s.label}</div>
              <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
            </div>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Search buyer, item, brand..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-[200px] rounded-lg border border-[#222] bg-[#0f0f14] px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-600 focus:border-[#39FF14]/40"
          />
          <div className="flex gap-2 flex-wrap">
            {(["All", ...STATUSES] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFilterStatus(s as OrderStatus | "All")}
                className={`rounded-lg border px-3 py-2 text-xs font-bold transition ${
                  filterStatus === s
                    ? "border-[#39FF14]/40 bg-[#39FF14]/10 text-[#39FF14]"
                    : "border-[#222] text-gray-500 hover:border-[#333] hover:text-gray-300"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="py-16 text-center text-sm text-gray-500">Loading orders...</div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center text-sm text-gray-500">No orders found.</div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-[#1e1e1e]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1e1e1e] bg-[#0f0f14]">
                  {["Date", "Buyer", "Item", "Price", "Status", "Action"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-[0.5px] text-gray-500">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((o, i) => (
                  <tr
                    key={o.id}
                    className={`border-b border-[#1a1a1a] transition hover:bg-[#0f0f14] ${i % 2 === 0 ? "bg-[#070709]" : "bg-[#090909]"}`}
                  >
                    <td className="px-4 py-3 text-xs text-gray-400 whitespace-nowrap">
                      {new Date(o.created_at).toLocaleDateString("en-PH", {
                        month: "short", day: "numeric", year: "numeric"
                      })}
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-bold text-white">{o.buyer_name}</div>
                      <div className="text-xs text-gray-500">{o.contact_number}</div>
                      <div className="text-xs text-gray-600">{o.delivery_address}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-xs font-bold uppercase tracking-wide text-[#39FF14]">{o.brand}</div>
                      <div className="font-bold text-white">{o.item_name}</div>
                      <div className="text-xs text-gray-500">{o.size}</div>
                    </td>
                    <td className="px-4 py-3 font-black text-white whitespace-nowrap">
                      ₱{(o.price ?? 0).toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`rounded-md border px-2.5 py-1 text-xs font-bold ${STATUS_COLORS[o.status]}`}>
                        {o.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={o.status}
                        disabled={updating === o.id}
                        onChange={(e) => updateStatus(o.id, e.target.value as OrderStatus)}
                        className="rounded-lg border border-[#222] bg-[#0f0f14] px-2 py-1.5 text-xs text-white outline-none disabled:opacity-50 focus:border-[#39FF14]/40"
                      >
                        {STATUSES.map((s) => (
                          <option key={s} value={s}>{updating === o.id ? "Updating..." : s}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}