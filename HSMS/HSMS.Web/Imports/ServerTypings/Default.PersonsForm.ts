namespace HSMS.Default {
    export interface PersonsForm {
        Name: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        HusbandName: Serenity.StringEditor;
        Cnic: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        PersonType: Serenity.EnumEditor;
        KinName: Serenity.StringEditor;
        KinFatherName: Serenity.StringEditor;
        KinHusbandName: Serenity.StringEditor;
        KinCnic: Serenity.StringEditor;
        KinAddress: Serenity.StringEditor;
        KinPhone: Serenity.StringEditor;
    }

    export class PersonsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Persons';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PersonsForm.init)  {
                PersonsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.EnumEditor;

                Q.initFormType(PersonsForm, [
                    'Name', w0,
                    'FatherName', w0,
                    'HusbandName', w0,
                    'Cnic', w0,
                    'Address', w0,
                    'Phone', w0,
                    'PersonType', w1,
                    'KinName', w0,
                    'KinFatherName', w0,
                    'KinHusbandName', w0,
                    'KinCnic', w0,
                    'KinAddress', w0,
                    'KinPhone', w0
                ]);
            }
        }
    }
}

