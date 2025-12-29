import axios from 'axios'

// types
import type { Credentials } from '../../types/client.js'
import type { ContactFilterResponse, ContactFilterPayload } from '../../types/contacts.js'

export async function getContactFilter(
  credentials: Credentials,
  payload: ContactFilterPayload[]
): Promise<ContactFilterResponse> {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/contacts/filter`

  const headers = {
    api_access_token: credentials.token
  }
  const response = await axios.post(
    url,
    {
      payload
    },
    { headers }
  )
  return response.data as ContactFilterResponse
}
