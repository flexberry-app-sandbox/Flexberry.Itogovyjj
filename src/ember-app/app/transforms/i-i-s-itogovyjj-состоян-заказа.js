import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостоянЗаказаEnum from '../enums/i-i-s-itogovyjj-состоян-заказа';

export default FlexberryEnum.extend({
  enum: СостоянЗаказаEnum,
  sourceType: 'IIS.Itogovyjj.СостоянЗаказа'
});
