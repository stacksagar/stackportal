import {
  circleEffectPositionTypes,
  showCircleEffectTypes,
  thememodeTypes,
} from './rootStateKeyTypes';

export default interface rootStateTypes {
  thememode?: thememodeTypes;
  showCircleEffect?: showCircleEffectTypes;
  circleEffectPosition?: circleEffectPositionTypes;
}