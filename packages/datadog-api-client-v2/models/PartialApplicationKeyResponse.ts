/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApplicationKeyResponseIncludedItem } from "./ApplicationKeyResponseIncludedItem";
import { PartialApplicationKey } from "./PartialApplicationKey";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response for retrieving a partial application key.
 */

export class PartialApplicationKeyResponse {
  "data"?: PartialApplicationKey;
  /**
   * Array of objects related to the application key.
   */
  "included"?: Array<ApplicationKeyResponseIncludedItem>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "PartialApplicationKey",
      format: "",
    },
    included: {
      baseName: "included",
      type: "Array<ApplicationKeyResponseIncludedItem>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return PartialApplicationKeyResponse.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): PartialApplicationKeyResponse {
    const res = new PartialApplicationKeyResponse();

    res.data = ObjectSerializer.deserialize(
      data.data,
      "PartialApplicationKey",
      ""
    );

    res.included = ObjectSerializer.deserialize(
      data.included,
      "Array<ApplicationKeyResponseIncludedItem>",
      ""
    );

    return res;
  }

  static serialize(
    data: PartialApplicationKeyResponse
  ): { [key: string]: any } {
    const attributeTypes = PartialApplicationKeyResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.data = ObjectSerializer.serialize(
      data.data,
      "PartialApplicationKey",
      ""
    );

    res.included = ObjectSerializer.serialize(
      data.included,
      "Array<ApplicationKeyResponseIncludedItem>",
      ""
    );

    return res;
  }

  public constructor() {}
}
