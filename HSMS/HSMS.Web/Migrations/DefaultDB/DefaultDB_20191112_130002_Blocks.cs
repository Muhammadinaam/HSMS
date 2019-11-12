using FluentMigrator;

namespace HSMS.Migrations.DefaultDB
{
    [Migration(20191112130002)]
    public class DefaultDB_20191112_130002_Blocks : AutoReversingMigration
    {
        public override void Up()
        {
            this.Create.Table("Blocks")
                .WithColumn("Id").AsInt64().Identity().PrimaryKey()
                .WithColumn("Name").AsString().Unique()
                .WithColumn("ShortName").AsString().Unique();
        }
    }
}