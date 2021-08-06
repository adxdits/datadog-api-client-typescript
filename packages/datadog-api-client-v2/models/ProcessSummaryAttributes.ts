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
 * Attributes for a process summary.
 */

export class ProcessSummaryAttributes {
  /**
   * Process command line.
   */
  "cmdline"?: string;
  /**
   * Host running the process.
   */
  "host"?: string;
  /**
   * Process ID.
   */
  "pid"?: number;
  /**
   * Parent process ID.
   */
  "ppid"?: number;
  /**
   * Time the process was started.
   */
  "start"?: string;
  /**
   * List of tags associated with the process.
   */
  "tags"?: Array<string>;
  /**
   * Time the process was seen.
   */
  "timestamp"?: string;
  /**
   * Process owner.
   */
  "user"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    cmdline: {
      baseName: "cmdline",
      type: "string",
      format: "",
    },
    host: {
      baseName: "host",
      type: "string",
      format: "",
    },
    pid: {
      baseName: "pid",
      type: "number",
      format: "int64",
    },
    ppid: {
      baseName: "ppid",
      type: "number",
      format: "int64",
    },
    start: {
      baseName: "start",
      type: "string",
      format: "",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      format: "",
    },
    timestamp: {
      baseName: "timestamp",
      type: "string",
      format: "",
    },
    user: {
      baseName: "user",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ProcessSummaryAttributes.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): ProcessSummaryAttributes {
    const res = new ProcessSummaryAttributes();

    res.cmdline = ObjectSerializer.deserialize(data.cmdline, "string", "");

    res.host = ObjectSerializer.deserialize(data.host, "string", "");

    res.pid = ObjectSerializer.deserialize(data.pid, "number", "int64");

    res.ppid = ObjectSerializer.deserialize(data.ppid, "number", "int64");

    res.start = ObjectSerializer.deserialize(data.start, "string", "");

    res.tags = ObjectSerializer.deserialize(data.tags, "Array<string>", "");

    res.timestamp = ObjectSerializer.deserialize(data.timestamp, "string", "");

    res.user = ObjectSerializer.deserialize(data.user, "string", "");

    return res;
  }

  static serialize(data: ProcessSummaryAttributes): { [key: string]: any } {
    const attributeTypes = ProcessSummaryAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.cmdline = ObjectSerializer.serialize(data.cmdline, "string", "");

    res.host = ObjectSerializer.serialize(data.host, "string", "");

    res.pid = ObjectSerializer.serialize(data.pid, "number", "int64");

    res.ppid = ObjectSerializer.serialize(data.ppid, "number", "int64");

    res.start = ObjectSerializer.serialize(data.start, "string", "");

    res.tags = ObjectSerializer.serialize(data.tags, "Array<string>", "");

    res.timestamp = ObjectSerializer.serialize(data.timestamp, "string", "");

    res.user = ObjectSerializer.serialize(data.user, "string", "");

    return res;
  }

  public constructor() {}
}
