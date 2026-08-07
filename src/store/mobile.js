import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useMobileStore = create(immer((set) => ({
    activeApp: null,
    stack: [],

    openApp: (appId) => set((state) => {
        state.activeApp = appId;
        state.stack = [];
    }),
    closeApp: () => set((state) => {
        state.activeApp = null;
        state.stack = [];
    }),
    pushScreen: (screen) => set((state) => {
        state.stack.push(screen);
    }),
    popScreen: () => set((state) => {
        state.stack.pop();
    }),
})));

export default useMobileStore;
