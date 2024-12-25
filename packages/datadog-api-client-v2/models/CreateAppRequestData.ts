/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateAppRequestDataAttributes } from "./CreateAppRequestDataAttributes";
import { CreateAppRequestDataType } from "./CreateAppRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `CreateAppRequestData` object.
 */
export class CreateAppRequestData {
  /**
   * The definition of `CreateAppRequestDataAttributes` object.
   */
  "attributes"?: CreateAppRequestDataAttributes;
  /**
   * The definition of `CreateAppRequestDataType` object.
   */
  "type": CreateAppRequestDataType;

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
    attributes: {
      baseName: "attributes",
      type: "CreateAppRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "CreateAppRequestDataType",
      required: true,
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
    return CreateAppRequestData.attributeTypeMap;
  }

  public constructor() {}
}