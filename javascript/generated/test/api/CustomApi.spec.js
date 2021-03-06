/**
 * Adobe Experience Manager (AEM) API
 * Swagger AEM is an OpenAPI specification for Adobe Experience Manager (AEM) API
 *
 * OpenAPI spec version: 2.2.0
 * Contact: opensource@shinesolutions.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NodeSwaggerAem);
  }
}(this, function(expect, NodeSwaggerAem) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NodeSwaggerAem.CustomApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CustomApi', function() {
    describe('getAemHealthCheck', function() {
      it('should call getAemHealthCheck successfully', function(done) {
        //uncomment below and update the code to test getAemHealthCheck
        //instance.getAemHealthCheck(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postConfigAemHealthCheckServlet', function() {
      it('should call postConfigAemHealthCheckServlet successfully', function(done) {
        //uncomment below and update the code to test postConfigAemHealthCheckServlet
        //instance.postConfigAemHealthCheckServlet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postConfigAemPasswordReset', function() {
      it('should call postConfigAemPasswordReset successfully', function(done) {
        //uncomment below and update the code to test postConfigAemPasswordReset
        //instance.postConfigAemPasswordReset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
