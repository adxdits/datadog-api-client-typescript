/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SecurityFilterCreateAttributes } from "./SecurityFilterCreateAttributes";
import { SecurityFilterType } from "./SecurityFilterType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object for a single security filter.
 */

export class SecurityFilterCreateData {
  "attributes": SecurityFilterCreateAttributes;
  "type": SecurityFilterType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "SecurityFilterCreateAttributes",
      format: "",
    },
    type: {
      baseName: "type",
      type: "SecurityFilterType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SecurityFilterCreateData.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SecurityFilterCreateData {
    const res = new SecurityFilterCreateData();

    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'SecurityFilterCreateData' object"
      );
    }
    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "SecurityFilterCreateAttributes",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'SecurityFilterCreateData' object"
      );
    }
    if (["security_filters", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new SecurityFilterCreateData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: SecurityFilterCreateData): { [key: string]: any } {
    const attributeTypes = SecurityFilterCreateData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'SecurityFilterCreateData' object"
      );
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "SecurityFilterCreateAttributes",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'SecurityFilterCreateData' object"
      );
    }
    if (["security_filters", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
