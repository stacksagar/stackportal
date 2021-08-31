import {
  circleEffectPositionTypes,
  showCircleEffectTypes,
  thememodeTypes,
} from './rootStateKeyTypes';

export default interface rootActionTypes {
  type:
    | 'switch_theme'
    | 'hide_circle_effect'
    | 'show_circle_effect'
    | 'setCircleEffectPosition';

  payload?:
    | object
    | thememodeTypes
    | showCircleEffectTypes
    | circleEffectPositionTypes;
}
