/**
 * Update items of a dashboard list returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.DashboardListsApi(configuration);

// there is a valid "dashboard_list" in the system
const DASHBOARD_LIST_ID = parseInt(process.env.DASHBOARD_LIST_ID as string);

// there is a valid "screenboard_dashboard" in the system
const SCREENBOARD_DASHBOARD_ID = process.env.SCREENBOARD_DASHBOARD_ID as string;

const params: v2.DashboardListsApiUpdateDashboardListItemsRequest = {
  body: {
    dashboards: [
      {
        id: SCREENBOARD_DASHBOARD_ID,
        type: "custom_screenboard",
      },
    ],
  },
  dashboardListId: DASHBOARD_LIST_ID,
};

apiInstance
  .updateDashboardListItems(params)
  .then((data: v2.DashboardListUpdateItemsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));