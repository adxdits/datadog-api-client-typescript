/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Returns the AWS account associated with this integration.
 */

export class AWSAccount {
  /**
   * Your AWS access key ID. Only required if your AWS account is a GovCloud or China account.
   */
  "accessKeyId"?: string;
  /**
   * Your AWS Account ID without dashes.
   */
  "accountId"?: string;
  /**
   * An object, (in the form `{\"namespace1\":true/false, \"namespace2\":true/false}`), that enables or disables metric collection for specific AWS namespaces for this AWS account only.
   */
  "accountSpecificNamespaceRules"?: { [key: string]: boolean };
  /**
   * An array of AWS regions to exclude from metrics collection.
   */
  "excludedRegions"?: Array<string>;
  /**
   * The array of EC2 tags (in the form `key:value`) defines a filter that Datadog uses when collecting metrics from EC2. Wildcards, such as `?` (for single characters) and `*` (for multiple characters) can also be used. Only hosts that match one of the defined tags will be imported into Datadog. The rest will be ignored. Host matching a given tag can also be excluded by adding `!` before the tag. For example, `env:production,instance-type:c1.*,!region:us-east-1`
   */
  "filterTags"?: Array<string>;
  /**
   * Array of tags (in the form `key:value`) to add to all hosts and metrics reporting through this integration.
   */
  "hostTags"?: Array<string>;
  /**
   * Your Datadog role delegation name.
   */
  "roleName"?: string;
  /**
   * Your AWS secret access key. Only required if your AWS account is a GovCloud or China account.
   */
  "secretAccessKey"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    accessKeyId: {
      baseName: "access_key_id",
      type: "string",
      format: "",
    },
    accountId: {
      baseName: "account_id",
      type: "string",
      format: "",
    },
    accountSpecificNamespaceRules: {
      baseName: "account_specific_namespace_rules",
      type: "{ [key: string]: boolean; }",
      format: "",
    },
    excludedRegions: {
      baseName: "excluded_regions",
      type: "Array<string>",
      format: "",
    },
    filterTags: {
      baseName: "filter_tags",
      type: "Array<string>",
      format: "",
    },
    hostTags: {
      baseName: "host_tags",
      type: "Array<string>",
      format: "",
    },
    roleName: {
      baseName: "role_name",
      type: "string",
      format: "",
    },
    secretAccessKey: {
      baseName: "secret_access_key",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return AWSAccount.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): AWSAccount {
    const res = new AWSAccount();

    res.accessKeyId = ObjectSerializer.deserialize(
      data.access_key_id,
      "string",
      ""
    );

    res.accountId = ObjectSerializer.deserialize(data.account_id, "string", "");

    res.accountSpecificNamespaceRules = ObjectSerializer.deserialize(
      data.account_specific_namespace_rules,
      "{ [key: string]: boolean; }",
      ""
    );

    res.excludedRegions = ObjectSerializer.deserialize(
      data.excluded_regions,
      "Array<string>",
      ""
    );

    res.filterTags = ObjectSerializer.deserialize(
      data.filter_tags,
      "Array<string>",
      ""
    );

    res.hostTags = ObjectSerializer.deserialize(
      data.host_tags,
      "Array<string>",
      ""
    );

    res.roleName = ObjectSerializer.deserialize(data.role_name, "string", "");

    res.secretAccessKey = ObjectSerializer.deserialize(
      data.secret_access_key,
      "string",
      ""
    );

    return res;
  }

  static serialize(data: AWSAccount): { [key: string]: any } {
    const attributeTypes = AWSAccount.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.access_key_id = ObjectSerializer.serialize(
      data.accessKeyId,
      "string",
      ""
    );

    res.account_id = ObjectSerializer.serialize(data.accountId, "string", "");

    res.account_specific_namespace_rules = ObjectSerializer.serialize(
      data.accountSpecificNamespaceRules,
      "{ [key: string]: boolean; }",
      ""
    );

    res.excluded_regions = ObjectSerializer.serialize(
      data.excludedRegions,
      "Array<string>",
      ""
    );

    res.filter_tags = ObjectSerializer.serialize(
      data.filterTags,
      "Array<string>",
      ""
    );

    res.host_tags = ObjectSerializer.serialize(
      data.hostTags,
      "Array<string>",
      ""
    );

    res.role_name = ObjectSerializer.serialize(data.roleName, "string", "");

    res.secret_access_key = ObjectSerializer.serialize(
      data.secretAccessKey,
      "string",
      ""
    );

    return res;
  }

  public constructor() {}
}
