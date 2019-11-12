namespace HSMS.Default {
    export interface PropertyTypesForm {
        Name: Serenity.StringEditor;
        ShortName: Serenity.StringEditor;
    }

    export class PropertyTypesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.PropertyTypes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PropertyTypesForm.init)  {
                PropertyTypesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PropertyTypesForm, [
                    'Name', w0,
                    'ShortName', w0
                ]);
            }
        }
    }
}

