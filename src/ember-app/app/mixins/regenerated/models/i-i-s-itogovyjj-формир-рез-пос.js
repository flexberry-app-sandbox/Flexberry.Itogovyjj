import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  наличиеДеф: DS.attr('boolean'),
  статусЗаказа: DS.attr('i-i-s-itogovyjj-состоян-заказа'),
  удовлКлиента: DS.attr('i-i-s-itogovyjj-уд-кл'),
  формирДокРаспр: DS.belongsTo('i-i-s-itogovyjj-формир-док-распр', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-itogovyjj-формир-рез-пос.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наличиеДеф: {
    descriptionKey: 'models.i-i-s-itogovyjj-формир-рез-пос.validations.наличиеДеф.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статусЗаказа: {
    descriptionKey: 'models.i-i-s-itogovyjj-формир-рез-пос.validations.статусЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  удовлКлиента: {
    descriptionKey: 'models.i-i-s-itogovyjj-формир-рез-пос.validations.удовлКлиента.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  формирДокРаспр: {
    descriptionKey: 'models.i-i-s-itogovyjj-формир-рез-пос.validations.формирДокРаспр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирРезПосE', 'i-i-s-itogovyjj-формир-рез-пос', {
    дата: attr('Дата', { index: 0 }),
    формирДокРаспр: belongsTo('i-i-s-itogovyjj-формир-док-распр', 'Номер документа распределения', {
      докумПоставки: belongsTo('i-i-s-itogovyjj-докум-поставки', '', {
        клиенты: belongsTo('i-i-s-itogovyjj-клиенты', '', {
          заказчик: attr('Заказчик', { index: 2 }),
          адресПоставки: attr('Адрес поставки', { index: 3 }),
          телефон: attr('Телефон', { index: 4 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'номерДокРаспр' }),
    статусЗаказа: attr('Статус заказа', { index: 5 }),
    наличиеДеф: attr('Наличие дефектов', { index: 6 }),
    удовлКлиента: attr('Удовлетворенность клиента', { index: 7 })
  });

  modelClass.defineProjection('ФормирРезПосL', 'i-i-s-itogovyjj-формир-рез-пос', {
    дата: attr('Дата', { index: 0 }),
    формирДокРаспр: belongsTo('i-i-s-itogovyjj-формир-док-распр', 'Номер документа распределения', {
      номерДокРаспр: attr('Номер документа распределения', { index: 1 })
    }, { index: -1, hidden: true }),
    статусЗаказа: attr('Статус заказа', { index: 2 }),
    наличиеДеф: attr('Наличие дефектов', { index: 3 }),
    удовлКлиента: attr('Удовлетворенность клиента', { index: 4 })
  });
};
