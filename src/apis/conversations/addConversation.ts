import axios from 'axios'

// types
import type { Credentials } from '../../types/client.js'
import type { AddConversationPayload, Conversation } from '../../types/conversations.js'

export async function addConversation(
  credentials: Credentials,
  payload: AddConversationPayload
): Promise<Conversation> {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/conversations`

  const headers = {
    api_access_token: credentials.token
  }
  const response = await axios.post(url, payload, { headers })
  return response.data as Promise<Conversation>
}
