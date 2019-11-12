namespace HSMS.Default {
    export interface PersonsRow {
        Id?: number;
        Name?: string;
        FatherName?: string;
        HusbandName?: string;
        Cnic?: string;
        Address?: string;
        Phone?: string;
        PersonType?: Modules.Default.Persons.PersonType;
        KinName?: string;
        KinFatherName?: string;
        KinHusbandName?: string;
        KinCnic?: string;
        KinAddress?: string;
        KinPhone?: string;
    }

    export namespace PersonsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Persons';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            FatherName = "FatherName",
            HusbandName = "HusbandName",
            Cnic = "Cnic",
            Address = "Address",
            Phone = "Phone",
            PersonType = "PersonType",
            KinName = "KinName",
            KinFatherName = "KinFatherName",
            KinHusbandName = "KinHusbandName",
            KinCnic = "KinCnic",
            KinAddress = "KinAddress",
            KinPhone = "KinPhone"
        }
    }
}

