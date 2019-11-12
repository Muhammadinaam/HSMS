
namespace HSMS.Default.Entities
{
    using HSMS.Modules.Default.Properties;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Properties]")]
    [DisplayName("Properties"), InstanceName("Properties")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Properties")]
    public sealed class PropertiesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Project"), Size(20), NotNull, ForeignKey("[dbo].[Projects]", "Id"), LeftJoin("jProject"), TextualField("ProjectName")]
        [LookupEditor("Projects")]
        public Int64? ProjectId
        {
            get { return Fields.ProjectId[this]; }
            set { Fields.ProjectId[this] = value; }
        }

        [DisplayName("Phase"), Size(20), NotNull, ForeignKey("[dbo].[Phases]", "Id"), LeftJoin("jPhase"), TextualField("PhaseName")]
        [LookupEditor( typeof(PhasesRow), InplaceAdd = true, DialogType = "HSMS.Default.PhasesDialog" )]
        public Int64? PhaseId
        {
            get { return Fields.PhaseId[this]; }
            set { Fields.PhaseId[this] = value; }
        }

        [DisplayName("Block"), Size(20), NotNull, ForeignKey("[dbo].[Blocks]", "Id"), LeftJoin("jBlock"), TextualField("BlockName")]
        [LookupEditor( typeof(BlocksRow), InplaceAdd = true, DialogType = "HSMS.Default.BlocksDialog")]
        public Int64? BlockId
        {
            get { return Fields.BlockId[this]; }
            set { Fields.BlockId[this] = value; }
        }

        [DisplayName("Property Type"), NotNull, ForeignKey("[dbo].[PropertyTypes]", "Id"), LeftJoin("jPropertyType"), TextualField("PropertyTypeName")]
        [LookupEditor("PropertyTypes")]
        public Int64? PropertyTypeId
        {
            get { return Fields.PropertyTypeId[this]; }
            set { Fields.PropertyTypeId[this] = value; }
        }

        [DisplayName("Name"), Size(19), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Area"), Size(19), NotNull]
        public String Area
        {
            get { return Fields.Area[this]; }
            set { Fields.Area[this] = value; }
        }

        [DisplayName("Property Status"), NotNull, DefaultValue(PropertyStatus.Available)]
        public PropertyStatus? Status
        {
            get { return (PropertyStatus?)Fields.Status[this]; }
            set { Fields.Status[this] = (Int32?)value; }
        }

        [DisplayName("Project Name"), Expression("jProject.[Name]")]
        public String ProjectName
        {
            get { return Fields.ProjectName[this]; }
            set { Fields.ProjectName[this] = value; }
        }

        [DisplayName("Project Short Name"), Expression("jProject.[ShortName]")]
        public String ProjectShortName
        {
            get { return Fields.ProjectShortName[this]; }
            set { Fields.ProjectShortName[this] = value; }
        }

        [DisplayName("Phase Name"), Expression("jPhase.[Name]")]
        public String PhaseName
        {
            get { return Fields.PhaseName[this]; }
            set { Fields.PhaseName[this] = value; }
        }

        [DisplayName("Phase Short Name"), Expression("jPhase.[ShortName]")]
        public String PhaseShortName
        {
            get { return Fields.PhaseShortName[this]; }
            set { Fields.PhaseShortName[this] = value; }
        }

        [DisplayName("Block Name"), Expression("jBlock.[Name]")]
        public String BlockName
        {
            get { return Fields.BlockName[this]; }
            set { Fields.BlockName[this] = value; }
        }

        [DisplayName("Block Short Name"), Expression("jBlock.[ShortName]")]
        public String BlockShortName
        {
            get { return Fields.BlockShortName[this]; }
            set { Fields.BlockShortName[this] = value; }
        }

        [DisplayName("Property Type Name"), Expression("jPropertyType.[Name]")]
        public String PropertyTypeName
        {
            get { return Fields.PropertyTypeName[this]; }
            set { Fields.PropertyTypeName[this] = value; }
        }

        [DisplayName("Property Type Short Name"), Expression("jPropertyType.[ShortName]")]
        public String PropertyTypeShortName
        {
            get { return Fields.PropertyTypeShortName[this]; }
            set { Fields.PropertyTypeShortName[this] = value; }
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

        public PropertiesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field ProjectId;
            public Int64Field PhaseId;
            public Int64Field BlockId;
            public Int64Field PropertyTypeId;
            public StringField Name;
            public StringField Area;
            public Int32Field Status;

            public StringField ProjectName;
            public StringField ProjectShortName;

            public StringField PhaseName;
            public StringField PhaseShortName;

            public StringField BlockName;
            public StringField BlockShortName;

            public StringField PropertyTypeName;
            public StringField PropertyTypeShortName;
        }
    }
}
