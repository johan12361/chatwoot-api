"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Client: () => Client
});
module.exports = __toCommonJS(index_exports);

// src/apis/customAttributes/getAllCustomAttributes.ts
var import_axios = __toESM(require("axios"), 1);
async function getAllCustomAttributes(credentials) {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/custom_attribute_definitions`;
  const headers = {
    api_access_token: credentials.token
  };
  const response = await import_axios.default.get(url, { headers });
  return response.data;
}

// src/apis/customAttributes/addCustomAttribute.ts
var import_axios2 = __toESM(require("axios"), 1);
async function addCustomAttribute(credentials, payload) {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/custom_attribute_definitions`;
  const headers = {
    api_access_token: credentials.token
  };
  const response = await import_axios2.default.post(url, payload, { headers });
  return response.data;
}

// src/client/customAttributes.ts
var customAttributes = {
  getAllCustomAttributes,
  addCustomAttribute
};

// src/apis/contacts/getContactFilter.ts
var import_axios3 = __toESM(require("axios"), 1);
async function getContactFilter(credentials, payload) {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/contacts/filter`;
  const headers = {
    api_access_token: credentials.token
  };
  const response = await import_axios3.default.post(
    url,
    {
      payload
    },
    { headers }
  );
  return response.data;
}

// src/apis/contacts/addContact.ts
var import_axios4 = __toESM(require("axios"), 1);
async function addContact(credentials, payload) {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/contacts`;
  const headers = {
    api_access_token: credentials.token
  };
  const response = await import_axios4.default.post(url, payload, { headers });
  return response.data;
}

// src/apis/contacts/getContactById.ts
var import_axios5 = __toESM(require("axios"), 1);
async function getContactById(credentials, id) {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/contacts/${id}`;
  const headers = {
    api_access_token: credentials.token
  };
  const response = await import_axios5.default.get(url, { headers });
  return response.data;
}

// src/client/contacts.ts
var contacts = {
  getContactFilter,
  addContact,
  getContactById
};

// src/apis/conversations/getConversationFilter.ts
var import_axios6 = __toESM(require("axios"), 1);
async function getConversationFilter(credentials, payload) {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/conversations/filter`;
  const headers = {
    api_access_token: credentials.token
  };
  const response = await import_axios6.default.post(
    url,
    {
      payload
    },
    { headers }
  );
  return response.data;
}

// src/apis/conversations/addConversation.ts
var import_axios7 = __toESM(require("axios"), 1);
async function addConversation(credentials, payload) {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/conversations`;
  const headers = {
    api_access_token: credentials.token
  };
  const response = await import_axios7.default.post(url, payload, { headers });
  return response.data;
}

// src/client/conversations.ts
var conversations = {
  getConversationFilter,
  addConversation
};

// src/apis/messages/addMessage.ts
var import_axios8 = __toESM(require("axios"), 1);
async function addMessage(credentials, conversationId, payload) {
  const url = `${credentials.url}/api/v1/accounts/${credentials.accountId}/conversations/${conversationId}/messages`;
  const headers = {
    api_access_token: credentials.token
  };
  const response = await import_axios8.default.post(url, payload, { headers });
  console.log(response.data);
  return response.data;
}

// src/client/messages.ts
var messages = {
  addMessage
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
    // messages
    this.messages = {
      addMessage: (conversationId, payload) => messages.addMessage(this.credentials, conversationId, payload)
    };
    this.credentials = credentials;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Client
});
