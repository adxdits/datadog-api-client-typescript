/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HTTPMethod } from "./HTTPMethod";
import { SyntheticsBasicAuth } from "./SyntheticsBasicAuth";
import { SyntheticsTestRequestCertificate } from "./SyntheticsTestRequestCertificate";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object describing the Synthetic test request.
 */

export class SyntheticsTestRequest {
  /**
   * Allows loading insecure content for an HTTP request in a multistep test step.
   */
  "allowInsecure"?: boolean;
  "basicAuth"?: SyntheticsBasicAuth;
  /**
   * Body to include in the test.
   */
  "body"?: string;
  "certificate"?: SyntheticsTestRequestCertificate;
  /**
   * DNS server to use for DNS tests.
   */
  "dnsServer"?: string;
  /**
   * DNS server port to use for DNS tests.
   */
  "dnsServerPort"?: number;
  /**
   * Headers to include when performing the test.
   */
  "headers"?: { [key: string]: string };
  /**
   * Host name to perform the test with.
   */
  "host"?: string;
  "method"?: HTTPMethod;
  /**
   * Determines whether or not to save the response body.
   */
  "noSavingResponseBody"?: boolean;
  /**
   * Number of pings to use per test.
   */
  "numberOfPackets"?: number;
  /**
   * Port to use when performing the test.
   */
  "port"?: number;
  /**
   * Query to use for the test.
   */
  "query"?: any;
  /**
   * Turns on a traceroute probe to discover all gateways along the path to the host destination.
   */
  "shouldTrackHops"?: boolean;
  /**
   * Timeout in seconds for the test.
   */
  "timeout"?: number;
  /**
   * URL to perform the test with.
   */
  "url"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    allowInsecure: {
      baseName: "allow_insecure",
      type: "boolean",
      format: "",
    },
    basicAuth: {
      baseName: "basicAuth",
      type: "SyntheticsBasicAuth",
      format: "",
    },
    body: {
      baseName: "body",
      type: "string",
      format: "",
    },
    certificate: {
      baseName: "certificate",
      type: "SyntheticsTestRequestCertificate",
      format: "",
    },
    dnsServer: {
      baseName: "dnsServer",
      type: "string",
      format: "",
    },
    dnsServerPort: {
      baseName: "dnsServerPort",
      type: "number",
      format: "int32",
    },
    headers: {
      baseName: "headers",
      type: "{ [key: string]: string; }",
      format: "",
    },
    host: {
      baseName: "host",
      type: "string",
      format: "",
    },
    method: {
      baseName: "method",
      type: "HTTPMethod",
      format: "",
    },
    noSavingResponseBody: {
      baseName: "noSavingResponseBody",
      type: "boolean",
      format: "",
    },
    numberOfPackets: {
      baseName: "numberOfPackets",
      type: "number",
      format: "int32",
    },
    port: {
      baseName: "port",
      type: "number",
      format: "int64",
    },
    query: {
      baseName: "query",
      type: "any",
      format: "",
    },
    shouldTrackHops: {
      baseName: "shouldTrackHops",
      type: "boolean",
      format: "",
    },
    timeout: {
      baseName: "timeout",
      type: "number",
      format: "double",
    },
    url: {
      baseName: "url",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsTestRequest.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SyntheticsTestRequest {
    const res = new SyntheticsTestRequest();

    res.allowInsecure = ObjectSerializer.deserialize(
      data.allow_insecure,
      "boolean",
      ""
    );

    res.basicAuth = ObjectSerializer.deserialize(
      data.basicAuth,
      "SyntheticsBasicAuth",
      ""
    );

    res.body = ObjectSerializer.deserialize(data.body, "string", "");

    res.certificate = ObjectSerializer.deserialize(
      data.certificate,
      "SyntheticsTestRequestCertificate",
      ""
    );

    res.dnsServer = ObjectSerializer.deserialize(data.dnsServer, "string", "");

    res.dnsServerPort = ObjectSerializer.deserialize(
      data.dnsServerPort,
      "number",
      "int32"
    );

    res.headers = ObjectSerializer.deserialize(
      data.headers,
      "{ [key: string]: string; }",
      ""
    );

    res.host = ObjectSerializer.deserialize(data.host, "string", "");

    if (
      [
        "GET",
        "POST",
        "PATCH",
        "PUT",
        "DELETE",
        "HEAD",
        "OPTIONS",
        undefined,
      ].includes(data.method)
    ) {
      res.method = data.method;
    } else {
      const raw = new SyntheticsTestRequest();
      raw.unparsedObject = data;
      return raw;
    }

    res.noSavingResponseBody = ObjectSerializer.deserialize(
      data.noSavingResponseBody,
      "boolean",
      ""
    );

    res.numberOfPackets = ObjectSerializer.deserialize(
      data.numberOfPackets,
      "number",
      "int32"
    );

    res.port = ObjectSerializer.deserialize(data.port, "number", "int64");

    res.query = ObjectSerializer.deserialize(data.query, "any", "");

    res.shouldTrackHops = ObjectSerializer.deserialize(
      data.shouldTrackHops,
      "boolean",
      ""
    );

    res.timeout = ObjectSerializer.deserialize(
      data.timeout,
      "number",
      "double"
    );

    res.url = ObjectSerializer.deserialize(data.url, "string", "");

    return res;
  }

  static serialize(data: SyntheticsTestRequest): { [key: string]: any } {
    const attributeTypes = SyntheticsTestRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.allow_insecure = ObjectSerializer.serialize(
      data.allowInsecure,
      "boolean",
      ""
    );

    res.basicAuth = ObjectSerializer.serialize(
      data.basicAuth,
      "SyntheticsBasicAuth",
      ""
    );

    res.body = ObjectSerializer.serialize(data.body, "string", "");

    res.certificate = ObjectSerializer.serialize(
      data.certificate,
      "SyntheticsTestRequestCertificate",
      ""
    );

    res.dnsServer = ObjectSerializer.serialize(data.dnsServer, "string", "");

    res.dnsServerPort = ObjectSerializer.serialize(
      data.dnsServerPort,
      "number",
      "int32"
    );

    res.headers = ObjectSerializer.serialize(
      data.headers,
      "{ [key: string]: string; }",
      ""
    );

    res.host = ObjectSerializer.serialize(data.host, "string", "");

    if (
      [
        "GET",
        "POST",
        "PATCH",
        "PUT",
        "DELETE",
        "HEAD",
        "OPTIONS",
        undefined,
      ].includes(data.method)
    ) {
      res.method = data.method;
    } else {
      throw TypeError(`invalid enum value ${data.method} for method`);
    }

    res.noSavingResponseBody = ObjectSerializer.serialize(
      data.noSavingResponseBody,
      "boolean",
      ""
    );

    res.numberOfPackets = ObjectSerializer.serialize(
      data.numberOfPackets,
      "number",
      "int32"
    );

    res.port = ObjectSerializer.serialize(data.port, "number", "int64");

    res.query = ObjectSerializer.serialize(data.query, "any", "");

    res.shouldTrackHops = ObjectSerializer.serialize(
      data.shouldTrackHops,
      "boolean",
      ""
    );

    res.timeout = ObjectSerializer.serialize(data.timeout, "number", "double");

    res.url = ObjectSerializer.serialize(data.url, "string", "");

    return res;
  }

  public constructor() {}
}
