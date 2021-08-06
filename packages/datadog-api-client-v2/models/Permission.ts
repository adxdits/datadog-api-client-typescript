/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PermissionAttributes } from "./PermissionAttributes";
import { PermissionsType } from "./PermissionsType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Permission object.
 */

export class Permission {
  "attributes"?: PermissionAttributes;
  /**
   * ID of the permission.
   */
  "id"?: string;
  "type": PermissionsType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "PermissionAttributes",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "PermissionsType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return Permission.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): Permission {
    const res = new Permission();

    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "PermissionAttributes",
      ""
    );

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'Permission' object"
      );
    }
    if (["permissions", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new Permission();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: Permission): { [key: string]: any } {
    const attributeTypes = Permission.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "PermissionAttributes",
      ""
    );

    res.id = ObjectSerializer.serialize(data.id, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'Permission' object"
      );
    }
    if (["permissions", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
