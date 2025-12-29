// types
import type { Credentials } from '../types/client.js'
import type { CustomAttributes, CustomAttributePayload } from '../types/customAttributes.js'

// apis
import { customAttributes } from './customAttributes.js'

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
}
