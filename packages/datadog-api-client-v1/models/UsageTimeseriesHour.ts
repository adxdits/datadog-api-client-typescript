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
 * The hourly usage of timeseries.
 */

export class UsageTimeseriesHour {
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the number of custom metrics that are inputs for aggregations (metric configured is custom).
   */
  "numCustomInputTimeseries"?: number;
  /**
   * Contains the number of custom metrics that are outputs for aggregations (metric configured is custom).
   */
  "numCustomOutputTimeseries"?: number;
  /**
   * Contains the number of non-aggregation custom metrics.
   */
  "numCustomTimeseries"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    numCustomInputTimeseries: {
      baseName: "num_custom_input_timeseries",
      type: "number",
      format: "int64",
    },
    numCustomOutputTimeseries: {
      baseName: "num_custom_output_timeseries",
      type: "number",
      format: "int64",
    },
    numCustomTimeseries: {
      baseName: "num_custom_timeseries",
      type: "number",
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageTimeseriesHour.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageTimeseriesHour {
    const res = new UsageTimeseriesHour();

    res.hour = ObjectSerializer.deserialize(data.hour, "Date", "date-time");

    res.numCustomInputTimeseries = ObjectSerializer.deserialize(
      data.num_custom_input_timeseries,
      "number",
      "int64"
    );

    res.numCustomOutputTimeseries = ObjectSerializer.deserialize(
      data.num_custom_output_timeseries,
      "number",
      "int64"
    );

    res.numCustomTimeseries = ObjectSerializer.deserialize(
      data.num_custom_timeseries,
      "number",
      "int64"
    );

    return res;
  }

  static serialize(data: UsageTimeseriesHour): { [key: string]: any } {
    const attributeTypes = UsageTimeseriesHour.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.hour = ObjectSerializer.serialize(data.hour, "Date", "date-time");

    res.num_custom_input_timeseries = ObjectSerializer.serialize(
      data.numCustomInputTimeseries,
      "number",
      "int64"
    );

    res.num_custom_output_timeseries = ObjectSerializer.serialize(
      data.numCustomOutputTimeseries,
      "number",
      "int64"
    );

    res.num_custom_timeseries = ObjectSerializer.serialize(
      data.numCustomTimeseries,
      "number",
      "int64"
    );

    return res;
  }

  public constructor() {}
}
