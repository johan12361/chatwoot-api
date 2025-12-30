import axios from 'axios'

// types
import type { Credentials } from '../../types/client.js'
import type { Contact } from '../../types/contacts.js'

export async function getContactById(credentials: Credentials, id: string): Promise<{ payload: Contact }> {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/contacts/${id}`

  const headers = {
    api_access_token: credentials.token
  }
  const response = await axios.get(url, { headers })
  return response.data as Promise<{ payload: Contact }>
}
