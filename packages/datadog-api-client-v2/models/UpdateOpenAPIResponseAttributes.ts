/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAPIEndpoint } from "./OpenAPIEndpoint";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for `UpdateOpenAPI`.
 */
export class UpdateOpenAPIResponseAttributes {
  /**
   * List of endpoints which couldn't be parsed.
   */
  "failedEndpoints"?: Array<OpenAPIEndpoint>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    failedEndpoints: {
      baseName: "failed_endpoints",
      type: "Array<OpenAPIEndpoint>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UpdateOpenAPIResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}