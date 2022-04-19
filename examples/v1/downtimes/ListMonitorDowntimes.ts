/**
 * Get all downtimes for a monitor returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

const params: v1.DowntimesApiListMonitorDowntimesRequest = {
  monitorId: 9223372036854775807,
};

apiInstance
  .listMonitorDowntimes(params)
  .then((data: v1.Downtime[]) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));