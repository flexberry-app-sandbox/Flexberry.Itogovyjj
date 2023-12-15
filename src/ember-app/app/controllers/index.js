import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.логистика.caption'),
          title: i18n.t('forms.application.sitemap.логистика.title'),
          children: [{
            link: 'i-i-s-itogovyjj-клиенты-l',
            caption: i18n.t('forms.application.sitemap.логистика.i-i-s-itogovyjj-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.логистика.i-i-s-itogovyjj-клиенты-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.caption'),
            title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.title'),
            children: [{
              link: 'i-i-s-itogovyjj-организация-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-itogovyjj-организация-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-itogovyjj-организация-l.title'),
              icon: 'calendar',
              children: null
            }, {
              link: 'i-i-s-itogovyjj-пункт-погрузки-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-itogovyjj-пункт-погрузки-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-itogovyjj-пункт-погрузки-l.title'),
              icon: 'folder',
              children: null
            }, {
              link: 'i-i-s-itogovyjj-список-барж-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-itogovyjj-список-барж-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-itogovyjj-список-барж-l.title'),
              icon: 'tasks',
              children: null
            }, {
              link: 'i-i-s-itogovyjj-список-контей-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-itogovyjj-список-контей-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-itogovyjj-список-контей-l.title'),
              icon: 'tasks',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.номенклатура.caption'),
            title: i18n.t('forms.application.sitemap.логистика.номенклатура.title'),
            children: [{
              link: 'i-i-s-itogovyjj-товары-l',
              caption: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-itogovyjj-товары-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-itogovyjj-товары-l.title'),
              icon: 'calendar',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.документы.caption'),
            title: i18n.t('forms.application.sitemap.логистика.документы.title'),
            children: [{
              link: 'i-i-s-itogovyjj-формир-рез-пос-l',
              caption: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-itogovyjj-формир-рез-пос-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-itogovyjj-формир-рез-пос-l.title'),
              icon: 'table',
              children: null
            }, {
              link: 'i-i-s-itogovyjj-докум-поставки-l',
              caption: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-itogovyjj-докум-поставки-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-itogovyjj-докум-поставки-l.title'),
              icon: 'chart line',
              children: null
            }, {
              link: 'i-i-s-itogovyjj-формир-док-распр-l',
              caption: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-itogovyjj-формир-док-распр-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-itogovyjj-формир-док-распр-l.title'),
              icon: 'phone',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})