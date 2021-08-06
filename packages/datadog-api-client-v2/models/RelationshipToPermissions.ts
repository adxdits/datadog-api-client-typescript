/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RelationshipToPermissionData } from "./RelationshipToPermissionData";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Relationship to multiple permissions objects.
 */

export class RelationshipToPermissions {
  /**
   * Relationships to permission objects.
   */
  "data"?: Array<RelationshipToPermissionData>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "Array<RelationshipToPermissionData>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return RelationshipToPermissions.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): RelationshipToPermissions {
    const res = new RelationshipToPermissions();

    res.data = ObjectSerializer.deserialize(
      data.data,
      "Array<RelationshipToPermissionData>",
      ""
    );

    return res;
  }

  static serialize(data: RelationshipToPermissions): { [key: string]: any } {
    const attributeTypes = RelationshipToPermissions.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.data = ObjectSerializer.serialize(
      data.data,
      "Array<RelationshipToPermissionData>",
      ""
    );

    return res;
  }

  public constructor() {}
}
