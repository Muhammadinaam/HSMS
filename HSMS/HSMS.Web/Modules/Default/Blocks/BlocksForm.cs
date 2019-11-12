
namespace HSMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Blocks")]
    [BasedOnRow(typeof(Entities.BlocksRow), CheckNames = true)]
    public class BlocksForm
    {
        public String Name { get; set; }
        public String ShortName { get; set; }
    }
}