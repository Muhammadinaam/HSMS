namespace HSMS.Modules.Default.Properties {
    export enum PropertyStatus {
        Available = 1,
        Booked = 2,
        Transferred = 3
    }
    Serenity.Decorators.registerEnumType(PropertyStatus, 'HSMS.Modules.Default.Properties.PropertyStatus', 'PropertyStatus');
}

