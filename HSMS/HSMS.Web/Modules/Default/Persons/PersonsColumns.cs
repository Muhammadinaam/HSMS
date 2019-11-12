
namespace HSMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Persons")]
    [BasedOnRow(typeof(Entities.PersonsRow), CheckNames = true)]
    public class PersonsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [Width(150), QuickFilter]
        public Int32 PersonType { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String FatherName { get; set; }
        public String HusbandName { get; set; }
        public String Cnic { get; set; }
        public String Address { get; set; }
        public String Phone { get; set; }
        public String KinName { get; set; }
        public String KinFatherName { get; set; }
        public String KinHusbandName { get; set; }
        public String KinCnic { get; set; }
        public String KinAddress { get; set; }
        public String KinPhone { get; set; }
    }
}