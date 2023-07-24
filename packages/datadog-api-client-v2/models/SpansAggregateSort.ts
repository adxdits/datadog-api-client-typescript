/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansAggregateSortType } from "./SpansAggregateSortType";
import { SpansAggregationFunction } from "./SpansAggregationFunction";
import { SpansSortOrder } from "./SpansSortOrder";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A sort rule.
 */
export class SpansAggregateSort {
  /**
   * An aggregation function.
   */
  "aggregation"?: SpansAggregationFunction;
  /**
   * The metric to sort by (only used for `type=measure`).
   */
  "metric"?: string;
  /**
   * The order to use, ascending or descending.
   */
  "order"?: SpansSortOrder;
  /**
   * The type of sorting algorithm.
   */
  "type"?: SpansAggregateSortType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "SpansAggregationFunction",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    order: {
      baseName: "order",
      type: "SpansSortOrder",
    },
    type: {
      baseName: "type",
      type: "SpansAggregateSortType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SpansAggregateSort.attributeTypeMap;
  }

  public constructor() {}
}