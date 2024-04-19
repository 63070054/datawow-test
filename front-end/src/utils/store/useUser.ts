import { create } from 'zustand'

interface UserStore {
  user: User;
  switchRole: () => void;
  getEncodedUser: () => string;
}

export interface User {
  id: number;
  name: string;
  role: string;
}

const defaultUser = {
  id: 1,
  name: "Sara John",
  role: "admin",
}

const useUser = create<UserStore>((set) => ({
  user: {
    ...defaultUser
    },
  switchRole: () => set((state) => ({
    user: {
      ...state.user,
      role: state.user.role === "admin" ? "user" : "admin"
    }
  })),
  getEncodedUser: () => {
    return btoa(JSON.stringify(defaultUser));
  },
}));

export default useUser;