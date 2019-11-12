namespace HSMS.Default {
    export interface PhasesRow {
        Id?: number;
        Name?: string;
        ShortName?: string;
    }

    export namespace PhasesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Phases';
        export const lookupKey = 'Phases';

        export function getLookup(): Q.Lookup<PhasesRow> {
            return Q.getLookup<PhasesRow>('Phases');
        }

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            ShortName = "ShortName"
        }
    }
}

