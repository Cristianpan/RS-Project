import { IUser } from "@/interfaces/User";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStoreProps {
  user: IUser | null;

  login: (user: IUser) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStoreProps>()(
  persist(
    (set) => ({
      user: null,

      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
