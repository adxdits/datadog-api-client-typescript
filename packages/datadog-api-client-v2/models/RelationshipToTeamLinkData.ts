/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamLinkType } from "./TeamLinkType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationship between a link and a team
 */
export class RelationshipToTeamLinkData {
  /**
   * The team link's identifier
   */
  "id": string;
  /**
   * Team link type
   */
  "type": TeamLinkType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamLinkType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToTeamLinkData.attributeTypeMap;
  }

  public constructor() {}
}