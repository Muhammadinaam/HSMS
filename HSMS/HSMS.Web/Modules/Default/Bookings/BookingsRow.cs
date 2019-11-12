
namespace HSMS.Default.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Bookings]")]
    [DisplayName("Bookings"), InstanceName("Bookings")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BookingsRow : Row, IIdRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Date Of Booking"), NotNull]
        public DateTime? DateOfBooking
        {
            get { return Fields.DateOfBooking[this]; }
            set { Fields.DateOfBooking[this] = value; }
        }

        [DisplayName("Customer"), NotNull, ForeignKey("[dbo].[Persons]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerName")]
        [LookupEditor( typeof(PersonsRow), InplaceAdd = true, DialogType = "HSMS.Default.PersonsDialog")]
        public Int64? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Agent"), ForeignKey("[dbo].[Persons]", "Id"), LeftJoin("jAgent"), TextualField("AgentName")]
        [LookupEditor(typeof(PersonsRow), InplaceAdd = true, DialogType = "HSMS.Default.PersonsDialog")]
        public Int64? AgentId
        {
            get { return Fields.AgentId[this]; }
            set { Fields.AgentId[this] = value; }
        }

        [DisplayName("Property"), NotNull, ForeignKey("[dbo].[Properties]", "Id"), LeftJoin("jProperty"), TextualField("PropertyName")]
        [LookupEditor(typeof(PropertiesRow), 
            InplaceAdd = true, 
            DialogType = "HSMS.Default.PropertiesDialog")]
        public Int64? PropertyId
        {
            get { return Fields.PropertyId[this]; }
            set { Fields.PropertyId[this] = value; }
        }

        [DisplayName("Amount Received"), Size(19), Scale(5), NotNull]
        public Decimal? AmountReceived
        {
            get { return Fields.AmountReceived[this]; }
            set { Fields.AmountReceived[this] = value; }
        }

        [DisplayName("Agent Commission Percent"), Size(19), Scale(5)]
        public Decimal? AgentCommissionPercent
        {
            get { return Fields.AgentCommissionPercent[this]; }
            set { Fields.AgentCommissionPercent[this] = value; }
        }

        [DisplayName("Customer Name"), Expression("jCustomer.[Name]")]
        public String CustomerName
        {
            get { return Fields.CustomerName[this]; }
            set { Fields.CustomerName[this] = value; }
        }

        [DisplayName("Customer Father Name"), Expression("jCustomer.[FatherName]")]
        public String CustomerFatherName
        {
            get { return Fields.CustomerFatherName[this]; }
            set { Fields.CustomerFatherName[this] = value; }
        }

        [DisplayName("Customer Husband Name"), Expression("jCustomer.[HusbandName]")]
        public String CustomerHusbandName
        {
            get { return Fields.CustomerHusbandName[this]; }
            set { Fields.CustomerHusbandName[this] = value; }
        }

        [DisplayName("Customer Cnic"), Expression("jCustomer.[CNIC]")]
        public String CustomerCnic
        {
            get { return Fields.CustomerCnic[this]; }
            set { Fields.CustomerCnic[this] = value; }
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public String CustomerAddress
        {
            get { return Fields.CustomerAddress[this]; }
            set { Fields.CustomerAddress[this] = value; }
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]")]
        public String CustomerPhone
        {
            get { return Fields.CustomerPhone[this]; }
            set { Fields.CustomerPhone[this] = value; }
        }

        [DisplayName("Customer Person Type"), Expression("jCustomer.[PersonType]")]
        public Int32? CustomerPersonType
        {
            get { return Fields.CustomerPersonType[this]; }
            set { Fields.CustomerPersonType[this] = value; }
        }

        [DisplayName("Customer Kin Name"), Expression("jCustomer.[KinName]")]
        public String CustomerKinName
        {
            get { return Fields.CustomerKinName[this]; }
            set { Fields.CustomerKinName[this] = value; }
        }

        [DisplayName("Customer Kin Father Name"), Expression("jCustomer.[KinFatherName]")]
        public String CustomerKinFatherName
        {
            get { return Fields.CustomerKinFatherName[this]; }
            set { Fields.CustomerKinFatherName[this] = value; }
        }

        [DisplayName("Customer Kin Husband Name"), Expression("jCustomer.[KinHusbandName]")]
        public String CustomerKinHusbandName
        {
            get { return Fields.CustomerKinHusbandName[this]; }
            set { Fields.CustomerKinHusbandName[this] = value; }
        }

        [DisplayName("Customer Kin Cnic"), Expression("jCustomer.[KinCNIC]")]
        public String CustomerKinCnic
        {
            get { return Fields.CustomerKinCnic[this]; }
            set { Fields.CustomerKinCnic[this] = value; }
        }

        [DisplayName("Customer Kin Address"), Expression("jCustomer.[KinAddress]")]
        public String CustomerKinAddress
        {
            get { return Fields.CustomerKinAddress[this]; }
            set { Fields.CustomerKinAddress[this] = value; }
        }

        [DisplayName("Customer Kin Phone"), Expression("jCustomer.[KinPhone]")]
        public String CustomerKinPhone
        {
            get { return Fields.CustomerKinPhone[this]; }
            set { Fields.CustomerKinPhone[this] = value; }
        }

        [DisplayName("Agent Name"), Expression("jAgent.[Name]")]
        public String AgentName
        {
            get { return Fields.AgentName[this]; }
            set { Fields.AgentName[this] = value; }
        }

        [DisplayName("Agent Father Name"), Expression("jAgent.[FatherName]")]
        public String AgentFatherName
        {
            get { return Fields.AgentFatherName[this]; }
            set { Fields.AgentFatherName[this] = value; }
        }

        [DisplayName("Agent Husband Name"), Expression("jAgent.[HusbandName]")]
        public String AgentHusbandName
        {
            get { return Fields.AgentHusbandName[this]; }
            set { Fields.AgentHusbandName[this] = value; }
        }

        [DisplayName("Agent Cnic"), Expression("jAgent.[CNIC]")]
        public String AgentCnic
        {
            get { return Fields.AgentCnic[this]; }
            set { Fields.AgentCnic[this] = value; }
        }

        [DisplayName("Agent Address"), Expression("jAgent.[Address]")]
        public String AgentAddress
        {
            get { return Fields.AgentAddress[this]; }
            set { Fields.AgentAddress[this] = value; }
        }

        [DisplayName("Agent Phone"), Expression("jAgent.[Phone]")]
        public String AgentPhone
        {
            get { return Fields.AgentPhone[this]; }
            set { Fields.AgentPhone[this] = value; }
        }

        [DisplayName("Agent Person Type"), Expression("jAgent.[PersonType]")]
        public Int32? AgentPersonType
        {
            get { return Fields.AgentPersonType[this]; }
            set { Fields.AgentPersonType[this] = value; }
        }

        [DisplayName("Agent Kin Name"), Expression("jAgent.[KinName]")]
        public String AgentKinName
        {
            get { return Fields.AgentKinName[this]; }
            set { Fields.AgentKinName[this] = value; }
        }

        [DisplayName("Agent Kin Father Name"), Expression("jAgent.[KinFatherName]")]
        public String AgentKinFatherName
        {
            get { return Fields.AgentKinFatherName[this]; }
            set { Fields.AgentKinFatherName[this] = value; }
        }

        [DisplayName("Agent Kin Husband Name"), Expression("jAgent.[KinHusbandName]")]
        public String AgentKinHusbandName
        {
            get { return Fields.AgentKinHusbandName[this]; }
            set { Fields.AgentKinHusbandName[this] = value; }
        }

        [DisplayName("Agent Kin Cnic"), Expression("jAgent.[KinCNIC]")]
        public String AgentKinCnic
        {
            get { return Fields.AgentKinCnic[this]; }
            set { Fields.AgentKinCnic[this] = value; }
        }

        [DisplayName("Agent Kin Address"), Expression("jAgent.[KinAddress]")]
        public String AgentKinAddress
        {
            get { return Fields.AgentKinAddress[this]; }
            set { Fields.AgentKinAddress[this] = value; }
        }

        [DisplayName("Agent Kin Phone"), Expression("jAgent.[KinPhone]")]
        public String AgentKinPhone
        {
            get { return Fields.AgentKinPhone[this]; }
            set { Fields.AgentKinPhone[this] = value; }
        }

        [DisplayName("Property Project Id"), Expression("jProperty.[ProjectId]")]
        public Int64? PropertyProjectId
        {
            get { return Fields.PropertyProjectId[this]; }
            set { Fields.PropertyProjectId[this] = value; }
        }

        [DisplayName("Property Phase Id"), Expression("jProperty.[PhaseId]")]
        public Int64? PropertyPhaseId
        {
            get { return Fields.PropertyPhaseId[this]; }
            set { Fields.PropertyPhaseId[this] = value; }
        }

        [DisplayName("Property Block Id"), Expression("jProperty.[BlockId]")]
        public Int64? PropertyBlockId
        {
            get { return Fields.PropertyBlockId[this]; }
            set { Fields.PropertyBlockId[this] = value; }
        }

        [DisplayName("Property Property Type Id"), Expression("jProperty.[PropertyTypeId]")]
        public Int64? PropertyPropertyTypeId
        {
            get { return Fields.PropertyPropertyTypeId[this]; }
            set { Fields.PropertyPropertyTypeId[this] = value; }
        }

        [DisplayName("Property Name"), Expression("jProperty.[Name]")]
        public String PropertyName
        {
            get { return Fields.PropertyName[this]; }
            set { Fields.PropertyName[this] = value; }
        }

        [DisplayName("Property Area"), Expression("jProperty.[Area]")]
        public String PropertyArea
        {
            get { return Fields.PropertyArea[this]; }
            set { Fields.PropertyArea[this] = value; }
        }

        [DisplayName("Property Status"), Expression("jProperty.[Status]")]
        public Int32? PropertyStatus
        {
            get { return Fields.PropertyStatus[this]; }
            set { Fields.PropertyStatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BookingsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public DateTimeField DateOfBooking;
            public Int64Field CustomerId;
            public Int64Field AgentId;
            public Int64Field PropertyId;
            public DecimalField AmountReceived;
            public DecimalField AgentCommissionPercent;

            public StringField CustomerName;
            public StringField CustomerFatherName;
            public StringField CustomerHusbandName;
            public StringField CustomerCnic;
            public StringField CustomerAddress;
            public StringField CustomerPhone;
            public Int32Field CustomerPersonType;
            public StringField CustomerKinName;
            public StringField CustomerKinFatherName;
            public StringField CustomerKinHusbandName;
            public StringField CustomerKinCnic;
            public StringField CustomerKinAddress;
            public StringField CustomerKinPhone;

            public StringField AgentName;
            public StringField AgentFatherName;
            public StringField AgentHusbandName;
            public StringField AgentCnic;
            public StringField AgentAddress;
            public StringField AgentPhone;
            public Int32Field AgentPersonType;
            public StringField AgentKinName;
            public StringField AgentKinFatherName;
            public StringField AgentKinHusbandName;
            public StringField AgentKinCnic;
            public StringField AgentKinAddress;
            public StringField AgentKinPhone;

            public Int64Field PropertyProjectId;
            public Int64Field PropertyPhaseId;
            public Int64Field PropertyBlockId;
            public Int64Field PropertyPropertyTypeId;
            public StringField PropertyName;
            public StringField PropertyArea;
            public Int32Field PropertyStatus;
        }
    }
}
