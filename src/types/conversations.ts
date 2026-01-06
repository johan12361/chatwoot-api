// --- Respuesta Principal ---
export interface ConversationResponse {
  meta: GlobalMeta
  payload: Conversation[]
}

// --- Metadatos Globales ---
export interface GlobalMeta {
  mine_count: number
  unassigned_count: number
  assigned_count: number
  all_count: number
}

// --- Conversación (Elemento del Payload) ---
export interface Conversation {
  id: number
  account_id: number
  uuid: string
  additional_attributes: Record<string, unknown>
  agent_last_seen_at: number
  assignee_last_seen_at: number
  can_reply: boolean
  contact_last_seen_at: number
  custom_attributes: Record<string, unknown>
  inbox_id: number
  labels: string[]
  muted: boolean
  snoozed_until: number | null
  status: 'open' | 'resolved' | 'pending'
  created_at: number
  updated_at: number
  timestamp: string
  first_reply_created_at: number
  unread_count: number
  last_activity_at: number
  priority: null | string
  waiting_since: number
  sla_policy_id: number | null
  applied_sla: Record<string, unknown>
  sla_events: Record<string, unknown>[]

  // Relaciones anidadas
  messages: Message[]
  last_non_activity_message: Message
  meta: ConversationMeta
}

// --- Mensajes ---
export interface Message {
  id: number
  content: string
  account_id: number
  inbox_id: number
  conversation_id: number
  message_type: number // 0: incoming, 1: outgoing, etc.
  created_at: number
  updated_at: number
  private: boolean
  status: string
  source_id: string | null
  content_type: string
  content_attributes: Record<string, unknown>
  sender_type: string
  sender_id: number
  external_source_ids: Record<string, unknown>
  additional_attributes: Record<string, unknown>
  processed_message_content: string
  sentiment: Record<string, unknown>
  conversation: Record<string, unknown> // Opcional según profundidad
  attachment: Record<string, unknown>
  sender: Partial<Sender> // Referencia al remitente del mensaje
}

// --- Metadatos de la Conversación ---
export interface ConversationMeta {
  sender: Sender
  channel: string
  assignee: Assignee | null
  hmac_verified: boolean
}

// --- Persona / Contacto ---
export interface Sender {
  id: number
  name: string
  email: string
  phone_number: string
  thumbnail: string
  identifier: string
  blocked: boolean
  availability_status: string
  additional_attributes: Record<string, unknown>
  custom_attributes: Record<string, unknown>
  last_activity_at: number
  created_at: number
}

// --- Agente Asignado ---
export interface Assignee {
  id: number
  name: string
  display_name: string
  email: string
  role: string
  available_name: string
  avatar_url: string
  confirmed: boolean
  message_signature: string
  hmac_identifier: string
  inviter_id: number | null
  provider: string
  pubsub_token: string
  ui_settings: Record<string, unknown>
  uid: string
  type: string
  custom_attributes: Record<string, unknown>
  accounts: AgentAccount[]
}

// --- Cuenta vinculada al Agente ---
export interface AgentAccount {
  id: number
  name: string
  status: string
  active_at: string // ISO Date
  role: string
  permissions: string[]
  availability: string
  availability_status: string
  auto_offline: boolean
  custom_role_id: number | null
  custom_role: Record<string, unknown>
}

// --- Filtro de Conversación ---
export interface ConversationFilterPayload {
  attribute_key: string
  filter_operator: 'equal_to' | 'not_equal_to' | 'contains' | 'does_not_contain'
  values: string[]
  query_operator?: 'AND' | 'OR' | null
}

// --- Agregar Conversación ---
export interface AddConversationPayload {
  source_id: number
  inbox_id: number
  contact_id: number
  status: 'open' | 'resolved' | 'pending'
  additional_attributes?: Record<string, unknown>
  custom_attributes?: Record<string, unknown>
  assignee_id?: number
  team_id?: number
  snoozed_until?: string
  message?: Record<string, unknown>
}
