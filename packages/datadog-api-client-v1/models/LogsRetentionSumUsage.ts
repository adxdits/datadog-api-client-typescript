/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Object containing indexed logs usage grouped by retention period and summed.
*/

export class LogsRetentionSumUsage {
    /**
    * Total indexed logs for this retention period.
    */
    'logsIndexedLogsUsageSum'?: number;
    /**
    * Live indexed logs for this retention period.
    */
    'logsLiveIndexedLogsUsageSum'?: number;
    /**
    * Rehydrated indexed logs for this retention period.
    */
    'logsRehydratedIndexedLogsUsageSum'?: number;
    /**
    * The retention period in days or \"custom\" for all custom retention periods.
    */
    'retention'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "logsIndexedLogsUsageSum": {
            "baseName": "logs_indexed_logs_usage_sum",
            "type": "number",
            "format": "int64"
        },
        "logsLiveIndexedLogsUsageSum": {
            "baseName": "logs_live_indexed_logs_usage_sum",
            "type": "number",
            "format": "int64"
        },
        "logsRehydratedIndexedLogsUsageSum": {
            "baseName": "logs_rehydrated_indexed_logs_usage_sum",
            "type": "number",
            "format": "int64"
        },
        "retention": {
            "baseName": "retention",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return LogsRetentionSumUsage.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): LogsRetentionSumUsage {
      let res = new LogsRetentionSumUsage();

      res.logsIndexedLogsUsageSum = ObjectSerializer.deserialize(data.logs_indexed_logs_usage_sum, "number", "int64")

      res.logsLiveIndexedLogsUsageSum = ObjectSerializer.deserialize(data.logs_live_indexed_logs_usage_sum, "number", "int64")

      res.logsRehydratedIndexedLogsUsageSum = ObjectSerializer.deserialize(data.logs_rehydrated_indexed_logs_usage_sum, "number", "int64")

      res.retention = ObjectSerializer.deserialize(data.retention, "string", "")


      return res;
    }

    static serialize(data: LogsRetentionSumUsage): {[key: string]: any} {
        let attributeTypes = LogsRetentionSumUsage.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.logs_indexed_logs_usage_sum = ObjectSerializer.serialize(data.logsIndexedLogsUsageSum, "number", "int64")

        res.logs_live_indexed_logs_usage_sum = ObjectSerializer.serialize(data.logsLiveIndexedLogsUsageSum, "number", "int64")

        res.logs_rehydrated_indexed_logs_usage_sum = ObjectSerializer.serialize(data.logsRehydratedIndexedLogsUsageSum, "number", "int64")

        res.retention = ObjectSerializer.serialize(data.retention, "string", "")

        return res
    }
    
    public constructor() {
    }
}


