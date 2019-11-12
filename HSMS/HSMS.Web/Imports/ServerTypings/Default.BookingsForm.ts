
namespace HSMS.Default {
    export class BookingsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Bookings';
    }

    export interface BookingsForm {
        DateOfBooking: Serenity.DateEditor;
        CustomerId: Serenity.IntegerEditor;
        AgentId: Serenity.IntegerEditor;
        PropertyId: Serenity.IntegerEditor;
        AmountReceived: Serenity.DecimalEditor;
        AgentCommissionPercent: Serenity.DecimalEditor;
    }

    [,
        ['DateOfBooking', () => Serenity.DateEditor],
        ['CustomerId', () => Serenity.IntegerEditor],
        ['AgentId', () => Serenity.IntegerEditor],
        ['PropertyId', () => Serenity.IntegerEditor],
        ['AmountReceived', () => Serenity.DecimalEditor],
        ['AgentCommissionPercent', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(BookingsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}