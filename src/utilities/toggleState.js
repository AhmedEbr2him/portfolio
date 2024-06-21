export const toggleState = (state, setState, stateKey) => {
  const newState = !state;
  setState(newState);
  sessionStorage.setItem(stateKey, JSON.stringify(state));
};
