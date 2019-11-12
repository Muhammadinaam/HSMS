using FluentMigrator;

namespace HSMS.Migrations.DefaultDB
{
    [Migration(20191112130005)]
    public class DefaultDB_20191112_130005_Persons : AutoReversingMigration
    {
        public override void Up()
        {
            this.Create.Table("Persons")
                .WithColumn("Id").AsInt64().Identity().PrimaryKey()
                .WithColumn("Name").AsString()
                .WithColumn("FatherName").AsString()
                .WithColumn("HusbandName").AsString()
                .WithColumn("CNIC").AsString()
                .WithColumn("Address").AsString()
                .WithColumn("Phone").AsString()
                .WithColumn("PersonType").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("KinName").AsString()
                .WithColumn("KinFatherName").AsString()
                .WithColumn("KinHusbandName").AsString()
                .WithColumn("KinCNIC").AsString()
                .WithColumn("KinAddress").AsString()
                .WithColumn("KinPhone").AsString();
        }
    }
}