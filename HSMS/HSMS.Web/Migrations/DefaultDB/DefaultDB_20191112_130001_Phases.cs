using FluentMigrator;

namespace HSMS.Migrations.DefaultDB
{
    [Migration(20191112130001)]
    public class DefaultDB_20191112_130001_Phases : AutoReversingMigration
    {
        public override void Up()
        {
            this.Create.Table("Phases")
                .WithColumn("Id").AsInt64().Identity().PrimaryKey()
                .WithColumn("Name").AsString().Unique()
                .WithColumn("ShortName").AsString().Unique();
        }
    }
}