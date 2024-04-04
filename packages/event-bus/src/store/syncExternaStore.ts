import { useSyncExternalStore } from "react";

function createStore<S>(store: S) {
  let state: S = store;
  let emitCallbacks: (() => void)[] = [];

  const onEmit = () => emitCallbacks.forEach((cb) => cb());

  const reducer = (set: (state: S) => S) => {
    const newState = set(state);
    if (newState !== state) {
      state = newState;
      onEmit();
    }
  };

  const useStore = () =>
    useSyncExternalStore(
      (emit) => {
        emitCallbacks = emitCallbacks.concat(emit);
        return () => {
          emitCallbacks = emitCallbacks.filter((cb) => cb !== emit);
        };
      },
      () => state
    );

  const subscribe = (cb: (state: S) => void) => {
    emitCallbacks = emitCallbacks.concat(() => cb(state));
  };

  return {
    useStore,
    reducer,
    subscribe,
  };
}

export default createStore;
