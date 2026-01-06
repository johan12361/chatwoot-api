export interface MessageToAdd {
  content: string
  message_type: 'incoming' | 'outgoing'
  private: boolean
  content_type: 'text' | 'input_email' | 'cards' | 'input_select' | 'form'
  content_attributes?: Record<string, unknown>
}

export interface MessageResponse {
  id: number
  content: string
  inbox_id: number
  conversation_id: number
  message_type: number
  content_type: number
  status: string
  content_attributes: Record<string, unknown>
  created_at: number
  private: boolean
  source_id: string | null
  sender: {
    id: number
    name: string
    available_name: string
    avatar_url: string
    type: string
    availability_status: string
    thumbnail: string
  }
}
