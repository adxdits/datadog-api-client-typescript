/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionV2Dot2Contact } from "./ServiceDefinitionV2Dot2Contact";
import { ServiceDefinitionV2Dot2Integrations } from "./ServiceDefinitionV2Dot2Integrations";
import { ServiceDefinitionV2Dot2Link } from "./ServiceDefinitionV2Dot2Link";
import { ServiceDefinitionV2Dot2Version } from "./ServiceDefinitionV2Dot2Version";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Service definition v2.2 for providing service metadata and integrations.
 */
export class ServiceDefinitionV2Dot2 {
  /**
   * Identifier for a group of related services serving a product feature, which the service is a part of.
   */
  "application"?: string;
  /**
   * A list of contacts related to the services.
   */
  "contacts"?: Array<ServiceDefinitionV2Dot2Contact>;
  /**
   * Unique identifier of the service. Must be unique across all services and is used to match with a service in Datadog.
   */
  "ddService": string;
  /**
   * A short description of the service.
   */
  "description"?: string;
  /**
   * Extensions to v2.2 schema.
   */
  "extensions"?: { [key: string]: any };
  /**
   * Third party integrations that Datadog supports.
   */
  "integrations"?: ServiceDefinitionV2Dot2Integrations;
  /**
   * The service's programming language. Datadog recognizes the following languages: `dotnet`, `go`, `java`, `js`, `php`, `python`, `ruby`, and `c++`.
   */
  "langauges"?: Array<string>;
  /**
   * The current life cycle phase of the service.
   */
  "lifecycle"?: string;
  /**
   * A list of links related to the services.
   */
  "links"?: Array<ServiceDefinitionV2Dot2Link>;
  /**
   * Schema version being used.
   */
  "schemaVersion": ServiceDefinitionV2Dot2Version;
  /**
   * The type of service. Datadog recognizes the following service types: `database`, `cache`, `function`, `web`, `browser`, and `mobile`.
   */
  "serviceType"?: string;
  /**
   * A set of custom tags.
   */
  "tags"?: Array<string>;
  /**
   * Team that owns the service. It is used to locate a team defined in Datadog Teams if it exists.
   */
  "team"?: string;
  /**
   * Importance of the service.
   */
  "tier"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    application: {
      baseName: "application",
      type: "string",
    },
    contacts: {
      baseName: "contacts",
      type: "Array<ServiceDefinitionV2Dot2Contact>",
    },
    ddService: {
      baseName: "dd-service",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    extensions: {
      baseName: "extensions",
      type: "{ [key: string]: any; }",
    },
    integrations: {
      baseName: "integrations",
      type: "ServiceDefinitionV2Dot2Integrations",
    },
    langauges: {
      baseName: "langauges",
      type: "Array<string>",
    },
    lifecycle: {
      baseName: "lifecycle",
      type: "string",
    },
    links: {
      baseName: "links",
      type: "Array<ServiceDefinitionV2Dot2Link>",
    },
    schemaVersion: {
      baseName: "schema-version",
      type: "ServiceDefinitionV2Dot2Version",
      required: true,
    },
    serviceType: {
      baseName: "service-type",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    team: {
      baseName: "team",
      type: "string",
    },
    tier: {
      baseName: "tier",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionV2Dot2.attributeTypeMap;
  }

  public constructor() {}
}
