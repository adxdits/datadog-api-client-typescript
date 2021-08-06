/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Pagination } from "./Pagination";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object describing meta attributes of response.
 */

export class ResponseMetaAttributes {
  "page"?: Pagination;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    page: {
      baseName: "page",
      type: "Pagination",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ResponseMetaAttributes.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): ResponseMetaAttributes {
    const res = new ResponseMetaAttributes();

    res.page = ObjectSerializer.deserialize(data.page, "Pagination", "");

    return res;
  }

  static serialize(data: ResponseMetaAttributes): { [key: string]: any } {
    const attributeTypes = ResponseMetaAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.page = ObjectSerializer.serialize(data.page, "Pagination", "");

    return res;
  }

  public constructor() {}
}
