import { IUser } from "@/interfaces/User";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStoreProps {
  user: IUser | null;

  hydrated: boolean;
  setHydrated: (hydrated: boolean) => void;
  login: (user: IUser) => void;
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
