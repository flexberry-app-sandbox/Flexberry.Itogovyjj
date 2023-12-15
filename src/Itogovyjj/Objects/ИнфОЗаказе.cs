﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Itogovyjj
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Инф о заказе.
    /// </summary>
    // *** Start programmer edit section *** (ИнфОЗаказе CustomAttributes)

    // *** End programmer edit section *** (ИнфОЗаказе CustomAttributes)
    [AutoAltered()]
    [Caption("Информация о заказе")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ИнфОЗаказеE", new string[] {
            "Товары as \'Наименование товара\'",
            "Товары.НаимТовара as \'Наименование товара\'",
            "Количество as \'Количество\'",
            "Товары.ЕдиницыИзмер as \'Единицы измерения\'",
            "Товары.Масса as \'Масса\'",
            "Товары.Цена as \'Цена\'"}, Hidden=new string[] {
            "Товары.НаимТовара"})]
    [MasterViewDefineAttribute("ИнфОЗаказеE", "Товары", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НаимТовара")]
    public class ИнфОЗаказе : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private IIS.Itogovyjj.Товары fТовары;
        
        private IIS.Itogovyjj.ДокумПоставки fДокумПоставки;
        
        // *** Start programmer edit section *** (ИнфОЗаказе CustomMembers)

        // *** End programmer edit section *** (ИнфОЗаказе CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (ИнфОЗаказе.Количество CustomAttributes)

        // *** End programmer edit section *** (ИнфОЗаказе.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (ИнфОЗаказе.Количество Get start)

                // *** End programmer edit section *** (ИнфОЗаказе.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (ИнфОЗаказе.Количество Get end)

                // *** End programmer edit section *** (ИнфОЗаказе.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИнфОЗаказе.Количество Set start)

                // *** End programmer edit section *** (ИнфОЗаказе.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (ИнфОЗаказе.Количество Set end)

                // *** End programmer edit section *** (ИнфОЗаказе.Количество Set end)
            }
        }
        
        /// <summary>
        /// Инф о заказе.
        /// </summary>
        // *** Start programmer edit section *** (ИнфОЗаказе.Товары CustomAttributes)

        // *** End programmer edit section *** (ИнфОЗаказе.Товары CustomAttributes)
        [PropertyStorage(new string[] {
                "Товары"})]
        [NotNull()]
        public virtual IIS.Itogovyjj.Товары Товары
        {
            get
            {
                // *** Start programmer edit section *** (ИнфОЗаказе.Товары Get start)

                // *** End programmer edit section *** (ИнфОЗаказе.Товары Get start)
                IIS.Itogovyjj.Товары result = this.fТовары;
                // *** Start programmer edit section *** (ИнфОЗаказе.Товары Get end)

                // *** End programmer edit section *** (ИнфОЗаказе.Товары Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИнфОЗаказе.Товары Set start)

                // *** End programmer edit section *** (ИнфОЗаказе.Товары Set start)
                this.fТовары = value;
                // *** Start programmer edit section *** (ИнфОЗаказе.Товары Set end)

                // *** End programmer edit section *** (ИнфОЗаказе.Товары Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Itogovyjj.ДокумПоставки.
        /// </summary>
        // *** Start programmer edit section *** (ИнфОЗаказе.ДокумПоставки CustomAttributes)

        // *** End programmer edit section *** (ИнфОЗаказе.ДокумПоставки CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ДокумПоставки"})]
        public virtual IIS.Itogovyjj.ДокумПоставки ДокумПоставки
        {
            get
            {
                // *** Start programmer edit section *** (ИнфОЗаказе.ДокумПоставки Get start)

                // *** End programmer edit section *** (ИнфОЗаказе.ДокумПоставки Get start)
                IIS.Itogovyjj.ДокумПоставки result = this.fДокумПоставки;
                // *** Start programmer edit section *** (ИнфОЗаказе.ДокумПоставки Get end)

                // *** End programmer edit section *** (ИнфОЗаказе.ДокумПоставки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ИнфОЗаказе.ДокумПоставки Set start)

                // *** End programmer edit section *** (ИнфОЗаказе.ДокумПоставки Set start)
                this.fДокумПоставки = value;
                // *** Start programmer edit section *** (ИнфОЗаказе.ДокумПоставки Set end)

                // *** End programmer edit section *** (ИнфОЗаказе.ДокумПоставки Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ИнфОЗаказеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ИнфОЗаказеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ИнфОЗаказеE", typeof(IIS.Itogovyjj.ИнфОЗаказе));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ИнфОЗаказе.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfИнфОЗаказе CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfИнфОЗаказе CustomAttributes)
    public class DetailArrayOfИнфОЗаказе : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Itogovyjj.DetailArrayOfИнфОЗаказе members)

        // *** End programmer edit section *** (IIS.Itogovyjj.DetailArrayOfИнфОЗаказе members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ИнфОЗаказе by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ИнфОЗаказе.
        /// </summary>
        public DetailArrayOfИнфОЗаказе(IIS.Itogovyjj.ДокумПоставки fДокумПоставки) : 
                base(typeof(ИнфОЗаказе), ((ICSSoft.STORMNET.DataObject)(fДокумПоставки)))
        {
        }
        
        public IIS.Itogovyjj.ИнфОЗаказе this[int index]
        {
            get
            {
                return ((IIS.Itogovyjj.ИнфОЗаказе)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Itogovyjj.ИнфОЗаказе dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
