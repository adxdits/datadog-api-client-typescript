/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * IP allowlist Entry type.
 */

export type IPAllowlistEntryType = typeof IP_ALLOWLIST_ENTRY | UnparsedObject;
export const IP_ALLOWLIST_ENTRY = "ip_allowlist_entry";