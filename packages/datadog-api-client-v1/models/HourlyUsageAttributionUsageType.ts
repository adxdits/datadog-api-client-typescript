/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Supported products for hourly usage attribution requests.
 */

export type HourlyUsageAttributionUsageType =
  | typeof API_USAGE
  | typeof APM_FARGATE_USAGE
  | typeof APM_HOST_USAGE
  | typeof APM_USM_USAGE
  | typeof APPSEC_FARGATE_USAGE
  | typeof APPSEC_USAGE
  | typeof BROWSER_USAGE
  | typeof CI_VISIBILITY_ITR_USAGE
  | typeof CONTAINER_EXCL_AGENT_USAGE
  | typeof CONTAINER_USAGE
  | typeof CSPM_CONTAINERS_USAGE
  | typeof CSPM_HOSTS_USAGE
  | typeof CUSTOM_INGESTED_TIMESERIES_USAGE
  | typeof CUSTOM_TIMESERIES_USAGE
  | typeof CWS_CONTAINERS_USAGE
  | typeof CWS_HOSTS_USAGE
  | typeof DBM_HOSTS_USAGE
  | typeof DBM_QUERIES_USAGE
  | typeof ESTIMATED_INDEXED_LOGS_USAGE
  | typeof ESTIMATED_INDEXED_SPANS_USAGE
  | typeof ESTIMATED_INGESTED_LOGS_USAGE
  | typeof ESTIMATED_INGESTED_SPANS_USAGE
  | typeof ESTIMATED_RUM_SESSIONS_USAGE
  | typeof FARGATE_USAGE
  | typeof FUNCTIONS_USAGE
  | typeof INFRA_HOST_USAGE
  | typeof INVOCATIONS_USAGE
  | typeof MOBILE_APP_TESTING_USAGE
  | typeof NPM_HOST_USAGE
  | typeof OBS_PIPELINE_BYTES_USAGE
  | typeof PROFILED_CONTAINER_USAGE
  | typeof PROFILED_FARGATE_USAGE
  | typeof PROFILED_HOST_USAGE
  | typeof SDS_SCANNED_BYTES_USAGE
  | typeof SERVERLESS_APPS_USAGE
  | typeof SNMP_USAGE
  | typeof UNIVERSAL_SERVICE_MONITORING_USAGE
  | typeof VULN_MANAGEMENT_HOSTS_USAGE
  | UnparsedObject;
export const API_USAGE = "api_usage";
export const APM_FARGATE_USAGE = "apm_fargate_usage";
export const APM_HOST_USAGE = "apm_host_usage";
export const APM_USM_USAGE = "apm_usm_usage";
export const APPSEC_FARGATE_USAGE = "appsec_fargate_usage";
export const APPSEC_USAGE = "appsec_usage";
export const BROWSER_USAGE = "browser_usage";
export const CI_VISIBILITY_ITR_USAGE = "ci_visibility_itr_usage";
export const CONTAINER_EXCL_AGENT_USAGE = "container_excl_agent_usage";
export const CONTAINER_USAGE = "container_usage";
export const CSPM_CONTAINERS_USAGE = "cspm_containers_usage";
export const CSPM_HOSTS_USAGE = "cspm_hosts_usage";
export const CUSTOM_INGESTED_TIMESERIES_USAGE =
  "custom_ingested_timeseries_usage";
export const CUSTOM_TIMESERIES_USAGE = "custom_timeseries_usage";
export const CWS_CONTAINERS_USAGE = "cws_containers_usage";
export const CWS_HOSTS_USAGE = "cws_hosts_usage";
export const DBM_HOSTS_USAGE = "dbm_hosts_usage";
export const DBM_QUERIES_USAGE = "dbm_queries_usage";
export const ESTIMATED_INDEXED_LOGS_USAGE = "estimated_indexed_logs_usage";
export const ESTIMATED_INDEXED_SPANS_USAGE = "estimated_indexed_spans_usage";
export const ESTIMATED_INGESTED_LOGS_USAGE = "estimated_ingested_logs_usage";
export const ESTIMATED_INGESTED_SPANS_USAGE = "estimated_ingested_spans_usage";
export const ESTIMATED_RUM_SESSIONS_USAGE = "estimated_rum_sessions_usage";
export const FARGATE_USAGE = "fargate_usage";
export const FUNCTIONS_USAGE = "functions_usage";
export const INFRA_HOST_USAGE = "infra_host_usage";
export const INVOCATIONS_USAGE = "invocations_usage";
export const MOBILE_APP_TESTING_USAGE = "mobile_app_testing_usage";
export const NPM_HOST_USAGE = "npm_host_usage";
export const OBS_PIPELINE_BYTES_USAGE = "obs_pipeline_bytes_usage";
export const PROFILED_CONTAINER_USAGE = "profiled_container_usage";
export const PROFILED_FARGATE_USAGE = "profiled_fargate_usage";
export const PROFILED_HOST_USAGE = "profiled_host_usage";
export const SDS_SCANNED_BYTES_USAGE = "sds_scanned_bytes_usage";
export const SERVERLESS_APPS_USAGE = "serverless_apps_usage";
export const SNMP_USAGE = "snmp_usage";
export const UNIVERSAL_SERVICE_MONITORING_USAGE =
  "universal_service_monitoring_usage";
export const VULN_MANAGEMENT_HOSTS_USAGE = "vuln_management_hosts_usage";
