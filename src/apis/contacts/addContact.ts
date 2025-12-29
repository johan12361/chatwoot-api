import axios from 'axios'

// types
import type { Credentials } from '../../types/client.js'
import type { ContactPayload, Contact } from '../../types/contacts.js'

export async function addContact(
  credentials: Credentials,
  payload: ContactPayload
): Promise<{ payload: { contact: Contact } }> {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/contacts`

  const headers = {
    api_access_token: credentials.token
  }
  const response = await axios.post(url, payload, { headers })
  return response.data as Promise<{ payload: { contact: Contact } }>
}
