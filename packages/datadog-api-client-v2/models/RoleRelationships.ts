/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RelationshipToPermissions } from "./RelationshipToPermissions";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Relationships of the role object.
 */

export class RoleRelationships {
  "permissions"?: RelationshipToPermissions;
  "users"?: RelationshipToUsers;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    permissions: {
      baseName: "permissions",
      type: "RelationshipToPermissions",
      format: "",
    },
    users: {
      baseName: "users",
      type: "RelationshipToUsers",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return RoleRelationships.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): RoleRelationships {
    const res = new RoleRelationships();

    res.permissions = ObjectSerializer.deserialize(
      data.permissions,
      "RelationshipToPermissions",
      ""
    );

    res.users = ObjectSerializer.deserialize(
      data.users,
      "RelationshipToUsers",
      ""
    );

    return res;
  }

  static serialize(data: RoleRelationships): { [key: string]: any } {
    const attributeTypes = RoleRelationships.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.permissions = ObjectSerializer.serialize(
      data.permissions,
      "RelationshipToPermissions",
      ""
    );

    res.users = ObjectSerializer.serialize(
      data.users,
      "RelationshipToUsers",
      ""
    );

    return res;
  }

  public constructor() {}
}
