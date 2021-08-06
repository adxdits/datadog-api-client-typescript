/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ScatterPlotRequest } from "./ScatterPlotRequest";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Widget definition.
 */

export class ScatterPlotWidgetDefinitionRequests {
  "x": ScatterPlotRequest;
  "y": ScatterPlotRequest;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    x: {
      baseName: "x",
      type: "ScatterPlotRequest",
      format: "",
    },
    y: {
      baseName: "y",
      type: "ScatterPlotRequest",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ScatterPlotWidgetDefinitionRequests.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): ScatterPlotWidgetDefinitionRequests {
    const res = new ScatterPlotWidgetDefinitionRequests();

    if (data.x === undefined) {
      throw new TypeError(
        "missing required attribute 'x' on 'ScatterPlotWidgetDefinitionRequests' object"
      );
    }
    res.x = ObjectSerializer.deserialize(data.x, "ScatterPlotRequest", "");

    if (data.y === undefined) {
      throw new TypeError(
        "missing required attribute 'y' on 'ScatterPlotWidgetDefinitionRequests' object"
      );
    }
    res.y = ObjectSerializer.deserialize(data.y, "ScatterPlotRequest", "");

    return res;
  }

  static serialize(
    data: ScatterPlotWidgetDefinitionRequests
  ): { [key: string]: any } {
    const attributeTypes = ScatterPlotWidgetDefinitionRequests.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.x === undefined) {
      throw new TypeError(
        "missing required attribute 'x' on 'ScatterPlotWidgetDefinitionRequests' object"
      );
    }
    res.x = ObjectSerializer.serialize(data.x, "ScatterPlotRequest", "");

    if (data.y === undefined) {
      throw new TypeError(
        "missing required attribute 'y' on 'ScatterPlotWidgetDefinitionRequests' object"
      );
    }
    res.y = ObjectSerializer.serialize(data.y, "ScatterPlotRequest", "");

    return res;
  }

  public constructor() {}
}
