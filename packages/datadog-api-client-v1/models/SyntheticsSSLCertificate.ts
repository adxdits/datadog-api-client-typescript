/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsSSLCertificateIssuer } from "./SyntheticsSSLCertificateIssuer";
import { SyntheticsSSLCertificateSubject } from "./SyntheticsSSLCertificateSubject";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object describing the SSL certificate used for a Synthetic test.
 */

export class SyntheticsSSLCertificate {
  /**
   * Cipher used for the connection.
   */
  "cipher"?: string;
  /**
   * Exponent associated to the certificate.
   */
  "exponent"?: number;
  /**
   * Array of extensions and details used for the certificate.
   */
  "extKeyUsage"?: Array<string>;
  /**
   * MD5 digest of the DER-encoded Certificate information.
   */
  "fingerprint"?: string;
  /**
   * SHA-1 digest of the DER-encoded Certificate information.
   */
  "fingerprint256"?: string;
  "issuer"?: SyntheticsSSLCertificateIssuer;
  /**
   * Modulus associated to the SSL certificate private key.
   */
  "modulus"?: string;
  /**
   * TLS protocol used for the test.
   */
  "protocol"?: string;
  /**
   * Serial Number assigned by Symantec to the SSL certificate.
   */
  "serialNumber"?: string;
  "subject"?: SyntheticsSSLCertificateSubject;
  /**
   * Date from which the SSL certificate is valid.
   */
  "validFrom"?: Date;
  /**
   * Date until which the SSL certificate is valid.
   */
  "validTo"?: Date;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    cipher: {
      baseName: "cipher",
      type: "string",
      format: "",
    },
    exponent: {
      baseName: "exponent",
      type: "number",
      format: "double",
    },
    extKeyUsage: {
      baseName: "extKeyUsage",
      type: "Array<string>",
      format: "",
    },
    fingerprint: {
      baseName: "fingerprint",
      type: "string",
      format: "",
    },
    fingerprint256: {
      baseName: "fingerprint256",
      type: "string",
      format: "",
    },
    issuer: {
      baseName: "issuer",
      type: "SyntheticsSSLCertificateIssuer",
      format: "",
    },
    modulus: {
      baseName: "modulus",
      type: "string",
      format: "",
    },
    protocol: {
      baseName: "protocol",
      type: "string",
      format: "",
    },
    serialNumber: {
      baseName: "serialNumber",
      type: "string",
      format: "",
    },
    subject: {
      baseName: "subject",
      type: "SyntheticsSSLCertificateSubject",
      format: "",
    },
    validFrom: {
      baseName: "validFrom",
      type: "Date",
      format: "date-time",
    },
    validTo: {
      baseName: "validTo",
      type: "Date",
      format: "date-time",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsSSLCertificate.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SyntheticsSSLCertificate {
    const res = new SyntheticsSSLCertificate();

    res.cipher = ObjectSerializer.deserialize(data.cipher, "string", "");

    res.exponent = ObjectSerializer.deserialize(
      data.exponent,
      "number",
      "double"
    );

    res.extKeyUsage = ObjectSerializer.deserialize(
      data.extKeyUsage,
      "Array<string>",
      ""
    );

    res.fingerprint = ObjectSerializer.deserialize(
      data.fingerprint,
      "string",
      ""
    );

    res.fingerprint256 = ObjectSerializer.deserialize(
      data.fingerprint256,
      "string",
      ""
    );

    res.issuer = ObjectSerializer.deserialize(
      data.issuer,
      "SyntheticsSSLCertificateIssuer",
      ""
    );

    res.modulus = ObjectSerializer.deserialize(data.modulus, "string", "");

    res.protocol = ObjectSerializer.deserialize(data.protocol, "string", "");

    res.serialNumber = ObjectSerializer.deserialize(
      data.serialNumber,
      "string",
      ""
    );

    res.subject = ObjectSerializer.deserialize(
      data.subject,
      "SyntheticsSSLCertificateSubject",
      ""
    );

    res.validFrom = ObjectSerializer.deserialize(
      data.validFrom,
      "Date",
      "date-time"
    );

    res.validTo = ObjectSerializer.deserialize(
      data.validTo,
      "Date",
      "date-time"
    );

    return res;
  }

  static serialize(data: SyntheticsSSLCertificate): { [key: string]: any } {
    const attributeTypes = SyntheticsSSLCertificate.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.cipher = ObjectSerializer.serialize(data.cipher, "string", "");

    res.exponent = ObjectSerializer.serialize(
      data.exponent,
      "number",
      "double"
    );

    res.extKeyUsage = ObjectSerializer.serialize(
      data.extKeyUsage,
      "Array<string>",
      ""
    );

    res.fingerprint = ObjectSerializer.serialize(
      data.fingerprint,
      "string",
      ""
    );

    res.fingerprint256 = ObjectSerializer.serialize(
      data.fingerprint256,
      "string",
      ""
    );

    res.issuer = ObjectSerializer.serialize(
      data.issuer,
      "SyntheticsSSLCertificateIssuer",
      ""
    );

    res.modulus = ObjectSerializer.serialize(data.modulus, "string", "");

    res.protocol = ObjectSerializer.serialize(data.protocol, "string", "");

    res.serialNumber = ObjectSerializer.serialize(
      data.serialNumber,
      "string",
      ""
    );

    res.subject = ObjectSerializer.serialize(
      data.subject,
      "SyntheticsSSLCertificateSubject",
      ""
    );

    res.validFrom = ObjectSerializer.serialize(
      data.validFrom,
      "Date",
      "date-time"
    );

    res.validTo = ObjectSerializer.serialize(data.validTo, "Date", "date-time");

    return res;
  }

  public constructor() {}
}
