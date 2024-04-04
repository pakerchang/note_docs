type Listener<T> = (state: T) => void;

function createStore<S>(initialState: S) {
  let state = initialState;
  const listeners: Listener<S>[] = [];

  const getState = () => state;

  const dispatch = (newState: S) => {
    state = newState;
    listeners.forEach((listener) => listener(state));
  };

  const subscribe = (listener: Listener<S>) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  return { getState, dispatch, subscribe };
}

export default createStore;
