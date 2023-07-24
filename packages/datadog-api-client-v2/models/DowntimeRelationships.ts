/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeRelationshipsCreatedBy } from "./DowntimeRelationshipsCreatedBy";
import { DowntimeRelationshipsMonitor } from "./DowntimeRelationshipsMonitor";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * All relationships associated with downtime.
 */
export class DowntimeRelationships {
  /**
   * The user who created the downtime.
   */
  "createdBy"?: DowntimeRelationshipsCreatedBy;
  /**
   * The monitor identified by the downtime.
   */
  "monitor"?: DowntimeRelationshipsMonitor;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    createdBy: {
      baseName: "created_by",
      type: "DowntimeRelationshipsCreatedBy",
    },
    monitor: {
      baseName: "monitor",
      type: "DowntimeRelationshipsMonitor",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DowntimeRelationships.attributeTypeMap;
  }

  public constructor() {}
}