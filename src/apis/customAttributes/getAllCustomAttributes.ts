import axios from 'axios'

// types
import type { Credentials } from '../../types/client.js'
import type { CustomAttributes } from '../../types/customAttributes.js'

export async function getAllCustomAttributes(credentials: Credentials): Promise<CustomAttributes[]> {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/custom_attribute_definitions`

  const headers = {
    api_access_token: credentials.token
  }
  const response = await axios.get(url, { headers })
  return response.data as CustomAttributes[]
}
