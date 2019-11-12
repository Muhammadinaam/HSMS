using FluentMigrator;

namespace HSMS.Migrations.DefaultDB
{
    [Migration(20191112130000)]
    public class DefaultDB_20191112_130000_Projects : AutoReversingMigration
    {
        public override void Up()
        {
            this.Create.Table("Projects")
                .WithColumn("Id").AsInt64().Identity().PrimaryKey()
                .WithColumn("Name").AsString().Unique()
                .WithColumn("ShortName").AsString().Unique();
        }
    }
}