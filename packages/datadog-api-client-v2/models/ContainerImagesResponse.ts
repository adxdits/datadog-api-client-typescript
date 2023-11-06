/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ContainerImageItem } from "./ContainerImageItem";
import { ContainerImageMeta } from "./ContainerImageMeta";
import { ContainerImagesResponseLinks } from "./ContainerImagesResponseLinks";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * List of Container Images.
 */
export class ContainerImagesResponse {
  /**
   * Array of Container Image objects.
   */
  "data"?: Array<ContainerImageItem>;
  /**
   * Pagination links.
   */
  "links"?: ContainerImagesResponseLinks;
  /**
   * Response metadata object.
   */
  "meta"?: ContainerImageMeta;

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
      type: "Array<ContainerImageItem>",
    },
    links: {
      baseName: "links",
      type: "ContainerImagesResponseLinks",
    },
    meta: {
      baseName: "meta",
      type: "ContainerImageMeta",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ContainerImagesResponse.attributeTypeMap;
  }

  public constructor() {}
}