
namespace HSMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Phases")]
    [BasedOnRow(typeof(Entities.PhasesRow), CheckNames = true)]
    public class PhasesForm
    {
        public String Name { get; set; }
        public String ShortName { get; set; }
    }
}