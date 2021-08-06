/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Creator } from "./Creator";
import { SLOThreshold } from "./SLOThreshold";
import { SLOType } from "./SLOType";
import { ServiceLevelObjectiveQuery } from "./ServiceLevelObjectiveQuery";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A service level objective object includes a service level indicator, thresholds for one or more timeframes, and metadata (`name`, `description`, `tags`, etc.).
 */

export class SLOResponseData {
  /**
   * A list of SLO monitors IDs that reference this SLO. This field is returned only when `with_configured_alert_ids` parameter is true in query.
   */
  "configuredAlertIds"?: Array<number>;
  /**
   * Creation timestamp (UNIX time in seconds)  Always included in service level objective responses.
   */
  "createdAt"?: number;
  "creator"?: Creator;
  /**
   * A user-defined description of the service level objective.  Always included in service level objective responses (but may be `null`). Optional in create/update requests.
   */
  "description"?: string;
  /**
   * A list of (up to 20) monitor groups that narrow the scope of a monitor service level objective.  Included in service level objective responses if it is not empty. Optional in create/update requests for monitor service level objectives, but may only be used when then length of the `monitor_ids` field is one.
   */
  "groups"?: Array<string>;
  /**
   * A unique identifier for the service level objective object.  Always included in service level objective responses.
   */
  "id"?: string;
  /**
   * Modification timestamp (UNIX time in seconds)  Always included in service level objective responses.
   */
  "modifiedAt"?: number;
  /**
   * A list of monitor ids that defines the scope of a monitor service level objective. **Required if type is `monitor`**.
   */
  "monitorIds"?: Array<number>;
  /**
   * The union of monitor tags for all monitors referenced by the `monitor_ids` field. Always included in service level objective responses for monitor service level objectives (but may be empty). Ignored in create/update requests. Does not affect which monitors are included in the service level objective (that is determined entirely by the `monitor_ids` field).
   */
  "monitorTags"?: Array<string>;
  /**
   * The name of the service level objective object.
   */
  "name"?: string;
  "query"?: ServiceLevelObjectiveQuery;
  /**
   * A list of tags associated with this service level objective. Always included in service level objective responses (but may be empty). Optional in create/update requests.
   */
  "tags"?: Array<string>;
  /**
   * The thresholds (timeframes and associated targets) for this service level objective object.
   */
  "thresholds"?: Array<SLOThreshold>;
  "type"?: SLOType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    configuredAlertIds: {
      baseName: "configured_alert_ids",
      type: "Array<number>",
      format: "int64",
    },
    createdAt: {
      baseName: "created_at",
      type: "number",
      format: "int64",
    },
    creator: {
      baseName: "creator",
      type: "Creator",
      format: "",
    },
    description: {
      baseName: "description",
      type: "string",
      format: "",
    },
    groups: {
      baseName: "groups",
      type: "Array<string>",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "number",
      format: "int64",
    },
    monitorIds: {
      baseName: "monitor_ids",
      type: "Array<number>",
      format: "int64",
    },
    monitorTags: {
      baseName: "monitor_tags",
      type: "Array<string>",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    query: {
      baseName: "query",
      type: "ServiceLevelObjectiveQuery",
      format: "",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      format: "",
    },
    thresholds: {
      baseName: "thresholds",
      type: "Array<SLOThreshold>",
      format: "",
    },
    type: {
      baseName: "type",
      type: "SLOType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SLOResponseData.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SLOResponseData {
    const res = new SLOResponseData();

    res.configuredAlertIds = ObjectSerializer.deserialize(
      data.configured_alert_ids,
      "Array<number>",
      "int64"
    );

    res.createdAt = ObjectSerializer.deserialize(
      data.created_at,
      "number",
      "int64"
    );

    res.creator = ObjectSerializer.deserialize(data.creator, "Creator", "");

    res.description = ObjectSerializer.deserialize(
      data.description,
      "string",
      ""
    );

    res.groups = ObjectSerializer.deserialize(data.groups, "Array<string>", "");

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    res.modifiedAt = ObjectSerializer.deserialize(
      data.modified_at,
      "number",
      "int64"
    );

    res.monitorIds = ObjectSerializer.deserialize(
      data.monitor_ids,
      "Array<number>",
      "int64"
    );

    res.monitorTags = ObjectSerializer.deserialize(
      data.monitor_tags,
      "Array<string>",
      ""
    );

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.query = ObjectSerializer.deserialize(
      data.query,
      "ServiceLevelObjectiveQuery",
      ""
    );

    res.tags = ObjectSerializer.deserialize(data.tags, "Array<string>", "");

    res.thresholds = ObjectSerializer.deserialize(
      data.thresholds,
      "Array<SLOThreshold>",
      ""
    );

    if (["metric", "monitor", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new SLOResponseData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: SLOResponseData): { [key: string]: any } {
    const attributeTypes = SLOResponseData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.configured_alert_ids = ObjectSerializer.serialize(
      data.configuredAlertIds,
      "Array<number>",
      "int64"
    );

    res.created_at = ObjectSerializer.serialize(
      data.createdAt,
      "number",
      "int64"
    );

    res.creator = ObjectSerializer.serialize(data.creator, "Creator", "");

    res.description = ObjectSerializer.serialize(
      data.description,
      "string",
      ""
    );

    res.groups = ObjectSerializer.serialize(data.groups, "Array<string>", "");

    res.id = ObjectSerializer.serialize(data.id, "string", "");

    res.modified_at = ObjectSerializer.serialize(
      data.modifiedAt,
      "number",
      "int64"
    );

    res.monitor_ids = ObjectSerializer.serialize(
      data.monitorIds,
      "Array<number>",
      "int64"
    );

    res.monitor_tags = ObjectSerializer.serialize(
      data.monitorTags,
      "Array<string>",
      ""
    );

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.query = ObjectSerializer.serialize(
      data.query,
      "ServiceLevelObjectiveQuery",
      ""
    );

    res.tags = ObjectSerializer.serialize(data.tags, "Array<string>", "");

    res.thresholds = ObjectSerializer.serialize(
      data.thresholds,
      "Array<SLOThreshold>",
      ""
    );

    if (["metric", "monitor", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
