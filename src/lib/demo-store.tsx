import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type SelectionItem = { name: string; price: number; quantity: number };
export type DemoUser = { name: string; email: string };

type DemoStore = {
  user: DemoUser | null;
  selection: SelectionItem[];
  signIn: (user: DemoUser) => void;
  signOut: () => void;
  addItem: (item: Omit<SelectionItem, "quantity">) => void;
  changeQuantity: (name: string, change: number) => void;
  clearSelection: () => void;
};

const DemoContext = createContext<DemoStore | null>(null);

function readLocal<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function DemoProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(() => readLocal("lumiere-user", null));
  const [selection, setSelection] = useState<SelectionItem[]>(() =>
    readLocal("lumiere-selection", []),
  );

  useEffect(() => window.localStorage.setItem("lumiere-user", JSON.stringify(user)), [user]);
  useEffect(
    () => window.localStorage.setItem("lumiere-selection", JSON.stringify(selection)),
    [selection],
  );

  const addItem = (item: Omit<SelectionItem, "quantity">) => {
    setSelection((current) => {
      const found = current.find((entry) => entry.name === item.name);
      return found
        ? current.map((entry) =>
            entry.name === item.name ? { ...entry, quantity: entry.quantity + 1 } : entry,
          )
        : [...current, { ...item, quantity: 1 }];
    });
  };

  const changeQuantity = (name: string, change: number) => {
    setSelection((current) =>
      current
        .map((item) => (item.name === name ? { ...item, quantity: item.quantity + change } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <DemoContext.Provider
      value={{
        user,
        selection,
        signIn: setUser,
        signOut: () => setUser(null),
        addItem,
        changeQuantity,
        clearSelection: () => setSelection([]),
      }}
    >
      {children}
    </DemoContext.Provider>
  );
}

export function useDemoStore() {
  const store = useContext(DemoContext);
  if (!store) throw new Error("useDemoStore must be used inside DemoProvider");
  return store;
}
