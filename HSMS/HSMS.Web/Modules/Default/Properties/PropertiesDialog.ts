
namespace HSMS.Default {

    @Serenity.Decorators.registerClass()
    export class PropertiesDialog extends Serenity.EntityDialog<PropertiesRow, any> {
        protected getFormKey() { return PropertiesForm.formKey; }
        protected getIdProperty() { return PropertiesRow.idProperty; }
        protected getLocalTextPrefix() { return PropertiesRow.localTextPrefix; }
        protected getNameProperty() { return PropertiesRow.nameProperty; }
        protected getService() { return PropertiesService.baseUrl; }

        protected form = new PropertiesForm(this.idPrefix);

    }
}