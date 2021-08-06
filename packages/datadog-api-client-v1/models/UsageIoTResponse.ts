/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageIoTHour } from "./UsageIoTHour";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response containing the IoT usage for each hour for a given organization.
 */

export class UsageIoTResponse {
  /**
   * Get hourly usage for IoT.
   */
  "usage"?: Array<UsageIoTHour>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    usage: {
      baseName: "usage",
      type: "Array<UsageIoTHour>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UsageIoTResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageIoTResponse {
    const res = new UsageIoTResponse();

    res.usage = ObjectSerializer.deserialize(
      data.usage,
      "Array<UsageIoTHour>",
      ""
    );

    return res;
  }

  static serialize(data: UsageIoTResponse): { [key: string]: any } {
    const attributeTypes = UsageIoTResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.usage = ObjectSerializer.serialize(
      data.usage,
      "Array<UsageIoTHour>",
      ""
    );

    return res;
  }

  public constructor() {}
}
