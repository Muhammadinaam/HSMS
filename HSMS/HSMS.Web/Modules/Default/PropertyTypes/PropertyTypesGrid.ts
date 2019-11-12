
namespace HSMS.Default {

    @Serenity.Decorators.registerClass()
    export class PropertyTypesGrid extends Serenity.EntityGrid<PropertyTypesRow, any> {
        protected getColumnsKey() { return 'Default.PropertyTypes'; }
        protected getDialogType() { return PropertyTypesDialog; }
        protected getIdProperty() { return PropertyTypesRow.idProperty; }
        protected getLocalTextPrefix() { return PropertyTypesRow.localTextPrefix; }
        protected getService() { return PropertyTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}