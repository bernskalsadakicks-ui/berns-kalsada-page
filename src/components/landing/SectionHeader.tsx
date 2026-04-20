type Props = {
  title: string;
  action?: string;
  onAction?: () => void;
};

export function SectionHeader({ title, action, onAction }: Props) {
  return (
    <div className="flex items-end justify-between px-5 pb-6 pt-2">
      <div className="flex items-center gap-3">
        <span className="h-7 w-[4px] rounded-sm bg-neon shadow-[0_0_12px_oklch(0.92_0.31_138/0.6)]" />
        <h2 className="text-[20px] font-black uppercase leading-none tracking-[1.5px] text-white sm:text-[24px] [text-shadow:0_0_24px_oklch(1_0_0/0.08)]">
          {title}
        </h2>
      </div>
      {action && (
        <button
          onClick={onAction}
          className="text-[12px] font-bold uppercase tracking-[0.8px] text-neon transition hover:opacity-80"
        >
          {action}
        </button>
      )}
    </div>
  );
}
