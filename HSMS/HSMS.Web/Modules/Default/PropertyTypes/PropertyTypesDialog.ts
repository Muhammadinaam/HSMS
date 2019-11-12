
namespace HSMS.Default {

    @Serenity.Decorators.registerClass()
    export class PropertyTypesDialog extends Serenity.EntityDialog<PropertyTypesRow, any> {
        protected getFormKey() { return PropertyTypesForm.formKey; }
        protected getIdProperty() { return PropertyTypesRow.idProperty; }
        protected getLocalTextPrefix() { return PropertyTypesRow.localTextPrefix; }
        protected getNameProperty() { return PropertyTypesRow.nameProperty; }
        protected getService() { return PropertyTypesService.baseUrl; }

        protected form = new PropertyTypesForm(this.idPrefix);

    }
}