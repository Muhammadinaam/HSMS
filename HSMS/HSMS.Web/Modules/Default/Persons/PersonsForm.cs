
namespace HSMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Persons")]
    [BasedOnRow(typeof(Entities.PersonsRow), CheckNames = true)]
    public class PersonsForm
    {
        [Category("Person Information")]
        public String Name { get; set; }
        public String FatherName { get; set; }
        public String HusbandName { get; set; }
        public String Cnic { get; set; }
        public String Address { get; set; }
        public String Phone { get; set; }
        public Int32 PersonType { get; set; }
        [Category("Next of Kin")]
        [DisplayName("Name")]
        public String KinName { get; set; }
        [DisplayName("Father Name")]
        public String KinFatherName { get; set; }
        [DisplayName("Husband Name")]
        public String KinHusbandName { get; set; }
        [DisplayName("CNIC")]
        public String KinCnic { get; set; }
        [DisplayName("Address")]
        public String KinAddress { get; set; }
        [DisplayName("Phone")]
        public String KinPhone { get; set; }
    }
}