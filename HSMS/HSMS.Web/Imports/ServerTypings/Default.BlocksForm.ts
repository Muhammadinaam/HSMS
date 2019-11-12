namespace HSMS.Default {
    export interface BlocksForm {
        Name: Serenity.StringEditor;
        ShortName: Serenity.StringEditor;
    }

    export class BlocksForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Blocks';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BlocksForm.init)  {
                BlocksForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(BlocksForm, [
                    'Name', w0,
                    'ShortName', w0
                ]);
            }
        }
    }
}

