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

import { SyntheticsTestRequestCertificateItem } from './SyntheticsTestRequestCertificateItem';
import { HttpFile } from '../http/http';

/**
* Client certificate to use when performing the test request.
*/
export class SyntheticsTestRequestCertificate {
    'cert'?: SyntheticsTestRequestCertificateItem;
    'key'?: SyntheticsTestRequestCertificateItem;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cert",
            "baseName": "cert",
            "type": "SyntheticsTestRequestCertificateItem",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "SyntheticsTestRequestCertificateItem",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsTestRequestCertificate.attributeTypeMap;
    }
    
    public constructor() {
    }
}
