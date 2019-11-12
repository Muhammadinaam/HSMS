
namespace HSMS.Default {

    @Serenity.Decorators.registerClass()
    export class ProjectsGrid extends Serenity.EntityGrid<ProjectsRow, any> {
        protected getColumnsKey() { return 'Default.Projects'; }
        protected getDialogType() { return ProjectsDialog; }
        protected getIdProperty() { return ProjectsRow.idProperty; }
        protected getLocalTextPrefix() { return ProjectsRow.localTextPrefix; }
        protected getService() { return ProjectsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}