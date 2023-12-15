import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISItogovyjjДокумПоставкиLForm from './forms/i-i-s-itogovyjj-докум-поставки-l';
import IISItogovyjjКлиентыLForm from './forms/i-i-s-itogovyjj-клиенты-l';
import IISItogovyjjОрганизацияLForm from './forms/i-i-s-itogovyjj-организация-l';
import IISItogovyjjПунктПогрузкиLForm from './forms/i-i-s-itogovyjj-пункт-погрузки-l';
import IISItogovyjjСписокБаржLForm from './forms/i-i-s-itogovyjj-список-барж-l';
import IISItogovyjjСписокКонтейLForm from './forms/i-i-s-itogovyjj-список-контей-l';
import IISItogovyjjТоварыLForm from './forms/i-i-s-itogovyjj-товары-l';
import IISItogovyjjФормирДокРаспрLForm from './forms/i-i-s-itogovyjj-формир-док-распр-l';
import IISItogovyjjФормирРезПосLForm from './forms/i-i-s-itogovyjj-формир-рез-пос-l';
import IISItogovyjjДокумПоставкиEForm from './forms/i-i-s-itogovyjj-докум-поставки-e';
import IISItogovyjjКлиентыEForm from './forms/i-i-s-itogovyjj-клиенты-e';
import IISItogovyjjОрганизацияEForm from './forms/i-i-s-itogovyjj-организация-e';
import IISItogovyjjПунктПогрузкиEForm from './forms/i-i-s-itogovyjj-пункт-погрузки-e';
import IISItogovyjjСписокБаржEForm from './forms/i-i-s-itogovyjj-список-барж-e';
import IISItogovyjjСписокКонтейEForm from './forms/i-i-s-itogovyjj-список-контей-e';
import IISItogovyjjТоварыEForm from './forms/i-i-s-itogovyjj-товары-e';
import IISItogovyjjФормирДокРаспрEForm from './forms/i-i-s-itogovyjj-формир-док-распр-e';
import IISItogovyjjФормирРезПосEForm from './forms/i-i-s-itogovyjj-формир-рез-пос-e';
import IISItogovyjjДокумПоставкиModel from './models/i-i-s-itogovyjj-докум-поставки';
import IISItogovyjjИнфОЗаказеModel from './models/i-i-s-itogovyjj-инф-о-заказе';
import IISItogovyjjКлиентыModel from './models/i-i-s-itogovyjj-клиенты';
import IISItogovyjjОрганизацияModel from './models/i-i-s-itogovyjj-организация';
import IISItogovyjjПунктПогрузкиModel from './models/i-i-s-itogovyjj-пункт-погрузки';
import IISItogovyjjСписокБаржModel from './models/i-i-s-itogovyjj-список-барж';
import IISItogovyjjСписокКонтейModel from './models/i-i-s-itogovyjj-список-контей';
import IISItogovyjjТоварыModel from './models/i-i-s-itogovyjj-товары';
import IISItogovyjjФормирДокРаспрModel from './models/i-i-s-itogovyjj-формир-док-распр';
import IISItogovyjjФормирРезПосModel from './models/i-i-s-itogovyjj-формир-рез-пос';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-itogovyjj-докум-поставки': IISItogovyjjДокумПоставкиModel,
    'i-i-s-itogovyjj-инф-о-заказе': IISItogovyjjИнфОЗаказеModel,
    'i-i-s-itogovyjj-клиенты': IISItogovyjjКлиентыModel,
    'i-i-s-itogovyjj-организация': IISItogovyjjОрганизацияModel,
    'i-i-s-itogovyjj-пункт-погрузки': IISItogovyjjПунктПогрузкиModel,
    'i-i-s-itogovyjj-список-барж': IISItogovyjjСписокБаржModel,
    'i-i-s-itogovyjj-список-контей': IISItogovyjjСписокКонтейModel,
    'i-i-s-itogovyjj-товары': IISItogovyjjТоварыModel,
    'i-i-s-itogovyjj-формир-док-распр': IISItogovyjjФормирДокРаспрModel,
    'i-i-s-itogovyjj-формир-рез-пос': IISItogovyjjФормирРезПосModel
  },

  'application-name': 'Itogovyjj',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Itogovyjj',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Itogovyjj',
          title: 'Itogovyjj'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        логистика: {
          caption: 'Логистика',
          title: 'Логистика',
          'i-i-s-itogovyjj-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'данные-об-организации': {
            caption: 'Данные об организации',
            title: 'Данные об организации',
            'i-i-s-itogovyjj-организация-l': {
              caption: 'Организация',
              title: 'Организация'
            },
            'i-i-s-itogovyjj-пункт-погрузки-l': {
              caption: 'Пункты погрузки',
              title: 'Пункт погрузки'
            },
            'i-i-s-itogovyjj-список-барж-l': {
              caption: 'Список барж',
              title: 'Список барж'
            },
            'i-i-s-itogovyjj-список-контей-l': {
              caption: 'Список контейнеров',
              title: 'Список контей'
            }
          },
          номенклатура: {
            caption: 'Номенклатура',
            title: 'Номенклатура',
            'i-i-s-itogovyjj-товары-l': {
              caption: 'Товары',
              title: 'Товары'
            }
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-itogovyjj-формир-рез-пос-l': {
              caption: 'Формирование результата поставки',
              title: 'Формир рез пос'
            },
            'i-i-s-itogovyjj-докум-поставки-l': {
              caption: 'Документ поставки',
              title: 'Докум поставки'
            },
            'i-i-s-itogovyjj-формир-док-распр-l': {
              caption: 'Формирование документа распределения',
              title: 'Формир док распр'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-itogovyjj-докум-поставки-l': IISItogovyjjДокумПоставкиLForm,
    'i-i-s-itogovyjj-клиенты-l': IISItogovyjjКлиентыLForm,
    'i-i-s-itogovyjj-организация-l': IISItogovyjjОрганизацияLForm,
    'i-i-s-itogovyjj-пункт-погрузки-l': IISItogovyjjПунктПогрузкиLForm,
    'i-i-s-itogovyjj-список-барж-l': IISItogovyjjСписокБаржLForm,
    'i-i-s-itogovyjj-список-контей-l': IISItogovyjjСписокКонтейLForm,
    'i-i-s-itogovyjj-товары-l': IISItogovyjjТоварыLForm,
    'i-i-s-itogovyjj-формир-док-распр-l': IISItogovyjjФормирДокРаспрLForm,
    'i-i-s-itogovyjj-формир-рез-пос-l': IISItogovyjjФормирРезПосLForm,
    'i-i-s-itogovyjj-докум-поставки-e': IISItogovyjjДокумПоставкиEForm,
    'i-i-s-itogovyjj-клиенты-e': IISItogovyjjКлиентыEForm,
    'i-i-s-itogovyjj-организация-e': IISItogovyjjОрганизацияEForm,
    'i-i-s-itogovyjj-пункт-погрузки-e': IISItogovyjjПунктПогрузкиEForm,
    'i-i-s-itogovyjj-список-барж-e': IISItogovyjjСписокБаржEForm,
    'i-i-s-itogovyjj-список-контей-e': IISItogovyjjСписокКонтейEForm,
    'i-i-s-itogovyjj-товары-e': IISItogovyjjТоварыEForm,
    'i-i-s-itogovyjj-формир-док-распр-e': IISItogovyjjФормирДокРаспрEForm,
    'i-i-s-itogovyjj-формир-рез-пос-e': IISItogovyjjФормирРезПосEForm
  },

});

export default translations;
