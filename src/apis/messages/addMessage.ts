import axios from 'axios'

// types
import type { Credentials } from '../../types/client.js'
import type { MessageToAdd, MessageResponse } from '../../types/messages.js'

export async function addMessage(
  credentials: Credentials,
  conversationId: string,
  payload: MessageToAdd
): Promise<MessageResponse> {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/conversations/${conversationId}/messages`

  const headers = {
    api_access_token: credentials.token
  }
  const response = await axios.post(url, payload, { headers })

  console.log(response.data)
  return response.data as MessageResponse
}
