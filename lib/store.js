import { create } from "zustand";

export const useProfileStore = create((set) => ({
       userProfile: null,
       setUserProfile: (payload) => set(()=> ({ userProfile:  payload}))
}))