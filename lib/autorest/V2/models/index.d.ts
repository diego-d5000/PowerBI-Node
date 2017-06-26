/*
 * Code generated by Microsoft (R) AutoRest Code Generator 1.1.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as moment from "moment";


/**
 * @class
 * Initializes a new instance of the Report class.
 * @constructor
 * A Power BI Report
 *
 * @member {string} [id] The report id
 *
 * @member {string} [name] The report name
 *
 * @member {string} [webUrl] The report web url
 *
 * @member {string} [embedUrl] The report embed url
 *
 * @member {string} [datasetId] The dataset id
 *
 */
export interface Report {
  id?: string;
  name?: string;
  webUrl?: string;
  embedUrl?: string;
  datasetId?: string;
}

/**
 * @class
 * Initializes a new instance of the Column class.
 * @constructor
 * A Power BI Column
 *
 * @member {string} name The column name
 *
 * @member {string} dataType The column data type
 *
 */
export interface Column {
  name: string;
  dataType: string;
}

/**
 * @class
 * Initializes a new instance of the Row class.
 * @constructor
 * A Power BI data row
 *
 * @member {string} [id] The unique row id
 *
 */
export interface Row {
  id?: string;
}

/**
 * @class
 * Initializes a new instance of the Table class.
 * @constructor
 * A dataset table
 *
 * @member {string} name The table name
 *
 * @member {array} columns The column schema for this table
 *
 * @member {array} [rows] The data rows within this tabe
 *
 */
export interface Table {
  name: string;
  columns: Column[];
  rows?: Row[];
}

/**
 * @class
 * Initializes a new instance of the Datasource class.
 * @constructor
 * A Power BI datasource
 *
 * @member {string} [name] The datasource name
 *
 * @member {string} [connectionString] The datasource connection string
 *
 */
export interface Datasource {
  name?: string;
  connectionString?: string;
}

/**
 * @class
 * Initializes a new instance of the Dataset class.
 * @constructor
 * A Power BI Dataset
 *
 * @member {string} [id] The dataset id
 *
 * @member {string} name The dataset name
 *
 * @member {string} [defaultRetentionPolicy] The dataset default data retention
 * policy
 *
 * @member {boolean} [addRowsAPIEnabled] Is Push Dataset
 *
 * @member {array} tables The dataset tables
 *
 * @member {string} [webUrl] The dataset web url
 *
 * @member {array} [datasources] The datasources associated with this dataset
 *
 * @member {string} [defaultMode] The dataset mode or type. Possible values
 * include: 'AsAzure', 'AsOnPrem', 'Push', 'Streaming', 'PushStreaming'
 *
 */
export interface Dataset {
  id?: string;
  name: string;
  defaultRetentionPolicy?: string;
  addRowsAPIEnabled?: boolean;
  tables: Table[];
  webUrl?: string;
  datasources?: Datasource[];
  defaultMode?: string;
}

/**
 * @class
 * Initializes a new instance of the ImportModel class.
 * @constructor
 * The import object
 *
 * @member {string} [id] The import id
 *
 * @member {string} [name] The import name name
 *
 * @member {string} [importState] The import upload state
 *
 * @member {array} [reports] The reports associated with this import
 *
 * @member {array} [datasets] The datasets associated with this import
 *
 * @member {date} [createdDateTime] Import creation time
 *
 * @member {date} [updatedDateTime] Import last update time
 *
 */
export interface ImportModel {
  id?: string;
  name?: string;
  importState?: string;
  reports?: Report[];
  datasets?: Dataset[];
  createdDateTime?: Date;
  updatedDateTime?: Date;
}

/**
 * @class
 * Initializes a new instance of the ImportInfo class.
 * @constructor
 * The import info
 *
 * @member {string} [filePath] The file path to import
 *
 * @member {string} [connectionType] The import connection type
 *
 */
