export interface CustomAttributes {
  id: number
  attribute_display_name: string
  attribute_display_type: string
  attribute_description: string
  attribute_key: string
  regex_pattern: string | null
  regex_cue: string | null
  attribute_values: unknown[]
  attribute_model: string
  default_value: string | number | null
  created_at: string
  updated_at: string
}

export interface CustomAttributePayload {
  attribute_display_name: string
  attribute_display_type: number // text- 0, number- 1, currency- 2, percent- 3, link- 4, date- 5, list- 6, checkbox- 7
  attribute_description?: string
  attribute_key: string
  attribute_values?: string[]
  attribute_model: number // conversation_attribute- 0, contact_attribute- 1
  regex_pattern?: string
  regex_cue?: string
}
