import { OpticWithLeads } from "./OpticsLeads";

export interface OpticWithLeadsResponse{
    message: string;
    resultCode: boolean;
    data: OpticWithLeads[];
}