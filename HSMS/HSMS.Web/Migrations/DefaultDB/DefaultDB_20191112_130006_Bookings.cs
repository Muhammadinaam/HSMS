using FluentMigrator;

namespace HSMS.Migrations.DefaultDB
{
    [Migration(20191112130006)]
    public class DefaultDB_20191112_130006_Bookings : AutoReversingMigration
    {
        public override void Up()
        {
            this.Create.Table("Bookings")
                .WithColumn("Id").AsInt64().Identity().PrimaryKey()
                .WithColumn("DateOfBooking").AsDate()
                .WithColumn("CustomerId").AsInt64().ForeignKey("FK_Bookings_CustomerId", "Persons", "Id")
                .WithColumn("AgentId").AsInt64().ForeignKey("FK_Bookings_AgentId", "Persons", "Id").Nullable()
                .WithColumn("PropertyId").AsInt64().ForeignKey("FK_Bookings_PropertyId", "Properties", "Id")
                .WithColumn("AmountReceived").AsDecimal()
                .WithColumn("AgentCommissionPercent").AsDecimal().Nullable();
        }
    }
}