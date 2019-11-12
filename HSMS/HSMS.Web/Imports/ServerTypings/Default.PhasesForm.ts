namespace HSMS.Default {
    export interface PhasesForm {
        Name: Serenity.StringEditor;
        ShortName: Serenity.StringEditor;
    }

    export class PhasesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Phases';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PhasesForm.init)  {
                PhasesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PhasesForm, [
                    'Name', w0,
                    'ShortName', w0
                ]);
            }
        }
    }
}

