import { create } from "zustand";
import { persist } from "zustand/middleware";
import { findService } from "./catalog";

export type CartLine = { serviceId: string; qty: number };

export type OrderLine = {
  serviceId: string;
  title: string;
  price: number;
  qty: number;
};

export type ClinicOrder = {
  id: string;
  folio: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  notes: string;
  lines: OrderLine[];
  total: number;
  createdAt: string;
};

type CartState = {
  lines: CartLine[];
  orders: ClinicOrder[];
  add: (serviceId: string) => void;
  setQty: (serviceId: string, qty: number) => void;
  remove: (serviceId: string) => void;
  clear: () => void;
  placeOrder: (input: {
    name: string;
    email: string;
    phone: string;
    date: string;
    notes: string;
  }) => { ok: true; order: ClinicOrder } | { ok: false; error: string };
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      orders: [],
      add: (serviceId) => {
        if (!findService(serviceId)) return;
        const lines = get().lines;
        const found = lines.find((line) => line.serviceId === serviceId);
        if (found) {
          set({
            lines: lines.map((line) =>
              line.serviceId === serviceId ? { ...line, qty: Math.min(line.qty + 1, 6) } : line,
            ),
          });
          return;
        }
        set({ lines: [...lines, { serviceId, qty: 1 }] });
      },
      setQty: (serviceId, qty) => {
        const next = Math.max(1, Math.min(6, qty));
        set({
          lines: get().lines.map((line) =>
            line.serviceId === serviceId ? { ...line, qty: next } : line,
          ),
        });
      },
      remove: (serviceId) => {
        set({ lines: get().lines.filter((line) => line.serviceId !== serviceId) });
      },
      clear: () => set({ lines: [] }),
      placeOrder: (input) => {
        const name = input.name.trim();
        const email = input.email.trim();
        const phone = input.phone.trim();
        if (!name || !email || !phone) {
          return { ok: false, error: "Completa nombre, correo y teléfono." };
        }
        const lines = get().lines.flatMap((line) => {
          const service = findService(line.serviceId);
          if (!service) return [];
          return [{ serviceId: service.id, title: service.title, price: service.price, qty: line.qty }];
        });
        if (lines.length === 0) return { ok: false, error: "La cesta está vacía." };
        const total = lines.reduce((sum, line) => sum + line.price * line.qty, 0);
        const stamp = Date.now().toString(36).toUpperCase();
        const order: ClinicOrder = {
          id: `ord-${crypto.randomUUID()}`,
          folio: `AUR-${stamp.slice(-6)}`,
          name,
          email,
          phone,
          date: input.date,
          notes: input.notes.trim(),
          lines,
          total,
          createdAt: new Date().toISOString(),
        };
        set({ orders: [order, ...get().orders], lines: [] });
        return { ok: true, order };
      },
    }),
    { name: "aurora-cart", partialize: (state) => ({ lines: state.lines, orders: state.orders }) },
  ),
);
