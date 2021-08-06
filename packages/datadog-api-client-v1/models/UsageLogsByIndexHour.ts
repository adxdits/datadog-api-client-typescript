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
 * Number of indexed logs for each hour and index for a given organization.
 */

export class UsageLogsByIndexHour {
  /**
   * The total number of indexed logs for the queried hour.
   */
  "eventCount"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * The index ID for this usage.
   */
  "indexId"?: string;
  /**
   * The user specified name for this index ID.
   */
  "indexName"?: string;
  /**
   * The retention period (in days) for this index ID.
   */
  "retention"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    eventCount: {
      baseName: "event_count",
      type: "number",
      format: "int64",
    },
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    indexId: {
      baseName: "index_id",
      type: "string",
      format: "",
    },
    indexName: {
      baseName: "index_name",
      type: "string",
      format: "",
    },
    retention: {
      baseName: "retention",
      type: "number",
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageLogsByIndexHour.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageLogsByIndexHour {
    const res = new UsageLogsByIndexHour();

    res.eventCount = ObjectSerializer.deserialize(
      data.event_count,
      "number",
      "int64"
    );

    res.hour = ObjectSerializer.deserialize(data.hour, "Date", "date-time");

    res.indexId = ObjectSerializer.deserialize(data.index_id, "string", "");

    res.indexName = ObjectSerializer.deserialize(data.index_name, "string", "");

    res.retention = ObjectSerializer.deserialize(
      data.retention,
      "number",
      "int64"
    );

    return res;
  }

  static serialize(data: UsageLogsByIndexHour): { [key: string]: any } {
    const attributeTypes = UsageLogsByIndexHour.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.event_count = ObjectSerializer.serialize(
      data.eventCount,
      "number",
      "int64"
    );

    res.hour = ObjectSerializer.serialize(data.hour, "Date", "date-time");

    res.index_id = ObjectSerializer.serialize(data.indexId, "string", "");

    res.index_name = ObjectSerializer.serialize(data.indexName, "string", "");

    res.retention = ObjectSerializer.serialize(
      data.retention,
      "number",
      "int64"
    );

    return res;
  }

  public constructor() {}
}
