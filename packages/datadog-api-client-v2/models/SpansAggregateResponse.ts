/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansAggregateBucket } from "./SpansAggregateBucket";
import { SpansAggregateResponseMetadata } from "./SpansAggregateResponseMetadata";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response object for the spans aggregate API endpoint.
 */
export class SpansAggregateResponse {
  /**
   * The list of matching buckets, one item per bucket.
   */
  "data"?: Array<SpansAggregateBucket>;
  /**
   * The metadata associated with a request.
   */
  "meta"?: SpansAggregateResponseMetadata;

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
      type: "Array<SpansAggregateBucket>",
    },
    meta: {
      baseName: "meta",
      type: "SpansAggregateResponseMetadata",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SpansAggregateResponse.attributeTypeMap;
  }

  public constructor() {}
}