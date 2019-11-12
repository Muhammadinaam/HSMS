
namespace HSMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.PropertyTypes")]
    [BasedOnRow(typeof(Entities.PropertyTypesRow), CheckNames = true)]
    public class PropertyTypesForm
    {
        public String Name { get; set; }
        public String ShortName { get; set; }
    }
}