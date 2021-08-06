/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageBillableSummaryHour } from "./UsageBillableSummaryHour";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response with monthly summary of data billed by Datadog.
 */

export class UsageBillableSummaryResponse {
  /**
   * An array of objects regarding usage of billable summary.
   */
  "usage"?: Array<UsageBillableSummaryHour>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    usage: {
      baseName: "usage",
      type: "Array<UsageBillableSummaryHour>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UsageBillableSummaryResponse.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): UsageBillableSummaryResponse {
    const res = new UsageBillableSummaryResponse();

    res.usage = ObjectSerializer.deserialize(
      data.usage,
      "Array<UsageBillableSummaryHour>",
      ""
    );

    return res;
  }

  static serialize(data: UsageBillableSummaryResponse): { [key: string]: any } {
    const attributeTypes = UsageBillableSummaryResponse.getAttributeTypeMap();
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
      "Array<UsageBillableSummaryHour>",
      ""
    );

    return res;
  }

  public constructor() {}
}
