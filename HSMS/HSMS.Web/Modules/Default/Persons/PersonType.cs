using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HSMS.Modules.Default.Persons
{
    [EnumKey("PersonType")]
    public enum PersonType
    {
        Customer = 1,
        Agent = 2
    }
}