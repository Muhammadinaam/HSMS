namespace HSMS.Default {
    export interface ProjectsRow {
        Id?: number;
        Name?: string;
        ShortName?: string;
    }

    export namespace ProjectsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Projects';
        export const lookupKey = 'Projects';

        export function getLookup(): Q.Lookup<ProjectsRow> {
            return Q.getLookup<ProjectsRow>('Projects');
        }

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            ShortName = "ShortName"
        }
    }
}

