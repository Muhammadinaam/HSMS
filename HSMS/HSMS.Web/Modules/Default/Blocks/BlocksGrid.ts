
namespace HSMS.Default {

    @Serenity.Decorators.registerClass()
    export class BlocksGrid extends Serenity.EntityGrid<BlocksRow, any> {
        protected getColumnsKey() { return 'Default.Blocks'; }
        protected getDialogType() { return BlocksDialog; }
        protected getIdProperty() { return BlocksRow.idProperty; }
        protected getLocalTextPrefix() { return BlocksRow.localTextPrefix; }
        protected getService() { return BlocksService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}