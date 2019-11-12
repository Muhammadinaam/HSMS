using FluentMigrator;

namespace HSMS.Migrations.DefaultDB
{
    [Migration(20191112130003)]
    public class DefaultDB_20191112_130003_PropertyTypes : AutoReversingMigration
    {
        public override void Up()
        {
            this.Create.Table("PropertyTypes")
                .WithColumn("Id").AsInt64().Identity().PrimaryKey()
                .WithColumn("Name").AsString().Unique()
                .WithColumn("ShortName").AsString().Unique();
        }
    }
}