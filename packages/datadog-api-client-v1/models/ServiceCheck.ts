/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ServiceCheckStatus } from './ServiceCheckStatus';
import { HttpFile } from '../http/http';

/**
* An object containing service check and status.
*/
export class ServiceCheck {
    /**
    * The check.
    */
    'check': string;
    /**
    * The host name correlated with the check.
    */
    'hostName': string;
    /**
    * Message containing check status.
    */
    'message'?: string;
    'status': ServiceCheckStatus;
    /**
    * Tags related to a check.
    */
    'tags': Array<string>;
    /**
    * Time of check.
    */
    'timestamp'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "check",
            "baseName": "check",
            "type": "string",
            "format": ""
        },
        {
            "name": "hostName",
            "baseName": "host_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ServiceCheckStatus",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return ServiceCheck.attributeTypeMap;
    }
    
    public constructor() {
    }
}
