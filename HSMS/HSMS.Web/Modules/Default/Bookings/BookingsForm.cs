
namespace HSMS.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Bookings")]
    [BasedOnRow(typeof(Entities.BookingsRow), CheckNames = true)]
    public class BookingsForm
    {
        [Category("Booking Information")]
        public DateTime DateOfBooking { get; set; }
        public Int64 CustomerId { get; set; }
        public Int64 PropertyId { get; set; }
        public Decimal AmountReceived { get; set; }
        [Category("Agent and Commission Information")]
        public Int64 AgentId { get; set; }
        public Decimal AgentCommissionPercent { get; set; }
    }
}