/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FormulaAndFunctionEventAggregation } from "./FormulaAndFunctionEventAggregation";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Compute options.
 */

export class FormulaAndFunctionEventQueryDefinitionCompute {
  "aggregation": FormulaAndFunctionEventAggregation;
  /**
   * A time interval in milliseconds.
   */
  "interval"?: number;
  /**
   * Measurable attribute to compute.
   */
  "metric"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    aggregation: {
      baseName: "aggregation",
      type: "FormulaAndFunctionEventAggregation",
      format: "",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return FormulaAndFunctionEventQueryDefinitionCompute.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): FormulaAndFunctionEventQueryDefinitionCompute {
    const res = new FormulaAndFunctionEventQueryDefinitionCompute();

    if (data.aggregation === undefined) {
      throw new TypeError(
        "missing required attribute 'aggregation' on 'FormulaAndFunctionEventQueryDefinitionCompute' object"
      );
    }
    if (
      [
        "count",
        "cardinality",
        "median",
        "pc75",
        "pc90",
        "pc95",
        "pc98",
        "pc99",
        "sum",
        "min",
        "max",
        "avg",
        undefined,
      ].includes(data.aggregation)
    ) {
      res.aggregation = data.aggregation;
    } else {
      const raw = new FormulaAndFunctionEventQueryDefinitionCompute();
      raw.unparsedObject = data;
      return raw;
    }

    res.interval = ObjectSerializer.deserialize(
      data.interval,
      "number",
      "int64"
    );

    res.metric = ObjectSerializer.deserialize(data.metric, "string", "");

    return res;
  }

  static serialize(
    data: FormulaAndFunctionEventQueryDefinitionCompute
  ): { [key: string]: any } {
    const attributeTypes = FormulaAndFunctionEventQueryDefinitionCompute.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.aggregation === undefined) {
      throw new TypeError(
        "missing required attribute 'aggregation' on 'FormulaAndFunctionEventQueryDefinitionCompute' object"
      );
    }
    if (
      [
        "count",
        "cardinality",
        "median",
        "pc75",
        "pc90",
        "pc95",
        "pc98",
        "pc99",
        "sum",
        "min",
        "max",
        "avg",
        undefined,
      ].includes(data.aggregation)
    ) {
      res.aggregation = data.aggregation;
    } else {
      throw TypeError(`invalid enum value ${data.aggregation} for aggregation`);
    }

    res.interval = ObjectSerializer.serialize(data.interval, "number", "int64");

    res.metric = ObjectSerializer.serialize(data.metric, "string", "");

    return res;
  }

  public constructor() {}
}
