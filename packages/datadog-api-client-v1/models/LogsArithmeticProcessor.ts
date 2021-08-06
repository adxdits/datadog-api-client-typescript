/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsArithmeticProcessorType } from "./LogsArithmeticProcessorType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Use the Arithmetic Processor to add a new attribute (without spaces or special characters in the new attribute name) to a log with the result of the provided formula. This enables you to remap different time attributes with different units into a single attribute, or to compute operations on attributes within the same log.  The formula can use parentheses and the basic arithmetic operators `-`, `+`, `*`, `/`.  By default, the calculation is skipped if an attribute is missing. Select “Replace missing attribute by 0” to automatically populate missing attribute values with 0 to ensure that the calculation is done. An attribute is missing if it is not found in the log attributes, or if it cannot be converted to a number.  *Notes*:  - The operator `-` needs to be space split in the formula as it can also be contained in attribute names. - If the target attribute already exists, it is overwritten by the result of the formula. - Results are rounded up to the 9th decimal. For example, if the result of the formula is `0.1234567891`,   the actual value stored for the attribute is `0.123456789`. - If you need to scale a unit of measure,   see [Scale Filter](https://docs.datadoghq.com/logs/log_configuration/parsing/?tab=filter#matcher-and-filter).
 */

export class LogsArithmeticProcessor {
  /**
   * Arithmetic operation between one or more log attributes.
   */
  "expression": string;
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * If `true`, it replaces all missing attributes of expression by `0`, `false` skip the operation if an attribute is missing.
   */
  "isReplaceMissing"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Name of the attribute that contains the result of the arithmetic operation.
   */
  "target": string;
  "type": LogsArithmeticProcessorType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    expression: {
      baseName: "expression",
      type: "string",
      format: "",
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
      format: "",
    },
    isReplaceMissing: {
      baseName: "is_replace_missing",
      type: "boolean",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    target: {
      baseName: "target",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "LogsArithmeticProcessorType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsArithmeticProcessor.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsArithmeticProcessor {
    const res = new LogsArithmeticProcessor();

    if (data.expression === undefined) {
      throw new TypeError(
        "missing required attribute 'expression' on 'LogsArithmeticProcessor' object"
      );
    }
    res.expression = ObjectSerializer.deserialize(
      data.expression,
      "string",
      ""
    );

    res.isEnabled = ObjectSerializer.deserialize(
      data.is_enabled,
      "boolean",
      ""
    );

    res.isReplaceMissing = ObjectSerializer.deserialize(
      data.is_replace_missing,
      "boolean",
      ""
    );

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    if (data.target === undefined) {
      throw new TypeError(
        "missing required attribute 'target' on 'LogsArithmeticProcessor' object"
      );
    }
    res.target = ObjectSerializer.deserialize(data.target, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsArithmeticProcessor' object"
      );
    }
    if (["arithmetic-processor", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new LogsArithmeticProcessor();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: LogsArithmeticProcessor): { [key: string]: any } {
    const attributeTypes = LogsArithmeticProcessor.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.expression === undefined) {
      throw new TypeError(
        "missing required attribute 'expression' on 'LogsArithmeticProcessor' object"
      );
    }
    res.expression = ObjectSerializer.serialize(data.expression, "string", "");

    res.is_enabled = ObjectSerializer.serialize(data.isEnabled, "boolean", "");

    res.is_replace_missing = ObjectSerializer.serialize(
      data.isReplaceMissing,
      "boolean",
      ""
    );

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    if (data.target === undefined) {
      throw new TypeError(
        "missing required attribute 'target' on 'LogsArithmeticProcessor' object"
      );
    }
    res.target = ObjectSerializer.serialize(data.target, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsArithmeticProcessor' object"
      );
    }
    if (["arithmetic-processor", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
