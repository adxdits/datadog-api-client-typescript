/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FindingsErrorItem } from "./FindingsErrorItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * API error response.
 */
export class FindingsErrorResponse {
  /**
   * A list of errors.
   */
  "errors": Array<FindingsErrorItem>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    errors: {
      baseName: "errors",
      type: "Array<FindingsErrorItem>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FindingsErrorResponse.attributeTypeMap;
  }

  public constructor() {}
}