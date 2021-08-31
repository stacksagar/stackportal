import RootDispatchTypes from './rootDispatchTypes';
import rootStateTypes from './rootStateTypes';

export default interface rootContextTypes {
  state?: rootStateTypes;
  dispatch?: RootDispatchTypes;
}