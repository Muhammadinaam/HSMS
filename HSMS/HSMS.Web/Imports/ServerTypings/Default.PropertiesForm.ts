namespace HSMS.Default {
    export interface PropertiesForm {
        Name: Serenity.StringEditor;
        ProjectId: Serenity.LookupEditor;
        PhaseId: Serenity.LookupEditor;
        BlockId: Serenity.LookupEditor;
        PropertyTypeId: Serenity.LookupEditor;
        Area: Serenity.StringEditor;
    }

    export class PropertiesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Properties';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PropertiesForm.init)  {
                PropertiesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(PropertiesForm, [
                    'Name', w0,
                    'ProjectId', w1,
                    'PhaseId', w1,
                    'BlockId', w1,
                    'PropertyTypeId', w1,
                    'Area', w0
                ]);
            }
        }
    }
}

