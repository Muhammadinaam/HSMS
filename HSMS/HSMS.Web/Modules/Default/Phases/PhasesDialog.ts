
namespace HSMS.Default {

    @Serenity.Decorators.registerClass()
    export class PhasesDialog extends Serenity.EntityDialog<PhasesRow, any> {
        protected getFormKey() { return PhasesForm.formKey; }
        protected getIdProperty() { return PhasesRow.idProperty; }
        protected getLocalTextPrefix() { return PhasesRow.localTextPrefix; }
        protected getNameProperty() { return PhasesRow.nameProperty; }
        protected getService() { return PhasesService.baseUrl; }

        protected form = new PhasesForm(this.idPrefix);

    }
}