export interface ImportInfo {
  filePath?: string;
  connectionType?: string;
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListDataset class.
 * @constructor
 * A dataset odata list wrapper
 *
 * @member {string} [odatacontext] OData context
 *
 * @member {array} [value] The datasets
 *
 */
export interface ODataResponseListDataset {
  odatacontext?: string;
  value?: Dataset[];
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListTable class.
 * @constructor
 * Odata response wrapper for a Power BI Table collection
 *
 * @member {string} [odatacontext] OData context
 *
 * @member {array} [value] The Power BI tables
 *
 */
export interface ODataResponseListTable {
  odatacontext?: string;
  value?: Table[];
}

/**
 * @class
 * Initializes a new instance of the BasicCredentials class.
 * @constructor
 * Object representing basic authentication credentials
 *
 * @member {string} [username] Username required to access the datasource
 *
 * @member {string} [password] Password required to access the datasource
 *
 */
export interface BasicCredentials {
  username?: string;
  password?: string;
}

/**
 * @class
 * Initializes a new instance of the GatewayDatasource class.
 * @constructor
 * A Power BI gateway datasource
 *
 * @member {string} [id] The unique id for this gateway datasource
 *
 * @member {string} [gatewayId] The associated gateway id
 *
 * @member {string} [datasourceName] The datasource name
 *
 * @member {string} [datasourceType] The datasource type
 *
 * @member {string} [connectionDetails] The datasource connection details
 *
 * @member {string} [credentialType] The datasource credential type
 *
 * @member {object} [basicCredentials] The datasource basic credential
 *
 * @member {string} [basicCredentials.username] Username required to access the
 * datasource
 *
 * @member {string} [basicCredentials.password] Password required to access the
 * datasource
 *
 */
export interface GatewayDatasource {
  id?: string;
  gatewayId?: string;
  datasourceName?: string;
  datasourceType?: string;
  connectionDetails?: string;
  credentialType?: string;
  basicCredentials?: BasicCredentials;
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListGatewayDatasource class.
 * @constructor
 * Odata response wrapper for a Power BI Gateway datasource collection
 *
 * @member {string} [odatacontext] OData context
 *
 * @member {array} [value] The gateway datasources
 *
 */
export interface ODataResponseListGatewayDatasource {
  odatacontext?: string;
  value?: GatewayDatasource[];
}

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
export interface ODataResponseListDatasource {
  odatacontext?: string;
  value?: Datasource[];
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListReport class.
 * @constructor
 * Odata response wrapper for a Power BI Report collection
 *
 * @member {string} [odatacontext] OData context
 *
 * @member {array} [value] The report collection
 *
 */
export interface ODataResponseListReport {
  odatacontext?: string;
  value?: Report[];
}

/**
 * @class
 * Initializes a new instance of the Dashboard class.
 * @constructor
 * A Power BI Dashboard
 *
 * @member {string} [id] The dashboard id
 *
 * @member {string} [displayName] The dashboard display name
 *
 * @member {boolean} [isReadOnly] Is ReadOnly dashboard
 *
 * @member {string} [embedUrl] The dashboard embed url
 *
 */
export interface Dashboard {
  id?: string;
  displayName?: string;
  isReadOnly?: boolean;
  embedUrl?: string;
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListDashboard class.
 * @constructor
 * Odata response wrapper for a Power BI Dashboard collection
 *
 * @member {string} [odatacontext] OData context
 *
 * @member {array} [value] The dashboard collection
 *
 */
export interface ODataResponseListDashboard {
  odatacontext?: string;
  value?: Dashboard[];
}

/**
 * @class
 * Initializes a new instance of the Tile class.
 * @constructor
 * A Power BI Tile
 *
 * @member {string} [id] The tile id
 *
 * @member {string} [title] The dashboard display name
 *
 * @member {number} [rowSpan] number of rows a tile should span
 *
 * @member {number} [colSpan] number of columns a tile should span
 *
 * @member {string} [embedUrl] The tile embed url
 *
 * @member {string} [embedData] The tile embed data
 *
 */
export interface Tile {
  id?: string;
  title?: string;
  rowSpan?: number;
  colSpan?: number;
  embedUrl?: string;
  embedData?: string;
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListTile class.
 * @constructor
 * Odata response wrapper for a Power BI Tile collection
 *
 * @member {string} [odatacontext] OData context
 *
 * @member {array} [value] The tile collection
 *
 */
export interface ODataResponseListTile {
  odatacontext?: string;
  value?: Tile[];
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListImport class.
 * @constructor
 * Odata response wrapper for a Power BI Import collection
 *
 * @member {string} [odatacontext] OData context
 *
 * @member {array} [value] The imports collection
 *
 */
export interface ODataResponseListImport {
  odatacontext?: string;
  value?: ImportModel[];
}

/**
 * @class
 * Initializes a new instance of the Group class.
 * @constructor
 * A Power BI Group
 *
 * @member {string} [id] The group id
 *
 * @member {string} [name] The group name
 *
 * @member {boolean} [isReadOnly] Is ReadOnly group
 *
 */
export interface Group {
  id?: string;
  name?: string;
  isReadOnly?: boolean;
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListGroup class.
 * @constructor
 * Odata response wrapper for a Power BI Group list
 *
 * @member {string} [odatacontext] OData context
 *
 * @member {array} [value] The groups
 *
 */
export interface ODataResponseListGroup {
  odatacontext?: string;
  value?: Group[];
}

/**
 * @class
 * Initializes a new instance of the GatewayPublicKey class.
 * @constructor
 * A Power BI Gateway Public Key
 *
 * @member {string} [exponent] The public key exponent
 *
 * @member {string} [modulus] The public key  modulus
 *
 */
export interface GatewayPublicKey {
  exponent?: string;
  modulus?: string;
}

/**
 * @class
 * Initializes a new instance of the Gateway class.
 * @constructor
 * A Power BI Gateway
 *
 * @member {string} [id] The gateway id
 *
 * @member {string} [name] The gateway name
 *
 * @member {string} [type] The gateway type
 *
 * @member {string} [gatewayAnnotation] The gateway annotation
 *
 * @member {object} [publicKey] The gateway public key
 *
 * @member {string} [publicKey.exponent] The public key exponent
 *
 * @member {string} [publicKey.modulus] The public key  modulus
 *
 * @member {string} [gatewayStatus] The gateway connectivity status
 *
 */
export interface Gateway {
  id?: string;
  name?: string;
  type?: string;
  gatewayAnnotation?: string;
  publicKey?: GatewayPublicKey;
  gatewayStatus?: string;
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListGateway class.
 * @constructor
 * Odata response wrapper for a Power BI Gateways list
 *
 * @member {string} [odatacontext]
 *
 * @member {array} [value] The Gateways
 *
 */
export interface ODataResponseListGateway {
  odatacontext?: string;
  value?: Gateway[];
}

/**
 * @class
 * Initializes a new instance of the Refresh class.
 * @constructor
 * A Power BI refresh history entry
 *
 * @member {string} [refreshType]
 *
 * @member {date} [startTime]
 *
 * @member {date} [endTime]
 *
 * @member {string} [serviceExceptionJson]
 *
 * @member {string} [status]
 *
 */
export interface Refresh {
  refreshType?: string;
  startTime?: Date;
  endTime?: Date;
  serviceExceptionJson?: string;
  status?: string;
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListRefresh class.
 * @constructor
 * Odata response wrapper for a Power BI Refresh history
 *
 * @member {string} [odatacontext]
 *
 * @member {array} [value] The Refresh history list
 *
 */
export interface ODataResponseListRefresh {
  odatacontext?: string;
  value?: Refresh[];
}

/**
 * @class
 * Initializes a new instance of the UserAccessRight class.
 * @constructor
 * A Power BI user Access Right entry
 *
 * @member {string} [accessRight]
 *
 * @member {string} [emailAddress]
 *
 */
export interface UserAccessRight {
  accessRight?: string;
  emailAddress?: string;
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListUserAccessRight class.
 * @constructor
 * Odata response wrapper for a Power BI user Access Right List
 *
 * @member {string} [odatacontext]
 *
 * @member {array} [value] The user Access Right List
 *
 */
export interface ODataResponseListUserAccessRight {
  odatacontext?: string;
  value?: UserAccessRight[];
}

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
export interface CredentialDetails {
  credentials?: string;
  credentialType?: string;
  encryptedConnection?: string;
  encryptionAlgorithm?: string;
  privacyLevel?: string;
}

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
export interface PublishDatasourceToGatewayRequest {
  dataSourceType?: string;
  connectionDetails?: string;
  credentialDetails?: CredentialDetails;
  dataSourceName?: string;
}

/**
 * @class
 * Initializes a new instance of the UpdateDatasourceRequest class.
 * @constructor
 * An Update Datasource To Gateway Request
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
 */
export interface UpdateDatasourceRequest {
  credentialDetails?: CredentialDetails;
}

/**
 * @class
 * Initializes a new instance of the BindToGatewayRequest class.
 * @constructor
 * The Bind dataset to gateway request
 *
 * @member {string} [gatewayObjectId] The gateway id
 *
 */
export interface BindToGatewayRequest {
  gatewayObjectId?: string;
}

/**
 * @class
 * Initializes a new instance of the ConnectionDetails class.
 * @constructor
 * Connection String wrapper.
 *
 * @member {string} [connectionString] A dataset connection string.
 *
 */
export interface ConnectionDetails {
  connectionString?: string;
}

/**
 * @class
 * Initializes a new instance of the CloneReportRequest class.
 * @constructor
 * Power BI Clone Report Request
 *
 * @member {string} [name] The requested report name
 *
 * @member {string} [targetWorkspaceId] Optional parameter for specifying the
 * target workspace id
 *
 * @member {string} [targetModelId] Optional parameter for specifying the
 * target associated model (dataset) id
 *
 */
export interface CloneReportRequest {
  name?: string;
  targetWorkspaceId?: string;
  targetModelId?: string;
}

/**
 * @class
 * Initializes a new instance of the RebindReportRequest class.
 * @constructor
 * Power BI Rebind Report Request
 *
 * @member {string} [datasetId] The new dataset of the rebinded report
 *
 */
export interface RebindReportRequest {
  datasetId?: string;
}

/**
 * @class
 * Initializes a new instance of the GenerateTokenRequest class.
 * @constructor
 * Power BI Generate Token Request
 *
 * @member {string} [accessLevel] The dataset mode or type. Possible values
 * include: 'View', 'Edit', 'Create'
 *
 * @member {string} [datasetId] The new dataset of the rebinded report
 *
 * @member {boolean} [allowSaveAs] Allow SaveAs the report with generated
 * token.
 *
 */
export interface GenerateTokenRequest {
  accessLevel?: string;
  datasetId?: string;
  allowSaveAs?: boolean;
}

/**
 * @class
 * Initializes a new instance of the EmbedToken class.
 * @constructor
 * Power BI Embed Token
 *
 * @member {string} [token] Embed token.
 *
 * @member {string} [tokenId] Unique token Id.
 *
 * @member {date} [expiration] Expiration time of token - in UTC.
 *
 */
export interface EmbedToken {
  token?: string;
  tokenId?: string;
  expiration?: Date;
}
