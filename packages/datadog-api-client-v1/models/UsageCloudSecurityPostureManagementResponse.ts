/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageCloudSecurityPostureManagementHour } from "./UsageCloudSecurityPostureManagementHour";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The response containing the Cloud Security Posture Management usage for each hour for a given organization.
 */

export class UsageCloudSecurityPostureManagementResponse {
  /**
   * Get hourly usage for Cloud Security Posture Management.
   */
  "usage"?: Array<UsageCloudSecurityPostureManagementHour>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    usage: {
      baseName: "usage",
      type: "Array<UsageCloudSecurityPostureManagementHour>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UsageCloudSecurityPostureManagementResponse.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): UsageCloudSecurityPostureManagementResponse {
    const res = new UsageCloudSecurityPostureManagementResponse();

    res.usage = ObjectSerializer.deserialize(
      data.usage,
      "Array<UsageCloudSecurityPostureManagementHour>",
      ""
    );

    return res;
  }

  static serialize(
    data: UsageCloudSecurityPostureManagementResponse
  ): { [key: string]: any } {
    const attributeTypes = UsageCloudSecurityPostureManagementResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.usage = ObjectSerializer.serialize(
      data.usage,
      "Array<UsageCloudSecurityPostureManagementHour>",
      ""
    );

    return res;
  }

  public constructor() {}
}