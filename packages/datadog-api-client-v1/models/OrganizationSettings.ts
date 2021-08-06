/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AccessRole } from "./AccessRole";
import { OrganizationSettingsSaml } from "./OrganizationSettingsSaml";
import { OrganizationSettingsSamlAutocreateUsersDomains } from "./OrganizationSettingsSamlAutocreateUsersDomains";
import { OrganizationSettingsSamlIdpInitiatedLogin } from "./OrganizationSettingsSamlIdpInitiatedLogin";
import { OrganizationSettingsSamlStrictMode } from "./OrganizationSettingsSamlStrictMode";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A JSON array of settings.
 */

export class OrganizationSettings {
  /**
   * Whether or not the organization users can share widgets outside of Datadog.
   */
  "privateWidgetShare"?: boolean;
  "saml"?: OrganizationSettingsSaml;
  "samlAutocreateAccessRole"?: AccessRole;
  "samlAutocreateUsersDomains"?: OrganizationSettingsSamlAutocreateUsersDomains;
  /**
   * Whether or not SAML can be enabled for this organization.
   */
  "samlCanBeEnabled"?: boolean;
  /**
   * Identity provider endpoint for SAML authentication.
   */
  "samlIdpEndpoint"?: string;
  "samlIdpInitiatedLogin"?: OrganizationSettingsSamlIdpInitiatedLogin;
  /**
   * Whether or not a SAML identity provider metadata file was provided to the Datadog organization.
   */
  "samlIdpMetadataUploaded"?: boolean;
  /**
   * URL for SAML logging.
   */
  "samlLoginUrl"?: string;
  "samlStrictMode"?: OrganizationSettingsSamlStrictMode;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    privateWidgetShare: {
      baseName: "private_widget_share",
      type: "boolean",
      format: "",
    },
    saml: {
      baseName: "saml",
      type: "OrganizationSettingsSaml",
      format: "",
    },
    samlAutocreateAccessRole: {
      baseName: "saml_autocreate_access_role",
      type: "AccessRole",
      format: "",
    },
    samlAutocreateUsersDomains: {
      baseName: "saml_autocreate_users_domains",
      type: "OrganizationSettingsSamlAutocreateUsersDomains",
      format: "",
    },
    samlCanBeEnabled: {
      baseName: "saml_can_be_enabled",
      type: "boolean",
      format: "",
    },
    samlIdpEndpoint: {
      baseName: "saml_idp_endpoint",
      type: "string",
      format: "",
    },
    samlIdpInitiatedLogin: {
      baseName: "saml_idp_initiated_login",
      type: "OrganizationSettingsSamlIdpInitiatedLogin",
      format: "",
    },
    samlIdpMetadataUploaded: {
      baseName: "saml_idp_metadata_uploaded",
      type: "boolean",
      format: "",
    },
    samlLoginUrl: {
      baseName: "saml_login_url",
      type: "string",
      format: "",
    },
    samlStrictMode: {
      baseName: "saml_strict_mode",
      type: "OrganizationSettingsSamlStrictMode",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return OrganizationSettings.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): OrganizationSettings {
    const res = new OrganizationSettings();

    res.privateWidgetShare = ObjectSerializer.deserialize(
      data.private_widget_share,
      "boolean",
      ""
    );

    res.saml = ObjectSerializer.deserialize(
      data.saml,
      "OrganizationSettingsSaml",
      ""
    );

    if (
      ["st", "adm", "ro", "ERROR", undefined].includes(
        data.saml_autocreate_access_role
      )
    ) {
      res.samlAutocreateAccessRole = data.saml_autocreate_access_role;
    } else {
      const raw = new OrganizationSettings();
      raw.unparsedObject = data;
      return raw;
    }

    res.samlAutocreateUsersDomains = ObjectSerializer.deserialize(
      data.saml_autocreate_users_domains,
      "OrganizationSettingsSamlAutocreateUsersDomains",
      ""
    );

    res.samlCanBeEnabled = ObjectSerializer.deserialize(
      data.saml_can_be_enabled,
      "boolean",
      ""
    );

    res.samlIdpEndpoint = ObjectSerializer.deserialize(
      data.saml_idp_endpoint,
      "string",
      ""
    );

    res.samlIdpInitiatedLogin = ObjectSerializer.deserialize(
      data.saml_idp_initiated_login,
      "OrganizationSettingsSamlIdpInitiatedLogin",
      ""
    );

    res.samlIdpMetadataUploaded = ObjectSerializer.deserialize(
      data.saml_idp_metadata_uploaded,
      "boolean",
      ""
    );

    res.samlLoginUrl = ObjectSerializer.deserialize(
      data.saml_login_url,
      "string",
      ""
    );

    res.samlStrictMode = ObjectSerializer.deserialize(
      data.saml_strict_mode,
      "OrganizationSettingsSamlStrictMode",
      ""
    );

    return res;
  }

  static serialize(data: OrganizationSettings): { [key: string]: any } {
    const attributeTypes = OrganizationSettings.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.private_widget_share = ObjectSerializer.serialize(
      data.privateWidgetShare,
      "boolean",
      ""
    );

    res.saml = ObjectSerializer.serialize(
      data.saml,
      "OrganizationSettingsSaml",
      ""
    );

    if (
      ["st", "adm", "ro", "ERROR", undefined].includes(
        data.samlAutocreateAccessRole
      )
    ) {
      res.saml_autocreate_access_role = data.samlAutocreateAccessRole;
    } else {
      throw TypeError(
        `invalid enum value ${data.samlAutocreateAccessRole} for samlAutocreateAccessRole`
      );
    }

    res.saml_autocreate_users_domains = ObjectSerializer.serialize(
      data.samlAutocreateUsersDomains,
      "OrganizationSettingsSamlAutocreateUsersDomains",
      ""
    );

    res.saml_can_be_enabled = ObjectSerializer.serialize(
      data.samlCanBeEnabled,
      "boolean",
      ""
    );

    res.saml_idp_endpoint = ObjectSerializer.serialize(
      data.samlIdpEndpoint,
      "string",
      ""
    );

    res.saml_idp_initiated_login = ObjectSerializer.serialize(
      data.samlIdpInitiatedLogin,
      "OrganizationSettingsSamlIdpInitiatedLogin",
      ""
    );

    res.saml_idp_metadata_uploaded = ObjectSerializer.serialize(
      data.samlIdpMetadataUploaded,
      "boolean",
      ""
    );

    res.saml_login_url = ObjectSerializer.serialize(
      data.samlLoginUrl,
      "string",
      ""
    );

    res.saml_strict_mode = ObjectSerializer.serialize(
      data.samlStrictMode,
      "OrganizationSettingsSamlStrictMode",
      ""
    );

    return res;
  }

  public constructor() {}
}
