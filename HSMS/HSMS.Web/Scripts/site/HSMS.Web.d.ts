/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace HSMS.Administration {
}
declare namespace HSMS.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HSMS.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace HSMS.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace HSMS.Administration {
}
declare namespace HSMS.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HSMS.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace HSMS.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace HSMS.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace HSMS.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace HSMS.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace HSMS.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace HSMS.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace HSMS.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace HSMS.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace HSMS.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace HSMS.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace HSMS.Administration {
}
declare namespace HSMS.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HSMS.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace HSMS.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace HSMS.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace HSMS.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace HSMS.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace HSMS.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace HSMS.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace HSMS.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace HSMS.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace HSMS.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace HSMS.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace HSMS.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace HSMS.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace HSMS.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace HSMS.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace HSMS.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace HSMS.Default {
}
declare namespace HSMS.Default {
    interface BlocksForm {
        Name: Serenity.StringEditor;
        ShortName: Serenity.StringEditor;
    }
    class BlocksForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HSMS.Default {
    interface BlocksRow {
        Id?: number;
        Name?: string;
        ShortName?: string;
    }
    namespace BlocksRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Blocks";
        const lookupKey = "Blocks";
        function getLookup(): Q.Lookup<BlocksRow>;
        const enum Fields {
            Id = "Id",
            Name = "Name",
            ShortName = "ShortName"
        }
    }
}
declare namespace HSMS.Default {
    namespace BlocksService {
        const baseUrl = "Default/Blocks";
        function Create(request: Serenity.SaveRequest<BlocksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BlocksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BlocksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BlocksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Blocks/Create",
            Update = "Default/Blocks/Update",
            Delete = "Default/Blocks/Delete",
            Retrieve = "Default/Blocks/Retrieve",
            List = "Default/Blocks/List"
        }
    }
}
declare namespace HSMS.Default {
    class BookingsForm extends Serenity.PrefixedContext {
        static formKey: string;
    }
    interface BookingsForm {
        DateOfBooking: Serenity.DateEditor;
        CustomerId: Serenity.IntegerEditor;
        AgentId: Serenity.IntegerEditor;
        PropertyId: Serenity.IntegerEditor;
        AmountReceived: Serenity.DecimalEditor;
        AgentCommissionPercent: Serenity.DecimalEditor;
    }
}
declare namespace HSMS.Default {
    interface BookingsRow {
        Id?: number;
        DateOfBooking?: string;
        CustomerId?: number;
        AgentId?: number;
        PropertyId?: number;
        AmountReceived?: number;
        AgentCommissionPercent?: number;
        CustomerName?: string;
        CustomerFatherName?: string;
        CustomerHusbandName?: string;
        CustomerCnic?: string;
        CustomerAddress?: string;
        CustomerPhone?: string;
        CustomerPersonType?: number;
        CustomerKinName?: string;
        CustomerKinFatherName?: string;
        CustomerKinHusbandName?: string;
        CustomerKinCnic?: string;
        CustomerKinAddress?: string;
        CustomerKinPhone?: string;
        AgentName?: string;
        AgentFatherName?: string;
        AgentHusbandName?: string;
        AgentCnic?: string;
        AgentAddress?: string;
        AgentPhone?: string;
        AgentPersonType?: number;
        AgentKinName?: string;
        AgentKinFatherName?: string;
        AgentKinHusbandName?: string;
        AgentKinCnic?: string;
        AgentKinAddress?: string;
        AgentKinPhone?: string;
        PropertyProjectId?: number;
        PropertyPhaseId?: number;
        PropertyBlockId?: number;
        PropertyPropertyTypeId?: number;
        PropertyName?: string;
        PropertyArea?: string;
        PropertyStatus?: number;
    }
    namespace BookingsRow {
        const idProperty = "Id";
        const localTextPrefix = "Default.Bookings";
        namespace Fields {
            const Id: any;
            const DateOfBooking: any;
            const CustomerId: any;
            const AgentId: any;
            const PropertyId: any;
            const AmountReceived: any;
            const AgentCommissionPercent: any;
            const CustomerName: any;
            const CustomerFatherName: any;
            const CustomerHusbandName: any;
            const CustomerCnic: any;
            const CustomerAddress: any;
            const CustomerPhone: any;
            const CustomerPersonType: any;
            const CustomerKinName: any;
            const CustomerKinFatherName: any;
            const CustomerKinHusbandName: any;
            const CustomerKinCnic: any;
            const CustomerKinAddress: any;
            const CustomerKinPhone: any;
            const AgentName: any;
            const AgentFatherName: any;
            const AgentHusbandName: any;
            const AgentCnic: any;
            const AgentAddress: any;
            const AgentPhone: any;
            const AgentPersonType: any;
            const AgentKinName: any;
            const AgentKinFatherName: any;
            const AgentKinHusbandName: any;
            const AgentKinCnic: any;
            const AgentKinAddress: any;
            const AgentKinPhone: any;
            const PropertyProjectId: any;
            const PropertyPhaseId: any;
            const PropertyBlockId: any;
            const PropertyPropertyTypeId: any;
            const PropertyName: any;
            const PropertyArea: any;
            const PropertyStatus: any;
        }
    }
}
declare namespace HSMS.Default {
    namespace BookingsService {
        const baseUrl = "Default/Bookings";
        function Create(request: Serenity.SaveRequest<BookingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BookingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BookingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BookingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        namespace Methods {
            const Create: string;
            const Update: string;
            const Delete: string;
            const Retrieve: string;
            const List: string;
        }
    }
}
declare namespace HSMS.Default {
}
declare namespace HSMS.Default {
    interface PersonsForm {
        Name: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        HusbandName: Serenity.StringEditor;
        Cnic: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        PersonType: Serenity.EnumEditor;
        KinName: Serenity.StringEditor;
        KinFatherName: Serenity.StringEditor;
        KinHusbandName: Serenity.StringEditor;
        KinCnic: Serenity.StringEditor;
        KinAddress: Serenity.StringEditor;
        KinPhone: Serenity.StringEditor;
    }
    class PersonsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HSMS.Default {
    interface PersonsRow {
        Id?: number;
        Name?: string;
        FatherName?: string;
        HusbandName?: string;
        Cnic?: string;
        Address?: string;
        Phone?: string;
        PersonType?: Modules.Default.Persons.PersonType;
        KinName?: string;
        KinFatherName?: string;
        KinHusbandName?: string;
        KinCnic?: string;
        KinAddress?: string;
        KinPhone?: string;
    }
    namespace PersonsRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Persons";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            FatherName = "FatherName",
            HusbandName = "HusbandName",
            Cnic = "Cnic",
            Address = "Address",
            Phone = "Phone",
            PersonType = "PersonType",
            KinName = "KinName",
            KinFatherName = "KinFatherName",
            KinHusbandName = "KinHusbandName",
            KinCnic = "KinCnic",
            KinAddress = "KinAddress",
            KinPhone = "KinPhone"
        }
    }
}
declare namespace HSMS.Default {
    namespace PersonsService {
        const baseUrl = "Default/Persons";
        function Create(request: Serenity.SaveRequest<PersonsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PersonsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PersonsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PersonsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Persons/Create",
            Update = "Default/Persons/Update",
            Delete = "Default/Persons/Delete",
            Retrieve = "Default/Persons/Retrieve",
            List = "Default/Persons/List"
        }
    }
}
declare namespace HSMS.Default {
}
declare namespace HSMS.Default {
    interface PhasesForm {
        Name: Serenity.StringEditor;
        ShortName: Serenity.StringEditor;
    }
    class PhasesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HSMS.Default {
    interface PhasesRow {
        Id?: number;
        Name?: string;
        ShortName?: string;
    }
    namespace PhasesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Phases";
        const lookupKey = "Phases";
        function getLookup(): Q.Lookup<PhasesRow>;
        const enum Fields {
            Id = "Id",
            Name = "Name",
            ShortName = "ShortName"
        }
    }
}
declare namespace HSMS.Default {
    namespace PhasesService {
        const baseUrl = "Default/Phases";
        function Create(request: Serenity.SaveRequest<PhasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PhasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PhasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PhasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Phases/Create",
            Update = "Default/Phases/Update",
            Delete = "Default/Phases/Delete",
            Retrieve = "Default/Phases/Retrieve",
            List = "Default/Phases/List"
        }
    }
}
declare namespace HSMS.Default {
}
declare namespace HSMS.Default {
    interface ProjectsForm {
        Name: Serenity.StringEditor;
        ShortName: Serenity.StringEditor;
    }
    class ProjectsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HSMS.Default {
    interface ProjectsRow {
        Id?: number;
        Name?: string;
        ShortName?: string;
    }
    namespace ProjectsRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Projects";
        const lookupKey = "Projects";
        function getLookup(): Q.Lookup<ProjectsRow>;
        const enum Fields {
            Id = "Id",
            Name = "Name",
            ShortName = "ShortName"
        }
    }
}
declare namespace HSMS.Default {
    namespace ProjectsService {
        const baseUrl = "Default/Projects";
        function Create(request: Serenity.SaveRequest<ProjectsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProjectsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProjectsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProjectsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Projects/Create",
            Update = "Default/Projects/Update",
            Delete = "Default/Projects/Delete",
            Retrieve = "Default/Projects/Retrieve",
            List = "Default/Projects/List"
        }
    }
}
declare namespace HSMS.Default {
}
declare namespace HSMS.Default {
    interface PropertiesForm {
        Name: Serenity.StringEditor;
        ProjectId: Serenity.LookupEditor;
        PhaseId: Serenity.LookupEditor;
        BlockId: Serenity.LookupEditor;
        PropertyTypeId: Serenity.LookupEditor;
        Area: Serenity.StringEditor;
    }
    class PropertiesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HSMS.Default {
    interface PropertiesRow {
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
    namespace PropertiesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Properties";
        const enum Fields {
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
declare namespace HSMS.Default {
    namespace PropertiesService {
        const baseUrl = "Default/Properties";
        function Create(request: Serenity.SaveRequest<PropertiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PropertiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PropertiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PropertiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Properties/Create",
            Update = "Default/Properties/Update",
            Delete = "Default/Properties/Delete",
            Retrieve = "Default/Properties/Retrieve",
            List = "Default/Properties/List"
        }
    }
}
declare namespace HSMS.Default {
}
declare namespace HSMS.Default {
    interface PropertyTypesForm {
        Name: Serenity.StringEditor;
        ShortName: Serenity.StringEditor;
    }
    class PropertyTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HSMS.Default {
    interface PropertyTypesRow {
        Id?: number;
        Name?: string;
        ShortName?: string;
    }
    namespace PropertyTypesRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.PropertyTypes";
        const lookupKey = "PropertyTypes";
        function getLookup(): Q.Lookup<PropertyTypesRow>;
        const enum Fields {
            Id = "Id",
            Name = "Name",
            ShortName = "ShortName"
        }
    }
}
declare namespace HSMS.Default {
    namespace PropertyTypesService {
        const baseUrl = "Default/PropertyTypes";
        function Create(request: Serenity.SaveRequest<PropertyTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PropertyTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PropertyTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PropertyTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/PropertyTypes/Create",
            Update = "Default/PropertyTypes/Update",
            Delete = "Default/PropertyTypes/Delete",
            Retrieve = "Default/PropertyTypes/Retrieve",
            List = "Default/PropertyTypes/List"
        }
    }
}
declare namespace HSMS {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace HSMS {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace HSMS {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace HSMS {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace HSMS.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HSMS.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace HSMS.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HSMS.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace HSMS.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HSMS.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace HSMS.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HSMS.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace HSMS.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace HSMS.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace HSMS.Modules.Default.Persons {
    enum PersonType {
        Customer = 1,
        Agent = 2
    }
}
declare namespace HSMS.Modules.Default.Properties {
    enum PropertyStatus {
        Available = 1,
        Booked = 2,
        Transferred = 3
    }
}
declare namespace HSMS {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace HSMS.Texts {
}
declare namespace HSMS.LanguageList {
    function getValue(): string[][];
}
declare namespace HSMS.ScriptInitialization {
}
declare namespace HSMS.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace HSMS.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace HSMS.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace HSMS.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace HSMS.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace HSMS.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace HSMS.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace HSMS.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace HSMS.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace HSMS.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace HSMS.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace HSMS.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace HSMS {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace HSMS.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace HSMS.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace HSMS.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace HSMS.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace HSMS.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace HSMS.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace HSMS {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace HSMS.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace HSMS.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace HSMS.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace HSMS.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace HSMS.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace HSMS.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace HSMS.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace HSMS.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace HSMS.Default {
    class BlocksDialog extends Serenity.EntityDialog<BlocksRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: BlocksForm;
    }
}
declare namespace HSMS.Default {
    class BlocksGrid extends Serenity.EntityGrid<BlocksRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BlocksDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HSMS.Default {
    class BookingsDialog extends Serenity.EntityDialog<BookingsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: BookingsForm;
    }
}
declare namespace HSMS.Default {
    class BookingsGrid extends Serenity.EntityGrid<BookingsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BookingsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HSMS.Default {
    class PersonsDialog extends Serenity.EntityDialog<PersonsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PersonsForm;
    }
}
declare namespace HSMS.Default {
    class PersonsGrid extends Serenity.EntityGrid<PersonsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PersonsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HSMS.Default {
    class PhasesDialog extends Serenity.EntityDialog<PhasesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PhasesForm;
    }
}
declare namespace HSMS.Default {
    class PhasesGrid extends Serenity.EntityGrid<PhasesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PhasesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HSMS.Default {
    class ProjectsDialog extends Serenity.EntityDialog<ProjectsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProjectsForm;
    }
}
declare namespace HSMS.Default {
    class ProjectsGrid extends Serenity.EntityGrid<ProjectsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProjectsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HSMS.Default {
    class PropertiesDialog extends Serenity.EntityDialog<PropertiesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PropertiesForm;
    }
}
declare namespace HSMS.Default {
    class PropertiesGrid extends Serenity.EntityGrid<PropertiesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PropertiesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HSMS.Default {
    class PropertyTypesDialog extends Serenity.EntityDialog<PropertyTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: PropertyTypesForm;
    }
}
declare namespace HSMS.Default {
    class PropertyTypesGrid extends Serenity.EntityGrid<PropertyTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PropertyTypesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace HSMS.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace HSMS.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace HSMS.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace HSMS.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace HSMS.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
