import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДокПост: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-itogovyjj-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-itogovyjj-организация', { inverse: null, async: false }),
  инфОЗаказе: DS.hasMany('i-i-s-itogovyjj-инф-о-заказе', { inverse: 'докумПоставки', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-itogovyjj-докум-поставки.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДокПост: {
    descriptionKey: 'models.i-i-s-itogovyjj-докум-поставки.validations.номерДокПост.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-itogovyjj-докум-поставки.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-itogovyjj-докум-поставки.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  инфОЗаказе: {
    descriptionKey: 'models.i-i-s-itogovyjj-докум-поставки.validations.инфОЗаказе.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумПоставкиE', 'i-i-s-itogovyjj-докум-поставки', {
    дата: attr('Дата', { index: 0 }),
    номерДокПост: attr('Номер документа поставки', { index: 1 }),
    клиенты: belongsTo('i-i-s-itogovyjj-клиенты', 'Клиент', {
      заказчик: attr('Заказчик', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'заказчик' }),
    организация: belongsTo('i-i-s-itogovyjj-организация', 'Организация', {
      наимОрганиз: attr('Наименование организации', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наимОрганиз' }),
    инфОЗаказе: hasMany('i-i-s-itogovyjj-инф-о-заказе', 'Информация о заказе', {
      товары: belongsTo('i-i-s-itogovyjj-товары', 'Наименование товара', {
        наимТовара: attr('Наименование товара', { index: 1, hidden: true }),
        единицыИзмер: attr('Единицы измерения', { index: 3 }),
        масса: attr('Масса', { index: 4 }),
        цена: attr('Цена', { index: 5 })
      }, { index: 0, displayMemberPath: 'наимТовара' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('ДокумПоставкиL', 'i-i-s-itogovyjj-докум-поставки', {
    дата: attr('Дата', { index: 0 }),
    номерДокПост: attr('Номер документа поставки', { index: 1 }),
    клиенты: belongsTo('i-i-s-itogovyjj-клиенты', 'Заказчик', {
      заказчик: attr('Заказчик', { index: 2 })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-itogovyjj-организация', 'Наименование организации', {
      наимОрганиз: attr('Наименование организации', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
