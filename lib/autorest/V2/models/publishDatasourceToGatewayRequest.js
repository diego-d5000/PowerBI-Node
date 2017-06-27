/*
 * Code generated by Microsoft (R) AutoRest Code Generator 1.1.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the PublishDatasourceToGatewayRequest class.
 * @constructor
 * A Publish Datasource To Gateway Request
 *
 * @member {string} [dataSourceType] The datasource type
 *
 * @member {string} [connectionDetails] The connection details
 *
 * @member {object} [credentialDetails]
 *
 * @member {string} [credentialDetails.credentials] The credentials
 *
 * @member {string} [credentialDetails.credentialType] The connection type
 *
 * @member {string} [credentialDetails.encryptedConnection] The encrypted
 * connection
 *
 * @member {string} [credentialDetails.encryptionAlgorithm] The encryption
 * algorithm
 *
 * @member {string} [credentialDetails.privacyLevel] The privacy level
 *
 * @member {string} [dataSourceName] The datasource name
 *
 */
class PublishDatasourceToGatewayRequest {
  constructor() {
  }

  /**
   * Defines the metadata of PublishDatasourceToGatewayRequest
   *
   * @returns {object} metadata of PublishDatasourceToGatewayRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PublishDatasourceToGatewayRequest',
      type: {
        name: 'Composite',
        className: 'PublishDatasourceToGatewayRequest',
        modelProperties: {
          dataSourceType: {
            required: false,
            serializedName: 'dataSourceType',
            type: {
              name: 'String'
            }
          },
          connectionDetails: {
            required: false,
            serializedName: 'connectionDetails',
            type: {
              name: 'String'
            }
          },
          credentialDetails: {
            required: false,
            serializedName: 'credentialDetails',
            type: {
              name: 'Composite',
              className: 'CredentialDetails'
            }
          },
          dataSourceName: {
            required: false,
            serializedName: 'dataSourceName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PublishDatasourceToGatewayRequest;