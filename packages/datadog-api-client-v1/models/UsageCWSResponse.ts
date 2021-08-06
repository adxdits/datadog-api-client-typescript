/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageCWSHour } from "./UsageCWSHour";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response containing the Cloud Workload Security usage for each hour for a given organization.
 */

export class UsageCWSResponse {
  /**
   * Get hourly usage for Cloud Workload Security.
   */
  "usage"?: Array<UsageCWSHour>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    usage: {
      baseName: "usage",
      type: "Array<UsageCWSHour>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UsageCWSResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageCWSResponse {
    const res = new UsageCWSResponse();

    res.usage = ObjectSerializer.deserialize(
      data.usage,
      "Array<UsageCWSHour>",
      ""
    );

    return res;
  }

  static serialize(data: UsageCWSResponse): { [key: string]: any } {
    const attributeTypes = UsageCWSResponse.getAttributeTypeMap();
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
      "Array<UsageCWSHour>",
      ""
    );

    return res;
  }

  public constructor() {}
}
