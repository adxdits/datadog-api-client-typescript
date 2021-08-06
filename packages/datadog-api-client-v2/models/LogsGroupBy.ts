/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsAggregateSort } from "./LogsAggregateSort";
import { LogsGroupByHistogram } from "./LogsGroupByHistogram";
import { LogsGroupByMissing } from "./LogsGroupByMissing";
import { LogsGroupByTotal } from "./LogsGroupByTotal";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A group by rule
 */

export class LogsGroupBy {
  /**
   * The name of the facet to use (required)
   */
  "facet": string;
  "histogram"?: LogsGroupByHistogram;
  /**
   * The maximum buckets to return for this group by
   */
  "limit"?: number;
  "missing"?: LogsGroupByMissing;
  "sort"?: LogsAggregateSort;
  "total"?: LogsGroupByTotal;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    facet: {
      baseName: "facet",
      type: "string",
      format: "",
    },
    histogram: {
      baseName: "histogram",
      type: "LogsGroupByHistogram",
      format: "",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    missing: {
      baseName: "missing",
      type: "LogsGroupByMissing",
      format: "",
    },
    sort: {
      baseName: "sort",
      type: "LogsAggregateSort",
      format: "",
    },
    total: {
      baseName: "total",
      type: "LogsGroupByTotal",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsGroupBy.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsGroupBy {
    const res = new LogsGroupBy();

    if (data.facet === undefined) {
      throw new TypeError(
        "missing required attribute 'facet' on 'LogsGroupBy' object"
      );
    }
    res.facet = ObjectSerializer.deserialize(data.facet, "string", "");

    res.histogram = ObjectSerializer.deserialize(
      data.histogram,
      "LogsGroupByHistogram",
      ""
    );

    res.limit = ObjectSerializer.deserialize(data.limit, "number", "int64");

    res.missing = ObjectSerializer.deserialize(
      data.missing,
      "LogsGroupByMissing",
      ""
    );

    res.sort = ObjectSerializer.deserialize(data.sort, "LogsAggregateSort", "");

    res.total = ObjectSerializer.deserialize(
      data.total,
      "LogsGroupByTotal",
      ""
    );

    return res;
  }

  static serialize(data: LogsGroupBy): { [key: string]: any } {
    const attributeTypes = LogsGroupBy.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.facet === undefined) {
      throw new TypeError(
        "missing required attribute 'facet' on 'LogsGroupBy' object"
      );
    }
    res.facet = ObjectSerializer.serialize(data.facet, "string", "");

    res.histogram = ObjectSerializer.serialize(
      data.histogram,
      "LogsGroupByHistogram",
      ""
    );

    res.limit = ObjectSerializer.serialize(data.limit, "number", "int64");

    res.missing = ObjectSerializer.serialize(
      data.missing,
      "LogsGroupByMissing",
      ""
    );

    res.sort = ObjectSerializer.serialize(data.sort, "LogsAggregateSort", "");

    res.total = ObjectSerializer.serialize(data.total, "LogsGroupByTotal", "");

    return res;
  }

  public constructor() {}
}
