/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserTeam } from "./UserTeam";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team memberships response
 */
export class UserTeamsResponse {
  /**
   * Team memberships response data
   */
  "data"?: Array<UserTeam>;

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
      type: "Array<UserTeam>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserTeamsResponse.attributeTypeMap;
  }

  public constructor() {}
}