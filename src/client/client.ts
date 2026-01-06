// apis
import { customAttributes } from './customAttributes.js'
import { contacts } from './contacts.js'
import { conversations } from './conversations.js'
import { messages } from './messages.js'

// types
import type { Credentials } from '../types/client.js'
import type { CustomAttributes, CustomAttributePayload } from '../types/customAttributes.js'
import type { ContactFilterResponse, ContactFilterPayload, ContactPayload, Contact } from '../types/contacts.js'
import type {
  ConversationResponse,
  ConversationFilterPayload,
  AddConversationPayload,
  Conversation
} from '../types/conversations.js'
import type { MessageToAdd, MessageResponse } from '../types/messages.js'

export class Client {
  private readonly credentials: Credentials

  constructor(credentials: Credentials) {
    this.credentials = credentials
  }

  // customAttributes
  customAttributes = {
    getAllCustomAttributes: (): Promise<CustomAttributes[]> =>
      customAttributes.getAllCustomAttributes(this.credentials),
    addCustomAttribute: (payload: CustomAttributePayload): Promise<CustomAttributes[]> =>
      customAttributes.addCustomAttribute(this.credentials, payload)
  }

  // contacts
  contacts = {
    getContactFilter: (payload: ContactFilterPayload[]): Promise<ContactFilterResponse> =>
      contacts.getContactFilter(this.credentials, payload),
    addContact: (payload: ContactPayload): Promise<{ payload: { contact: Contact } }> =>
      contacts.addContact(this.credentials, payload),
    getContactById: (id: string): Promise<{ payload: Contact }> => contacts.getContactById(this.credentials, id)
  }

  // conversations
  conversations = {
    getConversationFilter: (payload: ConversationFilterPayload[]): Promise<ConversationResponse> =>
      conversations.getConversationFilter(this.credentials, payload),
    addConversation: (payload: AddConversationPayload): Promise<Conversation> =>
      conversations.addConversation(this.credentials, payload)
  }

  // messages
  messages = {
    addMessage: (conversationId: string, payload: MessageToAdd): Promise<MessageResponse> =>
      messages.addMessage(this.credentials, conversationId, payload)
  }
}
