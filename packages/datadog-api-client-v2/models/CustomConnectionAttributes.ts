/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomConnectionAttributesOnPremRunner } from "./CustomConnectionAttributesOnPremRunner";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `CustomConnectionAttributes` object.
 */
export class CustomConnectionAttributes {
  /**
   * The `attributes` `name`.
   */
  "name"?: string;
  /**
   * The definition of `CustomConnectionAttributesOnPremRunner` object.
   */
  "onPremRunner"?: CustomConnectionAttributesOnPremRunner;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
    },
    onPremRunner: {
      baseName: "onPremRunner",
      type: "CustomConnectionAttributesOnPremRunner",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomConnectionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
