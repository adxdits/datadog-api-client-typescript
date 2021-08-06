/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMessageRemapperType } from "./LogsMessageRemapperType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The message is a key attribute in Datadog. It is displayed in the message column of the Log Explorer and you can do full string search on it. Use this Processor to define one or more attributes as the official log message.  **Note:** If multiple log message remapper processors can be applied to a given log, only the first one (according to the pipeline order) is taken into account.
 */

export class LogsMessageRemapper {
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Array of source attributes.
   */
  "sources": Array<string>;
  "type": LogsMessageRemapperType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
      format: "",
    },
    type: {
      baseName: "type",
      type: "LogsMessageRemapperType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsMessageRemapper.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsMessageRemapper {
    const res = new LogsMessageRemapper();

    res.isEnabled = ObjectSerializer.deserialize(
      data.is_enabled,
      "boolean",
      ""
    );

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    if (data.sources === undefined) {
      throw new TypeError(
        "missing required attribute 'sources' on 'LogsMessageRemapper' object"
      );
    }
    res.sources = ObjectSerializer.deserialize(
      data.sources,
      "Array<string>",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsMessageRemapper' object"
      );
    }
    if (["message-remapper", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new LogsMessageRemapper();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: LogsMessageRemapper): { [key: string]: any } {
    const attributeTypes = LogsMessageRemapper.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.is_enabled = ObjectSerializer.serialize(data.isEnabled, "boolean", "");

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    if (data.sources === undefined) {
      throw new TypeError(
        "missing required attribute 'sources' on 'LogsMessageRemapper' object"
      );
    }
    res.sources = ObjectSerializer.serialize(data.sources, "Array<string>", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsMessageRemapper' object"
      );
    }
    if (["message-remapper", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
