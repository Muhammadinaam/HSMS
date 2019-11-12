namespace HSMS.Default {
    export interface ProjectsForm {
        Name: Serenity.StringEditor;
        ShortName: Serenity.StringEditor;
    }

    export class ProjectsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Projects';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProjectsForm.init)  {
                ProjectsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ProjectsForm, [
                    'Name', w0,
                    'ShortName', w0
                ]);
            }
        }
    }
}

