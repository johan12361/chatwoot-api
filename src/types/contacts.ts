export interface ContactResponse {
  meta: Meta
  payload: Contact[]
}

export interface Meta {
  count: number
  current_page: string
}

export interface AdditionalAttributes {
  city: string
  country: string
  country_code: string
  created_at_ip: string
}

export interface ContactInbox {
  source_id: string
  inbox: Inbox
}

export interface Inbox {
  id: number
  name: string
  channel_type: string
  channel_id: number
  avatar_url: string
  provider: string
}

export interface Contact {
  id: number
  name: string
  email: string
  phone_number: string
  thumbnail: string
  identifier: string
  blocked: boolean
  availability_status: string
  additional_attributes: AdditionalAttributes
  custom_attributes: Record<string, unknown>
  last_activity_at: number
  created_at: number
  contact_inboxes: ContactInbox[]
}

export interface ContactPayload {
  inbox_id?: number
  name: string
  email?: string
  blocked?: boolean
  phone_number?: string
  avatar?: string
  avatar_url?: string
  identifier?: string
  additional_attributes?: Record<string, unknown>
  custom_attributes?: Record<string, unknown>
}

export interface ContactFilterPayload {
  attribute_key: string
  filter_operator: 'equal_to' | 'not_equal_to' | 'contains' | 'does_not_contain'
  values: string[]
  query_operator?: 'AND' | 'OR' | null
}

export interface ContactFilterResponse {
  meta: {
    count: number
    current_page: number
  }
  payload: Contact[]
}
