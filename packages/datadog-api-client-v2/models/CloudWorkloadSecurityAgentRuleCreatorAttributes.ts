/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The attributes of the user who created the Agent rule.
 */

export class CloudWorkloadSecurityAgentRuleCreatorAttributes {
  /**
   * The handle of the user.
   */
  "handle"?: string;
  /**
   * The name of the user.
   */
  "name"?: string;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    handle: {
      baseName: "handle",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudWorkloadSecurityAgentRuleCreatorAttributes.attributeTypeMap;
  }

  public constructor() {}
}