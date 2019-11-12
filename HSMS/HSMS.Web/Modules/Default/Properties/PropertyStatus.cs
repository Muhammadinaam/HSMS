using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HSMS.Modules.Default.Properties
{
    [EnumKey("PropertyStatus")]
    public enum PropertyStatus
    {
        Available = 1,
        Booked = 2,
        Transferred = 3
    }
}