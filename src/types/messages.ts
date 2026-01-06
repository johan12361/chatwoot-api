export interface MessageToAdd {
  content: string
  message_type: 'incoming' | 'outgoing'
  private: boolean
  content_type: 'text' | 'input_email' | 'cards' | 'input_select' | 'form' | 'form'
  content_attributes?: Record<string, unknown>
}
