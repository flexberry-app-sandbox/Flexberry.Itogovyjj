import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  наимПункта: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-itogovyjj-пункт-погрузки.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наимПункта: {
    descriptionKey: 'models.i-i-s-itogovyjj-пункт-погрузки.validations.наимПункта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПунктПогрузкиE', 'i-i-s-itogovyjj-пункт-погрузки', {
    адрес: attr('Адрес', { index: 0 }),
    наимПункта: attr('Наим пункта', { index: 1 })
  });

  modelClass.defineProjection('ПунктПогрузкиL', 'i-i-s-itogovyjj-пункт-погрузки', {
    адрес: attr('Адрес', { index: 0 }),
    наимПункта: attr('Наим пункта', { index: 1 })
  });
};
