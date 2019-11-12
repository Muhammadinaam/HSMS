using FluentMigrator;

namespace HSMS.Migrations.DefaultDB
{
    [Migration(20191112130004)]
    public class DefaultDB_20191112_130004_Properties : AutoReversingMigration
    {
        public override void Up()
        {
            this.Create.Table("Properties")
                .WithColumn("Id").AsInt64().Identity().PrimaryKey()
                .WithColumn("ProjectId").AsInt64().ForeignKey("FK_Properties_ProjectId", "Projects", "Id")
                .WithColumn("PhaseId").AsInt64().ForeignKey("FK_Properties_PhaseId", "Phases", "Id")
                .WithColumn("BlockId").AsInt64().ForeignKey("FK_Properties_BlockId", "Blocks", "Id")
                .WithColumn("PropertyTypeId").AsInt64().ForeignKey("FK_Properties_PropertyTypeId", "PropertyTypes", "Id")
                .WithColumn("Name").AsString()
                .WithColumn("Area").AsString()
                .WithColumn("Status").AsInt32().NotNullable().WithDefaultValue(1);
        }
    }
}