/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Global hourly report of all data billed by Datadog for a given organization.
 */

export class UsageSummaryDateOrg {
  /**
   * Shows the 99th percentile of all agent hosts over all hours in the current date for the given org.
   */
  "agentHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Azure app services using APM over all hours in the current date for the given org.
   */
  "apmAzureAppServiceHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all distinct APM hosts over all hours in the current date for the given org.
   */
  "apmHostTop99p"?: number;
  /**
   * Shows the sum of all audit logs lines indexed over all hours in the current date for the given org.
   */
  "auditLogsLinesIndexedSum"?: number;
  /**
   * Shows the 99th percentile of all AWS hosts over all hours in the current date for the given org.
   */
  "awsHostTop99p"?: number;
  /**
   * Shows the sum of all AWS Lambda invocations over all hours in the current date for the given org.
   */
  "awsLambdaFuncCount"?: number;
  /**
   * Shows the sum of all AWS Lambda invocations over all hours in the current date for the given org.
   */
  "awsLambdaInvocationsSum"?: number;
  /**
   * Shows the 99th percentile of all Azure app services over all hours in the current date for the given org.
   */
  "azureAppServiceTop99p"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current date for the given org.
   */
  "billableIngestedBytesSum"?: number;
  /**
   * Shows the average of all distinct containers over all hours in the current date for the given org.
   */
  "containerAvg"?: number;
  /**
   * Shows the high-water mark of all distinct containers over all hours in the current date for the given org.
   */
  "containerHwm"?: number;
  /**
   * Shows the average number of Cloud Security Posture Management containers over all hours in the current date for the given org.
   */
  "cspmContainerAvg"?: number;
  /**
   * Shows the high-water mark of Cloud Security Posture Management containers over all hours in the current date for the given org.
   */
  "cspmContainerHwm"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Posture Management hosts over all hours in the current date for the given org.
   */
  "cspmHostTop99p"?: number;
  /**
   * Shows the average number of distinct custom metrics over all hours in the current date for the given org.
   */
  "customTsAvg"?: number;
  /**
   * Shows the average of all distinct Cloud Workload Security containers over all hours in the current date for the given org.
   */
  "cwsContainerCountAvg"?: number;
  /**
   * Shows the 99th percentile of all Cloud Workload Security hosts over all hours in the current date for the given org.
   */
  "cwsHostTop99p"?: number;
  /**
   * The average task count for Fargate.
   */
  "fargateTasksCountAvg"?: number;
  /**
   * Shows the high-water mark of all Fargate tasks over all hours in the current date for the given org.
   */
  "fargateTasksCountHwm"?: number;
  /**
   * Shows the 99th percentile of all GCP hosts over all hours in the current date for the given org.
   */
  "gcpHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Heroku dynos over all hours in the current date for the given org.
   */
  "herokuHostTop99p"?: number;
  /**
   * The organization id.
   */
  "id"?: string;
  /**
   * Shows the high-water mark of incident management monthly active users over all hours in the current date for the given org.
   */
  "incidentManagementMonthlyActiveUsersHwm"?: number;
  /**
   * Shows the sum of all log events indexed over all hours in the current date for the given org.
   */
  "indexedEventsCountSum"?: number;
  /**
   * Shows the 99th percentile of all distinct infrastructure hosts over all hours in the current date for the given org.
   */
  "infraHostTop99p"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current date for the given org.
   */
  "ingestedEventsBytesSum"?: number;
  /**
   * Shows the sum of all IoT devices over all hours in the current date for the given org.
   */
  "iotDeviceAggSum"?: number;
  /**
   * Shows the 99th percentile of all IoT devices over all hours in the current date for the given org.
   */
  "iotDeviceTop99pSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on Android over all hours in the current date for the given org.
   */
  "mobileRumSessionCountAndroidSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on iOS over all hours in the current date for the given org.
   */
  "mobileRumSessionCountIosSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions over all hours in the current date for the given org.
   */
  "mobileRumSessionCountSum"?: number;
  /**
   * The organization name.
   */
  "name"?: string;
  /**
   * Shows the sum of all Network flows indexed over all hours in the current date for the given org.
   */
  "netflowIndexedEventsCountSum"?: number;
  /**
   * Shows the 99th percentile of all distinct Networks hosts over all hours in the current date for the given org.
   */
  "npmHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for the given org.
   */
  "opentelemetryHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all profiled hosts over all hours in the current date for the given org.
   */
  "profilingHostTop99p"?: number;
  /**
   * The organization public id.
   */
  "publicId"?: string;
  /**
   * Shows the sum of all browser RUM Sessions over all hours in the current date for the given org.
   */
  "rumSessionCountSum"?: number;
  /**
   * Shows the sum of RUM Sessions (browser and mobile) over all hours in the current date for the given org.
   */
  "rumTotalSessionCountSum"?: number;
  /**
   * Shows the sum of all Synthetic browser tests over all hours in the current date for the given org.
   */
  "syntheticsBrowserCheckCallsCountSum"?: number;
  /**
   * Shows the sum of all Synthetic API tests over all hours in the current date for the given org.
   */
  "syntheticsCheckCallsCountSum"?: number;
  /**
   * Shows the sum of all Indexed Spans indexed over all hours in the current date for the given org.
   */
  "traceSearchIndexedEventsCountSum"?: number;
  /**
   * Shows the sum of all tracing without limits bytes ingested over all hours in the current date for the given org.
   */
  "twolIngestedEventsBytesSum"?: number;
  /**
   * Shows the 99th percentile of all vSphere hosts over all hours in the current date for the given org.
   */
  "vsphereHostTop99p"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    agentHostTop99p: {
      baseName: "agent_host_top99p",
      type: "number",
      format: "int64",
    },
    apmAzureAppServiceHostTop99p: {
      baseName: "apm_azure_app_service_host_top99p",
      type: "number",
      format: "int64",
    },
    apmHostTop99p: {
      baseName: "apm_host_top99p",
      type: "number",
      format: "int64",
    },
    auditLogsLinesIndexedSum: {
      baseName: "audit_logs_lines_indexed_sum",
      type: "number",
      format: "int64",
    },
    awsHostTop99p: {
      baseName: "aws_host_top99p",
      type: "number",
      format: "int64",
    },
    awsLambdaFuncCount: {
      baseName: "aws_lambda_func_count",
      type: "number",
      format: "int64",
    },
    awsLambdaInvocationsSum: {
      baseName: "aws_lambda_invocations_sum",
      type: "number",
      format: "int64",
    },
    azureAppServiceTop99p: {
      baseName: "azure_app_service_top99p",
      type: "number",
      format: "int64",
    },
    billableIngestedBytesSum: {
      baseName: "billable_ingested_bytes_sum",
      type: "number",
      format: "int64",
    },
    containerAvg: {
      baseName: "container_avg",
      type: "number",
      format: "int64",
    },
    containerHwm: {
      baseName: "container_hwm",
      type: "number",
      format: "int64",
    },
    cspmContainerAvg: {
      baseName: "cspm_container_avg",
      type: "number",
      format: "int64",
    },
    cspmContainerHwm: {
      baseName: "cspm_container_hwm",
      type: "number",
      format: "int64",
    },
    cspmHostTop99p: {
      baseName: "cspm_host_top99p",
      type: "number",
      format: "int64",
    },
    customTsAvg: {
      baseName: "custom_ts_avg",
      type: "number",
      format: "int64",
    },
    cwsContainerCountAvg: {
      baseName: "cws_container_count_avg",
      type: "number",
      format: "int64",
    },
    cwsHostTop99p: {
      baseName: "cws_host_top99p",
      type: "number",
      format: "int64",
    },
    fargateTasksCountAvg: {
      baseName: "fargate_tasks_count_avg",
      type: "number",
      format: "int64",
    },
    fargateTasksCountHwm: {
      baseName: "fargate_tasks_count_hwm",
      type: "number",
      format: "int64",
    },
    gcpHostTop99p: {
      baseName: "gcp_host_top99p",
      type: "number",
      format: "int64",
    },
    herokuHostTop99p: {
      baseName: "heroku_host_top99p",
      type: "number",
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    incidentManagementMonthlyActiveUsersHwm: {
      baseName: "incident_management_monthly_active_users_hwm",
      type: "number",
      format: "int64",
    },
    indexedEventsCountSum: {
      baseName: "indexed_events_count_sum",
      type: "number",
      format: "int64",
    },
    infraHostTop99p: {
      baseName: "infra_host_top99p",
      type: "number",
      format: "int64",
    },
    ingestedEventsBytesSum: {
      baseName: "ingested_events_bytes_sum",
      type: "number",
      format: "int64",
    },
    iotDeviceAggSum: {
      baseName: "iot_device_agg_sum",
      type: "number",
      format: "int64",
    },
    iotDeviceTop99pSum: {
      baseName: "iot_device_top99p_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountAndroidSum: {
      baseName: "mobile_rum_session_count_android_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountIosSum: {
      baseName: "mobile_rum_session_count_ios_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountSum: {
      baseName: "mobile_rum_session_count_sum",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    netflowIndexedEventsCountSum: {
      baseName: "netflow_indexed_events_count_sum",
      type: "number",
      format: "int64",
    },
    npmHostTop99p: {
      baseName: "npm_host_top99p",
      type: "number",
      format: "int64",
    },
    opentelemetryHostTop99p: {
      baseName: "opentelemetry_host_top99p",
      type: "number",
      format: "int64",
    },
    profilingHostTop99p: {
      baseName: "profiling_host_top99p",
      type: "number",
      format: "int64",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
      format: "",
    },
    rumSessionCountSum: {
      baseName: "rum_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumTotalSessionCountSum: {
      baseName: "rum_total_session_count_sum",
      type: "number",
      format: "int64",
    },
    syntheticsBrowserCheckCallsCountSum: {
      baseName: "synthetics_browser_check_calls_count_sum",
      type: "number",
      format: "int64",
    },
    syntheticsCheckCallsCountSum: {
      baseName: "synthetics_check_calls_count_sum",
      type: "number",
      format: "int64",
    },
    traceSearchIndexedEventsCountSum: {
      baseName: "trace_search_indexed_events_count_sum",
      type: "number",
      format: "int64",
    },
    twolIngestedEventsBytesSum: {
      baseName: "twol_ingested_events_bytes_sum",
      type: "number",
      format: "int64",
    },
    vsphereHostTop99p: {
      baseName: "vsphere_host_top99p",
      type: "number",
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageSummaryDateOrg.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageSummaryDateOrg {
    const res = new UsageSummaryDateOrg();

    res.agentHostTop99p = ObjectSerializer.deserialize(
      data.agent_host_top99p,
      "number",
      "int64"
    );

    res.apmAzureAppServiceHostTop99p = ObjectSerializer.deserialize(
      data.apm_azure_app_service_host_top99p,
      "number",
      "int64"
    );

    res.apmHostTop99p = ObjectSerializer.deserialize(
      data.apm_host_top99p,
      "number",
      "int64"
    );

    res.auditLogsLinesIndexedSum = ObjectSerializer.deserialize(
      data.audit_logs_lines_indexed_sum,
      "number",
      "int64"
    );

    res.awsHostTop99p = ObjectSerializer.deserialize(
      data.aws_host_top99p,
      "number",
      "int64"
    );

    res.awsLambdaFuncCount = ObjectSerializer.deserialize(
      data.aws_lambda_func_count,
      "number",
      "int64"
    );

    res.awsLambdaInvocationsSum = ObjectSerializer.deserialize(
      data.aws_lambda_invocations_sum,
      "number",
      "int64"
    );

    res.azureAppServiceTop99p = ObjectSerializer.deserialize(
      data.azure_app_service_top99p,
      "number",
      "int64"
    );

    res.billableIngestedBytesSum = ObjectSerializer.deserialize(
      data.billable_ingested_bytes_sum,
      "number",
      "int64"
    );

    res.containerAvg = ObjectSerializer.deserialize(
      data.container_avg,
      "number",
      "int64"
    );

    res.containerHwm = ObjectSerializer.deserialize(
      data.container_hwm,
      "number",
      "int64"
    );

    res.cspmContainerAvg = ObjectSerializer.deserialize(
      data.cspm_container_avg,
      "number",
      "int64"
    );

    res.cspmContainerHwm = ObjectSerializer.deserialize(
      data.cspm_container_hwm,
      "number",
      "int64"
    );

    res.cspmHostTop99p = ObjectSerializer.deserialize(
      data.cspm_host_top99p,
      "number",
      "int64"
    );

    res.customTsAvg = ObjectSerializer.deserialize(
      data.custom_ts_avg,
      "number",
      "int64"
    );

    res.cwsContainerCountAvg = ObjectSerializer.deserialize(
      data.cws_container_count_avg,
      "number",
      "int64"
    );

    res.cwsHostTop99p = ObjectSerializer.deserialize(
      data.cws_host_top99p,
      "number",
      "int64"
    );

    res.fargateTasksCountAvg = ObjectSerializer.deserialize(
      data.fargate_tasks_count_avg,
      "number",
      "int64"
    );

    res.fargateTasksCountHwm = ObjectSerializer.deserialize(
      data.fargate_tasks_count_hwm,
      "number",
      "int64"
    );

    res.gcpHostTop99p = ObjectSerializer.deserialize(
      data.gcp_host_top99p,
      "number",
      "int64"
    );

    res.herokuHostTop99p = ObjectSerializer.deserialize(
      data.heroku_host_top99p,
      "number",
      "int64"
    );

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    res.incidentManagementMonthlyActiveUsersHwm = ObjectSerializer.deserialize(
      data.incident_management_monthly_active_users_hwm,
      "number",
      "int64"
    );

    res.indexedEventsCountSum = ObjectSerializer.deserialize(
      data.indexed_events_count_sum,
      "number",
      "int64"
    );

    res.infraHostTop99p = ObjectSerializer.deserialize(
      data.infra_host_top99p,
      "number",
      "int64"
    );

    res.ingestedEventsBytesSum = ObjectSerializer.deserialize(
      data.ingested_events_bytes_sum,
      "number",
      "int64"
    );

    res.iotDeviceAggSum = ObjectSerializer.deserialize(
      data.iot_device_agg_sum,
      "number",
      "int64"
    );

    res.iotDeviceTop99pSum = ObjectSerializer.deserialize(
      data.iot_device_top99p_sum,
      "number",
      "int64"
    );

    res.mobileRumSessionCountAndroidSum = ObjectSerializer.deserialize(
      data.mobile_rum_session_count_android_sum,
      "number",
      "int64"
    );

    res.mobileRumSessionCountIosSum = ObjectSerializer.deserialize(
      data.mobile_rum_session_count_ios_sum,
      "number",
      "int64"
    );

    res.mobileRumSessionCountSum = ObjectSerializer.deserialize(
      data.mobile_rum_session_count_sum,
      "number",
      "int64"
    );

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.netflowIndexedEventsCountSum = ObjectSerializer.deserialize(
      data.netflow_indexed_events_count_sum,
      "number",
      "int64"
    );

    res.npmHostTop99p = ObjectSerializer.deserialize(
      data.npm_host_top99p,
      "number",
      "int64"
    );

    res.opentelemetryHostTop99p = ObjectSerializer.deserialize(
      data.opentelemetry_host_top99p,
      "number",
      "int64"
    );

    res.profilingHostTop99p = ObjectSerializer.deserialize(
      data.profiling_host_top99p,
      "number",
      "int64"
    );

    res.publicId = ObjectSerializer.deserialize(data.public_id, "string", "");

    res.rumSessionCountSum = ObjectSerializer.deserialize(
      data.rum_session_count_sum,
      "number",
      "int64"
    );

    res.rumTotalSessionCountSum = ObjectSerializer.deserialize(
      data.rum_total_session_count_sum,
      "number",
      "int64"
    );

    res.syntheticsBrowserCheckCallsCountSum = ObjectSerializer.deserialize(
      data.synthetics_browser_check_calls_count_sum,
      "number",
      "int64"
    );

    res.syntheticsCheckCallsCountSum = ObjectSerializer.deserialize(
      data.synthetics_check_calls_count_sum,
      "number",
      "int64"
    );

    res.traceSearchIndexedEventsCountSum = ObjectSerializer.deserialize(
      data.trace_search_indexed_events_count_sum,
      "number",
      "int64"
    );

    res.twolIngestedEventsBytesSum = ObjectSerializer.deserialize(
      data.twol_ingested_events_bytes_sum,
      "number",
      "int64"
    );

    res.vsphereHostTop99p = ObjectSerializer.deserialize(
      data.vsphere_host_top99p,
      "number",
      "int64"
    );

    return res;
  }

  static serialize(data: UsageSummaryDateOrg): { [key: string]: any } {
    const attributeTypes = UsageSummaryDateOrg.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.agent_host_top99p = ObjectSerializer.serialize(
      data.agentHostTop99p,
      "number",
      "int64"
    );

    res.apm_azure_app_service_host_top99p = ObjectSerializer.serialize(
      data.apmAzureAppServiceHostTop99p,
      "number",
      "int64"
    );

    res.apm_host_top99p = ObjectSerializer.serialize(
      data.apmHostTop99p,
      "number",
      "int64"
    );

    res.audit_logs_lines_indexed_sum = ObjectSerializer.serialize(
      data.auditLogsLinesIndexedSum,
      "number",
      "int64"
    );

    res.aws_host_top99p = ObjectSerializer.serialize(
      data.awsHostTop99p,
      "number",
      "int64"
    );

    res.aws_lambda_func_count = ObjectSerializer.serialize(
      data.awsLambdaFuncCount,
      "number",
      "int64"
    );

    res.aws_lambda_invocations_sum = ObjectSerializer.serialize(
      data.awsLambdaInvocationsSum,
      "number",
      "int64"
    );

    res.azure_app_service_top99p = ObjectSerializer.serialize(
      data.azureAppServiceTop99p,
      "number",
      "int64"
    );

    res.billable_ingested_bytes_sum = ObjectSerializer.serialize(
      data.billableIngestedBytesSum,
      "number",
      "int64"
    );

    res.container_avg = ObjectSerializer.serialize(
      data.containerAvg,
      "number",
      "int64"
    );

    res.container_hwm = ObjectSerializer.serialize(
      data.containerHwm,
      "number",
      "int64"
    );

    res.cspm_container_avg = ObjectSerializer.serialize(
      data.cspmContainerAvg,
      "number",
      "int64"
    );

    res.cspm_container_hwm = ObjectSerializer.serialize(
      data.cspmContainerHwm,
      "number",
      "int64"
    );

    res.cspm_host_top99p = ObjectSerializer.serialize(
      data.cspmHostTop99p,
      "number",
      "int64"
    );

    res.custom_ts_avg = ObjectSerializer.serialize(
      data.customTsAvg,
      "number",
      "int64"
    );

    res.cws_container_count_avg = ObjectSerializer.serialize(
      data.cwsContainerCountAvg,
      "number",
      "int64"
    );

    res.cws_host_top99p = ObjectSerializer.serialize(
      data.cwsHostTop99p,
      "number",
      "int64"
    );

    res.fargate_tasks_count_avg = ObjectSerializer.serialize(
      data.fargateTasksCountAvg,
      "number",
      "int64"
    );

    res.fargate_tasks_count_hwm = ObjectSerializer.serialize(
      data.fargateTasksCountHwm,
      "number",
      "int64"
    );

    res.gcp_host_top99p = ObjectSerializer.serialize(
      data.gcpHostTop99p,
      "number",
      "int64"
    );

    res.heroku_host_top99p = ObjectSerializer.serialize(
      data.herokuHostTop99p,
      "number",
      "int64"
    );

    res.id = ObjectSerializer.serialize(data.id, "string", "");

    res.incident_management_monthly_active_users_hwm = ObjectSerializer.serialize(
      data.incidentManagementMonthlyActiveUsersHwm,
      "number",
      "int64"
    );

    res.indexed_events_count_sum = ObjectSerializer.serialize(
      data.indexedEventsCountSum,
      "number",
      "int64"
    );

    res.infra_host_top99p = ObjectSerializer.serialize(
      data.infraHostTop99p,
      "number",
      "int64"
    );

    res.ingested_events_bytes_sum = ObjectSerializer.serialize(
      data.ingestedEventsBytesSum,
      "number",
      "int64"
    );

    res.iot_device_agg_sum = ObjectSerializer.serialize(
      data.iotDeviceAggSum,
      "number",
      "int64"
    );

    res.iot_device_top99p_sum = ObjectSerializer.serialize(
      data.iotDeviceTop99pSum,
      "number",
      "int64"
    );

    res.mobile_rum_session_count_android_sum = ObjectSerializer.serialize(
      data.mobileRumSessionCountAndroidSum,
      "number",
      "int64"
    );

    res.mobile_rum_session_count_ios_sum = ObjectSerializer.serialize(
      data.mobileRumSessionCountIosSum,
      "number",
      "int64"
    );

    res.mobile_rum_session_count_sum = ObjectSerializer.serialize(
      data.mobileRumSessionCountSum,
      "number",
      "int64"
    );

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.netflow_indexed_events_count_sum = ObjectSerializer.serialize(
      data.netflowIndexedEventsCountSum,
      "number",
      "int64"
    );

    res.npm_host_top99p = ObjectSerializer.serialize(
      data.npmHostTop99p,
      "number",
      "int64"
    );

    res.opentelemetry_host_top99p = ObjectSerializer.serialize(
      data.opentelemetryHostTop99p,
      "number",
      "int64"
    );

    res.profiling_host_top99p = ObjectSerializer.serialize(
      data.profilingHostTop99p,
      "number",
      "int64"
    );

    res.public_id = ObjectSerializer.serialize(data.publicId, "string", "");

    res.rum_session_count_sum = ObjectSerializer.serialize(
      data.rumSessionCountSum,
      "number",
      "int64"
    );

    res.rum_total_session_count_sum = ObjectSerializer.serialize(
      data.rumTotalSessionCountSum,
      "number",
      "int64"
    );

    res.synthetics_browser_check_calls_count_sum = ObjectSerializer.serialize(
      data.syntheticsBrowserCheckCallsCountSum,
      "number",
      "int64"
    );

    res.synthetics_check_calls_count_sum = ObjectSerializer.serialize(
      data.syntheticsCheckCallsCountSum,
      "number",
      "int64"
    );

    res.trace_search_indexed_events_count_sum = ObjectSerializer.serialize(
      data.traceSearchIndexedEventsCountSum,
      "number",
      "int64"
    );

    res.twol_ingested_events_bytes_sum = ObjectSerializer.serialize(
      data.twolIngestedEventsBytesSum,
      "number",
      "int64"
    );

    res.vsphere_host_top99p = ObjectSerializer.serialize(
      data.vsphereHostTop99p,
      "number",
      "int64"
    );

    return res;
  }

  public constructor() {}
}
