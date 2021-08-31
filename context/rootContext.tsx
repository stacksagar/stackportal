import { createContext, useReducer } from 'react';
import rootActionTypes from './types/rootActionTypes';
import rootStateTypes from './types/rootStateTypes';
import darkToggle from './utils/darkToggle';

const rootState: rootStateTypes = {
  thememode: 'dark',
  showCircleEffect: false,
  circleEffectPosition: {
    x: 0,
    y: 0,
  },
};

const rootReducer = (
  state: rootStateTypes = rootState,
  action: rootActionTypes
) => {
  const { type, payload } = action;

  switch (type) {
    case 'switch_theme':
      darkToggle(payload);
      return { ...state, thememode: payload };

    case 'hide_circle_effect':
      return { ...state, showCircleEffect: false };

    case 'show_circle_effect':
      return { ...state, showCircleEffect: true };

    case 'setCircleEffectPosition':
      return {
        ...state,
        circleEffectPosition: payload,
      };

    default:
      return state;
  }
};

const RootContext = createContext<object>(rootReducer);

const RootProvider = ({ children }) => {
  const [state, dispatch] = useReducer<any>(rootReducer, rootState);
  return (
    <RootContext.Provider value={{ state, dispatch }}>
      {children}
    </RootContext.Provider>
  );
};

export { RootContext, RootProvider };
