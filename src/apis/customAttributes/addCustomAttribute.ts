import axios from 'axios'

// types
import type { Credentials } from '../../types/client.js'
import type { CustomAttributes, CustomAttributePayload } from '../../types/customAttributes.js'

export async function addCustomAttribute(
  credentials: Credentials,
  payload: CustomAttributePayload
): Promise<CustomAttributes[]> {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/custom_attribute_definitions`

  const headers = {
    api_access_token: credentials.token
  }
  const response = await axios.post(url, payload, { headers })
  return response.data as CustomAttributes[]
}
