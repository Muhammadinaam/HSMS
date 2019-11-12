namespace HSMS.Default {
    export interface PropertiesRow {
        Id?: number;
        ProjectId?: number;
        PhaseId?: number;
        BlockId?: number;
        PropertyTypeId?: number;
        Name?: string;
        Area?: string;
        Status?: Modules.Default.Properties.PropertyStatus;
        ProjectName?: string;
        ProjectShortName?: string;
        PhaseName?: string;
        PhaseShortName?: string;
        BlockName?: string;
        BlockShortName?: string;
        PropertyTypeName?: string;
        PropertyTypeShortName?: string;
    }

    export namespace PropertiesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Properties';

        export declare const enum Fields {
            Id = "Id",
            ProjectId = "ProjectId",
            PhaseId = "PhaseId",
            BlockId = "BlockId",
            PropertyTypeId = "PropertyTypeId",
            Name = "Name",
            Area = "Area",
            Status = "Status",
            ProjectName = "ProjectName",
            ProjectShortName = "ProjectShortName",
            PhaseName = "PhaseName",
            PhaseShortName = "PhaseShortName",
            BlockName = "BlockName",
            BlockShortName = "BlockShortName",
            PropertyTypeName = "PropertyTypeName",
            PropertyTypeShortName = "PropertyTypeShortName"
        }
    }
}

