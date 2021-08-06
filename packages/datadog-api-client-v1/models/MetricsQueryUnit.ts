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
 * Object containing the metric unit family, scale factor, name, and short name.
 */

export class MetricsQueryUnit {
  /**
   * Unit family, allows for conversion between units of the same family, for scaling.
   */
  "family"?: string;
  /**
   * Unit name
   */
  "name"?: string;
  /**
   * Plural form of the unit name.
   */
  "plural"?: string;
  /**
   * Factor for scaling between units of the same family.
   */
  "scaleFactor"?: number;
  /**
   * Abbreviation of the unit.
   */
  "shortName"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    family: {
      baseName: "family",
      type: "string",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    plural: {
      baseName: "plural",
      type: "string",
      format: "",
    },
    scaleFactor: {
      baseName: "scale_factor",
      type: "number",
      format: "double",
    },
    shortName: {
      baseName: "short_name",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MetricsQueryUnit.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): MetricsQueryUnit {
    const res = new MetricsQueryUnit();

    res.family = ObjectSerializer.deserialize(data.family, "string", "");

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.plural = ObjectSerializer.deserialize(data.plural, "string", "");

    res.scaleFactor = ObjectSerializer.deserialize(
      data.scale_factor,
      "number",
      "double"
    );

    res.shortName = ObjectSerializer.deserialize(data.short_name, "string", "");

    return res;
  }

  static serialize(data: MetricsQueryUnit): { [key: string]: any } {
    const attributeTypes = MetricsQueryUnit.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.family = ObjectSerializer.serialize(data.family, "string", "");

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.plural = ObjectSerializer.serialize(data.plural, "string", "");

    res.scale_factor = ObjectSerializer.serialize(
      data.scaleFactor,
      "number",
      "double"
    );

    res.short_name = ObjectSerializer.serialize(data.shortName, "string", "");

    return res;
  }

  public constructor() {}
}
