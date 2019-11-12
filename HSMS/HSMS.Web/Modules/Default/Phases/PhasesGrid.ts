
namespace HSMS.Default {

    @Serenity.Decorators.registerClass()
    export class PhasesGrid extends Serenity.EntityGrid<PhasesRow, any> {
        protected getColumnsKey() { return 'Default.Phases'; }
        protected getDialogType() { return PhasesDialog; }
        protected getIdProperty() { return PhasesRow.idProperty; }
        protected getLocalTextPrefix() { return PhasesRow.localTextPrefix; }
        protected getService() { return PhasesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}