/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object containing indexed logs usage aggregated across organizations and months for a retention period.
 */

export class LogsRetentionAggSumUsage {
  /**
   * Total indexed logs for this retention period.
   */
  "logsIndexedLogsUsageAggSum"?: number;
  /**
   * Live indexed logs for this retention period.
   */
  "logsLiveIndexedLogsUsageAggSum"?: number;
  /**
   * Rehydrated indexed logs for this retention period.
   */
  "logsRehydratedIndexedLogsUsageAggSum"?: number;
  /**
   * The retention period in days or \"custom\" for all custom retention periods.
   */
  "retention"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    logsIndexedLogsUsageAggSum: {
      baseName: "logs_indexed_logs_usage_agg_sum",
      type: "number",
      format: "int64",
    },
    logsLiveIndexedLogsUsageAggSum: {
      baseName: "logs_live_indexed_logs_usage_agg_sum",
      type: "number",
      format: "int64",
    },
    logsRehydratedIndexedLogsUsageAggSum: {
      baseName: "logs_rehydrated_indexed_logs_usage_agg_sum",
      type: "number",
      format: "int64",
    },
    retention: {
      baseName: "retention",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsRetentionAggSumUsage.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsRetentionAggSumUsage {
    const res = new LogsRetentionAggSumUsage();

    res.logsIndexedLogsUsageAggSum = ObjectSerializer.deserialize(
      data.logs_indexed_logs_usage_agg_sum,
      "number",
      "int64"
    );

    res.logsLiveIndexedLogsUsageAggSum = ObjectSerializer.deserialize(
      data.logs_live_indexed_logs_usage_agg_sum,
      "number",
      "int64"
    );

    res.logsRehydratedIndexedLogsUsageAggSum = ObjectSerializer.deserialize(
      data.logs_rehydrated_indexed_logs_usage_agg_sum,
      "number",
      "int64"
    );

    res.retention = ObjectSerializer.deserialize(data.retention, "string", "");

    return res;
  }

  static serialize(data: LogsRetentionAggSumUsage): { [key: string]: any } {
    const attributeTypes = LogsRetentionAggSumUsage.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.logs_indexed_logs_usage_agg_sum = ObjectSerializer.serialize(
      data.logsIndexedLogsUsageAggSum,
      "number",
      "int64"
    );

    res.logs_live_indexed_logs_usage_agg_sum = ObjectSerializer.serialize(
      data.logsLiveIndexedLogsUsageAggSum,
      "number",
      "int64"
    );

    res.logs_rehydrated_indexed_logs_usage_agg_sum = ObjectSerializer.serialize(
      data.logsRehydratedIndexedLogsUsageAggSum,
      "number",
      "int64"
    );

    res.retention = ObjectSerializer.serialize(data.retention, "string", "");

    return res;
  }

  public constructor() {}
}
