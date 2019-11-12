
namespace HSMS.Default {

    @Serenity.Decorators.registerClass()
    export class PropertiesGrid extends Serenity.EntityGrid<PropertiesRow, any> {
        protected getColumnsKey() { return 'Default.Properties'; }
        protected getDialogType() { return PropertiesDialog; }
        protected getIdProperty() { return PropertiesRow.idProperty; }
        protected getLocalTextPrefix() { return PropertiesRow.localTextPrefix; }
        protected getService() { return PropertiesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}