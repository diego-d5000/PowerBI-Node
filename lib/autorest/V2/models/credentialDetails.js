/*
 * Code generated by Microsoft (R) AutoRest Code Generator 1.1.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the CredentialDetails class.
 * @constructor
 * The credential details
 *
 * @member {string} [credentials] The credentials
 *
 * @member {string} [credentialType] The connection type
 *
 * @member {string} [encryptedConnection] The encrypted connection
 *
 * @member {string} [encryptionAlgorithm] The encryption algorithm
 *
 * @member {string} [privacyLevel] The privacy level
 *
 */
class CredentialDetails {
  constructor() {
  }

  /**
   * Defines the metadata of CredentialDetails
   *
   * @returns {object} metadata of CredentialDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CredentialDetails',
      type: {
        name: 'Composite',
        className: 'CredentialDetails',
        modelProperties: {
          credentials: {
            required: false,
            serializedName: 'credentials',
            type: {
              name: 'String'
            }
          },
          credentialType: {
            required: false,
            serializedName: 'credentialType',
            type: {
              name: 'String'
            }
          },
          encryptedConnection: {
            required: false,
            serializedName: 'encryptedConnection',
            type: {
              name: 'String'
            }
          },
          encryptionAlgorithm: {
            required: false,
            serializedName: 'encryptionAlgorithm',
            type: {
              name: 'String'
            }
          },
          privacyLevel: {
            required: false,
            serializedName: 'privacyLevel',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CredentialDetails;