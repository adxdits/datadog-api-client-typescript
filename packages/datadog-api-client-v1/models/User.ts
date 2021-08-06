/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AccessRole } from "./AccessRole";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Create, edit, and disable users.
 */

export class User {
  "accessRole"?: AccessRole;
  /**
   * The new disabled status of the user.
   */
  "disabled"?: boolean;
  /**
   * The new email of the user.
   */
  "email"?: string;
  /**
   * The user handle, must be a valid email.
   */
  "handle"?: string;
  /**
   * Gravatar icon associated to the user.
   */
  "icon"?: string;
  /**
   * The name of the user.
   */
  "name"?: string;
  /**
   * Whether or not the user logged in Datadog at least once.
   */
  "verified"?: boolean;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    accessRole: {
      baseName: "access_role",
      type: "AccessRole",
      format: "",
    },
    disabled: {
      baseName: "disabled",
      type: "boolean",
      format: "",
    },
    email: {
      baseName: "email",
      type: "string",
      format: "email",
    },
    handle: {
      baseName: "handle",
      type: "string",
      format: "email",
    },
    icon: {
      baseName: "icon",
      type: "string",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    verified: {
      baseName: "verified",
      type: "boolean",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return User.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): User {
    const res = new User();

    if (["st", "adm", "ro", "ERROR", undefined].includes(data.access_role)) {
      res.accessRole = data.access_role;
    } else {
      const raw = new User();
      raw.unparsedObject = data;
      return raw;
    }

    res.disabled = ObjectSerializer.deserialize(data.disabled, "boolean", "");

    res.email = ObjectSerializer.deserialize(data.email, "string", "email");

    res.handle = ObjectSerializer.deserialize(data.handle, "string", "email");

    res.icon = ObjectSerializer.deserialize(data.icon, "string", "");

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.verified = ObjectSerializer.deserialize(data.verified, "boolean", "");

    return res;
  }

  static serialize(data: User): { [key: string]: any } {
    const attributeTypes = User.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (["st", "adm", "ro", "ERROR", undefined].includes(data.accessRole)) {
      res.access_role = data.accessRole;
    } else {
      throw TypeError(`invalid enum value ${data.accessRole} for accessRole`);
    }

    res.disabled = ObjectSerializer.serialize(data.disabled, "boolean", "");

    res.email = ObjectSerializer.serialize(data.email, "string", "email");

    res.handle = ObjectSerializer.serialize(data.handle, "string", "email");

    res.icon = ObjectSerializer.serialize(data.icon, "string", "");

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.verified = ObjectSerializer.serialize(data.verified, "boolean", "");

    return res;
  }

  public constructor() {}
}
