// src/apis/customAttributes/getAllCustomAttributes.ts
import axios from "axios";
async function getAllCustomAttributes(credentials) {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/custom_attribute_definitions`;
  const headers = {
    api_access_token: credentials.token
  };
  const response = await axios.get(url, { headers });
  return response.data;
}

// src/apis/customAttributes/addCustomAttribute.ts
import axios2 from "axios";
async function addCustomAttribute(credentials, payload) {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/custom_attribute_definitions`;
  const headers = {
    api_access_token: credentials.token
  };
  const response = await axios2.post(url, payload, { headers });
  return response.data;
}

// src/client/customAttributes.ts
var customAttributes = {
  getAllCustomAttributes,
  addCustomAttribute
};

// src/apis/contacts/getContactFilter.ts
import axios3 from "axios";
async function getContactFilter(credentials, payload) {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/contacts/filter`;
  const headers = {
    api_access_token: credentials.token
  };
  const response = await axios3.post(
    url,
    {
      payload
    },
    { headers }
  );
  return response.data;
}

// src/apis/contacts/addContact.ts
import axios4 from "axios";
async function addContact(credentials, payload) {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/contacts`;
  const headers = {
    api_access_token: credentials.token
  };
  const response = await axios4.post(url, payload, { headers });
  return response.data;
}

// src/apis/contacts/getContactById.ts
import axios5 from "axios";
async function getContactById(credentials, id) {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/contacts/${id}`;
  const headers = {
    api_access_token: credentials.token
  };
  const response = await axios5.get(url, { headers });
  return response.data;
}

// src/client/contacts.ts
var contacts = {
  getContactFilter,
  addContact,
  getContactById
};

// src/apis/conversations/getConversationFilter.ts
import axios6 from "axios";
async function getConversationFilter(credentials, payload) {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/conversations/filter`;
  const headers = {
    api_access_token: credentials.token
  };
  const response = await axios6.post(
    url,
    {
      payload
    },
    { headers }
  );
  return response.data;
}

// src/apis/conversations/addConversation.ts
import axios7 from "axios";
async function addConversation(credentials, payload) {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/conversations`;
  const headers = {
    api_access_token: credentials.token
  };
  const response = await axios7.post(url, payload, { headers });
  return response.data;
}

// src/client/conversations.ts
var conversations = {
  getConversationFilter,
  addConversation
};

// src/client/client.ts
var Client = class {
  constructor(credentials) {
    // customAttributes
    this.customAttributes = {
      getAllCustomAttributes: () => customAttributes.getAllCustomAttributes(this.credentials),
      addCustomAttribute: (payload) => customAttributes.addCustomAttribute(this.credentials, payload)
    };
    // contacts
    this.contacts = {
      getContactFilter: (payload) => contacts.getContactFilter(this.credentials, payload),
      addContact: (payload) => contacts.addContact(this.credentials, payload),
      getContactById: (id) => contacts.getContactById(this.credentials, id)
    };
    // conversations
    this.conversations = {
      getConversationFilter: (payload) => conversations.getConversationFilter(this.credentials, payload),
      addConversation: (payload) => conversations.addConversation(this.credentials, payload)
    };
    this.credentials = credentials;
  }
};
export {
  Client
};
