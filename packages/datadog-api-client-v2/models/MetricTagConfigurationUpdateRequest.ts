/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricTagConfigurationUpdateData } from "./MetricTagConfigurationUpdateData";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Request object that includes the metric that you would like to edit the tag configuration on.
 */

export class MetricTagConfigurationUpdateRequest {
  "data": MetricTagConfigurationUpdateData;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "MetricTagConfigurationUpdateData",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MetricTagConfigurationUpdateRequest.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): MetricTagConfigurationUpdateRequest {
    const res = new MetricTagConfigurationUpdateRequest();

    if (data.data === undefined) {
      throw new TypeError(
        "missing required attribute 'data' on 'MetricTagConfigurationUpdateRequest' object"
      );
    }
    res.data = ObjectSerializer.deserialize(
      data.data,
      "MetricTagConfigurationUpdateData",
      ""
    );

    return res;
  }

  static serialize(
    data: MetricTagConfigurationUpdateRequest
  ): { [key: string]: any } {
    const attributeTypes = MetricTagConfigurationUpdateRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.data === undefined) {
      throw new TypeError(
        "missing required attribute 'data' on 'MetricTagConfigurationUpdateRequest' object"
      );
    }
    res.data = ObjectSerializer.serialize(
      data.data,
      "MetricTagConfigurationUpdateData",
      ""
    );

    return res;
  }

  public constructor() {}
}
