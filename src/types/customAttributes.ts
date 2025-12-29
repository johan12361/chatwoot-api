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
