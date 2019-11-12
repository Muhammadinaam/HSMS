namespace HSMS.Default {
    export interface PropertyTypesRow {
        Id?: number;
        Name?: string;
        ShortName?: string;
    }

    export namespace PropertyTypesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.PropertyTypes';
        export const lookupKey = 'PropertyTypes';

        export function getLookup(): Q.Lookup<PropertyTypesRow> {
            return Q.getLookup<PropertyTypesRow>('PropertyTypes');
        }

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            ShortName = "ShortName"
        }
    }
}

