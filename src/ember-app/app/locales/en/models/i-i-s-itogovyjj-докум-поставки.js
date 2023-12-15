export default {
  projections: {
    ДокумПоставкиE: {
      дата: {
        __caption__: 'Дата'
      },
      номерДокПост: {
        __caption__: 'Номер документа поставки'
      },
      клиенты: {
        __caption__: 'Клиент',
        заказчик: {
          __caption__: 'Заказчик'
        }
      },
      организация: {
        __caption__: 'Организация',
        наимОрганиз: {
          __caption__: 'Наименование организации'
        }
      },
      инфОЗаказе: {
        __caption__: 'Информация о заказе',
        товары: {
          __caption__: 'Наименование товара',
          наимТовара: {
            __caption__: 'Наименование товара'
          },
          единицыИзмер: {
            __caption__: 'Единицы измерения'
          },
          масса: {
            __caption__: 'Масса'
          },
          цена: {
            __caption__: 'Цена'
          }
        },
        количество: {
          __caption__: 'Количество'
        }
      }
    },
    ДокумПоставкиL: {
      дата: {
        __caption__: 'Дата'
      },
      номерДокПост: {
        __caption__: 'Номер документа поставки'
      },
      клиенты: {
        __caption__: 'Заказчик',
        заказчик: {
          __caption__: 'Заказчик'
        }
      },
      организация: {
        __caption__: 'Наименование организации',
        наимОрганиз: {
          __caption__: 'Наименование организации'
        }
      }
    }
  },
  validations: {
    дата: {
      __caption__: 'Дата'
    },
    номерДокПост: {
      __caption__: 'Номер документа поставки'
    },
    клиенты: {
      __caption__: 'Клиент'
    },
    организация: {
      __caption__: 'Организация'
    },
    инфОЗаказе: {
      __caption__: 'Информация о заказе'
    }
  }
};
