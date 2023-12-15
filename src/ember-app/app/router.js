import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-itogovyjj-докум-поставки-l');
  this.route('i-i-s-itogovyjj-докум-поставки-e',
  { path: 'i-i-s-itogovyjj-докум-поставки-e/:id' });
  this.route('i-i-s-itogovyjj-докум-поставки-e.new',
  { path: 'i-i-s-itogovyjj-докум-поставки-e/new' });
  this.route('i-i-s-itogovyjj-клиенты-l');
  this.route('i-i-s-itogovyjj-клиенты-e',
  { path: 'i-i-s-itogovyjj-клиенты-e/:id' });
  this.route('i-i-s-itogovyjj-клиенты-e.new',
  { path: 'i-i-s-itogovyjj-клиенты-e/new' });
  this.route('i-i-s-itogovyjj-организация-l');
  this.route('i-i-s-itogovyjj-организация-e',
  { path: 'i-i-s-itogovyjj-организация-e/:id' });
  this.route('i-i-s-itogovyjj-организация-e.new',
  { path: 'i-i-s-itogovyjj-организация-e/new' });
  this.route('i-i-s-itogovyjj-пункт-погрузки-l');
  this.route('i-i-s-itogovyjj-пункт-погрузки-e',
  { path: 'i-i-s-itogovyjj-пункт-погрузки-e/:id' });
  this.route('i-i-s-itogovyjj-пункт-погрузки-e.new',
  { path: 'i-i-s-itogovyjj-пункт-погрузки-e/new' });
  this.route('i-i-s-itogovyjj-список-барж-l');
  this.route('i-i-s-itogovyjj-список-барж-e',
  { path: 'i-i-s-itogovyjj-список-барж-e/:id' });
  this.route('i-i-s-itogovyjj-список-барж-e.new',
  { path: 'i-i-s-itogovyjj-список-барж-e/new' });
  this.route('i-i-s-itogovyjj-список-контей-l');
  this.route('i-i-s-itogovyjj-список-контей-e',
  { path: 'i-i-s-itogovyjj-список-контей-e/:id' });
  this.route('i-i-s-itogovyjj-список-контей-e.new',
  { path: 'i-i-s-itogovyjj-список-контей-e/new' });
  this.route('i-i-s-itogovyjj-товары-l');
  this.route('i-i-s-itogovyjj-товары-e',
  { path: 'i-i-s-itogovyjj-товары-e/:id' });
  this.route('i-i-s-itogovyjj-товары-e.new',
  { path: 'i-i-s-itogovyjj-товары-e/new' });
  this.route('i-i-s-itogovyjj-формир-док-распр-l');
  this.route('i-i-s-itogovyjj-формир-док-распр-e',
  { path: 'i-i-s-itogovyjj-формир-док-распр-e/:id' });
  this.route('i-i-s-itogovyjj-формир-док-распр-e.new',
  { path: 'i-i-s-itogovyjj-формир-док-распр-e/new' });
  this.route('i-i-s-itogovyjj-формир-рез-пос-l');
  this.route('i-i-s-itogovyjj-формир-рез-пос-e',
  { path: 'i-i-s-itogovyjj-формир-рез-пос-e/:id' });
  this.route('i-i-s-itogovyjj-формир-рез-пос-e.new',
  { path: 'i-i-s-itogovyjj-формир-рез-пос-e/new' });
});

export default Router;
