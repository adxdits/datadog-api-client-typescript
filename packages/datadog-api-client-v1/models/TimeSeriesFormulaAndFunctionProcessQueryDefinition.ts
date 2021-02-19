/**
 * Datadog API V1 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FormulaAndFunctionMetricAggregation } from './FormulaAndFunctionMetricAggregation';
import { FormulaAndFunctionProcessQueryDataSource } from './FormulaAndFunctionProcessQueryDataSource';
import { QuerySortOrder } from './QuerySortOrder';
import { HttpFile } from '../http/http';

/**
* Process query using formulas and functions.
*/
export class TimeSeriesFormulaAndFunctionProcessQueryDefinition {
    'aggregator'?: FormulaAndFunctionMetricAggregation;
    'dataSource': FormulaAndFunctionProcessQueryDataSource;
    /**
    * Whether to normalize the CPU percentages.
    */
    'isNormalizedCpu'?: boolean;
    /**
    * Number of hits to return.
    */
    'limit'?: number;
    /**
    * Process metric name.
    */
    'metric': string;
    /**
    * Name of query for use in formulas.
    */
    'name'?: string;
    'sort'?: QuerySortOrder;
    /**
    * An array of tags to filter by.
    */
    'tagFilters'?: Array<string>;
    /**
    * Text to use as filter.
    */
    'textFilter'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "aggregator",
            "baseName": "aggregator",
            "type": "FormulaAndFunctionMetricAggregation",
            "format": ""
        },
        {
            "name": "dataSource",
            "baseName": "data_source",
            "type": "FormulaAndFunctionProcessQueryDataSource",
            "format": ""
        },
        {
            "name": "isNormalizedCpu",
            "baseName": "is_normalized_cpu",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "QuerySortOrder",
            "format": ""
        },
        {
            "name": "tagFilters",
            "baseName": "tag_filters",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "textFilter",
            "baseName": "text_filter",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TimeSeriesFormulaAndFunctionProcessQueryDefinition.attributeTypeMap;
    }
    
    public constructor() {
    }
}
