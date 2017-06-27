/*
 * Code generated by Microsoft (R) AutoRest Code Generator 1.1.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ODataResponseListDatasource class.
 * @constructor
 * Odata response wrapper for a Power BI datasource collection
 *
 * @member {string} [odatacontext] OData context
 *
 * @member {array} [value] The datasource collection
 *
 */
class ODataResponseListDatasource {
  constructor() {
  }

  /**
   * Defines the metadata of ODataResponseListDatasource
   *
   * @returns {object} metadata of ODataResponseListDatasource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ODataResponse[List[Datasource]]',
      type: {
        name: 'Composite',
        className: 'ODataResponseListDatasource',
        modelProperties: {
          odatacontext: {
            required: false,
            serializedName: 'odata\\.context',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DatasourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'Datasource'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ODataResponseListDatasource;