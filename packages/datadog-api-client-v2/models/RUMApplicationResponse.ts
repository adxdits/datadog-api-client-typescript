/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMApplication } from "./RUMApplication";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * RUM application response.
 */
export class RUMApplicationResponse {
  /**
   * RUM application.
   */
  "data"?: RUMApplication;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "RUMApplication",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RUMApplicationResponse.attributeTypeMap;
  }

  public constructor() {}
}