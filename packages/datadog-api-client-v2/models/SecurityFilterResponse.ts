/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SecurityFilter } from './SecurityFilter';
import { SecurityFilterMeta } from './SecurityFilterMeta';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Response object which includes a single security filter.
*/

export class SecurityFilterResponse {
    'data'?: SecurityFilter;
    'meta'?: SecurityFilterMeta;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "data": {
            "baseName": "data",
            "type": "SecurityFilter",
            "format": ""
        },
        "meta": {
            "baseName": "meta",
            "type": "SecurityFilterMeta",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return SecurityFilterResponse.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SecurityFilterResponse {
      let res = new SecurityFilterResponse();

      res.data = ObjectSerializer.deserialize(data.data, "SecurityFilter", "")

      res.meta = ObjectSerializer.deserialize(data.meta, "SecurityFilterMeta", "")


      return res;
    }

    static serialize(data: SecurityFilterResponse): {[key: string]: any} {
        let attributeTypes = SecurityFilterResponse.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.data = ObjectSerializer.serialize(data.data, "SecurityFilter", "")

        res.meta = ObjectSerializer.serialize(data.meta, "SecurityFilterMeta", "")

        return res
    }
    
    public constructor() {
    }
}


