
namespace HSMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using HSMS.Modules.Default.Properties;

    [ColumnsScript("Default.Properties")]
    [BasedOnRow(typeof(Entities.PropertiesRow), CheckNames = true)]
    public class PropertiesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        [DisplayName("Project"), Width(100)]
        public String ProjectName { get; set; }
        [DisplayName("Phase"), QuickFilter, Width(100)]
        public String PhaseName { get; set; }
        [DisplayName("Block"), QuickFilter, Width(100)]
        public String BlockName { get; set; }
        [DisplayName("Property Type"), QuickFilter, Width(150)]
        public String PropertyTypeName { get; set; }
        public String Area { get; set; }
        [Width(150)]
        public PropertyStatus Status { get; set; }
    }
}