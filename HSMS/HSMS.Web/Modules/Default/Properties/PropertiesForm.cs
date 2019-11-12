
namespace HSMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Properties")]
    [BasedOnRow(typeof(Entities.PropertiesRow), CheckNames = true)]
    public class PropertiesForm
    {
        public String Name { get; set; }
        public Int64 ProjectId { get; set; }
        public Int64 PhaseId { get; set; }
        public Int64 BlockId { get; set; }
        public Int64 PropertyTypeId { get; set; }
        public String Area { get; set; }
    }
}