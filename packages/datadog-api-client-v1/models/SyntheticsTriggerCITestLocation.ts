/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Synthetics location.
 */

export class SyntheticsTriggerCITestLocation {
  /**
   * Unique identifier of the location.
   */
  "id"?: number;
  /**
   * Name of the location.
   */
  "name"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsTriggerCITestLocation.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsTriggerCITestLocation {
    const res = new SyntheticsTriggerCITestLocation();

    res.id = ObjectSerializer.deserialize(data.id, "number", "int64");

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    return res;
  }

  static serialize(
    data: SyntheticsTriggerCITestLocation
  ): { [key: string]: any } {
    const attributeTypes = SyntheticsTriggerCITestLocation.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.id = ObjectSerializer.serialize(data.id, "number", "int64");

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    return res;
  }

  public constructor() {}
}
