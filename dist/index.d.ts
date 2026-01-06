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

interface ConversationResponse {
    meta: GlobalMeta;
    payload: Conversation[];
}
interface GlobalMeta {
    mine_count: number;
    unassigned_count: number;
    assigned_count: number;
    all_count: number;
}
interface Conversation {
    id: number;
    account_id: number;
    uuid: string;
    additional_attributes: Record<string, unknown>;
    agent_last_seen_at: number;
    assignee_last_seen_at: number;
    can_reply: boolean;
    contact_last_seen_at: number;
    custom_attributes: Record<string, unknown>;
    inbox_id: number;
    labels: string[];
    muted: boolean;
    snoozed_until: number | null;
    status: 'open' | 'resolved' | 'pending';
    created_at: number;
    updated_at: number;
    timestamp: string;
    first_reply_created_at: number;
    unread_count: number;
    last_activity_at: number;
    priority: null | string;
    waiting_since: number;
    sla_policy_id: number | null;
    applied_sla: Record<string, unknown>;
    sla_events: Record<string, unknown>[];
    messages: Message[];
    last_non_activity_message: Message;
    meta: ConversationMeta;
}
interface Message {
    id: number;
    content: string;
    account_id: number;
    inbox_id: number;
    conversation_id: number;
    message_type: number;
    created_at: number;
    updated_at: number;
    private: boolean;
    status: string;
    source_id: string | null;
    content_type: string;
    content_attributes: Record<string, unknown>;
    sender_type: string;
    sender_id: number;
    external_source_ids: Record<string, unknown>;
    additional_attributes: Record<string, unknown>;
    processed_message_content: string;
    sentiment: Record<string, unknown>;
    conversation: Record<string, unknown>;
    attachment: Record<string, unknown>;
    sender: Partial<Sender>;
}
interface ConversationMeta {
    sender: Sender;
    channel: string;
    assignee: Assignee | null;
    hmac_verified: boolean;
}
interface Sender {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    thumbnail: string;
    identifier: string;
    blocked: boolean;
    availability_status: string;
    additional_attributes: Record<string, unknown>;
    custom_attributes: Record<string, unknown>;
    last_activity_at: number;
    created_at: number;
}
interface Assignee {
    id: number;
    name: string;
    display_name: string;
    email: string;
    role: string;
    available_name: string;
    avatar_url: string;
    confirmed: boolean;
    message_signature: string;
    hmac_identifier: string;
    inviter_id: number | null;
    provider: string;
    pubsub_token: string;
    ui_settings: Record<string, unknown>;
    uid: string;
    type: string;
    custom_attributes: Record<string, unknown>;
    accounts: AgentAccount[];
}
interface AgentAccount {
    id: number;
    name: string;
    status: string;
    active_at: string;
    role: string;
    permissions: string[];
    availability: string;
    availability_status: string;
    auto_offline: boolean;
    custom_role_id: number | null;
    custom_role: Record<string, unknown>;
}
interface ConversationFilterPayload {
    attribute_key: string;
    filter_operator: 'equal_to' | 'not_equal_to' | 'contains' | 'does_not_contain';
    values: string[];
    query_operator?: 'AND' | 'OR' | null;
}
interface AddConversationPayload {
    source_id: number;
    inbox_id: number;
    contact_id: number;
    status: 'open' | 'resolved' | 'pending';
    additional_attributes?: Record<string, unknown>;
    custom_attributes?: Record<string, unknown>;
    assignee_id?: number;
    team_id?: number;
    snoozed_until?: string;
    message?: Record<string, unknown>;
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
        getContactById: (id: string) => Promise<{
            payload: Contact;
        }>;
    };
    conversations: {
        getConversationFilter: (payload: ConversationFilterPayload[]) => Promise<ConversationResponse>;
        addConversation: (payload: AddConversationPayload) => Promise<Conversation>;
    };
}

export { type AddConversationPayload, Client, type Contact, type ContactFilterPayload, type ContactFilterResponse, type ContactPayload, type Conversation, type ConversationFilterPayload, type ConversationResponse, type Credentials, type CustomAttributePayload, type CustomAttributes };
