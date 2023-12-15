import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-itogovyjj-список-барж', 'Unit | Model | i-i-s-itogovyjj-список-барж', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-itogovyjj-докум-поставки',
    'model:i-i-s-itogovyjj-инф-о-заказе',
    'model:i-i-s-itogovyjj-клиенты',
    'model:i-i-s-itogovyjj-организация',
    'model:i-i-s-itogovyjj-пункт-погрузки',
    'model:i-i-s-itogovyjj-список-барж',
    'model:i-i-s-itogovyjj-список-контей',
    'model:i-i-s-itogovyjj-товары',
    'model:i-i-s-itogovyjj-формир-док-распр',
    'model:i-i-s-itogovyjj-формир-рез-пос',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
