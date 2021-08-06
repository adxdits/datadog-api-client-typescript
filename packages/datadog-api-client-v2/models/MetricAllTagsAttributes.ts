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
 * Object containing the definition of a metric's tags.
 */

export class MetricAllTagsAttributes {
  /**
   * List of indexed tag value pairs.
   */
  "tags"?: Array<string>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    tags: {
      baseName: "tags",
      type: "Array<string>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MetricAllTagsAttributes.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): MetricAllTagsAttributes {
    const res = new MetricAllTagsAttributes();

    res.tags = ObjectSerializer.deserialize(data.tags, "Array<string>", "");

    return res;
  }

  static serialize(data: MetricAllTagsAttributes): { [key: string]: any } {
    const attributeTypes = MetricAllTagsAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.tags = ObjectSerializer.serialize(data.tags, "Array<string>", "");

    return res;
  }

  public constructor() {}
}
