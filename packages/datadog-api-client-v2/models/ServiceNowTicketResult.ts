/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * ServiceNow ticket information
 */
export class ServiceNowTicketResult {
  /**
   * Link to the Incident created on ServiceNow
   */
  "sysTargetLink"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    sysTargetLink: {
      baseName: "sys_target_link",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceNowTicketResult.attributeTypeMap;
  }

  public constructor() {}
}