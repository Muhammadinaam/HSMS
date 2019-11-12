namespace HSMS.Modules.Default.Persons {
    export enum PersonType {
        Customer = 1,
        Agent = 2
    }
    Serenity.Decorators.registerEnumType(PersonType, 'HSMS.Modules.Default.Persons.PersonType', 'PersonType');
}

