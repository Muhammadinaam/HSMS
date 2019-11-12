
namespace HSMS.Default.Entities
{
    using HSMS.Modules.Default.Persons;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Persons]")]
    [DisplayName("Persons"), InstanceName("Persons")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Persons")]
    public sealed class PersonsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Name"), Size(255), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Father Name"), Size(255), NotNull]
        public String FatherName
        {
            get { return Fields.FatherName[this]; }
            set { Fields.FatherName[this] = value; }
        }

        [DisplayName("Husband Name"), Size(255), NotNull]
        public String HusbandName
        {
            get { return Fields.HusbandName[this]; }
            set { Fields.HusbandName[this] = value; }
        }

        [DisplayName("Cnic"), Column("CNIC"), Size(255), NotNull]
        public String Cnic
        {
            get { return Fields.Cnic[this]; }
            set { Fields.Cnic[this] = value; }
        }

        [DisplayName("Address"), Size(255), NotNull]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Phone"), Size(255), NotNull]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Person Type"), NotNull]
        public PersonType? PersonType
        {
            get { return (PersonType?)Fields.PersonType[this]; }
            set { Fields.PersonType[this] = (Int32?)value; }
        }

        [DisplayName("Kin Name"), Size(255), NotNull]
        public String KinName
        {
            get { return Fields.KinName[this]; }
            set { Fields.KinName[this] = value; }
        }

        [DisplayName("Kin Father Name"), Size(255), NotNull]
        public String KinFatherName
        {
            get { return Fields.KinFatherName[this]; }
            set { Fields.KinFatherName[this] = value; }
        }

        [DisplayName("Kin Husband Name"), Size(255), NotNull]
        public String KinHusbandName
        {
            get { return Fields.KinHusbandName[this]; }
            set { Fields.KinHusbandName[this] = value; }
        }

        [DisplayName("Kin Cnic"), Column("KinCNIC"), Size(255), NotNull]
        public String KinCnic
        {
            get { return Fields.KinCnic[this]; }
            set { Fields.KinCnic[this] = value; }
        }

        [DisplayName("Kin Address"), Size(255), NotNull]
        public String KinAddress
        {
            get { return Fields.KinAddress[this]; }
            set { Fields.KinAddress[this] = value; }
        }

        [DisplayName("Kin Phone"), Size(255), NotNull]
        public String KinPhone
        {
            get { return Fields.KinPhone[this]; }
            set { Fields.KinPhone[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PersonsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField Name;
            public StringField FatherName;
            public StringField HusbandName;
            public StringField Cnic;
            public StringField Address;
            public StringField Phone;
            public Int32Field PersonType;
            public StringField KinName;
            public StringField KinFatherName;
            public StringField KinHusbandName;
            public StringField KinCnic;
            public StringField KinAddress;
            public StringField KinPhone;
        }
    }
}
