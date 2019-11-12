
namespace HSMS.Default {

    @Serenity.Decorators.registerClass()
    export class BookingsGrid extends Serenity.EntityGrid<BookingsRow, any> {
        protected getColumnsKey() { return 'Default.Bookings'; }
        protected getDialogType() { return BookingsDialog; }
        protected getIdProperty() { return BookingsRow.idProperty; }
        protected getLocalTextPrefix() { return BookingsRow.localTextPrefix; }
        protected getService() { return BookingsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}