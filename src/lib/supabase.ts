import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type OrderStatus = 'Reserved' | 'Paid' | 'Shipped' | 'Cancelled'

export type Order = {
  id?: string
  created_at?: string
  buyer_name: string
  contact_number: string
  delivery_address: string
  item_id: string
  item_name: string
  brand: string
  size: string
  price: number
  payment_method: string
  status: OrderStatus
  notes?: string
}
export function messengerLink(text: string) {
  const pageId = import.meta.env.VITE_FB_PAGE_USERNAME
  return `https://m.me/${pageId}?text=${encodeURIComponent(text)}`
}