
namespace HSMS.Default {

    @Serenity.Decorators.registerClass()
    export class BlocksDialog extends Serenity.EntityDialog<BlocksRow, any> {
        protected getFormKey() { return BlocksForm.formKey; }
        protected getIdProperty() { return BlocksRow.idProperty; }
        protected getLocalTextPrefix() { return BlocksRow.localTextPrefix; }
        protected getNameProperty() { return BlocksRow.nameProperty; }
        protected getService() { return BlocksService.baseUrl; }

        protected form = new BlocksForm(this.idPrefix);

    }
}