/*
 * Code generated by Microsoft (R) AutoRest Code Generator 1.1.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the Row class.
 * @constructor
 * A Power BI data row
 *
 * @member {string} [id] The unique row id
 *
 */
class Row {
  constructor() {
  }

  /**
   * Defines the metadata of Row
   *
   * @returns {object} metadata of Row
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Row',
      type: {
        name: 'Composite',
        className: 'Row',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Row;