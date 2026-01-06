import axios from 'axios'

// types
import type { Credentials } from '../../types/client.js'
import type { ConversationResponse, ConversationFilterPayload } from '../../types/conversations.js'

export async function getConversationFilter(
  credentials: Credentials,
  payload: ConversationFilterPayload[]
): Promise<ConversationResponse> {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/conversations/filter`

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
  return response.data as ConversationResponse
}
