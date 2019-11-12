namespace HSMS.Default {
    export interface BlocksRow {
        Id?: number;
        Name?: string;
        ShortName?: string;
    }

    export namespace BlocksRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Blocks';
        export const lookupKey = 'Blocks';

        export function getLookup(): Q.Lookup<BlocksRow> {
            return Q.getLookup<BlocksRow>('Blocks');
        }

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            ShortName = "ShortName"
        }
    }
}

