import { IStudent } from "@/interfaces/student";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStoreProps {
  user: IStudent | null;
  hydrated: boolean;
  setHydrated: (hydrated: boolean) => void;
  login: (user: IStudent) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStoreProps>()(
  persist(
    (set) => ({
      user: null,
      hydrated: false,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
      setHydrated: (hydrated) => set({ hydrated }),
    }),
    {
      name: "auth-storage",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHydrated(true);
        }
      }
    }
  )
);

export default useAuthStore;
