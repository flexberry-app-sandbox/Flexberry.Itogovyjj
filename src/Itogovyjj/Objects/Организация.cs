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
    /// Организация.
    /// </summary>
    // *** Start programmer edit section *** (Организация CustomAttributes)

    // *** End programmer edit section *** (Организация CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОрганизацияE", new string[] {
            "НаимОрганиз as \'Наименование организации\'"})]
    [View("ОрганизацияL", new string[] {
            "НаимОрганиз as \'Наименование организации\'"})]
    public class Организация : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаимОрганиз;
        
        // *** Start programmer edit section *** (Организация CustomMembers)

        // *** End programmer edit section *** (Организация CustomMembers)

        
        /// <summary>
        /// НаимОрганиз.
        /// </summary>
        // *** Start programmer edit section *** (Организация.НаимОрганиз CustomAttributes)

        // *** End programmer edit section *** (Организация.НаимОрганиз CustomAttributes)
        [StrLen(255)]
        public virtual string НаимОрганиз
        {
            get
            {
                // *** Start programmer edit section *** (Организация.НаимОрганиз Get start)

                // *** End programmer edit section *** (Организация.НаимОрганиз Get start)
                string result = this.fНаимОрганиз;
                // *** Start programmer edit section *** (Организация.НаимОрганиз Get end)

                // *** End programmer edit section *** (Организация.НаимОрганиз Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Организация.НаимОрганиз Set start)

                // *** End programmer edit section *** (Организация.НаимОрганиз Set start)
                this.fНаимОрганиз = value;
                // *** Start programmer edit section *** (Организация.НаимОрганиз Set end)

                // *** End programmer edit section *** (Организация.НаимОрганиз Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОрганизацияE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОрганизацияE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОрганизацияE", typeof(IIS.Itogovyjj.Организация));
                }
            }
            
            /// <summary>
            /// "ОрганизацияL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОрганизацияL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОрганизацияL", typeof(IIS.Itogovyjj.Организация));
                }
            }
        }
    }
}
