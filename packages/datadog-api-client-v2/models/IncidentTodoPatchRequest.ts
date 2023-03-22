/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTodoPatchData } from "./IncidentTodoPatchData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Patch request for an incident todo.
 */
export class IncidentTodoPatchRequest {
  /**
   * Incident todo data for a patch request.
   */
  "data": IncidentTodoPatchData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "IncidentTodoPatchData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentTodoPatchRequest.attributeTypeMap;
  }

  public constructor() {}
}