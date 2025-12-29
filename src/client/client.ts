// types
import type { Credentials } from '../types/client.js'
import type { CustomAttributes, CustomAttributePayload } from '../types/customAttributes.js'
import type { ContactFilterResponse, ContactFilterPayload } from '../types/contacts.js'

// apis
import { customAttributes } from './customAttributes.js'
import { contacts } from './contacts.js'

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
      contacts.getContactFilter(this.credentials, payload)
  }
}
