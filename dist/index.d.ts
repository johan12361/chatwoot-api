interface Credentials {
    url: string;
    accountId: string;
    token: string;
}

interface CustomAttributes {
    id: number;
    attribute_display_name: string;
    attribute_display_type: string;
    attribute_description: string;
    attribute_key: string;
    regex_pattern: string | null;
    regex_cue: string | null;
    attribute_values: unknown[];
    attribute_model: string;
    default_value: string | number | null;
    created_at: string;
    updated_at: string;
}
interface CustomAttributePayload {
    attribute_display_name: string;
    attribute_display_type: number;
    attribute_description?: string;
    attribute_key: string;
    attribute_values?: string[];
    attribute_model: number;
    regex_pattern?: string;
    regex_cue?: string;
}

interface AdditionalAttributes {
    city: string;
    country: string;
    country_code: string;
    created_at_ip: string;
}
interface ContactInbox {
    source_id: string;
    inbox: Inbox;
}
interface Inbox {
    id: number;
    name: string;
    channel_type: string;
    channel_id: number;
    avatar_url: string;
    provider: string;
}
interface Contact {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    thumbnail: string;
    identifier: string;
    blocked: boolean;
    availability_status: string;
    additional_attributes: AdditionalAttributes;
    custom_attributes: Record<string, unknown>;
    last_activity_at: number;
    created_at: number;
    contact_inboxes: ContactInbox[];
}
interface ContactPayload {
    inbox_id?: number;
    name: string;
    email?: string;
    blocked?: boolean;
    phone_number?: string;
    avatar?: string;
    avatar_url?: string;
    identifier?: string;
    additional_attributes?: Record<string, unknown>;
    custom_attributes?: Record<string, unknown>;
}
interface ContactFilterPayload {
    attribute_key: string;
    filter_operator: 'equal_to' | 'not_equal_to' | 'contains' | 'does_not_contain';
    values: string[];
    query_operator?: 'AND' | 'OR' | null;
}
interface ContactFilterResponse {
    meta: {
        count: number;
        current_page: number;
    };
    payload: Contact[];
}

declare class Client {
    private readonly credentials;
    constructor(credentials: Credentials);
    customAttributes: {
        getAllCustomAttributes: () => Promise<CustomAttributes[]>;
        addCustomAttribute: (payload: CustomAttributePayload) => Promise<CustomAttributes[]>;
    };
    contacts: {
        getContactFilter: (payload: ContactFilterPayload[]) => Promise<ContactFilterResponse>;
        addContact: (payload: ContactPayload) => Promise<{
            payload: {
                contact: Contact;
            };
        }>;
    };
}

export { Client };
