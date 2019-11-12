
namespace HSMS.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Bookings")]
    [BasedOnRow(typeof(Entities.BookingsRow), CheckNames = true)]
    public class BookingsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public DateTime DateOfBooking { get; set; }
        public String CustomerName { get; set; }
        public String AgentName { get; set; }
        public String PropertyName { get; set; }
        public Decimal AmountReceived { get; set; }
        public Decimal AgentCommissionPercent { get; set; }
    }
}