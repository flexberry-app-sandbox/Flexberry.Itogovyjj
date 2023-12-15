import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-itogovyjj-формир-рез-пос', 'Unit | Serializer | i-i-s-itogovyjj-формир-рез-пос', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-itogovyjj-формир-рез-пос',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-itogovyjj-ед-изм',
    'transform:i-i-s-itogovyjj-состоян-заказа',
    'transform:i-i-s-itogovyjj-уд-кл',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
