/**
 * Adobe Experience Manager (AEM) API
 * Swagger AEM is an OpenAPI specification for Adobe Experience Manager (AEM) API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: opensource@shinesolutions.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* Console service.
* @module api/ConsoleApi
* @version 0.9.0
*/
export default class ConsoleApi {

    /**
    * Constructs a new ConsoleApi. 
    * @alias module:api/ConsoleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the postBundle operation.
     * @callback module:api/ConsoleApi~postBundleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} name 
     * @param {String} action 
     * @param {module:api/ConsoleApi~postBundleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postBundle(name, action, callback) {
      let postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling postBundle");
      }

      // verify the required parameter 'action' is set
      if (action === undefined || action === null) {
        throw new Error("Missing the required parameter 'action' when calling postBundle");
      }


      let pathParams = {
        'name': name
      };
      let queryParams = {
        'action': action
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['aemAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;

      return this.apiClient.callApi(
        '/system/console/bundles/{name}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postJmxRepository operation.
     * @callback module:api/ConsoleApi~postJmxRepositoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} action 
     * @param {module:api/ConsoleApi~postJmxRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    postJmxRepository(action, callback) {
      let postBody = null;

      // verify the required parameter 'action' is set
      if (action === undefined || action === null) {
        throw new Error("Missing the required parameter 'action' when calling postJmxRepository");
      }


      let pathParams = {
        'action': action
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['aemAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;

      return this.apiClient.callApi(
        '/system/console/jmx/com.adobe.granite:type=Repository/op/{action}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
