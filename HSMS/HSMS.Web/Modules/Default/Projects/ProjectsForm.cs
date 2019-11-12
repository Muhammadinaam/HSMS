
namespace HSMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Projects")]
    [BasedOnRow(typeof(Entities.ProjectsRow), CheckNames = true)]
    public class ProjectsForm
    {
        public String Name { get; set; }
        public String ShortName { get; set; }
    }
}