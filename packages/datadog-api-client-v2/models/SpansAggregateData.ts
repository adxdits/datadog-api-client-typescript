/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansAggregateRequestAttributes } from "./SpansAggregateRequestAttributes";
import { SpansAggregateRequestType } from "./SpansAggregateRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object containing the query content.
 */
export class SpansAggregateData {
  /**
   * The object containing all the query parameters.
   */
  "attributes"?: SpansAggregateRequestAttributes;
  /**
   * The type of resource. The value should always be aggregate_request.
   */
  "type"?: SpansAggregateRequestType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "SpansAggregateRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "SpansAggregateRequestType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SpansAggregateData.attributeTypeMap;
  }

  public constructor() {}
}
