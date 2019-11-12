
namespace HSMS.Default {
    export interface BookingsRow {
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

    export namespace BookingsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.Bookings';

        export namespace Fields {
            export declare const Id;
            export declare const DateOfBooking;
            export declare const CustomerId;
            export declare const AgentId;
            export declare const PropertyId;
            export declare const AmountReceived;
            export declare const AgentCommissionPercent;
            export declare const CustomerName;
            export declare const CustomerFatherName;
            export declare const CustomerHusbandName;
            export declare const CustomerCnic;
            export declare const CustomerAddress;
            export declare const CustomerPhone;
            export declare const CustomerPersonType;
            export declare const CustomerKinName;
            export declare const CustomerKinFatherName;
            export declare const CustomerKinHusbandName;
            export declare const CustomerKinCnic;
            export declare const CustomerKinAddress;
            export declare const CustomerKinPhone;
            export declare const AgentName;
            export declare const AgentFatherName;
            export declare const AgentHusbandName;
            export declare const AgentCnic;
            export declare const AgentAddress;
            export declare const AgentPhone;
            export declare const AgentPersonType;
            export declare const AgentKinName;
            export declare const AgentKinFatherName;
            export declare const AgentKinHusbandName;
            export declare const AgentKinCnic;
            export declare const AgentKinAddress;
            export declare const AgentKinPhone;
            export declare const PropertyProjectId;
            export declare const PropertyPhaseId;
            export declare const PropertyBlockId;
            export declare const PropertyPropertyTypeId;
            export declare const PropertyName;
            export declare const PropertyArea;
            export declare const PropertyStatus;
        }

        [
            'Id',
            'DateOfBooking',
            'CustomerId',
            'AgentId',
            'PropertyId',
            'AmountReceived',
            'AgentCommissionPercent',
            'CustomerName',
            'CustomerFatherName',
            'CustomerHusbandName',
            'CustomerCnic',
            'CustomerAddress',
            'CustomerPhone',
            'CustomerPersonType',
            'CustomerKinName',
            'CustomerKinFatherName',
            'CustomerKinHusbandName',
            'CustomerKinCnic',
            'CustomerKinAddress',
            'CustomerKinPhone',
            'AgentName',
            'AgentFatherName',
            'AgentHusbandName',
            'AgentCnic',
            'AgentAddress',
            'AgentPhone',
            'AgentPersonType',
            'AgentKinName',
            'AgentKinFatherName',
            'AgentKinHusbandName',
            'AgentKinCnic',
            'AgentKinAddress',
            'AgentKinPhone',
            'PropertyProjectId',
            'PropertyPhaseId',
            'PropertyBlockId',
            'PropertyPropertyTypeId',
            'PropertyName',
            'PropertyArea',
            'PropertyStatus'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}