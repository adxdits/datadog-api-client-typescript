import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  applySecurityAuthentication,
} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { DowntimeCreateRequest } from "../models/DowntimeCreateRequest";
import { DowntimeResponse } from "../models/DowntimeResponse";
import { DowntimeUpdateRequest } from "../models/DowntimeUpdateRequest";
import { ListDowntimesResponse } from "../models/ListDowntimesResponse";
import { MonitorDowntimeMatchResponse } from "../models/MonitorDowntimeMatchResponse";

export class DowntimesApiRequestFactory extends BaseAPIRequestFactory {
  public async cancelDowntime(
    downtimeId: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'cancelDowntime'");
    if (!_config.unstableOperations["v2.cancelDowntime"]) {
      throw new Error("Unstable operation 'cancelDowntime' is disabled");
    }

    // verify required parameter 'downtimeId' is not null or undefined
    if (downtimeId === null || downtimeId === undefined) {
      throw new RequiredError("downtimeId", "cancelDowntime");
    }

    // Path Params
    const localVarPath = "/api/v2/downtime/{downtime_id}".replace(
      "{downtime_id}",
      encodeURIComponent(String(downtimeId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DowntimesApi.cancelDowntime")
      .makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createDowntime(
    body: DowntimeCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'createDowntime'");
    if (!_config.unstableOperations["v2.createDowntime"]) {
      throw new Error("Unstable operation 'createDowntime' is disabled");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createDowntime");
    }

    // Path Params
    const localVarPath = "/api/v2/downtime";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DowntimesApi.createDowntime")
      .makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DowntimeCreateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async getDowntime(
    downtimeId: string,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'getDowntime'");
    if (!_config.unstableOperations["v2.getDowntime"]) {
      throw new Error("Unstable operation 'getDowntime' is disabled");
    }

    // verify required parameter 'downtimeId' is not null or undefined
    if (downtimeId === null || downtimeId === undefined) {
      throw new RequiredError("downtimeId", "getDowntime");
    }

    // Path Params
    const localVarPath = "/api/v2/downtime/{downtime_id}".replace(
      "{downtime_id}",
      encodeURIComponent(String(downtimeId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DowntimesApi.getDowntime")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listDowntimes(
    currentOnly?: boolean,
    include?: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listDowntimes'");
    if (!_config.unstableOperations["v2.listDowntimes"]) {
      throw new Error("Unstable operation 'listDowntimes' is disabled");
    }

    // Path Params
    const localVarPath = "/api/v2/downtime";

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DowntimesApi.listDowntimes")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (currentOnly !== undefined) {
      requestContext.setQueryParam(
        "current_only",
        ObjectSerializer.serialize(currentOnly, "boolean", "")
      );
    }
    if (include !== undefined) {
      requestContext.setQueryParam(
        "include",
        ObjectSerializer.serialize(include, "string", "")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listMonitorDowntimes(
    monitorId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'listMonitorDowntimes'");
    if (!_config.unstableOperations["v2.listMonitorDowntimes"]) {
      throw new Error("Unstable operation 'listMonitorDowntimes' is disabled");
    }

    // verify required parameter 'monitorId' is not null or undefined
    if (monitorId === null || monitorId === undefined) {
      throw new RequiredError("monitorId", "listMonitorDowntimes");
    }

    // Path Params
    const localVarPath =
      "/api/v2/monitor/{monitor_id}/downtime_matches".replace(
        "{monitor_id}",
        encodeURIComponent(String(monitorId))
      );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DowntimesApi.listMonitorDowntimes")
      .makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateDowntime(
    downtimeId: string,
    body: DowntimeUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    logger.warn("Using unstable operation 'updateDowntime'");
    if (!_config.unstableOperations["v2.updateDowntime"]) {
      throw new Error("Unstable operation 'updateDowntime' is disabled");
    }

    // verify required parameter 'downtimeId' is not null or undefined
    if (downtimeId === null || downtimeId === undefined) {
      throw new RequiredError("downtimeId", "updateDowntime");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateDowntime");
    }

    // Path Params
    const localVarPath = "/api/v2/downtime/{downtime_id}".replace(
      "{downtime_id}",
      encodeURIComponent(String(downtimeId))
    );

    // Make Request Context
    const requestContext = _config
      .getServer("v2.DowntimesApi.updateDowntime")
      .makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "DowntimeUpdateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class DowntimesApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to cancelDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async cancelDowntime(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 204) {
      return;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createDowntime(
    response: ResponseContext
  ): Promise<DowntimeResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: DowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DowntimeResponse"
      ) as DowntimeResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DowntimeResponse",
        ""
      ) as DowntimeResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getDowntime(
    response: ResponseContext
  ): Promise<DowntimeResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: DowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DowntimeResponse"
      ) as DowntimeResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DowntimeResponse",
        ""
      ) as DowntimeResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listDowntimes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listDowntimes(
    response: ResponseContext
  ): Promise<ListDowntimesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: ListDowntimesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListDowntimesResponse"
      ) as ListDowntimesResponse;
      return body;
    }
    if (response.httpStatusCode == 403 || response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ListDowntimesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ListDowntimesResponse",
        ""
      ) as ListDowntimesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listMonitorDowntimes
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMonitorDowntimes(
    response: ResponseContext
  ): Promise<MonitorDowntimeMatchResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: MonitorDowntimeMatchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorDowntimeMatchResponse"
      ) as MonitorDowntimeMatchResponse;
      return body;
    }
    if (response.httpStatusCode == 404 || response.httpStatusCode == 429) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MonitorDowntimeMatchResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MonitorDowntimeMatchResponse",
        ""
      ) as MonitorDowntimeMatchResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateDowntime
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateDowntime(
    response: ResponseContext
  ): Promise<DowntimeResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: DowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DowntimeResponse"
      ) as DowntimeResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DowntimeResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DowntimeResponse",
        ""
      ) as DowntimeResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface DowntimesApiCancelDowntimeRequest {
  /**
   * ID of the downtime to cancel.
   * @type string
   */
  downtimeId: string;
}

export interface DowntimesApiCreateDowntimeRequest {
  /**
   * Schedule a downtime request body.
   * @type DowntimeCreateRequest
   */
  body: DowntimeCreateRequest;
}

export interface DowntimesApiGetDowntimeRequest {
  /**
   * ID of the downtime to fetch.
   * @type string
   */
  downtimeId: string;
  /**
   * Comma-separated list of resource paths for related resources to include in the response. Supported resource
   * paths are `created_by` and `monitor`.
   * @type string
   */
  include?: string;
}

export interface DowntimesApiListDowntimesRequest {
  /**
   * Only return downtimes that are active when the request is made.
   * @type boolean
   */
  currentOnly?: boolean;
  /**
   * Comma-separated list of resource paths for related resources to include in the response. Supported resource
   * paths are `created_by` and `monitor`.
   * @type string
   */
  include?: string;
}

export interface DowntimesApiListMonitorDowntimesRequest {
  /**
   * The id of the monitor.
   * @type number
   */
  monitorId: number;
}

export interface DowntimesApiUpdateDowntimeRequest {
  /**
   * ID of the downtime to update.
   * @type string
   */
  downtimeId: string;
  /**
   * Update a downtime request body.
   * @type DowntimeUpdateRequest
   */
  body: DowntimeUpdateRequest;
}

export class DowntimesApi {
  private requestFactory: DowntimesApiRequestFactory;
  private responseProcessor: DowntimesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DowntimesApiRequestFactory,
    responseProcessor?: DowntimesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new DowntimesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DowntimesApiResponseProcessor();
  }

  /**
   * Cancel a downtime.
   * @param param The request object
   */
  public cancelDowntime(
    param: DowntimesApiCancelDowntimeRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.cancelDowntime(
      param.downtimeId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelDowntime(responseContext);
        });
    });
  }

  /**
   * Schedule a downtime.
   * @param param The request object
   */
  public createDowntime(
    param: DowntimesApiCreateDowntimeRequest,
    options?: Configuration
  ): Promise<DowntimeResponse> {
    const requestContextPromise = this.requestFactory.createDowntime(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDowntime(responseContext);
        });
    });
  }

  /**
   * Get downtime detail by `downtime_id`.
   * @param param The request object
   */
  public getDowntime(
    param: DowntimesApiGetDowntimeRequest,
    options?: Configuration
  ): Promise<DowntimeResponse> {
    const requestContextPromise = this.requestFactory.getDowntime(
      param.downtimeId,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDowntime(responseContext);
        });
    });
  }

  /**
   * Get all scheduled downtimes.
   * @param param The request object
   */
  public listDowntimes(
    param: DowntimesApiListDowntimesRequest = {},
    options?: Configuration
  ): Promise<ListDowntimesResponse> {
    const requestContextPromise = this.requestFactory.listDowntimes(
      param.currentOnly,
      param.include,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDowntimes(responseContext);
        });
    });
  }

  /**
   * Get all active downtimes for the specified monitor.
   * @param param The request object
   */
  public listMonitorDowntimes(
    param: DowntimesApiListMonitorDowntimesRequest,
    options?: Configuration
  ): Promise<MonitorDowntimeMatchResponse> {
    const requestContextPromise = this.requestFactory.listMonitorDowntimes(
      param.monitorId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMonitorDowntimes(responseContext);
        });
    });
  }

  /**
   * Update a downtime by `downtime_id`.
   * @param param The request object
   */
  public updateDowntime(
    param: DowntimesApiUpdateDowntimeRequest,
    options?: Configuration
  ): Promise<DowntimeResponse> {
    const requestContextPromise = this.requestFactory.updateDowntime(
      param.downtimeId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDowntime(responseContext);
        });
    });
  }
}
