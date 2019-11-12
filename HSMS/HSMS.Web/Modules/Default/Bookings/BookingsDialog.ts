
namespace HSMS.Default {

    @Serenity.Decorators.registerClass()
    export class BookingsDialog extends Serenity.EntityDialog<BookingsRow, any> {
        protected getFormKey() { return BookingsForm.formKey; }
        protected getIdProperty() { return BookingsRow.idProperty; }
        protected getLocalTextPrefix() { return BookingsRow.localTextPrefix; }
        protected getService() { return BookingsService.baseUrl; }

        protected form = new BookingsForm(this.idPrefix);

    }
}