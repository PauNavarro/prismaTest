
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
 */
Prisma.prismaVersion = {
  client: "4.9.0",
  engine: "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AbsenceTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  rgb: 'rgb',
  color: 'color',
  permissionRate: 'permissionRate',
  code: 'code',
  isAllowedToWork: 'isAllowedToWork',
  isPrintable: 'isPrintable',
  discountRate: 'discountRate',
  holidayEntitlementRate: 'holidayEntitlementRate',
  isNaturalDay: 'isNaturalDay',
  isCalculate: 'isCalculate'
});

exports.Prisma.AccountingConfigScalarFieldEnum = makeEnum({
  id: 'id',
  minDate: 'minDate',
  maxDate: 'maxDate'
});

exports.Prisma.AccountingScalarFieldEnum = makeEnum({
  id: 'id',
  bank: 'bank',
  account: 'account',
  accountingTypeFk: 'accountingTypeFk',
  entityFk: 'entityFk',
  isActive: 'isActive',
  currencyFk: 'currencyFk',
  code: 'code'
});

exports.Prisma.AccountingTypeScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  receiptDescription: 'receiptDescription',
  code: 'code',
  isAutoConciliated: 'isAutoConciliated',
  maxAmount: 'maxAmount',
  daysInFuture: 'daysInFuture'
});

exports.Prisma.ActivityTaxDismissedScalarFieldEnum = makeEnum({
  clientFk: 'clientFk',
  isNotified: 'isNotified',
  isDismissed: 'isDismissed',
  notified: 'notified'
});

exports.Prisma.AddressFilterScalarFieldEnum = makeEnum({
  id: 'id',
  created: 'created',
  provinceFk: 'provinceFk',
  countryFk: 'countryFk',
  isLogifloraAllowed: 'isLogifloraAllowed',
  isVNHSupplier: 'isVNHSupplier',
  isEarlyBird: 'isEarlyBird',
  warehouseFk: 'warehouseFk',
  beforeDated: 'beforeDated',
  afterDated: 'afterDated'
});

exports.Prisma.AddressForPackagingScalarFieldEnum = makeEnum({
  addressFk: 'addressFk',
  packagingValue: 'packagingValue'
});

exports.Prisma.AddressObservationScalarFieldEnum = makeEnum({
  id: 'id',
  addressFk: 'addressFk',
  observationTypeFk: 'observationTypeFk',
  description: 'description'
});

exports.Prisma.AddressScalarFieldEnum = makeEnum({
  id: 'id',
  clientFk: 'clientFk',
  street: 'street',
  city: 'city',
  provinceFk: 'provinceFk',
  postalCode: 'postalCode',
  phone: 'phone',
  mobile: 'mobile',
  nickname: 'nickname',
  isDefaultAddress: 'isDefaultAddress',
  agencyModeFk: 'agencyModeFk',
  isActive: 'isActive',
  longitude: 'longitude',
  latitude: 'latitude',
  isEqualizated: 'isEqualizated',
  customsAgentFk: 'customsAgentFk',
  incotermsFk: 'incotermsFk',
  isLogifloraAllowed: 'isLogifloraAllowed'
});

exports.Prisma.AgencyExtraChargeScalarFieldEnum = makeEnum({
  id: 'id',
  agencyFk: 'agencyFk',
  sizeMin: 'sizeMin',
  sizeMax: 'sizeMax',
  sinced: 'sinced',
  price: 'price'
});

exports.Prisma.AgencyModeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  deliveryMethodFk: 'deliveryMethodFk',
  m3: 'm3',
  web: 'web',
  agencyFk: 'agencyFk',
  inflation: 'inflation',
  isVolumetric: 'isVolumetric',
  reportMail: 'reportMail',
  showAgencyName: 'showAgencyName',
  isActive: 'isActive',
  isExternalAgency: 'isExternalAgency',
  flag: 'flag',
  code: 'code',
  isRiskFree: 'isRiskFree',
  hasWeightVolumetric: 'hasWeightVolumetric'
});

exports.Prisma.AgencyScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  warehouseFk: 'warehouseFk',
  warehouseAliasFk: 'warehouseAliasFk',
  isOwn: 'isOwn',
  workCenterFk: 'workCenterFk',
  isAnyVolumeAllowed: 'isAnyVolumeAllowed'
});

exports.Prisma.AgencyTermConfigScalarFieldEnum = makeEnum({
  id: 'id',
  expenceFk: 'expenceFk',
  vatAccountSupported: 'vatAccountSupported',
  vatPercentage: 'vatPercentage',
  transaction: 'transaction'
});

exports.Prisma.AlertLevelScalarFieldEnum = makeEnum({
  code: 'code',
  id: 'id'
});

exports.Prisma.AmortizationTypeScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description'
});

exports.Prisma.AssignedTicketToWorkerScalarFieldEnum = makeEnum({
  id: 'id',
  idWorker: 'idWorker',
  idTicket: 'idTicket'
});

exports.Prisma.AutoRadioConfigScalarFieldEnum = makeEnum({
  id: 'id',
  password: 'password',
  user: 'user',
  url: 'url',
  client: 'client',
  center: 'center'
});

exports.Prisma.AutoRadioLogCallScalarFieldEnum = makeEnum({
  id: 'id',
  ticketFk: 'ticketFk',
  created: 'created',
  response: 'response'
});

exports.Prisma.AutonomyScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  countryFk: 'countryFk',
  geoFk: 'geoFk'
});

exports.Prisma.AwbScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  package: 'package',
  weight: 'weight',
  created: 'created',
  transitoryFk: 'transitoryFk',
  taxFk: 'taxFk',
  duakk: 'duakk',
  docFk: 'docFk',
  amount: 'amount',
  freightFk: 'freightFk',
  m3: 'm3',
  stems: 'stems',
  flightFk: 'flightFk',
  volumeWeight: 'volumeWeight',
  hb: 'hb',
  rate: 'rate',
  booked: 'booked',
  issued: 'issued',
  operated: 'operated',
  bookEntried: 'bookEntried',
  invoiceInFk: 'invoiceInFk',
  isChecked: 'isChecked',
  isTransitoryChecked: 'isTransitoryChecked',
  year: 'year',
  observation: 'observation',
  hasFreightPrepaid: 'hasFreightPrepaid',
  invoiceInPaletizedFk: 'invoiceInPaletizedFk',
  propertyNumber: 'propertyNumber'
});

exports.Prisma.BankEntityConfigScalarFieldEnum = makeEnum({
  id: 'id',
  bicLength: 'bicLength'
});

exports.Prisma.BankEntityScalarFieldEnum = makeEnum({
  countryFk: 'countryFk',
  id: 'id',
  name: 'name',
  bic: 'bic'
});

exports.Prisma.BeachScalarFieldEnum = makeEnum({
  code: 'code',
  warehouseFk: 'warehouseFk'
});

exports.Prisma.BionicConfigScalarFieldEnum = makeEnum({
  id: 'id',
  generalInflationCoeficient: 'generalInflationCoeficient',
  minimumDensityVolumetricWeight: 'minimumDensityVolumetricWeight',
  verdnaturaVolumeBox: 'verdnaturaVolumeBox',
  itemCarryBox: 'itemCarryBox'
});

exports.Prisma.BookingPlannerScalarFieldEnum = makeEnum({
  id: 'id',
  effectived: 'effectived',
  pgcFk: 'pgcFk',
  taxAreaFk: 'taxAreaFk',
  priority: 'priority',
  taxClassFk: 'taxClassFk',
  countryFk: 'countryFk'
});

exports.Prisma.BotanicExportScalarFieldEnum = makeEnum({
  id: 'id',
  ediGenusFk: 'ediGenusFk',
  ediSpecieFk: 'ediSpecieFk',
  countryFk: 'countryFk',
  restriction: 'restriction',
  description: 'description',
  isProtectedZone: 'isProtectedZone',
  code: 'code'
});

exports.Prisma.BudgetDmsScalarFieldEnum = makeEnum({
  id: 'id',
  budgetFk: 'budgetFk',
  dmsFk: 'dmsFk'
});

exports.Prisma.BudgetInvoiceInScalarFieldEnum = makeEnum({
  id: 'id',
  budgetFk: 'budgetFk',
  created: 'created',
  invoiceInFk: 'invoiceInFk',
  amount: 'amount'
});

exports.Prisma.BudgetNotesScalarFieldEnum = makeEnum({
  id: 'id',
  budgetFk: 'budgetFk',
  created: 'created',
  txt: 'txt',
  userFk: 'userFk'
});

exports.Prisma.BudgetScalarFieldEnum = makeEnum({
  id: 'id',
  created: 'created',
  name: 'name',
  started: 'started',
  finished: 'finished',
  userFk: 'userFk',
  departmentFk: 'departmentFk',
  supplierFk: 'supplierFk',
  photo: 'photo',
  amount: 'amount',
  projectFk: 'projectFk'
});

exports.Prisma.BusinessReasonEndScalarFieldEnum = makeEnum({
  id: 'id',
  reason: 'reason'
});

exports.Prisma.BusinessScalarFieldEnum = makeEnum({
  id: 'id',
  companyCodeFk: 'companyCodeFk',
  started: 'started',
  ended: 'ended',
  workerBusiness: 'workerBusiness',
  reasonEndFk: 'reasonEndFk',
  payedHolidays: 'payedHolidays',
  occupationCodeFk: 'occupationCodeFk',
  workerFk: 'workerFk',
  notes: 'notes',
  departmentFk: 'departmentFk',
  workerBusinessProfessionalCategoryFk: 'workerBusinessProfessionalCategoryFk',
  calendarTypeFk: 'calendarTypeFk',
  isHourlyLabor: 'isHourlyLabor',
  workcenterFk: 'workcenterFk',
  rate: 'rate',
  workerBusinessCategoryFk: 'workerBusinessCategoryFk',
  workerBusinessTypeFk: 'workerBusinessTypeFk',
  amount: 'amount',
  workerBusinessAgreementFk: 'workerBusinessAgreementFk',
  basicSalary: 'basicSalary'
});

exports.Prisma.BusinessTypeScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description'
});

exports.Prisma.BuyMarkScalarFieldEnum = makeEnum({
  id: 'id',
  comment: 'comment',
  mark: 'mark',
  odbcDate: 'odbcDate'
});

exports.Prisma.BuyScalarFieldEnum = makeEnum({
  id: 'id',
  entryFk: 'entryFk',
  itemFk: 'itemFk',
  quantity: 'quantity',
  dispatched: 'dispatched',
  buyingValue: 'buyingValue',
  freightValue: 'freightValue',
  isIgnored: 'isIgnored',
  stickers: 'stickers',
  packing: 'packing',
  grouping: 'grouping',
  groupingMode: 'groupingMode',
  containerFk: 'containerFk',
  comissionValue: 'comissionValue',
  packageValue: 'packageValue',
  location: 'location',
  packageFk: 'packageFk',
  price1: 'price1',
  price2: 'price2',
  price3: 'price3',
  minPrice: 'minPrice',
  printedStickers: 'printedStickers',
  workerFk: 'workerFk',
  isChecked: 'isChecked',
  isPickedOff: 'isPickedOff',
  created: 'created',
  cm2: 'cm2',
  ektFk: 'ektFk',
  weight: 'weight',
  deliveryFk: 'deliveryFk',
  itemOriginalFk: 'itemOriginalFk'
});

exports.Prisma.CalendarHolidaysNameScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.CalendarHolidaysScalarFieldEnum = makeEnum({
  id: 'id',
  calendarHolidaysTypeFk: 'calendarHolidaysTypeFk',
  dated: 'dated',
  calendarHolidaysNameFk: 'calendarHolidaysNameFk',
  workCenterFk: 'workCenterFk'
});

exports.Prisma.CalendarHolidaysTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  hexColour: 'hexColour'
});

exports.Prisma.CalendarScalarFieldEnum = makeEnum({
  id: 'id',
  businessFk: 'businessFk',
  dayOffTypeFk: 'dayOffTypeFk',
  dated: 'dated'
});

exports.Prisma.CampaignScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  dated: 'dated',
  scopeDays: 'scopeDays'
});

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  nick: 'nick'
});

exports.Prisma.ChainScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  rappel: 'rappel',
  componentFk: 'componentFk'
});

exports.Prisma.ChatConfigScalarFieldEnum = makeEnum({
  id: 'id',
  host: 'host',
  api: 'api',
  user: 'user',
  password: 'password'
});

exports.Prisma.ChatScalarFieldEnum = makeEnum({
  id: 'id',
  senderFk: 'senderFk',
  recipient: 'recipient',
  dated: 'dated',
  checkUserStatus: 'checkUserStatus',
  message: 'message',
  status: 'status',
  attempts: 'attempts',
  error: 'error'
});

exports.Prisma.ClaimBeginningScalarFieldEnum = makeEnum({
  id: 'id',
  claimFk: 'claimFk',
  saleFk: 'saleFk',
  quantity: 'quantity'
});

exports.Prisma.ClaimConfigScalarFieldEnum = makeEnum({
  id: 'id',
  maxResponsibility: 'maxResponsibility'
});

exports.Prisma.ClaimDestinationScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  addressFk: 'addressFk'
});

exports.Prisma.ClaimDevelopmentScalarFieldEnum = makeEnum({
  id: 'id',
  claimFk: 'claimFk',
  claimResponsibleFk: 'claimResponsibleFk',
  workerFk: 'workerFk',
  claimReasonFk: 'claimReasonFk',
  claimResultFk: 'claimResultFk',
  claimRedeliveryFk: 'claimRedeliveryFk',
  claimDestinationFk: 'claimDestinationFk'
});

exports.Prisma.ClaimDmsScalarFieldEnum = makeEnum({
  claimFk: 'claimFk',
  dmsFk: 'dmsFk'
});

exports.Prisma.ClaimEndScalarFieldEnum = makeEnum({
  id: 'id',
  saleFk: 'saleFk',
  claimFk: 'claimFk',
  workerFk: 'workerFk',
  claimDestinationFk: 'claimDestinationFk',
  isGreuge: 'isGreuge'
});

exports.Prisma.ClaimLogScalarFieldEnum = makeEnum({
  id: 'id',
  originFk: 'originFk',
  userFk: 'userFk',
  action: 'action',
  creationDate: 'creationDate',
  description: 'description',
  changedModel: 'changedModel',
  oldInstance: 'oldInstance',
  newInstance: 'newInstance',
  changedModelId: 'changedModelId',
  changedModelValue: 'changedModelValue'
});

exports.Prisma.ClaimObservationScalarFieldEnum = makeEnum({
  id: 'id',
  claimFk: 'claimFk',
  workerFk: 'workerFk',
  text: 'text',
  created: 'created'
});

exports.Prisma.ClaimRatioScalarFieldEnum = makeEnum({
  clientFk: 'clientFk',
  yearSale: 'yearSale',
  claimAmount: 'claimAmount',
  claimingRate: 'claimingRate',
  priceIncreasing: 'priceIncreasing',
  packingRate: 'packingRate'
});

exports.Prisma.ClaimReasonScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  isTired: 'isTired'
});

exports.Prisma.ClaimRedeliveryScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.ClaimResponsibleScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  responsability: 'responsability'
});

exports.Prisma.ClaimResultScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.ClaimRmaScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  created: 'created',
  workerFk: 'workerFk'
});

exports.Prisma.ClaimScalarFieldEnum = makeEnum({
  id: 'id',
  ticketCreated: 'ticketCreated',
  claimStateFk: 'claimStateFk',
  observation: 'observation',
  clientFk: 'clientFk',
  workerFk: 'workerFk',
  responsibility: 'responsibility',
  isChargedToMana: 'isChargedToMana',
  created: 'created',
  ticketFk: 'ticketFk',
  hasToPickUp: 'hasToPickUp',
  packages: 'packages',
  rma: 'rma'
});

exports.Prisma.ClaimStateScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  description: 'description',
  roleFk: 'roleFk',
  priority: 'priority',
  hasToNotify: 'hasToNotify'
});

exports.Prisma.ClientChainScalarFieldEnum = makeEnum({
  id: 'id',
  clientFk: 'clientFk',
  chainFk: 'chainFk'
});

exports.Prisma.ClientConfigScalarFieldEnum = makeEnum({
  id: 'id',
  riskTolerance: 'riskTolerance',
  maxCreditRows: 'maxCreditRows',
  maxPriceIncreasingRatio: 'maxPriceIncreasingRatio',
  riskScope: 'riskScope'
});

exports.Prisma.ClientConsumptionQueueScalarFieldEnum = makeEnum({
  id: 'id',
  params: 'params',
  queued: 'queued',
  printed: 'printed',
  status: 'status'
});

exports.Prisma.ClientContactScalarFieldEnum = makeEnum({
  id: 'id',
  clientFk: 'clientFk',
  name: 'name',
  phone: 'phone'
});

exports.Prisma.ClientCreditLimitScalarFieldEnum = makeEnum({
  id: 'id',
  maxAmount: 'maxAmount',
  roleFk: 'roleFk'
});

exports.Prisma.ClientCreditScalarFieldEnum = makeEnum({
  id: 'id',
  clientFk: 'clientFk',
  amount: 'amount',
  created: 'created',
  workerFk: 'workerFk'
});

exports.Prisma.ClientDmsScalarFieldEnum = makeEnum({
  clientFk: 'clientFk',
  dmsFk: 'dmsFk'
});

exports.Prisma.ClientItemCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  clientFk: 'clientFk',
  itemCategoryFk: 'itemCategoryFk'
});

exports.Prisma.ClientItemTypeScalarFieldEnum = makeEnum({
  id: 'id',
  created: 'created',
  clientFk: 'clientFk',
  itemTypeFk: 'itemTypeFk',
  isAllowed: 'isAllowed'
});

exports.Prisma.ClientLogScalarFieldEnum = makeEnum({
  id: 'id',
  originFk: 'originFk',
  userFk: 'userFk',
  action: 'action',
  creationDate: 'creationDate',
  description: 'description',
  changedModel: 'changedModel',
  oldInstance: 'oldInstance',
  newInstance: 'newInstance',
  changedModelId: 'changedModelId',
  changedModelValue: 'changedModelValue'
});

exports.Prisma.ClientManaCacheScalarFieldEnum = makeEnum({
  clientFk: 'clientFk',
  mana: 'mana',
  dated: 'dated'
});

exports.Prisma.ClientObservationScalarFieldEnum = makeEnum({
  id: 'id',
  clientFk: 'clientFk',
  workerFk: 'workerFk',
  text: 'text',
  created: 'created'
});

exports.Prisma.ClientPackagingGiftsScalarFieldEnum = makeEnum({
  clientFk: 'clientFk',
  giftFk: 'giftFk',
  added: 'added'
});

exports.Prisma.ClientProtectedScalarFieldEnum = makeEnum({
  clientFk: 'clientFk',
  workerFk: 'workerFk'
});

exports.Prisma.ClientRiskScalarFieldEnum = makeEnum({
  clientFk: 'clientFk',
  companyFk: 'companyFk',
  amount: 'amount'
});

exports.Prisma.ClientSampleScalarFieldEnum = makeEnum({
  id: 'id',
  clientFk: 'clientFk',
  typeFk: 'typeFk',
  created: 'created',
  workerFk: 'workerFk',
  balance: 'balance',
  companyFk: 'companyFk',
  userFk: 'userFk'
});

exports.Prisma.ClientScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  defaultAddressFk: 'defaultAddressFk',
  street: 'street',
  fi: 'fi',
  phone: 'phone',
  email: 'email',
  dueDay: 'dueDay',
  isTaxDataChecked: 'isTaxDataChecked',
  mobile: 'mobile',
  accountingAccount: 'accountingAccount',
  isEqualizated: 'isEqualizated',
  city: 'city',
  provinceFk: 'provinceFk',
  postcode: 'postcode',
  socialName: 'socialName',
  contact: 'contact',
  hasToInvoice: 'hasToInvoice',
  isFreezed: 'isFreezed',
  salesPersonFk: 'salesPersonFk',
  credit: 'credit',
  countryFk: 'countryFk',
  isActive: 'isActive',
  gestdocFk: 'gestdocFk',
  quality: 'quality',
  payMethodFk: 'payMethodFk',
  created: 'created',
  isToBeMailed: 'isToBeMailed',
  contactChannelFk: 'contactChannelFk',
  isVies: 'isVies',
  hasSepaVnl: 'hasSepaVnl',
  hasCoreVnl: 'hasCoreVnl',
  riskCalculated: 'riskCalculated',
  hasCoreVnh: 'hasCoreVnh',
  isRelevant: 'isRelevant',
  clientTypeFk: 'clientTypeFk',
  mailAddress: 'mailAddress',
  creditInsurance: 'creditInsurance',
  eypbc: 'eypbc',
  hasToInvoiceByAddress: 'hasToInvoiceByAddress',
  isCreatedAsServed: 'isCreatedAsServed',
  hasInvoiceSimplified: 'hasInvoiceSimplified',
  hasElectronicInvoice: 'hasElectronicInvoice',
  iban: 'iban',
  hasLcr: 'hasLcr',
  bankEntityFk: 'bankEntityFk',
  typeFk: 'typeFk',
  taxTypeSageFk: 'taxTypeSageFk',
  transactionTypeSageFk: 'transactionTypeSageFk',
  transferorFk: 'transferorFk',
  lastSalesPersonFk: 'lastSalesPersonFk',
  businessTypeFk: 'businessTypeFk',
  hasIncoterms: 'hasIncoterms'
});

exports.Prisma.ClientTypeScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  type: 'type',
  isCreatedAsServed: 'isCreatedAsServed'
});

exports.Prisma.ClientUnpaidScalarFieldEnum = makeEnum({
  clientFk: 'clientFk',
  dated: 'dated',
  amount: 'amount'
});

exports.Prisma.ClientYokeScalarFieldEnum = makeEnum({
  leftOx: 'leftOx',
  rightOx: 'rightOx'
});

exports.Prisma.CmrConfigScalarFieldEnum = makeEnum({
  id: 'id',
  dayOfMonth: 'dayOfMonth',
  landingDays: 'landingDays'
});

exports.Prisma.CmrPalletScalarFieldEnum = makeEnum({
  id: 'id',
  cmrFk: 'cmrFk',
  expeditionPalletFk: 'expeditionPalletFk',
  scanned: 'scanned'
});

exports.Prisma.CmrScalarFieldEnum = makeEnum({
  id: 'id',
  ticketFk: 'ticketFk',
  truckPlate: 'truckPlate',
  observations: 'observations',
  senderInstruccions: 'senderInstruccions',
  paymentInstruccions: 'paymentInstruccions',
  specialAgreements: 'specialAgreements',
  created: 'created',
  companyFk: 'companyFk',
  addressToFk: 'addressToFk',
  addressFromFk: 'addressFromFk',
  supplierFk: 'supplierFk',
  packagesList: 'packagesList',
  merchandiseDetail: 'merchandiseDetail',
  state: 'state',
  landed: 'landed',
  ead: 'ead'
});

exports.Prisma.CollectionColorsScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  shelve: 'shelve',
  wagon: 'wagon',
  trainFk: 'trainFk',
  rgb: 'rgb'
});

exports.Prisma.CollectionHotbedScalarFieldEnum = makeEnum({
  id: 'id',
  userFk: 'userFk',
  created: 'created'
});

exports.Prisma.CollectionScalarFieldEnum = makeEnum({
  id: 'id',
  created: 'created',
  workerFk: 'workerFk',
  stateFk: 'stateFk',
  itemPackingTypeFk: 'itemPackingTypeFk',
  saleTotalCount: 'saleTotalCount',
  salePickedCount: 'salePickedCount',
  trainFk: 'trainFk',
  sectorFk: 'sectorFk',
  wagons: 'wagons',
  warehouseFk: 'warehouseFk'
});

exports.Prisma.CollectionVolumetryScalarFieldEnum = makeEnum({
  id: 'id',
  level: 'level',
  lines: 'lines',
  liters: 'liters',
  height: 'height',
  itemPackingTypeFk: 'itemPackingTypeFk',
  trainFk: 'trainFk'
});

exports.Prisma.CommissionConfigScalarFieldEnum = makeEnum({
  rate: 'rate',
  plusTeamAmount: 'plusTeamAmount',
  plusNewBornAmount: 'plusNewBornAmount',
  plusSalesAmount: 'plusSalesAmount',
  minimumSalesByQuarter: 'minimumSalesByQuarter',
  plusTeamRange: 'plusTeamRange',
  plusNewBornRange: 'plusNewBornRange',
  rankingSalesRange: 'rankingSalesRange',
  minScoreForPlusTeam: 'minScoreForPlusTeam',
  minScoreForPlusBoss: 'minScoreForPlusBoss',
  plusTeam: 'plusTeam',
  plusBoss: 'plusBoss',
  executionDay: 'executionDay',
  salesPersonWithPlusNewClient: 'salesPersonWithPlusNewClient',
  maxPlusNewClient: 'maxPlusNewClient',
  plusDifference: 'plusDifference',
  maxScoreNewClient: 'maxScoreNewClient',
  scoreDifference: 'scoreDifference'
});

exports.Prisma.CompanyGroupScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code'
});

exports.Prisma.CompanyScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  register: 'register',
  workerManagerFk: 'workerManagerFk',
  registered: 'registered',
  expired: 'expired',
  logo: 'logo',
  isOfficial: 'isOfficial',
  hasCyc: 'hasCyc',
  rgb: 'rgb',
  email: 'email',
  stamp: 'stamp',
  created: 'created',
  clientFk: 'clientFk',
  sage200Company: 'sage200Company',
  supplierAccountFk: 'supplierAccountFk',
  isDefaulter: 'isDefaulter',
  companyGroupFk: 'companyGroupFk',
  companyCode: 'companyCode',
  companyCodeTest: 'companyCodeTest',
  footnotes: 'footnotes',
  phytosanitary: 'phytosanitary',
  fhAdminNumber: 'fhAdminNumber'
});

exports.Prisma.ComparativeFilterTypeScalarFieldEnum = makeEnum({
  comparativeFilterFk: 'comparativeFilterFk',
  itemTypeFk: 'itemTypeFk'
});

exports.Prisma.ComponentScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  typeFk: 'typeFk',
  classRate: 'classRate',
  tax: 'tax',
  isRenewable: 'isRenewable',
  code: 'code',
  isRequired: 'isRequired'
});

exports.Prisma.ComponentTypeScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  isBase: 'isBase',
  isMargin: 'isMargin',
  code: 'code'
});

exports.Prisma.ConfectionTypeScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.ConfigScalarFieldEnum = makeEnum({
  id: 'id',
  ochoa: 'ochoa',
  invoiceOutFk: 'invoiceOutFk',
  inventoried: 'inventoried',
  itemLog: 'itemLog',
  weekGoal: 'weekGoal',
  photosPath: 'photosPath',
  cashBoxNumber: 'cashBoxNumber',
  redCode: 'redCode',
  TabletTime: 'TabletTime',
  t0: 't0',
  t1: 't1',
  t2: 't2',
  t3: 't3',
  cc: 'cc',
  palet: 'palet',
  campaign: 'campaign',
  campaignLife: 'campaignLife',
  truckDays: 'truckDays',
  transportCharges: 'transportCharges',
  escanerPath: 'escanerPath',
  printedTurn: 'printedTurn',
  truckLength: 'truckLength',
  fuelConsumption: 'fuelConsumption',
  petrol: 'petrol',
  maintenance: 'maintenance',
  hourPrice: 'hourPrice',
  meterPrice: 'meterPrice',
  kmPrice: 'kmPrice',
  routeOption: 'routeOption',
  dbproduccion: 'dbproduccion',
  mdbServer: 'mdbServer',
  fakeEmail: 'fakeEmail',
  defaultersMaxAmount: 'defaultersMaxAmount',
  ASIEN: 'ASIEN',
  dayStartingHour: 'dayStartingHour'
});

exports.Prisma.ContactChannelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.ContinentScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  code: 'code'
});

exports.Prisma.Contratos_subvencion_270619ScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  cod_centroFk: 'cod_centroFk',
  CodContratoFk: 'CodContratoFk',
  journey: 'journey',
  name: 'name',
  nif: 'nif'
});

exports.Prisma.ConveyorBuildingClassScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  priority: 'priority',
  weightThreshold: 'weightThreshold'
});

exports.Prisma.ConveyorConfigScalarFieldEnum = makeEnum({
  id: 'id',
  itemName: 'itemName',
  length: 'length',
  width: 'width',
  height: 'height'
});

exports.Prisma.ConveyorExpeditionScalarFieldEnum = makeEnum({
  expeditionFk: 'expeditionFk',
  conveyorFk: 'conveyorFk',
  created: 'created',
  conveyorBuildingClassFk: 'conveyorBuildingClassFk',
  length: 'length',
  width: 'width',
  height: 'height',
  x: 'x',
  y: 'y',
  routeFk: 'routeFk',
  isIn: 'isIn',
  productionMinute: 'productionMinute',
  isOut: 'isOut',
  truck: 'truck',
  criterion: 'criterion',
  isHeavy: 'isHeavy'
});

exports.Prisma.ConveyorModeScalarFieldEnum = makeEnum({
  code: 'code',
  saturacion: 'saturacion',
  gap: 'gap',
  isActive: 'isActive'
});

exports.Prisma.ConveyorScalarFieldEnum = makeEnum({
  id: 'id',
  typeFk: 'typeFk',
  stratum: 'stratum',
  length: 'length',
  width: 'width',
  height: 'height',
  x: 'x',
  y: 'y',
  freeSpace: 'freeSpace',
  isBusy: 'isBusy',
  tandem: 'tandem',
  conveyorBuildingClassFk: 'conveyorBuildingClassFk'
});

exports.Prisma.ConveyorTypeScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  color: 'color'
});

exports.Prisma.CorridorScalarFieldEnum = makeEnum({
  code: 'code',
  isAscendent: 'isAscendent',
  prepOrder: 'prepOrder'
});

exports.Prisma.CountryScalarFieldEnum = makeEnum({
  id: 'id',
  country: 'country',
  CEE: 'CEE',
  code: 'code',
  currencyFk: 'currencyFk',
  politicalCountryFk: 'politicalCountryFk',
  geoFk: 'geoFk',
  hasDailyInvoice: 'hasDailyInvoice',
  isUeeMember: 'isUeeMember',
  ibanLength: 'ibanLength',
  continentFk: 'continentFk',
  a3Code: 'a3Code'
});

exports.Prisma.CplusCorrectingTypeScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.CplusInvoiceType472ScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.CplusInvoiceType477ScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.CplusRectificationTypeScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.CplusSubjectOpScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.CplusTaxBreakScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.CplusTerIdNifScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.CplusTrascendency472ScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.CplusTrascendency477ScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.CreditClassificationScalarFieldEnum = makeEnum({
  id: 'id',
  client: 'client',
  dateStart: 'dateStart',
  dateEnd: 'dateEnd'
});

exports.Prisma.CreditInsuranceScalarFieldEnum = makeEnum({
  id: 'id',
  creditClassification: 'creditClassification',
  credit: 'credit',
  creationDate: 'creationDate',
  grade: 'grade',
  creditClassificationFk: 'creditClassificationFk'
});

exports.Prisma.CurrencyScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  name: 'name',
  ratio: 'ratio'
});

exports.Prisma.CustomsAgentScalarFieldEnum = makeEnum({
  id: 'id',
  fiscalName: 'fiscalName',
  street: 'street',
  nif: 'nif',
  phone: 'phone',
  email: 'email'
});

exports.Prisma.DayMinuteScalarFieldEnum = makeEnum({
  id: 'id',
  hh: 'hh',
  mm: 'mm'
});

exports.Prisma.DeliveryMethodScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  code: 'code'
});

exports.Prisma.DeliveryPointScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  ubication: 'ubication'
});

exports.Prisma.DeliveryScalarFieldEnum = makeEnum({
  id: 'id',
  created: 'created',
  longitude: 'longitude',
  latitude: 'latitude',
  dated: 'dated',
  addressFk: 'addressFk'
});

exports.Prisma.Delivery_zipScalarFieldEnum = makeEnum({
  postal_code: 'postal_code',
  country_code: 'country_code',
  place_name: 'place_name',
  admin_name1: 'admin_name1',
  code_name1: 'code_name1',
  admin_name2: 'admin_name2',
  code_name2: 'code_name2',
  admin_name3: 'admin_name3',
  code_name3: 'code_name3',
  latitude: 'latitude',
  longitude: 'longitude',
  accuracy: 'accuracy',
  delivery_zipPK: 'delivery_zipPK'
});

exports.Prisma.DepartmentScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  name: 'name',
  lft: 'lft',
  rgt: 'rgt',
  workerFk: 'workerFk',
  companyFk: 'companyFk',
  isProduction: 'isProduction',
  isSelected: 'isSelected',
  depth: 'depth',
  sons: 'sons',
  parentFk: 'parentFk',
  path: 'path',
  chatName: 'chatName',
  isTeleworking: 'isTeleworking',
  notificationEmail: 'notificationEmail',
  hasToRefill: 'hasToRefill',
  hasToSendMail: 'hasToSendMail',
  hasToCheckLogin: 'hasToCheckLogin',
  hasToMistake: 'hasToMistake',
  clientFk: 'clientFk'
});

exports.Prisma.Department_recalcScalarFieldEnum = makeEnum({
  id: 'id',
  isChanged: 'isChanged'
});

exports.Prisma.DeviceLogScalarFieldEnum = makeEnum({
  id: 'id',
  android_id: 'android_id',
  userFk: 'userFk',
  created: 'created',
  nameApp: 'nameApp',
  versionApp: 'versionApp'
});

exports.Prisma.DeviceProductionConfigScalarFieldEnum = makeEnum({
  id: 'id',
  isAllUsersallowed: 'isAllUsersallowed',
  isTractorHuntingMode: 'isTractorHuntingMode'
});

exports.Prisma.DeviceProductionModelsScalarFieldEnum = makeEnum({
  code: 'code'
});

exports.Prisma.DeviceProductionScalarFieldEnum = makeEnum({
  id: 'id',
  imei: 'imei',
  modelFk: 'modelFk',
  macWifi: 'macWifi',
  serialNumber: 'serialNumber',
  departmentFk: 'departmentFk',
  isOutOfService: 'isOutOfService',
  android_id: 'android_id',
  purchased: 'purchased'
});

exports.Prisma.DeviceProductionUserScalarFieldEnum = makeEnum({
  deviceProductionFk: 'deviceProductionFk',
  userFk: 'userFk',
  created: 'created'
});

exports.Prisma.DeviceScalarFieldEnum = makeEnum({
  id: 'id',
  sn: 'sn',
  model: 'model',
  userFk: 'userFk'
});

exports.Prisma.DisabilityGradeScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.DmsRecoverScalarFieldEnum = makeEnum({
  id: 'id',
  ticketFk: 'ticketFk',
  sign: 'sign',
  created: 'created'
});

exports.Prisma.DmsScalarFieldEnum = makeEnum({
  id: 'id',
  dmsTypeFk: 'dmsTypeFk',
  reference: 'reference',
  description: 'description',
  companyFk: 'companyFk',
  hardCopyNumber: 'hardCopyNumber',
  contentType: 'contentType',
  file: 'file',
  hasFile: 'hasFile',
  workerFk: 'workerFk',
  created: 'created',
  warehouseFk: 'warehouseFk'
});

exports.Prisma.DmsTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  path: 'path',
  writeRoleFk: 'writeRoleFk',
  readRoleFk: 'readRoleFk',
  code: 'code',
  monthToDelete: 'monthToDelete'
});

exports.Prisma.DockScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description'
});

exports.Prisma.DocuwareConfigScalarFieldEnum = makeEnum({
  id: 'id',
  url: 'url',
  cookie: 'cookie'
});

exports.Prisma.DocuwareScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  fileCabinetName: 'fileCabinetName',
  action: 'action',
  dialogName: 'dialogName',
  findById: 'findById'
});

exports.Prisma.DuaEntryScalarFieldEnum = makeEnum({
  duaFk: 'duaFk',
  entryFk: 'entryFk',
  value: 'value',
  customsValue: 'customsValue',
  euroValue: 'euroValue'
});

exports.Prisma.DuaIntrastatScalarFieldEnum = makeEnum({
  id: 'id',
  duaFk: 'duaFk',
  intrastatFk: 'intrastatFk',
  amount: 'amount'
});

exports.Prisma.DuaInvoiceInScalarFieldEnum = makeEnum({
  id: 'id',
  duaFk: 'duaFk',
  invoiceInFk: 'invoiceInFk'
});

exports.Prisma.DuaScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  awbFk: 'awbFk',
  issued: 'issued',
  operated: 'operated',
  booked: 'booked',
  bookEntried: 'bookEntried',
  gestdocFk: 'gestdocFk',
  customsValue: 'customsValue',
  companyFk: 'companyFk',
  ASIEN: 'ASIEN'
});

exports.Prisma.DuaTaxScalarFieldEnum = makeEnum({
  id: 'id',
  duaFk: 'duaFk',
  supplierFk: 'supplierFk',
  taxClassFk: 'taxClassFk',
  base: 'base',
  rate: 'rate',
  tax: 'tax'
});

exports.Prisma.EducationLevelScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.EktEntryAssignScalarFieldEnum = makeEnum({
  id: 'id',
  kop: 'kop',
  sub: 'sub',
  pro: 'pro',
  auction: 'auction',
  warehouseOutFk: 'warehouseOutFk',
  warehouseInFk: 'warehouseInFk',
  agencyModeFk: 'agencyModeFk',
  supplierFk: 'supplierFk',
  entryFk: 'entryFk',
  ref: 'ref',
  addressFk: 'addressFk',
  companyFk: 'companyFk'
});

exports.Prisma.EmergencyMediaScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  value: 'value'
});

exports.Prisma.EnergyInputScalarFieldEnum = makeEnum({
  input: 'input',
  description: 'description',
  consumption: 'consumption'
});

exports.Prisma.EnergyMeterScalarFieldEnum = makeEnum({
  input: 'input',
  period: 'period',
  activeTime: 'activeTime',
  consumption: 'consumption'
});

exports.Prisma.EntryConfigScalarFieldEnum = makeEnum({
  defaultEntry: 'defaultEntry',
  mailToNotify: 'mailToNotify',
  inventorySupplierFk: 'inventorySupplierFk'
});

exports.Prisma.EntryLogScalarFieldEnum = makeEnum({
  id: 'id',
  originFk: 'originFk',
  userFk: 'userFk',
  action: 'action',
  creationDate: 'creationDate',
  description: 'description',
  changedModel: 'changedModel',
  oldInstance: 'oldInstance',
  newInstance: 'newInstance',
  changedModelId: 'changedModelId',
  changedModelValue: 'changedModelValue'
});

exports.Prisma.EntryObservationScalarFieldEnum = makeEnum({
  id: 'id',
  entryFk: 'entryFk',
  observationTypeFk: 'observationTypeFk',
  description: 'description'
});

exports.Prisma.EntryScalarFieldEnum = makeEnum({
  id: 'id',
  supplierFk: 'supplierFk',
  dated: 'dated',
  invoiceNumber: 'invoiceNumber',
  isBooked: 'isBooked',
  isExcludedFromAvailable: 'isExcludedFromAvailable',
  notes: 'notes',
  isConfirmed: 'isConfirmed',
  isOrdered: 'isOrdered',
  isRaid: 'isRaid',
  commission: 'commission',
  created: 'created',
  evaNotes: 'evaNotes',
  travelFk: 'travelFk',
  currencyFk: 'currencyFk',
  companyFk: 'companyFk',
  gestDocFk: 'gestDocFk',
  invoiceInFk: 'invoiceInFk',
  isBlocked: 'isBlocked',
  loadPriority: 'loadPriority',
  kop: 'kop',
  sub: 'sub',
  pro: 'pro',
  auction: 'auction',
  invoiceAmount: 'invoiceAmount',
  buyerFk: 'buyerFk',
  typeFk: 'typeFk',
  reference: 'reference'
});

exports.Prisma.EntryTypeScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description'
});

exports.Prisma.EntryVirtualScalarFieldEnum = makeEnum({
  entryFk: 'entryFk'
});

exports.Prisma.EnvialiaAgencyScalarFieldEnum = makeEnum({
  id: 'id',
  route: 'route',
  agencyName: 'agencyName'
});

exports.Prisma.EnvialiaCityScalarFieldEnum = makeEnum({
  id: 'id',
  city: 'city',
  postalCode: 'postalCode',
  agencyFk: 'agencyFk'
});

exports.Prisma.EnvialiaConfigScalarFieldEnum = makeEnum({
  serviceType: 'serviceType',
  numBox: 'numBox',
  startRange: 'startRange',
  endRange: 'endRange',
  cargoAgency: 'cargoAgency',
  actualNumber: 'actualNumber',
  isAlreadyNotified: 'isAlreadyNotified',
  notificationThrehold: 'notificationThrehold'
});

exports.Prisma.ErrorLogAppScalarFieldEnum = makeEnum({
  id: 'id',
  error: 'error',
  date: 'date',
  workerFk: 'workerFk'
});

exports.Prisma.ErrorProductionScalarFieldEnum = makeEnum({
  id: 'id',
  userFk: 'userFk',
  firstname: 'firstname',
  lastname: 'lastname',
  rol: 'rol',
  ticketNumber: 'ticketNumber',
  lineNumber: 'lineNumber',
  error: 'error',
  volume: 'volume',
  hourStart: 'hourStart',
  hourEnd: 'hourEnd',
  hourWorked: 'hourWorked',
  dated: 'dated'
});

exports.Prisma.ErteScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  started: 'started',
  ended: 'ended',
  reduction: 'reduction',
  monday: 'monday',
  tuesday: 'tuesday',
  wednesday: 'wednesday',
  thursday: 'thursday',
  friday: 'friday',
  saturday: 'saturday',
  sunday: 'sunday'
});

exports.Prisma.ExcuseScalarFieldEnum = makeEnum({
  id: 'id',
  txt: 'txt',
  date: 'date'
});

exports.Prisma.ExpeditionBoxVolScalarFieldEnum = makeEnum({
  boxFk: 'boxFk',
  m3: 'm3',
  ratio: 'ratio'
});

exports.Prisma.ExpeditionMistakeScalarFieldEnum = makeEnum({
  expeditionFk: 'expeditionFk',
  workerFk: 'workerFk',
  typeFk: 'typeFk',
  created: 'created'
});

exports.Prisma.ExpeditionMistakeTypeScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description'
});

exports.Prisma.ExpeditionPalletScalarFieldEnum = makeEnum({
  id: 'id',
  truckFk: 'truckFk',
  built: 'built',
  position: 'position',
  isPrint: 'isPrint'
});

exports.Prisma.ExpeditionScalarFieldEnum = makeEnum({
  id: 'id',
  agencyModeFk: 'agencyModeFk',
  ticketFk: 'ticketFk',
  freightItemFk: 'freightItemFk',
  created: 'created',
  itemFk__: 'itemFk__',
  counter: 'counter',
  workerFk: 'workerFk',
  externalId: 'externalId',
  packagingFk: 'packagingFk',
  itemPackingTypeFk: 'itemPackingTypeFk',
  hostFk: 'hostFk',
  stateTypeFk: 'stateTypeFk',
  hasNewRoute: 'hasNewRoute',
  isBox: 'isBox'
});

exports.Prisma.ExpeditionScanScalarFieldEnum = makeEnum({
  id: 'id',
  expeditionFk: 'expeditionFk',
  scanned: 'scanned',
  palletFk: 'palletFk',
  workerFk: 'workerFk'
});

exports.Prisma.ExpeditionStateScalarFieldEnum = makeEnum({
  id: 'id',
  created: 'created',
  expeditionFk: 'expeditionFk',
  typeFk: 'typeFk',
  userFk: 'userFk'
});

exports.Prisma.ExpeditionStateTypeScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  code: 'code'
});

exports.Prisma.ExpeditionTruckScalarFieldEnum = makeEnum({
  id: 'id',
  ETD: 'ETD',
  description: 'description',
  bufferFk: 'bufferFk'
});

exports.Prisma.ExpenceScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  isWithheld: 'isWithheld'
});

exports.Prisma.FloramondoConfigScalarFieldEnum = makeEnum({
  id: 'id',
  nextLanded: 'nextLanded',
  warehouseInFk: 'warehouseInFk',
  MaxLatestDeliveryHour: 'MaxLatestDeliveryHour',
  MaxLatestOrderHour: 'MaxLatestOrderHour',
  LastUpdated: 'LastUpdated',
  itemMaxSize: 'itemMaxSize'
});

exports.Prisma.FuelTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  code: 'code'
});

exports.Prisma.GateAreaScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.GenericAllocationScalarFieldEnum = makeEnum({
  id: 'id',
  itemFk: 'itemFk',
  typeFk: 'typeFk',
  origin: 'origin',
  color: 'color',
  quality: 'quality',
  numFlores: 'numFlores',
  category: 'category',
  productor: 'productor',
  longName: 'longName',
  size: 'size',
  startDated: 'startDated',
  endDated: 'endDated'
});

exports.Prisma.GenusScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.GlsConfigScalarFieldEnum = makeEnum({
  id: 'id',
  service: 'service',
  schedule: 'schedule',
  token: 'token',
  labelType: 'labelType',
  supplierFk: 'supplierFk',
  package: 'package',
  refund: 'refund',
  weight: 'weight'
});

exports.Prisma.GreugeConfigScalarFieldEnum = makeEnum({
  id: 'id',
  freightPickUpPrice: 'freightPickUpPrice',
  yearsToDelete: 'yearsToDelete'
});

exports.Prisma.GreugeScalarFieldEnum = makeEnum({
  Id: 'Id',
  clientFk: 'clientFk',
  description: 'description',
  amount: 'amount',
  shipped: 'shipped',
  created: 'created',
  greugeTypeFk: 'greugeTypeFk',
  ticketFk: 'ticketFk',
  userFk: 'userFk'
});

exports.Prisma.GreugeTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  code: 'code'
});

exports.Prisma.HostScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  description: 'description',
  workerFk: 'workerFk',
  windowsSerial: 'windowsSerial',
  printerFk: 'printerFk',
  warehouseFk: 'warehouseFk',
  companyFk: 'companyFk',
  bankFk: 'bankFk',
  routeDaysBefore: 'routeDaysBefore',
  routeDaysAfter: 'routeDaysAfter',
  updated: 'updated'
});

exports.Prisma.ImprovedGeneralLogProceduresScalarFieldEnum = makeEnum({
  user: 'user',
  db: 'db',
  routine: 'routine',
  type: 'type'
});

exports.Prisma.ImprovedGeneralLogScalarFieldEnum = makeEnum({
  user: 'user',
  db: 'db',
  tables: 'tables',
  type: 'type'
});

exports.Prisma.IncotermsScalarFieldEnum = makeEnum({
  code: 'code',
  name: 'name'
});

exports.Prisma.InkI18nScalarFieldEnum = makeEnum({
  inkFk: 'inkFk',
  lang: 'lang',
  name: 'name'
});

exports.Prisma.InkScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  picture: 'picture',
  showOrder: 'showOrder',
  ball: 'ball',
  isCargex: 'isCargex',
  dutchCode: 'dutchCode',
  hex: 'hex',
  isRealColor: 'isRealColor'
});

exports.Prisma.IntrastatScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  taxClassFk: 'taxClassFk',
  taxCodeFk: 'taxCodeFk'
});

exports.Prisma.InventoryFailureCauseScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.InventoryFailureScalarFieldEnum = makeEnum({
  id: 'id',
  dated: 'dated',
  itemFk: 'itemFk',
  quantity: 'quantity',
  value: 'value',
  warehouseFk: 'warehouseFk',
  throwerFk: 'throwerFk',
  guiltyFk: 'guiltyFk',
  causeFk: 'causeFk',
  explanation: 'explanation'
});

exports.Prisma.InvoiceCorrectionScalarFieldEnum = makeEnum({
  correctingFk: 'correctingFk',
  correctedFk: 'correctedFk',
  cplusRectificationTypeFk: 'cplusRectificationTypeFk',
  cplusInvoiceType477Fk: 'cplusInvoiceType477Fk',
  invoiceCorrectionTypeFk: 'invoiceCorrectionTypeFk'
});

exports.Prisma.InvoiceCorrectionTypeScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.InvoiceInConfigScalarFieldEnum = makeEnum({
  id: 'id',
  retentionRate: 'retentionRate',
  retentionName: 'retentionName',
  sageWithholdingFk: 'sageWithholdingFk'
});

exports.Prisma.InvoiceInDueDayScalarFieldEnum = makeEnum({
  id: 'id',
  invoiceInFk: 'invoiceInFk',
  dueDated: 'dueDated',
  bankFk: 'bankFk',
  amount: 'amount',
  foreignValue: 'foreignValue',
  created: 'created'
});

exports.Prisma.InvoiceInIntrastatScalarFieldEnum = makeEnum({
  id: 'id',
  invoiceInFk: 'invoiceInFk',
  net: 'net',
  intrastatFk: 'intrastatFk',
  amount: 'amount',
  stems: 'stems',
  countryFk: 'countryFk',
  dated: 'dated',
  statisticalValue: 'statisticalValue'
});

exports.Prisma.InvoiceInLogScalarFieldEnum = makeEnum({
  id: 'id',
  originFk: 'originFk',
  userFk: 'userFk',
  action: 'action',
  creationDate: 'creationDate',
  description: 'description',
  changedModel: 'changedModel',
  oldInstance: 'oldInstance',
  newInstance: 'newInstance',
  changedModelId: 'changedModelId',
  changedModelValue: 'changedModelValue'
});

exports.Prisma.InvoiceInSageScalarFieldEnum = makeEnum({
  id: 'id',
  taxClassFk: 'taxClassFk',
  invoiceInSerialFk: 'invoiceInSerialFk',
  taxTypeSageFk: 'taxTypeSageFk',
  transactionTypeSageFk: 'transactionTypeSageFk',
  isService: 'isService',
  expenceFk: 'expenceFk',
  withholdingSageFk: 'withholdingSageFk'
});

exports.Prisma.InvoiceInScalarFieldEnum = makeEnum({
  id: 'id',
  serialNumber: 'serialNumber',
  serial: 'serial',
  supplierFk: 'supplierFk',
  issued: 'issued',
  supplierRef: 'supplierRef',
  isBooked: 'isBooked',
  currencyFk: 'currencyFk',
  created: 'created',
  companyFk: 'companyFk',
  docFk: 'docFk',
  booked: 'booked',
  operated: 'operated',
  cplusInvoiceType472Fk: 'cplusInvoiceType472Fk',
  cplusRectificationTypeFk: 'cplusRectificationTypeFk',
  cplusSubjectOpFk: 'cplusSubjectOpFk',
  cplusTaxBreakFk: 'cplusTaxBreakFk',
  cplusTrascendency472Fk: 'cplusTrascendency472Fk',
  bookEntried: 'bookEntried',
  isVatDeductible: 'isVatDeductible',
  withholdingSageFk: 'withholdingSageFk',
  expenceFkDeductible: 'expenceFkDeductible'
});

exports.Prisma.InvoiceInSerialScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description',
  cplusTerIdNifFk: 'cplusTerIdNifFk',
  taxAreaFk: 'taxAreaFk'
});

exports.Prisma.InvoiceInTaxBookingAccountScalarFieldEnum = makeEnum({
  id: 'id',
  effectived: 'effectived',
  account: 'account',
  taxAreaFk: 'taxAreaFk',
  priority: 'priority',
  taxClassFk: 'taxClassFk',
  countryFk: 'countryFk',
  rate: 'rate'
});

exports.Prisma.InvoiceInTaxScalarFieldEnum = makeEnum({
  id: 'id',
  invoiceInFk: 'invoiceInFk',
  taxCodeFk: 'taxCodeFk',
  taxableBase: 'taxableBase',
  expenceFk: 'expenceFk',
  foreignValue: 'foreignValue',
  taxTypeSageFk: 'taxTypeSageFk',
  transactionTypeSageFk: 'transactionTypeSageFk',
  created: 'created'
});

exports.Prisma.InvoiceOutExpenceScalarFieldEnum = makeEnum({
  id: 'id',
  invoiceOutFk: 'invoiceOutFk',
  amount: 'amount',
  expenceFk: 'expenceFk',
  created: 'created'
});

exports.Prisma.InvoiceOutScalarFieldEnum = makeEnum({
  id: 'id',
  ref: 'ref',
  serial: 'serial',
  issued: 'issued',
  amount: 'amount',
  dued: 'dued',
  bankFk: 'bankFk',
  clientFk: 'clientFk',
  created: 'created',
  companyFk: 'companyFk',
  hasPdf: 'hasPdf',
  booked: 'booked',
  cplusInvoiceType477Fk: 'cplusInvoiceType477Fk',
  cplusTaxBreakFk: 'cplusTaxBreakFk',
  cplusSubjectOpFk: 'cplusSubjectOpFk',
  cplusTrascendency477Fk: 'cplusTrascendency477Fk'
});

exports.Prisma.InvoiceOutSerialScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description',
  isTaxed: 'isTaxed',
  taxAreaFk: 'taxAreaFk',
  isCEE: 'isCEE',
  cplusInvoiceType477Fk: 'cplusInvoiceType477Fk',
  footNotes: 'footNotes',
  isRefEditable: 'isRefEditable'
});

exports.Prisma.InvoiceOutTaxConfigScalarFieldEnum = makeEnum({
  id: 'id',
  taxClassCodeFk: 'taxClassCodeFk',
  taxTypeSageFk: 'taxTypeSageFk',
  transactionTypeSageFk: 'transactionTypeSageFk',
  isService: 'isService',
  expenceFk: 'expenceFk'
});

exports.Prisma.InvoiceOutTaxScalarFieldEnum = makeEnum({
  id: 'id',
  invoiceOutFk: 'invoiceOutFk',
  taxableBase: 'taxableBase',
  created: 'created',
  vat: 'vat',
  pgcFk: 'pgcFk'
});

exports.Prisma.ItemBarcodeScalarFieldEnum = makeEnum({
  id: 'id',
  itemFk: 'itemFk',
  code: 'code'
});

exports.Prisma.ItemBotanicalScalarFieldEnum = makeEnum({
  itemFk: 'itemFk',
  genusFk: 'genusFk',
  specieFk: 'specieFk'
});

exports.Prisma.ItemCategoryI18nScalarFieldEnum = makeEnum({
  categoryFk: 'categoryFk',
  lang: 'lang',
  name: 'name'
});

exports.Prisma.ItemCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  order: 'order',
  display: 'display',
  color: 'color',
  shortLife: 'shortLife',
  merchandise: 'merchandise',
  icon: 'icon',
  code: 'code',
  isReclining: 'isReclining',
  departmentFk: 'departmentFk'
});

exports.Prisma.ItemCleanConfigScalarFieldEnum = makeEnum({
  id: 'id',
  quantity: 'quantity',
  isStop: 'isStop'
});

exports.Prisma.ItemCleanLogScalarFieldEnum = makeEnum({
  id: 'id',
  itemFrom: 'itemFrom',
  itemDeleted: 'itemDeleted',
  created: 'created'
});

exports.Prisma.ItemConfigScalarFieldEnum = makeEnum({
  id: 'id',
  isItemTagTriggerDisabled: 'isItemTagTriggerDisabled',
  monthToDeactivate: 'monthToDeactivate',
  wasteRecipients: 'wasteRecipients'
});

exports.Prisma.ItemCostScalarFieldEnum = makeEnum({
  itemFk: 'itemFk',
  warehouseFk: 'warehouseFk',
  quantity: 'quantity',
  rotation: 'rotation',
  cm3: 'cm3',
  storage: 'storage',
  handling: 'handling',
  extraCharge: 'extraCharge',
  wasted: 'wasted',
  cm3delivery: 'cm3delivery',
  grams: 'grams'
});

exports.Prisma.ItemFamilyScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description'
});

exports.Prisma.ItemImageQueueScalarFieldEnum = makeEnum({
  itemFk: 'itemFk',
  url: 'url',
  error: 'error',
  attempts: 'attempts',
  created: 'created',
  updated: 'updated',
  priority: 'priority'
});

exports.Prisma.ItemLabelScalarFieldEnum = makeEnum({
  id: 'id',
  itemFk: 'itemFk',
  itemName: 'itemName',
  price: 'price',
  labels: 'labels'
});

exports.Prisma.ItemLogScalarFieldEnum = makeEnum({
  id: 'id',
  originFk: 'originFk',
  userFk: 'userFk',
  action: 'action',
  creationDate: 'creationDate',
  description: 'description',
  changedModel: 'changedModel',
  oldInstance: 'oldInstance',
  newInstance: 'newInstance',
  changedModelId: 'changedModelId',
  changedModelValue: 'changedModelValue'
});

exports.Prisma.ItemMatchPropertiesScalarFieldEnum = makeEnum({
  itemFk: 'itemFk',
  name: 'name',
  producer: 'producer',
  size: 'size'
});

exports.Prisma.ItemPackingTypeScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description'
});

exports.Prisma.ItemPlacementSupplyScalarFieldEnum = makeEnum({
  id: 'id',
  itemFk: 'itemFk',
  quantity: 'quantity',
  priority: 'priority',
  created: 'created',
  userFk: 'userFk',
  repoUserFk: 'repoUserFk',
  sectorFk: 'sectorFk'
});

exports.Prisma.ItemProposalScalarFieldEnum = makeEnum({
  itemFk: 'itemFk',
  mateFk: 'mateFk',
  counter: 'counter'
});

exports.Prisma.ItemScalarFieldEnum = makeEnum({
  id: 'id',
  equivalent: 'equivalent',
  name: 'name',
  size: 'size',
  stems: 'stems',
  minPrice: 'minPrice',
  isToPrint: 'isToPrint',
  family: 'family',
  box: 'box',
  category: 'category',
  originFk: 'originFk',
  doPhoto: 'doPhoto',
  image: 'image',
  inkFk: 'inkFk',
  intrastatFk: 'intrastatFk',
  hasMinPrice: 'hasMinPrice',
  created: 'created',
  comment: 'comment',
  typeFk: 'typeFk',
  generic: 'generic',
  producerFk: 'producerFk',
  description: 'description',
  density: 'density',
  relevancy: 'relevancy',
  expenceFk: 'expenceFk',
  isActive: 'isActive',
  longName: 'longName',
  subName: 'subName',
  tag5: 'tag5',
  value5: 'value5',
  tag6: 'tag6',
  value6: 'value6',
  tag7: 'tag7',
  value7: 'value7',
  tag8: 'tag8',
  value8: 'value8',
  tag9: 'tag9',
  value9: 'value9',
  tag10: 'tag10',
  value10: 'value10',
  minimum: 'minimum',
  upToDown: 'upToDown',
  supplyResponseFk: 'supplyResponseFk',
  hasKgPrice: 'hasKgPrice',
  isFloramondo: 'isFloramondo',
  isFragile: 'isFragile',
  numberOfItemsPerCask: 'numberOfItemsPerCask',
  embalageCode: 'embalageCode',
  quality: 'quality',
  stars: 'stars',
  stemMultiplier: 'stemMultiplier',
  itemPackingTypeFk: 'itemPackingTypeFk',
  packingOut: 'packingOut',
  genericFk: 'genericFk',
  packingShelve: 'packingShelve',
  isLaid: 'isLaid',
  lastUsed: 'lastUsed',
  weightByPiece: 'weightByPiece'
});

exports.Prisma.ItemShelvingLogScalarFieldEnum = makeEnum({
  id: 'id',
  itemShelvingFk: 'itemShelvingFk',
  workerFk: 'workerFk',
  created: 'created',
  accion: 'accion',
  itemFk: 'itemFk',
  shelvingFk: 'shelvingFk',
  quantity: 'quantity',
  visible: 'visible',
  available: 'available',
  grouping: 'grouping',
  packing: 'packing',
  stars: 'stars'
});

exports.Prisma.ItemShelvingPlacementSupplyScalarFieldEnum = makeEnum({
  id: 'id',
  itemShelvingFk: 'itemShelvingFk',
  itemPlacementSupplyFk: 'itemPlacementSupplyFk',
  quantity: 'quantity',
  created: 'created',
  userFk: 'userFk',
  isPicked: 'isPicked'
});

exports.Prisma.ItemShelvingSaleScalarFieldEnum = makeEnum({
  id: 'id',
  itemShelvingFk: 'itemShelvingFk',
  saleFk: 'saleFk',
  quantity: 'quantity',
  created: 'created',
  userFk: 'userFk'
});

exports.Prisma.ItemShelvingScalarFieldEnum = makeEnum({
  id: 'id',
  itemFk: 'itemFk',
  shelvingFk: 'shelvingFk',
  visible: 'visible',
  created: 'created',
  grouping: 'grouping',
  packing: 'packing',
  packagingFk: 'packagingFk',
  userFk: 'userFk'
});

exports.Prisma.ItemTagScalarFieldEnum = makeEnum({
  id: 'id',
  itemFk: 'itemFk',
  tagFk: 'tagFk',
  value: 'value',
  intValue: 'intValue',
  priority: 'priority'
});

exports.Prisma.ItemTaxCountryScalarFieldEnum = makeEnum({
  id: 'id',
  itemFk: 'itemFk',
  countryFk: 'countryFk',
  taxClassFk: 'taxClassFk',
  effectived: 'effectived'
});

exports.Prisma.ItemTypeI18nScalarFieldEnum = makeEnum({
  typeFk: 'typeFk',
  lang: 'lang',
  name: 'name'
});

exports.Prisma.ItemTypeRestrictionScalarFieldEnum = makeEnum({
  id: 'id',
  itemTypeFk: 'itemTypeFk',
  dated: 'dated',
  minAmount: 'minAmount'
});

exports.Prisma.ItemTypeScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  name: 'name',
  gramsMax: 'gramsMax',
  order: 'order',
  categoryFk: 'categoryFk',
  workerFk: 'workerFk',
  isInventory: 'isInventory',
  created: 'created',
  transaction: 'transaction',
  making: 'making',
  location: 'location',
  life: 'life',
  maneuver: 'maneuver',
  target: 'target',
  topMargin: 'topMargin',
  profit: 'profit',
  density: 'density',
  promo: 'promo',
  isPackaging: 'isPackaging',
  hasComponents: 'hasComponents',
  warehouseFk: 'warehouseFk',
  compression: 'compression',
  itemPackingTypeFk: 'itemPackingTypeFk',
  temperatureFk: 'temperatureFk',
  isUnconventionalSize: 'isUnconventionalSize',
  isLaid: 'isLaid',
  maxRefs: 'maxRefs',
  isMergeable: 'isMergeable'
});

exports.Prisma.ItemTypeTagScalarFieldEnum = makeEnum({
  id: 'id',
  itemTypeFk: 'itemTypeFk',
  tagFk: 'tagFk',
  priority: 'priority'
});

exports.Prisma.LabourTreeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  lft: 'lft',
  rgt: 'rgt',
  depth: 'depth',
  sons: 'sons'
});

exports.Prisma.LedgerConfigScalarFieldEnum = makeEnum({
  lastBookEntry: 'lastBookEntry',
  maxTolerance: 'maxTolerance'
});

exports.Prisma.LungSizeScalarFieldEnum = makeEnum({
  hora: 'hora',
  size: 'size',
  dia: 'dia'
});

exports.Prisma.MachineDetailScalarFieldEnum = makeEnum({
  id: 'id',
  machineFk: 'machineFk',
  dated: 'dated',
  action: 'action',
  value: 'value',
  workerFk: 'workerFk',
  dmsFk: 'dmsFk'
});

exports.Prisma.MachineDmsScalarFieldEnum = makeEnum({
  id: 'id',
  machineFk: 'machineFk',
  dmsFk: 'dmsFk'
});

exports.Prisma.MachineScalarFieldEnum = makeEnum({
  id: 'id',
  plate: 'plate',
  serialNumber: 'serialNumber',
  maker: 'maker',
  model: 'model',
  purchased: 'purchased',
  warehouseFk: 'warehouseFk',
  departmentFk: 'departmentFk',
  type: 'type',
  use: 'use',
  productionYear: 'productionYear',
  photo: 'photo',
  workerFk: 'workerFk',
  companyFk: 'companyFk',
  ppeFk: 'ppeFk',
  supplierFk: 'supplierFk'
});

exports.Prisma.MachineWorkerConfigScalarFieldEnum = makeEnum({
  id: 'id',
  maxHours: 'maxHours'
});

exports.Prisma.MachineWorkerScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  machineFk: 'machineFk',
  inTimed: 'inTimed',
  outTimed: 'outTimed'
});

exports.Prisma.MailScalarFieldEnum = makeEnum({
  id: 'id',
  receiver: 'receiver',
  sender: 'sender',
  replyTo: 'replyTo',
  subject: 'subject',
  body: 'body',
  sent: 'sent',
  creationDate: 'creationDate',
  attachment: 'attachment',
  status: 'status',
  senderFk: 'senderFk',
  recipientFk: 'recipientFk',
  plainTextBody: 'plainTextBody'
});

exports.Prisma.MailTemplatesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  attachmentPath: 'attachmentPath'
});

exports.Prisma.MandateScalarFieldEnum = makeEnum({
  id: 'id',
  clientFk: 'clientFk',
  companyFk: 'companyFk',
  code: 'code',
  created: 'created',
  finished: 'finished',
  mandateTypeFk: 'mandateTypeFk'
});

exports.Prisma.MandateTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.ManuscriptScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  description: 'description',
  enabled: 'enabled'
});

exports.Prisma.MdbAppScalarFieldEnum = makeEnum({
  app: 'app',
  baselineBranchFk: 'baselineBranchFk',
  userFk: 'userFk',
  locked: 'locked'
});

exports.Prisma.MdbBranchScalarFieldEnum = makeEnum({
  name: 'name'
});

exports.Prisma.MdbVersionScalarFieldEnum = makeEnum({
  app: 'app',
  branchFk: 'branchFk',
  version: 'version'
});

exports.Prisma.MedicalCenterScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.MedicalReviewScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  centerFk: 'centerFk',
  date: 'date',
  time: 'time',
  isFit: 'isFit',
  amount: 'amount',
  invoice: 'invoice',
  remark: 'remark'
});

exports.Prisma.MessageInboxScalarFieldEnum = makeEnum({
  id: 'id',
  uuid: 'uuid',
  sender: 'sender',
  recipient: 'recipient',
  finalRecipient: 'finalRecipient',
  message: 'message',
  sendDate: 'sendDate',
  read: 'read'
});

exports.Prisma.MessageScalarFieldEnum = makeEnum({
  id: 'id',
  uuid: 'uuid',
  sender: 'sender',
  recipient: 'recipient',
  message: 'message',
  sendDate: 'sendDate'
});

exports.Prisma.MistakeTypeScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.MobileAppVersionControlScalarFieldEnum = makeEnum({
  id: 'id',
  appName: 'appName',
  version: 'version',
  isVersionCritical: 'isVersionCritical',
  urlProduction: 'urlProduction',
  urlBeta: 'urlBeta',
  versionBeta: 'versionBeta',
  isVersionBetaCritical: 'isVersionBetaCritical'
});

exports.Prisma.MrwScalarFieldEnum = makeEnum({
  id: 'id',
  ticketFk: 'ticketFk',
  counter: 'counter',
  shipped: 'shipped',
  price: 'price'
});

exports.Prisma.MrwServiceScalarFieldEnum = makeEnum({
  agencyModeCodeFk: 'agencyModeCodeFk',
  clientType: 'clientType',
  serviceType: 'serviceType'
});

exports.Prisma.MrwServiceWeekdayScalarFieldEnum = makeEnum({
  agencyModeCodeFk: 'agencyModeCodeFk',
  weekdays: 'weekdays',
  serviceType: 'serviceType',
  params: 'params'
});

exports.Prisma.NoticeCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  keyName: 'keyName',
  name: 'name',
  subject: 'subject',
  description: 'description',
  isEnabled: 'isEnabled',
  requiredRole: 'requiredRole'
});

exports.Prisma.NoticeSubscriptionScalarFieldEnum = makeEnum({
  noticeCategoryFk: 'noticeCategoryFk',
  userFk: 'userFk'
});

exports.Prisma.ObservationTypeScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  code: 'code',
  hasNewBornMessage: 'hasNewBornMessage'
});

exports.Prisma.OccupationCodeScalarFieldEnum = makeEnum({
  code: 'code',
  name: 'name'
});

exports.Prisma.OperatorScalarFieldEnum = makeEnum({
  workerFk: 'workerFk',
  numberOfWagons: 'numberOfWagons',
  trainFk: 'trainFk',
  itemPackingTypeFk: 'itemPackingTypeFk',
  warehouseFk: 'warehouseFk'
});

exports.Prisma.OrderTicketScalarFieldEnum = makeEnum({
  orderFk: 'orderFk',
  ticketFk: 'ticketFk'
});

exports.Prisma.OriginI18nScalarFieldEnum = makeEnum({
  originFk: 'originFk',
  lang: 'lang',
  name: 'name'
});

exports.Prisma.OriginScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  name: 'name',
  warehouseFk: 'warehouseFk',
  countryFk: 'countryFk'
});

exports.Prisma.OsTicketConfigScalarFieldEnum = makeEnum({
  id: 'id',
  host: 'host',
  user: 'user',
  password: 'password',
  oldStatus: 'oldStatus',
  newStatusId: 'newStatusId',
  day: 'day',
  comment: 'comment',
  hostDb: 'hostDb',
  userDb: 'userDb',
  passwordDb: 'passwordDb',
  portDb: 'portDb',
  responseType: 'responseType',
  fromEmailId: 'fromEmailId',
  replyTo: 'replyTo'
});

exports.Prisma.OutgoingInvoiceVatScalarFieldEnum = makeEnum({
  outgoingInvoice: 'outgoingInvoice',
  taxBase: 'taxBase',
  equalizationTax: 'equalizationTax',
  Vat: 'Vat'
});

exports.Prisma.PackageCheckedScalarFieldEnum = makeEnum({
  id: 'id',
  itemFk: 'itemFk'
});

exports.Prisma.PackageEquivalentScalarFieldEnum = makeEnum({
  packagingFk: 'packagingFk',
  equivalentFk: 'equivalentFk'
});

exports.Prisma.PackagingConfigScalarFieldEnum = makeEnum({
  id: 'id',
  upperGap: 'upperGap',
  previousPreparationMinimumSize: 'previousPreparationMinimumSize',
  defaultConveyorBuildingClass: 'defaultConveyorBuildingClass',
  palletPackaging: 'palletPackaging',
  carryPackaging: 'carryPackaging',
  freightItemPackaging: 'freightItemPackaging'
});

exports.Prisma.PackagingGiftsScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  photo: 'photo',
  started: 'started',
  ended: 'ended',
  warehouseFk: 'warehouseFk',
  provinceFk: 'provinceFk',
  countryFk: 'countryFk'
});

exports.Prisma.PackagingScalarFieldEnum = makeEnum({
  id: 'id',
  volume: 'volume',
  width: 'width',
  depth: 'depth',
  height: 'height',
  value: 'value',
  isPackageReturnable: 'isPackageReturnable',
  created: 'created',
  packagingReturnFk: 'packagingReturnFk',
  lower: 'lower',
  upload: 'upload',
  base: 'base',
  itemFk: 'itemFk',
  price: 'price',
  isBox: 'isBox',
  cubicPackage: 'cubicPackage',
  returnCost: 'returnCost',
  cmrName: 'cmrName',
  freightItemFk: 'freightItemFk',
  hasCompressionVariations: 'hasCompressionVariations',
  conveyorBuildingClassFk: 'conveyorBuildingClassFk',
  isTrolley: 'isTrolley',
  isPallet: 'isPallet'
});

exports.Prisma.PackagingWithFreightScalarFieldEnum = makeEnum({
  packagingFk: 'packagingFk',
  priority: 'priority'
});

exports.Prisma.PackagingWithoutFreightScalarFieldEnum = makeEnum({
  packagingFk: 'packagingFk',
  priority: 'priority'
});

exports.Prisma.PackingSiteConfigScalarFieldEnum = makeEnum({
  id: 'id',
  shinobiUrl: 'shinobiUrl',
  shinobiToken: 'shinobiToken',
  shinobiGroupKey: 'shinobiGroupKey',
  avgBoxingTime: 'avgBoxingTime'
});

exports.Prisma.PackingSiteLogScalarFieldEnum = makeEnum({
  id: 'id',
  packingSiteFk: 'packingSiteFk',
  hostFk: 'hostFk',
  workerFk: 'workerFk',
  printerModelFk: 'printerModelFk',
  typeErrorFk: 'typeErrorFk',
  creationDate: 'creationDate',
  description: 'description'
});

exports.Prisma.PackingSiteScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  hostFk: 'hostFk',
  printerFk: 'printerFk',
  collectionFk: 'collectionFk',
  monitorId: 'monitorId'
});

exports.Prisma.PackingSiteTypeErrorScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description'
});

exports.Prisma.PaperSizeScalarFieldEnum = makeEnum({
  code: 'code',
  color: 'color',
  alias: 'alias'
});

exports.Prisma.ParkingScalarFieldEnum = makeEnum({
  id: 'id',
  column: 'column',
  row: 'row',
  sectorFk: 'sectorFk',
  code: 'code',
  pickingOrder: 'pickingOrder'
});

exports.Prisma.PayDemDetailScalarFieldEnum = makeEnum({
  id: 'id',
  detail: 'detail'
});

exports.Prisma.PayDemScalarFieldEnum = makeEnum({
  id: 'id',
  payDem: 'payDem'
});

exports.Prisma.PayMethodScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  name: 'name',
  solution: 'solution',
  outstandingDebt: 'outstandingDebt',
  graceDays: 'graceDays',
  isIbanRequiredForClients: 'isIbanRequiredForClients',
  isIbanRequiredForSuppliers: 'isIbanRequiredForSuppliers',
  isNotified: 'isNotified',
  hasVerified: 'hasVerified',
  graceMonthsDisableChecked: 'graceMonthsDisableChecked'
});

exports.Prisma.PaymentScalarFieldEnum = makeEnum({
  id: 'id',
  received: 'received',
  supplierFk: 'supplierFk',
  amount: 'amount',
  currencyFk: 'currencyFk',
  divisa: 'divisa',
  bankFk: 'bankFk',
  payMethodFk: 'payMethodFk',
  bankingFees: 'bankingFees',
  concept: 'concept',
  companyFk: 'companyFk',
  created: 'created',
  isConciliated: 'isConciliated',
  dueDated: 'dueDated',
  workerFk: 'workerFk'
});

exports.Prisma.PcsScalarFieldEnum = makeEnum({
  created: 'created',
  routeFk: 'routeFk',
  id: 'id',
  pallet: 'pallet',
  box: 'box'
});

exports.Prisma.Pcs_grafScalarFieldEnum = makeEnum({
  id: 'id',
  dia: 'dia',
  created: 'created',
  box: 'box',
  pallet: 'pallet',
  routeFk: 'routeFk',
  hh: 'hh',
  mm: 'mm'
});

exports.Prisma.PedidosInternosScalarFieldEnum = makeEnum({
  id: 'id',
  idArticle: 'idArticle',
  quantity: 'quantity'
});

exports.Prisma.PeriodicityTypeScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description'
});

exports.Prisma.PersonalProtectionEquipmentScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.PgcEquScalarFieldEnum = makeEnum({
  vatFk: 'vatFk',
  equFk: 'equFk'
});

exports.Prisma.PgcMasterScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description'
});

exports.Prisma.PgcScalarFieldEnum = makeEnum({
  code: 'code',
  rate: 'rate',
  name: 'name',
  cplusTaxBreakFk: 'cplusTaxBreakFk',
  mod340: 'mod340',
  mod347: 'mod347',
  cplusTrascendency477Fk: 'cplusTrascendency477Fk',
  isEqualizated: 'isEqualizated'
});

exports.Prisma.PlantpassportAuthorityScalarFieldEnum = makeEnum({
  id: 'id',
  denomination: 'denomination',
  countryFk: 'countryFk'
});

exports.Prisma.PlantpassportScalarFieldEnum = makeEnum({
  producerFk: 'producerFk',
  plantpassportAuthorityFk: 'plantpassportAuthorityFk',
  number: 'number',
  isRequested: 'isRequested'
});

exports.Prisma.PostCodeScalarFieldEnum = makeEnum({
  code: 'code',
  townFk: 'townFk',
  geoFk: 'geoFk'
});

exports.Prisma.PpeComponentScalarFieldEnum = makeEnum({
  id: 'id',
  ppeFk: 'ppeFk',
  invoiceInFk: 'invoiceInFk',
  amount: 'amount'
});

exports.Prisma.PpeDMSScalarFieldEnum = makeEnum({
  id: 'id',
  dmsFk: 'dmsFk',
  ppeFk: 'ppeFk'
});

exports.Prisma.PpeGroupScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.PpeLocationScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description'
});

exports.Prisma.PpePlanScalarFieldEnum = makeEnum({
  id: 'id',
  rate: 'rate',
  days: 'days'
});

exports.Prisma.PpeScalarFieldEnum = makeEnum({
  id: 'id',
  amortization: 'amortization',
  firstAmortizated: 'firstAmortizated',
  lastAmortizated: 'lastAmortizated',
  finished: 'finished',
  value: 'value',
  planFk: 'planFk',
  groupFk: 'groupFk',
  account: 'account',
  endowment: 'endowment',
  elementAccount: 'elementAccount',
  nature: 'nature',
  location: 'location',
  discharged: 'discharged',
  cause: 'cause',
  photo: 'photo',
  isInvestmentAsset: 'isInvestmentAsset',
  workerFk: 'workerFk',
  companyFk: 'companyFk',
  description: 'description'
});

exports.Prisma.PriceFixedScalarFieldEnum = makeEnum({
  itemFk: 'itemFk',
  rate0: 'rate0',
  rate1: 'rate1',
  rate2: 'rate2',
  rate3: 'rate3',
  started: 'started',
  ended: 'ended',
  bonus: 'bonus',
  warehouseFk: 'warehouseFk',
  created: 'created',
  id: 'id',
  grouping: 'grouping',
  packing: 'packing',
  box: 'box'
});

exports.Prisma.PrintQueueArgsScalarFieldEnum = makeEnum({
  printQueueFk: 'printQueueFk',
  name: 'name',
  value: 'value'
});

exports.Prisma.PrintQueueConfigScalarFieldEnum = makeEnum({
  id: 'id',
  networkDrive: 'networkDrive',
  dmsPath: 'dmsPath',
  printQueueLimit: 'printQueueLimit'
});

exports.Prisma.PrintQueueScalarFieldEnum = makeEnum({
  id: 'id',
  printerFk: 'printerFk',
  priorityFk: 'priorityFk',
  reportFk: 'reportFk',
  statusCode: 'statusCode',
  started: 'started',
  finished: 'finished',
  workerFk: 'workerFk',
  error: 'error',
  errorNumber: 'errorNumber',
  created: 'created'
});

exports.Prisma.PrinterModelScalarFieldEnum = makeEnum({
  code: 'code'
});

exports.Prisma.PrinterScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  path: 'path',
  modelFk: 'modelFk',
  macWifi: 'macWifi',
  ipAddress: 'ipAddress',
  reference: 'reference',
  isLabeler: 'isLabeler',
  sectorFk: 'sectorFk',
  paperSizeFk: 'paperSizeFk'
});

exports.Prisma.PrintingQueueCheckScalarFieldEnum = makeEnum({
  lastCount: 'lastCount',
  lastCheckSum: 'lastCheckSum',
  isAlreadyNotified: 'isAlreadyNotified'
});

exports.Prisma.ProducerScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  isVisible: 'isVisible',
  created: 'created'
});

exports.Prisma.ProductionConfigScalarFieldEnum = makeEnum({
  isPreviousPreparationRequired: 'isPreviousPreparationRequired',
  ticketPrintedMax: 'ticketPrintedMax',
  ticketTrolleyMax: 'ticketTrolleyMax',
  rookieDays: 'rookieDays',
  notBuyingMonths: 'notBuyingMonths',
  id: 'id',
  isZoneClosedByExpeditionActivated: 'isZoneClosedByExpeditionActivated',
  maxNotReadyCollections: 'maxNotReadyCollections',
  minTicketsToCloseZone: 'minTicketsToCloseZone',
  movingTicketDelRoute: 'movingTicketDelRoute',
  defaultZone: 'defaultZone',
  defautlAgencyMode: 'defautlAgencyMode',
  hasUniqueCollectionTime: 'hasUniqueCollectionTime',
  maxCollectionWithoutUser: 'maxCollectionWithoutUser',
  pendingCollectionsOrder: 'pendingCollectionsOrder',
  pendingCollectionsAge: 'pendingCollectionsAge',
  maxNotAssignedCollectionLifeTime: 'maxNotAssignedCollectionLifeTime',
  maxProductionScopeDays: 'maxProductionScopeDays'
});

exports.Prisma.ProfessionalCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  salary: 'salary',
  salaryorSeniority: 'salaryorSeniority',
  year: 'year'
});

exports.Prisma.ProfileTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.ProjectNotesScalarFieldEnum = makeEnum({
  id: 'id',
  created: 'created',
  txt: 'txt',
  userFk: 'userFk',
  projectFk: 'projectFk'
});

exports.Prisma.ProjectScalarFieldEnum = makeEnum({
  id: 'id',
  created: 'created',
  name: 'name',
  photo: 'photo',
  started: 'started',
  finished: 'finished',
  userFk: 'userFk',
  departmentFk: 'departmentFk',
  companyFk: 'companyFk',
  location: 'location',
  amount: 'amount',
  stateFk: 'stateFk'
});

exports.Prisma.ProjectStateScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description'
});

exports.Prisma.PropertyDmsScalarFieldEnum = makeEnum({
  id: 'id',
  dmsFk: 'dmsFk',
  propertyFk: 'propertyFk'
});

exports.Prisma.PropertyGroupScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.PropertyNotesScalarFieldEnum = makeEnum({
  id: 'id',
  propertyFk: 'propertyFk',
  created: 'created',
  note: 'note',
  userFk: 'userFk'
});

exports.Prisma.PropertyScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  cadaster: 'cadaster',
  smallholding: 'smallholding',
  area: 'area',
  townFk: 'townFk',
  registry: 'registry',
  volume: 'volume',
  book: 'book',
  page: 'page',
  farm: 'farm',
  registration: 'registration',
  value: 'value',
  propertyGroupFk: 'propertyGroupFk',
  companyFk: 'companyFk',
  photo: 'photo',
  allocation: 'allocation',
  m2: 'm2',
  tome: 'tome',
  url: 'url',
  protocol: 'protocol'
});

exports.Prisma.ProvinceScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  countryFk: 'countryFk',
  warehouseFk: 'warehouseFk',
  zoneFk: 'zoneFk',
  geoFk: 'geoFk',
  autonomyFk: 'autonomyFk'
});

exports.Prisma.PunchStateScalarFieldEnum = makeEnum({
  workerFk: 'workerFk',
  state: 'state',
  created: 'created'
});

exports.Prisma.QueuePriorityScalarFieldEnum = makeEnum({
  id: 'id',
  priority: 'priority',
  code: 'code'
});

exports.Prisma.RankBonusScalarFieldEnum = makeEnum({
  id: 'id',
  rank: 'rank',
  bonus: 'bonus'
});

exports.Prisma.RateConfigScalarFieldEnum = makeEnum({
  id: 'id',
  rate0: 'rate0',
  rate1: 'rate1',
  rate2: 'rate2',
  rate3: 'rate3'
});

exports.Prisma.RateScalarFieldEnum = makeEnum({
  id: 'id',
  dated: 'dated',
  warehouseFk: 'warehouseFk',
  rate0: 'rate0',
  rate1: 'rate1',
  rate2: 'rate2',
  rate3: 'rate3'
});

exports.Prisma.ReceiptScalarFieldEnum = makeEnum({
  Id: 'Id',
  invoiceFk: 'invoiceFk',
  amountPaid: 'amountPaid',
  payed: 'payed',
  workerFk: 'workerFk',
  bankFk: 'bankFk',
  clientFk: 'clientFk',
  created: 'created',
  companyFk: 'companyFk',
  isConciliate: 'isConciliate'
});

exports.Prisma.RecipeScalarFieldEnum = makeEnum({
  id: 'id',
  itemFk: 'itemFk',
  name: 'name',
  size: 'size',
  originFk: 'originFk',
  typeFk: 'typeFk',
  longName: 'longName',
  quantity: 'quantity',
  element: 'element',
  inkFk: 'inkFk'
});

exports.Prisma.Recipe_logScalarFieldEnum = makeEnum({
  id: 'id',
  recipe_ItemFk: 'recipe_ItemFk',
  element: 'element',
  selected_ItemFk: 'selected_ItemFk'
});

exports.Prisma.RecoveryScalarFieldEnum = makeEnum({
  id: 'id',
  clientFk: 'clientFk',
  started: 'started',
  finished: 'finished',
  amount: 'amount',
  period: 'period'
});

exports.Prisma.ReferenceCurrentScalarFieldEnum = makeEnum({
  dated: 'dated',
  value: 'value',
  currencyFk: 'currencyFk'
});

exports.Prisma.ReferenceRateConfigScalarFieldEnum = makeEnum({
  simulatedValue: 'simulatedValue'
});

exports.Prisma.ReferenceRateScalarFieldEnum = makeEnum({
  currencyFk: 'currencyFk',
  dated: 'dated',
  value: 'value'
});

exports.Prisma.ReportScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  paperSizeFk: 'paperSizeFk',
  method: 'method'
});

exports.Prisma.ReturnBucketsScalarFieldEnum = makeEnum({
  id: 'id',
  freightContainerType: 'freightContainerType',
  freightPackagingEmpty: 'freightPackagingEmpty',
  freightPackagingFull: 'freightPackagingFull'
});

exports.Prisma.RouteActionScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  price: 'price',
  isMainlineDelivered: 'isMainlineDelivered'
});

exports.Prisma.RouteCommissionScalarFieldEnum = makeEnum({
  id: 'id',
  routeFk: 'routeFk',
  workCenterFk: 'workCenterFk',
  km: 'km',
  m3: 'm3',
  yearlyKm: 'yearlyKm',
  yearlyM3: 'yearlyM3',
  cat4m3: 'cat4m3',
  cat5m3: 'cat5m3',
  freelanceYearlyM3: 'freelanceYearlyM3'
});

exports.Prisma.RouteComplementScalarFieldEnum = makeEnum({
  id: 'id',
  dated: 'dated',
  workerFk: 'workerFk',
  price: 'price',
  routeActionFk: 'routeActionFk'
});

exports.Prisma.RouteConfigScalarFieldEnum = makeEnum({
  id: 'id',
  kmRate: 'kmRate',
  kmTruckRate: 'kmTruckRate',
  m3Distribution: 'm3Distribution',
  m3Management: 'm3Management',
  m3Palletization: 'm3Palletization',
  load1m3: 'load1m3',
  load2m3: 'load2m3',
  load3m3: 'load3m3',
  load4m3: 'load4m3',
  load5m3: 'load5m3',
  load6m3: 'load6m3',
  rateHoliday: 'rateHoliday',
  plusCategory1: 'plusCategory1',
  plusCategory2: 'plusCategory2',
  maxSalaryCategory1: 'maxSalaryCategory1',
  maxSalaryCategory2: 'maxSalaryCategory2',
  distributionM3Category1: 'distributionM3Category1',
  distributionM3Category2: 'distributionM3Category2',
  plusCategory1Concept: 'plusCategory1Concept',
  plusCategory2Concept: 'plusCategory2Concept',
  defaultCompanyFk: 'defaultCompanyFk',
  kmHeavy: 'kmHeavy',
  kmLight: 'kmLight',
  kmYearly: 'kmYearly',
  m3Yearly: 'm3Yearly',
  deliveryM3Cat4: 'deliveryM3Cat4',
  deliveryM3Cat5: 'deliveryM3Cat5',
  plusCat2Fixed: 'plusCat2Fixed',
  plusCat2Variable: 'plusCat2Variable',
  plusCat3Fixed: 'plusCat3Fixed',
  plusCat3Variable: 'plusCat3Variable',
  distributionCat4M3: 'distributionCat4M3',
  distributionCat5M3: 'distributionCat5M3',
  rateCat4: 'rateCat4',
  rateCat5: 'rateCat5',
  freelanceM3: 'freelanceM3',
  freelanceMinM3: 'freelanceMinM3',
  mainlineDelivered: 'mainlineDelivered',
  cutoffDated: 'cutoffDated',
  defaultWorkCenterFk: 'defaultWorkCenterFk',
  kmMax: 'kmMax',
  truckerBusinessProfessionalCategoryFk: 'truckerBusinessProfessionalCategoryFk'
});

exports.Prisma.RouteLoadWorkerScalarFieldEnum = makeEnum({
  routeFk: 'routeFk',
  workerFk: 'workerFk'
});

exports.Prisma.RouteLogScalarFieldEnum = makeEnum({
  id: 'id',
  originFk: 'originFk',
  userFk: 'userFk',
  action: 'action',
  creationDate: 'creationDate',
  description: 'description',
  changedModel: 'changedModel',
  oldInstance: 'oldInstance',
  newInstance: 'newInstance',
  changedModelId: 'changedModelId',
  changedModelValue: 'changedModelValue'
});

exports.Prisma.RouteRecalcScalarFieldEnum = makeEnum({
  routeFk: 'routeFk'
});

exports.Prisma.RouteScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  created: 'created',
  vehicleFk: 'vehicleFk',
  agencyModeFk: 'agencyModeFk',
  time: 'time',
  isOk: 'isOk',
  kmStart: 'kmStart',
  kmEnd: 'kmEnd',
  started: 'started',
  finished: 'finished',
  gestdocFk: 'gestdocFk',
  cost: 'cost',
  m3: 'm3',
  description: 'description',
  zoneFk: 'zoneFk',
  priority: 'priority',
  invoiceInFk: 'invoiceInFk',
  beachFk: 'beachFk',
  commissionWorkCenterFk: 'commissionWorkCenterFk'
});

exports.Prisma.RouteUserPercentage__ScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  percentage: 'percentage',
  dated: 'dated'
});

exports.Prisma.RoutesMonitorScalarFieldEnum = makeEnum({
  routeFk: 'routeFk',
  name: 'name',
  beachFk: 'beachFk',
  ticketPacked: 'ticketPacked',
  ticketFree: 'ticketFree',
  ticketProduction: 'ticketProduction',
  packages: 'packages',
  note: 'note',
  dated: 'dated',
  dockFk: 'dockFk',
  m3: 'm3',
  priority: 'priority',
  etd: 'etd',
  expeditionTruckFk: 'expeditionTruckFk',
  m3boxes: 'm3boxes',
  bufferFk: 'bufferFk',
  isPickingAllowed: 'isPickingAllowed'
});

exports.Prisma.SaleBuyScalarFieldEnum = makeEnum({
  saleFk: 'saleFk',
  buyFk: 'buyFk',
  created: 'created',
  workerFk: 'workerFk'
});

exports.Prisma.SaleClonedScalarFieldEnum = makeEnum({
  saleClonedFk: 'saleClonedFk',
  saleOriginalFk: 'saleOriginalFk'
});

exports.Prisma.SaleComponentScalarFieldEnum = makeEnum({
  saleFk: 'saleFk',
  componentFk: 'componentFk',
  value: 'value',
  isGreuge: 'isGreuge',
  created: 'created'
});

exports.Prisma.SaleGoalScalarFieldEnum = makeEnum({
  id: 'id',
  month: 'month',
  year: 'year',
  rank: 'rank',
  walletWeightFrom: 'walletWeightFrom',
  walletWeightTo: 'walletWeightTo',
  goal: 'goal',
  goalType: 'goalType'
});

exports.Prisma.SaleGroupDetailScalarFieldEnum = makeEnum({
  id: 'id',
  created: 'created',
  saleFk: 'saleFk',
  saleGroupFk: 'saleGroupFk'
});

exports.Prisma.SaleGroupScalarFieldEnum = makeEnum({
  id: 'id',
  created: 'created',
  userFk: 'userFk',
  parkingFk: 'parkingFk',
  sectorFk: 'sectorFk'
});

exports.Prisma.SaleMistakeScalarFieldEnum = makeEnum({
  id: 'id',
  saleFk: 'saleFk',
  userFk: 'userFk',
  typeFk: 'typeFk',
  created: 'created'
});

exports.Prisma.SaleScalarFieldEnum = makeEnum({
  id: 'id',
  itemFk: 'itemFk',
  ticketFk: 'ticketFk',
  concept: 'concept',
  quantity: 'quantity',
  originalQuantity: 'originalQuantity',
  price: 'price',
  discount: 'discount',
  priceFixed: 'priceFixed',
  reserved: 'reserved',
  isPicked: 'isPicked',
  isPriceFixed: 'isPriceFixed',
  created: 'created',
  isAdded: 'isAdded'
});

exports.Prisma.SaleStateScalarFieldEnum = makeEnum({
  saleFk: 'saleFk',
  stateFk: 'stateFk'
});

exports.Prisma.SaleTrackingScalarFieldEnum = makeEnum({
  saleFk: 'saleFk',
  isChecked: 'isChecked',
  created: 'created',
  originalQuantity: 'originalQuantity',
  workerFk: 'workerFk',
  actionFk: 'actionFk',
  id: 'id',
  stateFk: 'stateFk'
});

exports.Prisma.SalesPersonGoalScalarFieldEnum = makeEnum({
  salesPersonName: 'salesPersonName',
  month: 'month',
  year: 'year',
  goal: 'goal'
});

exports.Prisma.SampleScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  description: 'description',
  isVisible: 'isVisible',
  hasCompany: 'hasCompany',
  hasPreview: 'hasPreview',
  datepickerEnabled: 'datepickerEnabled',
  model: 'model'
});

exports.Prisma.SectorCollectionSaleGroupScalarFieldEnum = makeEnum({
  id: 'id',
  created: 'created',
  sectorCollectionFk: 'sectorCollectionFk',
  saleGroupFk: 'saleGroupFk'
});

exports.Prisma.SectorCollectionScalarFieldEnum = makeEnum({
  id: 'id',
  created: 'created',
  userFk: 'userFk',
  sectorFk: 'sectorFk'
});

exports.Prisma.SectorProductivityScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  firstName: 'firstName',
  lastName: 'lastName',
  sector: 'sector',
  ticketCount: 'ticketCount',
  saleCount: 'saleCount',
  error: 'error',
  volume: 'volume',
  hourWorked: 'hourWorked',
  dated: 'dated'
});

exports.Prisma.SectorScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  warehouseFk: 'warehouseFk',
  isPreviousPreparedByPacking: 'isPreviousPreparedByPacking',
  code: 'code',
  isPreviousPrepared: 'isPreviousPrepared',
  isPackagingArea: 'isPackagingArea',
  reportFk: 'reportFk',
  sonFk: 'sonFk',
  isMain: 'isMain',
  itemPackingTypeFk: 'itemPackingTypeFk',
  workerFk: 'workerFk',
  printerFk: 'printerFk',
  isHideForPickers: 'isHideForPickers',
  isReserve: 'isReserve'
});

exports.Prisma.SharingCartDailyScalarFieldEnum = makeEnum({
  id: 'id',
  ownerFk: 'ownerFk',
  substituteFk: 'substituteFk',
  dated: 'dated',
  created: 'created'
});

exports.Prisma.SharingCartScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  started: 'started',
  ended: 'ended',
  workerSubstitute: 'workerSubstitute',
  created: 'created'
});

exports.Prisma.SharingClientScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  started: 'started',
  ended: 'ended',
  clientFk: 'clientFk'
});

exports.Prisma.ShelvingLogScalarFieldEnum = makeEnum({
  id: 'id',
  originFk: 'originFk',
  userFk: 'userFk',
  action: 'action',
  creationDate: 'creationDate',
  description: 'description',
  changedModel: 'changedModel',
  oldInstance: 'oldInstance',
  newInstance: 'newInstance',
  changedModelId: 'changedModelId',
  changedModelValue: 'changedModelValue'
});

exports.Prisma.ShelvingScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  parkingFk: 'parkingFk',
  isPrinted: 'isPrinted',
  priority: 'priority',
  parked: 'parked',
  userFk: 'userFk',
  isSpam: 'isSpam',
  isRecyclable: 'isRecyclable'
});

exports.Prisma.SilexACLScalarFieldEnum = makeEnum({
  id: 'id',
  module: 'module',
  method: 'method',
  role: 'role'
});

exports.Prisma.SinisterDetailScalarFieldEnum = makeEnum({
  id: 'id',
  sinisterFk: 'sinisterFk',
  created: 'created',
  amountIn: 'amountIn',
  amountOut: 'amountOut',
  isConciliated: 'isConciliated',
  workerFk: 'workerFk',
  bankFk: 'bankFk'
});

exports.Prisma.SinisterScalarFieldEnum = makeEnum({
  id: 'id',
  supplierFk: 'supplierFk',
  clientFk: 'clientFk',
  amount: 'amount',
  created: 'created',
  insureRate: 'insureRate',
  isBooked: 'isBooked',
  workerFk: 'workerFk',
  companyFk: 'companyFk'
});

exports.Prisma.SmartTagScalarFieldEnum = makeEnum({
  code: 'code',
  shelvingFk: 'shelvingFk',
  level: 'level'
});

exports.Prisma.SmsConfigScalarFieldEnum = makeEnum({
  id: 'id',
  uri: 'uri',
  title: 'title',
  apiKey: 'apiKey'
});

exports.Prisma.SmsScalarFieldEnum = makeEnum({
  id: 'id',
  senderFk: 'senderFk',
  sender: 'sender',
  destination: 'destination',
  message: 'message',
  statusCode: 'statusCode',
  status: 'status',
  created: 'created'
});

exports.Prisma.SolunionCAPScalarFieldEnum = makeEnum({
  creditInsurance: 'creditInsurance',
  dateStart: 'dateStart',
  dateEnd: 'dateEnd',
  dateLeaving: 'dateLeaving'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.SorterScalarFieldEnum = makeEnum({
  id: 'id',
  created: 'created',
  routeFk: 'routeFk',
  ticketFk: 'ticketFk',
  isBox: 'isBox',
  itemFk: 'itemFk',
  width: 'width',
  depth: 'depth',
  height: 'height',
  warehouseFk: 'warehouseFk',
  weight: 'weight',
  buildingOrder: 'buildingOrder',
  ETD: 'ETD',
  palletOrder: 'palletOrder',
  lungGrow: 'lungGrow'
});

exports.Prisma.SpecialLabelsScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  reportName: 'reportName',
  isVisible: 'isVisible',
  image: 'image'
});

exports.Prisma.SpecialPriceScalarFieldEnum = makeEnum({
  id: 'id',
  clientFk: 'clientFk',
  itemFk: 'itemFk',
  value: 'value'
});

exports.Prisma.SpecieGeoInvasiveScalarFieldEnum = makeEnum({
  id: 'id',
  genusFk: 'genusFk',
  specieFk: 'specieFk',
  zoneGeofk: 'zoneGeofk',
  isForbidden: 'isForbidden'
});

exports.Prisma.SpecieScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.SplitFilterScalarFieldEnum = makeEnum({
  id: 'id',
  autonomyFk: 'autonomyFk',
  clientFk: 'clientFk',
  nickname: 'nickname'
});

exports.Prisma.StarredModuleScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  moduleFk: 'moduleFk',
  position: 'position'
});

exports.Prisma.StateI18nScalarFieldEnum = makeEnum({
  stateFk: 'stateFk',
  lang: 'lang',
  name: 'name'
});

exports.Prisma.StateScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  order: 'order',
  alertLevel: 'alertLevel',
  code: 'code',
  sectorProdPriority: 'sectorProdPriority',
  nextStateFk: 'nextStateFk',
  isPreviousPreparable: 'isPreviousPreparable',
  isPicked: 'isPicked',
  isPreparable: 'isPreparable',
  semaphore: 'semaphore',
  isPrintable: 'isPrintable',
  isOK: 'isOK',
  graphCategory: 'graphCategory',
  isNotValidated: 'isNotValidated',
  classColor: 'classColor'
});

exports.Prisma.StockBuyedScalarFieldEnum = makeEnum({
  id: 'id',
  user: 'user',
  buyed: 'buyed',
  date: 'date',
  creationDate: 'creationDate',
  reserved: 'reserved',
  requested: 'requested',
  description: 'description'
});

exports.Prisma.StowawayScalarFieldEnum = makeEnum({
  id: 'id',
  shipFk: 'shipFk',
  created: 'created'
});

exports.Prisma.SupplierAccountScalarFieldEnum = makeEnum({
  id: 'id',
  supplierFk: 'supplierFk',
  iban: 'iban',
  office: 'office',
  DC: 'DC',
  number: 'number',
  description: 'description',
  bankEntityFk: 'bankEntityFk',
  bankFk: 'bankFk',
  beneficiary: 'beneficiary'
});

exports.Prisma.SupplierActivityScalarFieldEnum = makeEnum({
  code: 'code',
  name: 'name'
});

exports.Prisma.SupplierAddressScalarFieldEnum = makeEnum({
  id: 'id',
  supplierFk: 'supplierFk',
  nickname: 'nickname',
  street: 'street',
  provinceFk: 'provinceFk',
  postalCode: 'postalCode',
  city: 'city',
  phone: 'phone',
  mobile: 'mobile'
});

exports.Prisma.SupplierAgencyTermScalarFieldEnum = makeEnum({
  agencyFk: 'agencyFk',
  supplierFk: 'supplierFk',
  minimumPackages: 'minimumPackages',
  kmPrice: 'kmPrice',
  packagePrice: 'packagePrice',
  routePrice: 'routePrice',
  minimumKm: 'minimumKm',
  minimumM3: 'minimumM3',
  m3Price: 'm3Price'
});

exports.Prisma.SupplierContactScalarFieldEnum = makeEnum({
  id: 'id',
  supplierFk: 'supplierFk',
  phone: 'phone',
  mobile: 'mobile',
  email: 'email',
  observation: 'observation',
  name: 'name'
});

exports.Prisma.SupplierExpenseScalarFieldEnum = makeEnum({
  id: 'id',
  dated: 'dated',
  supplierFk: 'supplierFk',
  currencyFk: 'currencyFk',
  amount: 'amount',
  description: 'description',
  companyFk: 'companyFk',
  dmsFk: 'dmsFk',
  created: 'created',
  isConciliated: 'isConciliated',
  dueDated: 'dueDated'
});

exports.Prisma.SupplierLogScalarFieldEnum = makeEnum({
  id: 'id',
  originFk: 'originFk',
  userFk: 'userFk',
  action: 'action',
  creationDate: 'creationDate',
  description: 'description',
  changedModel: 'changedModel',
  oldInstance: 'oldInstance',
  newInstance: 'newInstance',
  changedModelId: 'changedModelId',
  changedModelValue: 'changedModelValue'
});

exports.Prisma.SupplierScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  account: 'account',
  street: 'street',
  city: 'city',
  provinceFk: 'provinceFk',
  countryFk: 'countryFk',
  nif: 'nif',
  isOfficial: 'isOfficial',
  isFarmer: 'isFarmer',
  retAccount: 'retAccount',
  phone: 'phone',
  commission: 'commission',
  nickname: 'nickname',
  payMethodFk: 'payMethodFk',
  payDay: 'payDay',
  payDemFk: 'payDemFk',
  created: 'created',
  isSerious: 'isSerious',
  note: 'note',
  postcodeFk: 'postcodeFk',
  postCode: 'postCode',
  isActive: 'isActive',
  taxTypeSageFk: 'taxTypeSageFk',
  withholdingSageFk: 'withholdingSageFk',
  transactionTypeSageFk: 'transactionTypeSageFk',
  isTrucker: 'isTrucker',
  workerFk: 'workerFk',
  supplierActivityFk: 'supplierActivityFk',
  healthRegister: 'healthRegister',
  isPayMethodChecked: 'isPayMethodChecked'
});

exports.Prisma.TabletDepartmentScalarFieldEnum = makeEnum({
  tabletFk: 'tabletFk',
  departmentFk: 'departmentFk'
});

exports.Prisma.TabletScalarFieldEnum = makeEnum({
  uuid: 'uuid',
  name: 'name',
  place: 'place',
  macwifi: 'macwifi'
});

exports.Prisma.TagAbbreviationScalarFieldEnum = makeEnum({
  value: 'value',
  abbreviation: 'abbreviation',
  tagFk: 'tagFk'
});

exports.Prisma.TagI18nScalarFieldEnum = makeEnum({
  tagFk: 'tagFk',
  lang: 'lang',
  name: 'name'
});

exports.Prisma.TagScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  name: 'name',
  isFree: 'isFree',
  isQuantitatif: 'isQuantitatif',
  sourceTable: 'sourceTable',
  unit: 'unit',
  ediTypeFk: 'ediTypeFk',
  overwrite: 'overwrite'
});

exports.Prisma.TaxAreaScalarFieldEnum = makeEnum({
  code: 'code',
  ClaveOperacionFactura: 'ClaveOperacionFactura',
  CodigoTransaccion: 'CodigoTransaccion'
});

exports.Prisma.TaxClassCodeScalarFieldEnum = makeEnum({
  taxClassFk: 'taxClassFk',
  effectived: 'effectived',
  taxCodeFk: 'taxCodeFk'
});

exports.Prisma.TaxClassScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  code: 'code'
});

exports.Prisma.TaxCodeScalarFieldEnum = makeEnum({
  id: 'id',
  dated: 'dated',
  code: 'code',
  taxTypeFk: 'taxTypeFk',
  rate: 'rate',
  equalizationTax: 'equalizationTax',
  type: 'type',
  link: 'link',
  isActive: 'isActive',
  updated: 'updated',
  transactionCode: 'transactionCode',
  operationCode: 'operationCode',
  taxCode: 'taxCode',
  isIntracommunity: 'isIntracommunity'
});

exports.Prisma.TaxTypeScalarFieldEnum = makeEnum({
  id: 'id',
  nickname: 'nickname',
  isAccrued: 'isAccrued',
  serial: 'serial',
  TIPOOPE: 'TIPOOPE',
  description: 'description',
  countryFk: 'countryFk'
});

exports.Prisma.TemperatureScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description',
  name: 'name'
});

exports.Prisma.ThermographScalarFieldEnum = makeEnum({
  id: 'id',
  model: 'model'
});

exports.Prisma.TicketCollectionScalarFieldEnum = makeEnum({
  id: 'id',
  ticketFk: 'ticketFk',
  collectionFk: 'collectionFk',
  created: 'created',
  level: 'level',
  wagon: 'wagon',
  smartTagFk: 'smartTagFk',
  usedShelves: 'usedShelves',
  itemCount: 'itemCount',
  liters: 'liters'
});

exports.Prisma.TicketConfigScalarFieldEnum = makeEnum({
  id: 'id',
  scopeDays: 'scopeDays',
  pickingDelay: 'pickingDelay'
});

exports.Prisma.TicketDmsScalarFieldEnum = makeEnum({
  ticketFk: 'ticketFk',
  dmsFk: 'dmsFk'
});

exports.Prisma.TicketDocumentationScalarFieldEnum = makeEnum({
  ticketFk: 'ticketFk'
});

exports.Prisma.TicketDownScalarFieldEnum = makeEnum({
  ticketFk: 'ticketFk',
  created: 'created',
  selected: 'selected',
  collectionFk: 'collectionFk',
  id: 'id'
});

exports.Prisma.TicketDown_SelectionTypeScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description'
});

exports.Prisma.TicketLastStateScalarFieldEnum = makeEnum({
  ticketFk: 'ticketFk',
  ticketTrackingFk: 'ticketTrackingFk',
  name: 'name'
});

exports.Prisma.TicketLogScalarFieldEnum = makeEnum({
  id: 'id',
  originFk: 'originFk',
  userFk: 'userFk',
  action: 'action',
  creationDate: 'creationDate',
  description: 'description',
  changedModel: 'changedModel',
  oldInstance: 'oldInstance',
  newInstance: 'newInstance',
  changedModelId: 'changedModelId',
  changedModelValue: 'changedModelValue'
});

exports.Prisma.TicketObservationScalarFieldEnum = makeEnum({
  id: 'id',
  ticketFk: 'ticketFk',
  observationTypeFk: 'observationTypeFk',
  description: 'description'
});

exports.Prisma.TicketPackageScalarFieldEnum = makeEnum({
  ticket: 'ticket',
  counter: 'counter'
});

exports.Prisma.TicketPackagingScalarFieldEnum = makeEnum({
  id: 'id',
  ticketFk: 'ticketFk',
  packagingFk: 'packagingFk',
  quantity: 'quantity',
  created: 'created',
  pvp: 'pvp',
  workerFk: 'workerFk'
});

exports.Prisma.TicketPackagingStartingStockScalarFieldEnum = makeEnum({
  clientFk: 'clientFk',
  packagingFk: 'packagingFk',
  itemFk: 'itemFk',
  sent: 'sent',
  returned: 'returned',
  isForgetable: 'isForgetable'
});

exports.Prisma.TicketParkingScalarFieldEnum = makeEnum({
  id: 'id',
  ticketFk: 'ticketFk',
  parkingFk: 'parkingFk',
  created: 'created',
  workerFk: 'workerFk'
});

exports.Prisma.TicketRecalcScalarFieldEnum = makeEnum({
  id: 'id',
  ticketFk: 'ticketFk'
});

exports.Prisma.TicketRefundScalarFieldEnum = makeEnum({
  id: 'id',
  refundTicketFk: 'refundTicketFk',
  originalTicketFk: 'originalTicketFk'
});

exports.Prisma.TicketRequestScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  ordered: 'ordered',
  shipped: 'shipped',
  salesPersonCode: 'salesPersonCode',
  buyerCode: 'buyerCode',
  quantity: 'quantity',
  price: 'price',
  itemFk: 'itemFk',
  clientFk: 'clientFk',
  response: 'response',
  total: 'total',
  buyed: 'buyed',
  saleFk: 'saleFk',
  created: 'created',
  isOk: 'isOk',
  requesterFk: 'requesterFk',
  attenderFk: 'attenderFk',
  ticketFk: 'ticketFk'
});

exports.Prisma.TicketScalarFieldEnum = makeEnum({
  id: 'id',
  clientFk: 'clientFk',
  warehouseFk: 'warehouseFk',
  shipped: 'shipped',
  nickname: 'nickname',
  refFk: 'refFk',
  addressFk: 'addressFk',
  workerFk: 'workerFk',
  observations: 'observations',
  isSigned: 'isSigned',
  isLabeled: 'isLabeled',
  isPrinted: 'isPrinted',
  packages: 'packages',
  location: 'location',
  hour: 'hour',
  created: 'created',
  isBlocked: 'isBlocked',
  solution: 'solution',
  routeFk: 'routeFk',
  priority: 'priority',
  hasPriority: 'hasPriority',
  companyFk: 'companyFk',
  agencyModeFk: 'agencyModeFk',
  landed: 'landed',
  isBoxed: 'isBoxed',
  isDeleted: 'isDeleted',
  zoneFk: 'zoneFk',
  zonePrice: 'zonePrice',
  zoneBonus: 'zoneBonus',
  totalWithVat: 'totalWithVat',
  totalWithoutVat: 'totalWithoutVat',
  weight: 'weight'
});

exports.Prisma.TicketServiceScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  quantity: 'quantity',
  price: 'price',
  taxClassFk: 'taxClassFk',
  ticketFk: 'ticketFk',
  ticketServiceTypeFk: 'ticketServiceTypeFk'
});

exports.Prisma.TicketServiceTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  expenceFk: 'expenceFk'
});

exports.Prisma.TicketSmsScalarFieldEnum = makeEnum({
  smsFk: 'smsFk',
  ticketFk: 'ticketFk'
});

exports.Prisma.TicketTrackingScalarFieldEnum = makeEnum({
  id: 'id',
  stateFk: 'stateFk',
  failFk: 'failFk',
  notes: 'notes',
  created: 'created',
  ticketFk: 'ticketFk',
  workerFk: 'workerFk',
  supervisorFk: 'supervisorFk'
});

exports.Prisma.TicketTrackingStateScalarFieldEnum = makeEnum({
  id: 'id',
  action: 'action'
});

exports.Prisma.TicketTrolleyScalarFieldEnum = makeEnum({
  ticket: 'ticket',
  labelCount: 'labelCount'
});

exports.Prisma.TicketUpdateActionScalarFieldEnum = makeEnum({
  id: 'id',
  description: 'description',
  code: 'code'
});

exports.Prisma.TicketWeeklyScalarFieldEnum = makeEnum({
  ticketFk: 'ticketFk',
  weekDay: 'weekDay',
  agencyModeFk: 'agencyModeFk'
});

exports.Prisma.TillConfigScalarFieldEnum = makeEnum({
  id: 'id',
  openingBalance: 'openingBalance',
  updated: 'updated'
});

exports.Prisma.TillScalarFieldEnum = makeEnum({
  id: 'id',
  dated: 'dated',
  isAccountable: 'isAccountable',
  serie: 'serie',
  number: 'number',
  concept: 'concept',
  in: 'in',
  out: 'out',
  bankFk: 'bankFk',
  workerFk: 'workerFk',
  companyFk: 'companyFk',
  isLinked: 'isLinked',
  created: 'created',
  isOk: 'isOk',
  warehouseFk: 'warehouseFk',
  isConciliate: 'isConciliate',
  supplierAccountFk: 'supplierAccountFk',
  calculatedCode: 'calculatedCode',
  InForeignValue: 'InForeignValue',
  OutForeignValue: 'OutForeignValue'
});

exports.Prisma.TimeScalarFieldEnum = makeEnum({
  dated: 'dated',
  period: 'period',
  month: 'month',
  year: 'year',
  day: 'day',
  week: 'week',
  yearMonth: 'yearMonth',
  salesYear: 'salesYear'
});

exports.Prisma.TownScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  provinceFk: 'provinceFk',
  geoFk: 'geoFk'
});

exports.Prisma.TrainScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.TrainingCenterScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.TrainingCourseScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  trainingCourseTypeFk: 'trainingCourseTypeFk',
  centerFk: 'centerFk',
  started: 'started',
  ended: 'ended',
  invoice: 'invoice',
  amount: 'amount',
  remark: 'remark',
  hasDiscount: 'hasDiscount',
  hasDiploma: 'hasDiploma'
});

exports.Prisma.TrainingCourseTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TravelClonedWeeklyScalarFieldEnum = makeEnum({
  id: 'id',
  weekStart: 'weekStart',
  weekEnd: 'weekEnd',
  warehouseOutFk: 'warehouseOutFk',
  warehouseInFk: 'warehouseInFk',
  agencyModeFk: 'agencyModeFk',
  weekDay: 'weekDay',
  duration: 'duration',
  ref: 'ref',
  supplierFk: 'supplierFk',
  kg: 'kg',
  travelFk: 'travelFk'
});

exports.Prisma.TravelLogScalarFieldEnum = makeEnum({
  id: 'id',
  originFk: 'originFk',
  userFk: 'userFk',
  action: 'action',
  creationDate: 'creationDate',
  description: 'description',
  changedModel: 'changedModel',
  oldInstance: 'oldInstance',
  newInstance: 'newInstance',
  changedModelId: 'changedModelId',
  changedModelValue: 'changedModelValue'
});

exports.Prisma.TravelObservationScalarFieldEnum = makeEnum({
  id: 'id',
  originFk: 'originFk',
  userFk: 'userFk',
  description: 'description',
  created: 'created'
});

exports.Prisma.TravelRecalcScalarFieldEnum = makeEnum({
  travelFk: 'travelFk'
});

exports.Prisma.TravelScalarFieldEnum = makeEnum({
  id: 'id',
  shipped: 'shipped',
  shipmentHour: 'shipmentHour',
  landed: 'landed',
  landingHour: 'landingHour',
  warehouseInFk: 'warehouseInFk',
  warehouseOutFk: 'warehouseOutFk',
  agencyFk: 'agencyFk',
  ref: 'ref',
  isDelivered: 'isDelivered',
  isReceived: 'isReceived',
  m3: 'm3',
  kg: 'kg',
  cargoSupplierFk: 'cargoSupplierFk',
  totalEntries: 'totalEntries',
  appointment: 'appointment',
  agencyModeFk: 'agencyModeFk'
});

exports.Prisma.TravelThermographScalarFieldEnum = makeEnum({
  id: 'id',
  thermographFk: 'thermographFk',
  created: 'created',
  warehouseFk: 'warehouseFk',
  travelFk: 'travelFk',
  result: 'result',
  dmsFk: 'dmsFk',
  temperatureFk: 'temperatureFk'
});

exports.Prisma.TrolleyScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  coupled: 'coupled'
});

exports.Prisma.UserConfigScalarFieldEnum = makeEnum({
  userFk: 'userFk',
  warehouseFk: 'warehouseFk',
  companyFk: 'companyFk',
  created: 'created',
  updated: 'updated',
  darkMode: 'darkMode'
});

exports.Prisma.UserLogScalarFieldEnum = makeEnum({
  id: 'id',
  originFk: 'originFk',
  userFk: 'userFk',
  action: 'action',
  creationDate: 'creationDate',
  description: 'description',
  changedModel: 'changedModel',
  oldInstance: 'oldInstance',
  newInstance: 'newInstance',
  changedModelId: 'changedModelId',
  changedModelValue: 'changedModelValue'
});

exports.Prisma.UserPhoneScalarFieldEnum = makeEnum({
  id: 'id',
  userFk: 'userFk',
  typeFk: 'typeFk',
  phone: 'phone'
});

exports.Prisma.UserPhoneTypeScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description'
});

exports.Prisma.VehicleDmsScalarFieldEnum = makeEnum({
  id: 'id',
  vehicleFk: 'vehicleFk',
  dmsFk: 'dmsFk'
});

exports.Prisma.VehicleEventScalarFieldEnum = makeEnum({
  id: 'id',
  started: 'started',
  finished: 'finished',
  vehicleStateFk: 'vehicleStateFk',
  description: 'description',
  vehicleFk: 'vehicleFk',
  userFk: 'userFk'
});

exports.Prisma.VehicleInvoiceInScalarFieldEnum = makeEnum({
  id: 'id',
  vehicleFk: 'vehicleFk',
  invoiceInFk: 'invoiceInFk',
  amount: 'amount'
});

exports.Prisma.VehicleNotesScalarFieldEnum = makeEnum({
  id: 'id',
  vehicleFk: 'vehicleFk',
  created: 'created',
  note: 'note',
  userFk: 'userFk'
});

exports.Prisma.VehicleScalarFieldEnum = makeEnum({
  id: 'id',
  numberPlate: 'numberPlate',
  model: 'model',
  tradeMark: 'tradeMark',
  companyFk: 'companyFk',
  m3: 'm3',
  isActive: 'isActive',
  warehouseFk: 'warehouseFk',
  description: 'description',
  deliveryPointFk: 'deliveryPointFk',
  isKmTruckRate: 'isKmTruckRate',
  photo: 'photo',
  chassis: 'chassis',
  fuelTypeFk: 'fuelTypeFk',
  ppeFk: 'ppeFk'
});

exports.Prisma.VehicleStateScalarFieldEnum = makeEnum({
  id: 'id',
  state: 'state'
});

exports.Prisma.VolumeConfigScalarFieldEnum = makeEnum({
  id: 'id',
  palletM3: 'palletM3',
  trolleyM3: 'trolleyM3',
  dutchCompressionRate: 'dutchCompressionRate',
  standardFlowerBox: 'standardFlowerBox',
  minCompressionRate: 'minCompressionRate',
  ccLength: 'ccLength',
  ccWidth: 'ccWidth',
  sorterPallet_m3: 'sorterPallet_m3',
  minTicketVolume: 'minTicketVolume',
  shelveVolume: 'shelveVolume',
  minTicketValue: 'minTicketValue',
  aerealVolumetricDensity: 'aerealVolumetricDensity'
});

exports.Prisma.WagonScalarFieldEnum = makeEnum({
  id: 'id',
  volume: 'volume',
  plate: 'plate'
});

exports.Prisma.WagonVolumetryScalarFieldEnum = makeEnum({
  id: 'id',
  level: 'level',
  lines: 'lines',
  liters: 'liters',
  height: 'height',
  wagonFk: 'wagonFk'
});

exports.Prisma.WarehouseAliasScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.WarehouseScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  code: 'code',
  isFeedStock: 'isFeedStock',
  addressName: 'addressName',
  delay: 'delay',
  hasAvailable: 'hasAvailable',
  isForTicket: 'isForTicket',
  countryFk: 'countryFk',
  labelZone: 'labelZone',
  hasComission: 'hasComission',
  isInventory: 'isInventory',
  isComparative: 'isComparative',
  valuatedInventory: 'valuatedInventory',
  isManaged: 'isManaged',
  hasConfectionTeam: 'hasConfectionTeam',
  hasStowaway: 'hasStowaway',
  hasDms: 'hasDms',
  pickUpAgencyModeFk: 'pickUpAgencyModeFk',
  isBuyerToBeEmailed: 'isBuyerToBeEmailed',
  aliasFk: 'aliasFk',
  labelReport: 'labelReport',
  hasUbications: 'hasUbications',
  hasProduction: 'hasProduction',
  addressFk: 'addressFk',
  hasMachine: 'hasMachine',
  isLogiflora: 'isLogiflora',
  isBionic: 'isBionic'
});

exports.Prisma.WorkCenterHolidayScalarFieldEnum = makeEnum({
  workCenterFk: 'workCenterFk',
  days: 'days',
  year: 'year'
});

exports.Prisma.WorkCenterScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  payrollCenterFk: 'payrollCenterFk',
  counter: 'counter',
  warehouseFk: 'warehouseFk',
  street: 'street',
  geoFk: 'geoFk',
  deliveryManAdjustment: 'deliveryManAdjustment'
});

exports.Prisma.WorkerAppTesterScalarFieldEnum = makeEnum({
  workerFk: 'workerFk'
});

exports.Prisma.WorkerBossesScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  bossFk: 'bossFk'
});

exports.Prisma.WorkerBusinessTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  isFullTime: 'isFullTime',
  isPermanent: 'isPermanent',
  hasHolidayEntitlement: 'hasHolidayEntitlement'
});

exports.Prisma.WorkerClockLogScalarFieldEnum = makeEnum({
  id: 'id',
  originFk: 'originFk',
  userFk: 'userFk',
  action: 'action',
  creationDate: 'creationDate',
  description: 'description'
});

exports.Prisma.WorkerConfigScalarFieldEnum = makeEnum({
  id: 'id',
  businessUpdated: 'businessUpdated'
});

exports.Prisma.WorkerDisableExcludedScalarFieldEnum = makeEnum({
  workerFk: 'workerFk',
  dated: 'dated'
});

exports.Prisma.WorkerDistributionCategoryScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  category: 'category'
});

exports.Prisma.WorkerDocumentScalarFieldEnum = makeEnum({
  id: 'id',
  worker: 'worker',
  document: 'document',
  isReadableByWorker: 'isReadableByWorker'
});

exports.Prisma.WorkerEmergencyBossScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  value: 'value'
});

exports.Prisma.WorkerHourPriceScalarFieldEnum = makeEnum({
  id: 'id',
  dated: 'dated',
  holidayInc: 'holidayInc',
  nightInc: 'nightInc',
  extraInc: 'extraInc'
});

exports.Prisma.WorkerIrpfScalarFieldEnum = makeEnum({
  workerFk: 'workerFk',
  spouseNif: 'spouseNif',
  geographicMobilityDate: 'geographicMobilityDate',
  disabilityGradeFk: 'disabilityGradeFk',
  isDependend: 'isDependend',
  familySituation: 'familySituation',
  spousePension: 'spousePension',
  childPension: 'childPension',
  hasHousingPaymentBefore: 'hasHousingPaymentBefore',
  hasHousingPaymentAfter: 'hasHousingPaymentAfter',
  hasExtendedWorking: 'hasExtendedWorking',
  updated: 'updated'
});

exports.Prisma.WorkerJourneyScalarFieldEnum = makeEnum({
  id: 'id',
  userFk: 'userFk',
  dated: 'dated',
  total: 'total',
  priceOrdinaryHour: 'priceOrdinaryHour',
  nocturn: 'nocturn',
  priceNocturnHour: 'priceNocturnHour',
  holiday: 'holiday',
  priceHolidayHour: 'priceHolidayHour',
  lunch: 'lunch',
  priceExtraHour: 'priceExtraHour',
  extra: 'extra',
  contractJourney: 'contractJourney',
  priceExtraHoliday: 'priceExtraHoliday',
  businessFk: 'businessFk',
  isPaid: 'isPaid',
  isUpdated: 'isUpdated',
  permission: 'permission'
});

exports.Prisma.WorkerLogScalarFieldEnum = makeEnum({
  id: 'id',
  originFk: 'originFk',
  userFk: 'userFk',
  action: 'action',
  creationDate: 'creationDate',
  description: 'description',
  changedModel: 'changedModel',
  oldInstance: 'oldInstance',
  newInstance: 'newInstance',
  changedModelId: 'changedModelId',
  changedModelValue: 'changedModelValue'
});

exports.Prisma.WorkerManaExcludedScalarFieldEnum = makeEnum({
  workerFk: 'workerFk'
});

exports.Prisma.WorkerManaScalarFieldEnum = makeEnum({
  workerFk: 'workerFk',
  size: 'size',
  amount: 'amount',
  pricesModifierRate: 'pricesModifierRate',
  isPricesModifierActivated: 'isPricesModifierActivated',
  minRate: 'minRate',
  maxRate: 'maxRate'
});

exports.Prisma.WorkerMistakeScalarFieldEnum = makeEnum({
  id: 'id',
  userFk: 'userFk',
  workerMistakeTypeFk: 'workerMistakeTypeFk',
  created: 'created'
});

exports.Prisma.WorkerMistakeTypeScalarFieldEnum = makeEnum({
  code: 'code',
  description: 'description'
});

exports.Prisma.WorkerRelativesScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  isDescendant: 'isDescendant',
  disabilityGradeFk: 'disabilityGradeFk',
  birthed: 'birthed',
  adoptionYear: 'adoptionYear',
  isDependend: 'isDependend',
  isJointCustody: 'isJointCustody',
  updated: 'updated'
});

exports.Prisma.WorkerScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  firstName: 'firstName',
  lastName: 'lastName',
  sub: 'sub',
  photo: 'photo',
  phone: 'phone',
  mobileExtension: 'mobileExtension',
  userFk: 'userFk',
  bossFk: 'bossFk',
  fiDueDate: 'fiDueDate',
  hasMachineryAuthorized: 'hasMachineryAuthorized',
  seniority: 'seniority',
  isTodayRelative: 'isTodayRelative',
  isF11Allowed: 'isF11Allowed',
  sectorFk: 'sectorFk',
  maritalStatus: 'maritalStatus',
  labelerFk: 'labelerFk',
  originCountryFk: 'originCountryFk',
  educationLevelFk: 'educationLevelFk',
  SSN: 'SSN',
  fi: 'fi',
  birth: 'birth',
  isDisable: 'isDisable',
  isFreelance: 'isFreelance',
  isSsDiscounted: 'isSsDiscounted',
  sex: 'sex',
  businessFk: 'businessFk',
  balance: 'balance'
});

exports.Prisma.WorkerShelvingScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  shelvingFk: 'shelvingFk',
  collectionFk: 'collectionFk',
  created: 'created'
});

exports.Prisma.WorkerTeamScalarFieldEnum = makeEnum({
  id: 'id',
  team: 'team',
  workerFk: 'workerFk'
});

exports.Prisma.WorkerTimeControlConfigScalarFieldEnum = makeEnum({
  id: 'id',
  dayBreak: 'dayBreak',
  dayBreakDriver: 'dayBreakDriver',
  shortWeekBreak: 'shortWeekBreak',
  longWeekBreak: 'longWeekBreak',
  weekScope: 'weekScope',
  mailPass: 'mailPass',
  mailHost: 'mailHost',
  mailSuccessFolder: 'mailSuccessFolder',
  mailErrorFolder: 'mailErrorFolder',
  mailUser: 'mailUser',
  minHoursToBreak: 'minHoursToBreak',
  breakHours: 'breakHours',
  hoursCompleteWeek: 'hoursCompleteWeek',
  startNightlyHours: 'startNightlyHours',
  endNightlyHours: 'endNightlyHours',
  maxTimePerDay: 'maxTimePerDay',
  breakTime: 'breakTime',
  timeToBreakTime: 'timeToBreakTime',
  dayMaxTime: 'dayMaxTime',
  shortWeekDays: 'shortWeekDays',
  longWeekDays: 'longWeekDays'
});

exports.Prisma.WorkerTimeControlConfig_ScalarFieldEnum = makeEnum({
  id: 'id',
  warehouseFk: 'warehouseFk',
  host: 'host'
});

exports.Prisma.WorkerTimeControlLogScalarFieldEnum = makeEnum({
  id: 'id',
  userFk: 'userFk',
  created: 'created',
  description: 'description'
});

exports.Prisma.WorkerTimeControlMailScalarFieldEnum = makeEnum({
  id: 'id',
  workerFk: 'workerFk',
  year: 'year',
  week: 'week',
  state: 'state',
  updated: 'updated',
  sendedCounter: 'sendedCounter',
  reason: 'reason'
});

exports.Prisma.WorkerTimeControlParamsScalarFieldEnum = makeEnum({
  id: 'id',
  dayBreak: 'dayBreak',
  weekBreak: 'weekBreak',
  weekScope: 'weekScope',
  dayWorkMax: 'dayWorkMax',
  dayStayMax: 'dayStayMax',
  weekMaxBreak: 'weekMaxBreak',
  weekMaxScope: 'weekMaxScope',
  askInOut: 'askInOut',
  mailPass: 'mailPass',
  mailHost: 'mailHost',
  mailSuccessFolder: 'mailSuccessFolder',
  mailErrorFolder: 'mailErrorFolder',
  mailUser: 'mailUser'
});

exports.Prisma.WorkerTimeControlPinScalarFieldEnum = makeEnum({
  workerFk: 'workerFk',
  pin: 'pin'
});

exports.Prisma.WorkerTimeControlScalarFieldEnum = makeEnum({
  id: 'id',
  userFk: 'userFk',
  timed: 'timed',
  manual: 'manual',
  order: 'order',
  warehouseFk: 'warehouseFk',
  direction: 'direction',
  isSendMail: 'isSendMail'
});

exports.Prisma.WorkerTimeControlScheduleScalarFieldEnum = makeEnum({
  id: 'id',
  time: 'time'
});

exports.Prisma.Workers20190711ScalarFieldEnum = makeEnum({
  person_id: 'person_id',
  business_id: 'business_id',
  Apellidos: 'Apellidos',
  Nombre: 'Nombre',
  nif: 'nif',
  Fecha_Inicio: 'Fecha_Inicio',
  Fecha_Fin: 'Fecha_Fin',
  departamento: 'departamento',
  Jornada_Semanal: 'Jornada_Semanal',
  Codigo_Contrato: 'Codigo_Contrato',
  userFk: 'userFk'
});

exports.Prisma.Workers20190711_FichadasAbrilScalarFieldEnum = makeEnum({
  id: 'id',
  person_id: 'person_id',
  nif: 'nif',
  Apellidos: 'Apellidos',
  Nombre: 'Nombre',
  Fecha: 'Fecha',
  Hora: 'Hora',
  Minuto: 'Minuto',
  sumable: 'sumable',
  jornada: 'jornada'
});

exports.Prisma.Workers20190711_FichadasJulio11ScalarFieldEnum = makeEnum({
  id: 'id',
  person_id: 'person_id',
  nif: 'nif',
  Apellidos: 'Apellidos',
  Nombre: 'Nombre',
  Fecha: 'Fecha',
  Hora: 'Hora',
  Minuto: 'Minuto',
  sumable: 'sumable',
  jornada: 'jornada'
});

exports.Prisma.Workers20190711_FichadasJunioScalarFieldEnum = makeEnum({
  id: 'id',
  person_id: 'person_id',
  nif: 'nif',
  Apellidos: 'Apellidos',
  Nombre: 'Nombre',
  Fecha: 'Fecha',
  Hora: 'Hora',
  Minuto: 'Minuto',
  sumable: 'sumable',
  jornada: 'jornada'
});

exports.Prisma.Workers20190711_FichadasMayoScalarFieldEnum = makeEnum({
  id: 'id',
  person_id: 'person_id',
  nif: 'nif',
  Apellidos: 'Apellidos',
  Nombre: 'Nombre',
  Fecha: 'Fecha',
  Hora: 'Hora',
  Minuto: 'Minuto',
  sumable: 'sumable',
  jornada: 'jornada'
});

exports.Prisma.Workers20190711_FichadasOctubreScalarFieldEnum = makeEnum({
  id: 'id',
  person_id: 'person_id',
  nif: 'nif',
  Apellidos: 'Apellidos',
  Nombre: 'Nombre',
  Fecha: 'Fecha',
  Hora: 'Hora',
  Minuto: 'Minuto',
  sumable: 'sumable',
  jornada: 'jornada'
});

exports.Prisma.Workers20190711_GarroteScalarFieldEnum = makeEnum({
  id: 'id',
  person_id: 'person_id',
  nif: 'nif',
  Apellidos: 'Apellidos',
  Nombre: 'Nombre',
  Fecha: 'Fecha',
  Hora: 'Hora',
  Minuto: 'Minuto',
  sumable: 'sumable',
  jornada: 'jornada'
});

exports.Prisma.WorkingHoursScalarFieldEnum = makeEnum({
  id: 'id',
  timeIn: 'timeIn',
  timeOut: 'timeOut',
  userId: 'userId'
});

exports.Prisma.XDiarioScalarFieldEnum = makeEnum({
  id: 'id',
  ASIEN: 'ASIEN',
  FECHA: 'FECHA',
  SUBCTA: 'SUBCTA',
  CONTRA: 'CONTRA',
  CONCEPTO: 'CONCEPTO',
  EURODEBE: 'EURODEBE',
  EUROHABER: 'EUROHABER',
  BASEEURO: 'BASEEURO',
  SERIE: 'SERIE',
  FACTURA: 'FACTURA',
  BASEIMPO: 'BASEIMPO',
  IVA: 'IVA',
  RECEQUIV: 'RECEQUIV',
  DOCUMENTO: 'DOCUMENTO',
  DEPARTA: 'DEPARTA',
  CLAVE: 'CLAVE',
  ESTADO: 'ESTADO',
  NCASADO: 'NCASADO',
  TCASADO: 'TCASADO',
  TRANS: 'TRANS',
  CAMBIO: 'CAMBIO',
  DEBEME: 'DEBEME',
  HABERME: 'HABERME',
  PTAHABER: 'PTAHABER',
  AUXILIAR: 'AUXILIAR',
  SUCURSAL: 'SUCURSAL',
  PTADEBE: 'PTADEBE',
  CODDIVISA: 'CODDIVISA',
  IMPAUXME: 'IMPAUXME',
  MONEDAUSO: 'MONEDAUSO',
  NOCONV: 'NOCONV',
  NUMEROINV: 'NUMEROINV',
  TIPOOPE: 'TIPOOPE',
  NFACTICK: 'NFACTICK',
  TERIDNIF: 'TERIDNIF',
  TERNIF: 'TERNIF',
  TERNOM: 'TERNOM',
  OPBIENES: 'OPBIENES',
  TIPOFAC: 'TIPOFAC',
  TIPOIVA: 'TIPOIVA',
  L340: 'L340',
  enlazado: 'enlazado',
  FECHA_EX: 'FECHA_EX',
  LRECT349: 'LRECT349',
  empresa_id: 'empresa_id',
  LDIFADUAN: 'LDIFADUAN',
  METAL: 'METAL',
  METALIMP: 'METALIMP',
  CLIENTE: 'CLIENTE',
  METALEJE: 'METALEJE',
  FECHA_OP: 'FECHA_OP',
  FACTURAEX: 'FACTURAEX',
  TIPOCLAVE: 'TIPOCLAVE',
  TIPOEXENCI: 'TIPOEXENCI',
  TIPONOSUJE: 'TIPONOSUJE',
  TIPOFACT: 'TIPOFACT',
  TIPORECTIF: 'TIPORECTIF',
  SERIE_RT: 'SERIE_RT',
  FACTU_RT: 'FACTU_RT',
  BASEIMP_RT: 'BASEIMP_RT',
  BASEIMP_RF: 'BASEIMP_RF',
  RECTIFICA: 'RECTIFICA',
  FECHA_RT: 'FECHA_RT',
  created: 'created',
  updated: 'updated',
  FECREGCON: 'FECREGCON',
  enlazadoSage: 'enlazadoSage'
});

exports.Prisma.ZipConfigScalarFieldEnum = makeEnum({
  id: 'id',
  maxSize: 'maxSize'
});

exports.Prisma.ZoneAgencyModeScalarFieldEnum = makeEnum({
  id: 'id',
  agencyModeFk: 'agencyModeFk',
  zoneFk: 'zoneFk'
});

exports.Prisma.ZoneClosureScalarFieldEnum = makeEnum({
  zoneFk: 'zoneFk',
  dated: 'dated',
  hour: 'hour'
});

exports.Prisma.ZoneConfigScalarFieldEnum = makeEnum({
  id: 'id',
  scope: 'scope',
  forwardDays: 'forwardDays'
});

exports.Prisma.ZoneEventScalarFieldEnum = makeEnum({
  id: 'id',
  zoneFk: 'zoneFk',
  type: 'type',
  dated: 'dated',
  started: 'started',
  ended: 'ended',
  weekDays: 'weekDays',
  hour: 'hour',
  travelingDays: 'travelingDays',
  price: 'price',
  bonus: 'bonus',
  m3Max: 'm3Max'
});

exports.Prisma.ZoneExclusionGeoScalarFieldEnum = makeEnum({
  id: 'id',
  zoneExclusionFk: 'zoneExclusionFk',
  geoFk: 'geoFk'
});

exports.Prisma.ZoneExclusionScalarFieldEnum = makeEnum({
  id: 'id',
  zoneFk: 'zoneFk',
  dated: 'dated',
  created: 'created',
  userFk: 'userFk'
});

exports.Prisma.ZoneFilterScalarFieldEnum = makeEnum({
  id: 'id',
  zoneFk: 'zoneFk',
  sizeMax: 'sizeMax',
  itemTypeFk: 'itemTypeFk'
});

exports.Prisma.ZoneGeoRecalcScalarFieldEnum = makeEnum({
  id: 'id',
  isChanged: 'isChanged'
});

exports.Prisma.ZoneGeoScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  name: 'name',
  parentFk: 'parentFk',
  path: 'path',
  lft: 'lft',
  rgt: 'rgt',
  depth: 'depth',
  sons: 'sons'
});

exports.Prisma.ZoneIncludedScalarFieldEnum = makeEnum({
  zoneFk: 'zoneFk',
  geoFk: 'geoFk',
  isIncluded: 'isIncluded'
});

exports.Prisma.ZoneLogScalarFieldEnum = makeEnum({
  id: 'id',
  originFk: 'originFk',
  userFk: 'userFk',
  action: 'action',
  creationDate: 'creationDate',
  description: 'description',
  changedModel: 'changedModel',
  oldInstance: 'oldInstance',
  newInstance: 'newInstance',
  changedModelId: 'changedModelId',
  changedModelValue: 'changedModelValue'
});

exports.Prisma.ZoneScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  hour: 'hour',
  agencyModeFk: 'agencyModeFk',
  travelingDays: 'travelingDays',
  price: 'price',
  bonus: 'bonus',
  isVolumetric: 'isVolumetric',
  inflation: 'inflation',
  m3Max: 'm3Max',
  itemMaxSize: 'itemMaxSize',
  code: 'code'
});

exports.Prisma.ZoneWarehouseScalarFieldEnum = makeEnum({
  id: 'id',
  zoneFk: 'zoneFk',
  warehouseFk: 'warehouseFk'
});
exports.botanicExport_code = makeEnum({
  importProhibited: 'importProhibited',
  phytosanitaryPassport: 'phytosanitaryPassport',
  individualPassport: 'individualPassport'
});

exports.botanicExport_restriction = makeEnum({
  Sin_restriccion: 'Sin_restriccion',
  Importacion_Prohibida: 'Importacion_Prohibida',
  pasaporte_fitosanitario: 'pasaporte_fitosanitario',
  pasaporte_individual: 'pasaporte_individual',
  declaracion_origen: 'declaracion_origen'
});

exports.campaign_code = makeEnum({
  mothersDay: 'mothersDay',
  allSaints: 'allSaints',
  valentinesDay: 'valentinesDay'
});

exports.improvedGeneralLogProcedures_type = makeEnum({
  FUNCTION: 'FUNCTION',
  PROCEDURE: 'PROCEDURE'
});

exports.printQueue_statusCode = makeEnum({
  queued: 'queued',
  error: 'error',
  printing: 'printing',
  printed: 'printed'
});

exports.thermograph_model = makeEnum({
  TL30: 'TL30',
  SENSITECH: 'SENSITECH',
  TREKVIEW1: 'TREKVIEW1',
  TREKVIEW2: 'TREKVIEW2',
  DISPOSABLE: 'DISPOSABLE',
  TEMPMATE: 'TEMPMATE'
});

exports.workerIrpf_familySituation = makeEnum({
  famSit1: 'famSit1',
  famSit2: 'famSit2',
  famSit3: 'famSit3'
});

exports.workerTimeControlMail_state = makeEnum({
  SENDED: 'SENDED',
  CONFIRMED: 'CONFIRMED',
  REVISE: 'REVISE'
});

exports.workerTimeControl_direction = makeEnum({
  in: 'in',
  out: 'out',
  middle: 'middle'
});

exports.worker_maritalStatus = makeEnum({
  S: 'S',
  M: 'M'
});

exports.worker_sex = makeEnum({
  M: 'M',
  F: 'F'
});

exports.zoneEvent_type = makeEnum({
  day: 'day',
  indefinitely: 'indefinitely',
  range: 'range'
});

exports.Prisma.ModelName = makeEnum({
  XDiario: 'XDiario',
  absenceType: 'absenceType',
  accounting: 'accounting',
  accountingConfig: 'accountingConfig',
  accountingType: 'accountingType',
  activityTaxDismissed: 'activityTaxDismissed',
  address: 'address',
  addressFilter: 'addressFilter',
  addressForPackaging: 'addressForPackaging',
  addressObservation: 'addressObservation',
  agency: 'agency',
  agencyExtraCharge: 'agencyExtraCharge',
  agencyMode: 'agencyMode',
  agencyTermConfig: 'agencyTermConfig',
  alertLevel: 'alertLevel',
  amortizationType: 'amortizationType',
  assignedTicketToWorker: 'assignedTicketToWorker',
  autoRadioConfig: 'autoRadioConfig',
  autoRadioLogCall: 'autoRadioLogCall',
  autonomy: 'autonomy',
  awb: 'awb',
  bankEntity: 'bankEntity',
  bankEntityConfig: 'bankEntityConfig',
  beach: 'beach',
  bionicConfig: 'bionicConfig',
  bookingPlanner: 'bookingPlanner',
  botanicExport: 'botanicExport',
  budget: 'budget',
  budgetDms: 'budgetDms',
  budgetInvoiceIn: 'budgetInvoiceIn',
  budgetNotes: 'budgetNotes',
  business: 'business',
  businessReasonEnd: 'businessReasonEnd',
  businessType: 'businessType',
  buy: 'buy',
  buyMark: 'buyMark',
  calendar: 'calendar',
  calendarHolidays: 'calendarHolidays',
  calendarHolidaysName: 'calendarHolidaysName',
  calendarHolidaysType: 'calendarHolidaysType',
  campaign: 'campaign',
  category: 'category',
  chain: 'chain',
  chat: 'chat',
  chatConfig: 'chatConfig',
  claim: 'claim',
  claimBeginning: 'claimBeginning',
  claimConfig: 'claimConfig',
  claimDestination: 'claimDestination',
  claimDevelopment: 'claimDevelopment',
  claimDms: 'claimDms',
  claimEnd: 'claimEnd',
  claimLog: 'claimLog',
  claimObservation: 'claimObservation',
  claimRatio: 'claimRatio',
  claimReason: 'claimReason',
  claimRedelivery: 'claimRedelivery',
  claimResponsible: 'claimResponsible',
  claimResult: 'claimResult',
  claimRma: 'claimRma',
  claimState: 'claimState',
  client: 'client',
  clientChain: 'clientChain',
  clientConfig: 'clientConfig',
  clientConsumptionQueue: 'clientConsumptionQueue',
  clientContact: 'clientContact',
  clientCredit: 'clientCredit',
  clientCreditLimit: 'clientCreditLimit',
  clientDms: 'clientDms',
  clientItemCategory: 'clientItemCategory',
  clientItemType: 'clientItemType',
  clientLog: 'clientLog',
  clientManaCache: 'clientManaCache',
  clientObservation: 'clientObservation',
  clientPackagingGifts: 'clientPackagingGifts',
  clientProtected: 'clientProtected',
  clientRisk: 'clientRisk',
  clientSample: 'clientSample',
  clientType: 'clientType',
  clientUnpaid: 'clientUnpaid',
  clientYoke: 'clientYoke',
  cmr: 'cmr',
  cmrConfig: 'cmrConfig',
  cmrPallet: 'cmrPallet',
  collection: 'collection',
  collectionColors: 'collectionColors',
  collectionHotbed: 'collectionHotbed',
  collectionVolumetry: 'collectionVolumetry',
  commissionConfig: 'commissionConfig',
  company: 'company',
  companyGroup: 'companyGroup',
  comparativeFilterType: 'comparativeFilterType',
  component: 'component',
  componentType: 'componentType',
  confectionType: 'confectionType',
  config: 'config',
  contactChannel: 'contactChannel',
  continent: 'continent',
  contratos_subvencion_270619: 'contratos_subvencion_270619',
  conveyor: 'conveyor',
  conveyorBuildingClass: 'conveyorBuildingClass',
  conveyorConfig: 'conveyorConfig',
  conveyorExpedition: 'conveyorExpedition',
  conveyorMode: 'conveyorMode',
  conveyorType: 'conveyorType',
  corridor: 'corridor',
  country: 'country',
  cplusCorrectingType: 'cplusCorrectingType',
  cplusInvoiceType472: 'cplusInvoiceType472',
  cplusInvoiceType477: 'cplusInvoiceType477',
  cplusRectificationType: 'cplusRectificationType',
  cplusSubjectOp: 'cplusSubjectOp',
  cplusTaxBreak: 'cplusTaxBreak',
  cplusTerIdNif: 'cplusTerIdNif',
  cplusTrascendency472: 'cplusTrascendency472',
  cplusTrascendency477: 'cplusTrascendency477',
  creditClassification: 'creditClassification',
  creditInsurance: 'creditInsurance',
  currency: 'currency',
  customsAgent: 'customsAgent',
  dayMinute: 'dayMinute',
  delivery: 'delivery',
  deliveryMethod: 'deliveryMethod',
  deliveryPoint: 'deliveryPoint',
  delivery_zip: 'delivery_zip',
  department: 'department',
  department_recalc: 'department_recalc',
  device: 'device',
  deviceLog: 'deviceLog',
  deviceProduction: 'deviceProduction',
  deviceProductionConfig: 'deviceProductionConfig',
  deviceProductionModels: 'deviceProductionModels',
  deviceProductionUser: 'deviceProductionUser',
  disabilityGrade: 'disabilityGrade',
  dms: 'dms',
  dmsRecover: 'dmsRecover',
  dmsType: 'dmsType',
  dock: 'dock',
  docuware: 'docuware',
  docuwareConfig: 'docuwareConfig',
  dua: 'dua',
  duaEntry: 'duaEntry',
  duaIntrastat: 'duaIntrastat',
  duaInvoiceIn: 'duaInvoiceIn',
  duaTax: 'duaTax',
  educationLevel: 'educationLevel',
  ektEntryAssign: 'ektEntryAssign',
  emergencyMedia: 'emergencyMedia',
  energyInput: 'energyInput',
  energyMeter: 'energyMeter',
  entry: 'entry',
  entryConfig: 'entryConfig',
  entryLog: 'entryLog',
  entryObservation: 'entryObservation',
  entryType: 'entryType',
  entryVirtual: 'entryVirtual',
  envialiaAgency: 'envialiaAgency',
  envialiaCity: 'envialiaCity',
  envialiaConfig: 'envialiaConfig',
  errorLogApp: 'errorLogApp',
  errorProduction: 'errorProduction',
  erte: 'erte',
  excuse: 'excuse',
  expedition: 'expedition',
  expeditionBoxVol: 'expeditionBoxVol',
  expeditionMistake: 'expeditionMistake',
  expeditionMistakeType: 'expeditionMistakeType',
  expeditionPallet: 'expeditionPallet',
  expeditionScan: 'expeditionScan',
  expeditionState: 'expeditionState',
  expeditionStateType: 'expeditionStateType',
  expeditionTruck: 'expeditionTruck',
  expence: 'expence',
  floramondoConfig: 'floramondoConfig',
  fuelType: 'fuelType',
  gateArea: 'gateArea',
  genericAllocation: 'genericAllocation',
  genus: 'genus',
  glsConfig: 'glsConfig',
  greuge: 'greuge',
  greugeConfig: 'greugeConfig',
  greugeType: 'greugeType',
  host: 'host',
  improvedGeneralLog: 'improvedGeneralLog',
  improvedGeneralLogProcedures: 'improvedGeneralLogProcedures',
  incoterms: 'incoterms',
  ink: 'ink',
  inkI18n: 'inkI18n',
  intrastat: 'intrastat',
  inventoryFailure: 'inventoryFailure',
  inventoryFailureCause: 'inventoryFailureCause',
  invoiceCorrection: 'invoiceCorrection',
  invoiceCorrectionType: 'invoiceCorrectionType',
  invoiceIn: 'invoiceIn',
  invoiceInConfig: 'invoiceInConfig',
  invoiceInDueDay: 'invoiceInDueDay',
  invoiceInIntrastat: 'invoiceInIntrastat',
  invoiceInLog: 'invoiceInLog',
  invoiceInSage: 'invoiceInSage',
  invoiceInSerial: 'invoiceInSerial',
  invoiceInTax: 'invoiceInTax',
  invoiceInTaxBookingAccount: 'invoiceInTaxBookingAccount',
  invoiceOut: 'invoiceOut',
  invoiceOutExpence: 'invoiceOutExpence',
  invoiceOutSerial: 'invoiceOutSerial',
  invoiceOutTax: 'invoiceOutTax',
  invoiceOutTaxConfig: 'invoiceOutTaxConfig',
  item: 'item',
  itemBarcode: 'itemBarcode',
  itemBotanical: 'itemBotanical',
  itemCategory: 'itemCategory',
  itemCategoryI18n: 'itemCategoryI18n',
  itemCleanConfig: 'itemCleanConfig',
  itemCleanLog: 'itemCleanLog',
  itemConfig: 'itemConfig',
  itemCost: 'itemCost',
  itemFamily: 'itemFamily',
  itemImageQueue: 'itemImageQueue',
  itemLabel: 'itemLabel',
  itemLog: 'itemLog',
  itemMatchProperties: 'itemMatchProperties',
  itemPackingType: 'itemPackingType',
  itemPlacementSupply: 'itemPlacementSupply',
  itemProposal: 'itemProposal',
  itemShelving: 'itemShelving',
  itemShelvingLog: 'itemShelvingLog',
  itemShelvingPlacementSupply: 'itemShelvingPlacementSupply',
  itemShelvingSale: 'itemShelvingSale',
  itemTag: 'itemTag',
  itemTaxCountry: 'itemTaxCountry',
  itemType: 'itemType',
  itemTypeI18n: 'itemTypeI18n',
  itemTypeRestriction: 'itemTypeRestriction',
  itemTypeTag: 'itemTypeTag',
  labourTree: 'labourTree',
  ledgerConfig: 'ledgerConfig',
  lungSize: 'lungSize',
  machine: 'machine',
  machineDetail: 'machineDetail',
  machineDms: 'machineDms',
  machineWorker: 'machineWorker',
  machineWorkerConfig: 'machineWorkerConfig',
  mail: 'mail',
  mailTemplates: 'mailTemplates',
  mandate: 'mandate',
  mandateType: 'mandateType',
  manuscript: 'manuscript',
  mdbApp: 'mdbApp',
  mdbBranch: 'mdbBranch',
  mdbVersion: 'mdbVersion',
  medicalCenter: 'medicalCenter',
  medicalReview: 'medicalReview',
  message: 'message',
  messageInbox: 'messageInbox',
  mistakeType: 'mistakeType',
  mobileAppVersionControl: 'mobileAppVersionControl',
  mrw: 'mrw',
  mrwService: 'mrwService',
  mrwServiceWeekday: 'mrwServiceWeekday',
  noticeCategory: 'noticeCategory',
  noticeSubscription: 'noticeSubscription',
  observationType: 'observationType',
  occupationCode: 'occupationCode',
  operator: 'operator',
  orderTicket: 'orderTicket',
  origin: 'origin',
  originI18n: 'originI18n',
  osTicketConfig: 'osTicketConfig',
  outgoingInvoiceVat: 'outgoingInvoiceVat',
  packageChecked: 'packageChecked',
  packageEquivalent: 'packageEquivalent',
  packaging: 'packaging',
  packagingConfig: 'packagingConfig',
  packagingGifts: 'packagingGifts',
  packagingWithFreight: 'packagingWithFreight',
  packagingWithoutFreight: 'packagingWithoutFreight',
  packingSite: 'packingSite',
  packingSiteConfig: 'packingSiteConfig',
  packingSiteLog: 'packingSiteLog',
  packingSiteTypeError: 'packingSiteTypeError',
  paperSize: 'paperSize',
  parking: 'parking',
  payDem: 'payDem',
  payDemDetail: 'payDemDetail',
  payMethod: 'payMethod',
  payment: 'payment',
  pcs: 'pcs',
  pcs_graf: 'pcs_graf',
  pedidosInternos: 'pedidosInternos',
  periodicityType: 'periodicityType',
  personalProtectionEquipment: 'personalProtectionEquipment',
  pgc: 'pgc',
  pgcEqu: 'pgcEqu',
  pgcMaster: 'pgcMaster',
  plantpassport: 'plantpassport',
  plantpassportAuthority: 'plantpassportAuthority',
  postCode: 'postCode',
  ppe: 'ppe',
  ppeComponent: 'ppeComponent',
  ppeDMS: 'ppeDMS',
  ppeGroup: 'ppeGroup',
  ppeLocation: 'ppeLocation',
  ppePlan: 'ppePlan',
  priceFixed: 'priceFixed',
  printQueue: 'printQueue',
  printQueueArgs: 'printQueueArgs',
  printQueueConfig: 'printQueueConfig',
  printer: 'printer',
  printerModel: 'printerModel',
  printingQueueCheck: 'printingQueueCheck',
  producer: 'producer',
  productionConfig: 'productionConfig',
  professionalCategory: 'professionalCategory',
  profileType: 'profileType',
  project: 'project',
  projectNotes: 'projectNotes',
  projectState: 'projectState',
  property: 'property',
  propertyDms: 'propertyDms',
  propertyGroup: 'propertyGroup',
  propertyNotes: 'propertyNotes',
  province: 'province',
  punchState: 'punchState',
  queuePriority: 'queuePriority',
  rankBonus: 'rankBonus',
  rate: 'rate',
  rateConfig: 'rateConfig',
  receipt: 'receipt',
  recipe: 'recipe',
  recipe_log: 'recipe_log',
  recovery: 'recovery',
  referenceCurrent: 'referenceCurrent',
  referenceRate: 'referenceRate',
  referenceRateConfig: 'referenceRateConfig',
  report: 'report',
  returnBuckets: 'returnBuckets',
  route: 'route',
  routeAction: 'routeAction',
  routeCommission: 'routeCommission',
  routeComplement: 'routeComplement',
  routeConfig: 'routeConfig',
  routeLoadWorker: 'routeLoadWorker',
  routeLog: 'routeLog',
  routeRecalc: 'routeRecalc',
  routeUserPercentage__: 'routeUserPercentage__',
  routesMonitor: 'routesMonitor',
  sale: 'sale',
  saleBuy: 'saleBuy',
  saleCloned: 'saleCloned',
  saleComponent: 'saleComponent',
  saleGoal: 'saleGoal',
  saleGroup: 'saleGroup',
  saleGroupDetail: 'saleGroupDetail',
  saleMistake: 'saleMistake',
  saleState: 'saleState',
  saleTracking: 'saleTracking',
  salesPersonGoal: 'salesPersonGoal',
  sample: 'sample',
  sector: 'sector',
  sectorCollection: 'sectorCollection',
  sectorCollectionSaleGroup: 'sectorCollectionSaleGroup',
  sectorProductivity: 'sectorProductivity',
  sharingCart: 'sharingCart',
  sharingCartDaily: 'sharingCartDaily',
  sharingClient: 'sharingClient',
  shelving: 'shelving',
  shelvingLog: 'shelvingLog',
  silexACL: 'silexACL',
  sinister: 'sinister',
  sinisterDetail: 'sinisterDetail',
  smartTag: 'smartTag',
  sms: 'sms',
  smsConfig: 'smsConfig',
  solunionCAP: 'solunionCAP',
  sorter: 'sorter',
  specialLabels: 'specialLabels',
  specialPrice: 'specialPrice',
  specie: 'specie',
  specieGeoInvasive: 'specieGeoInvasive',
  splitFilter: 'splitFilter',
  starredModule: 'starredModule',
  state: 'state',
  stateI18n: 'stateI18n',
  stockBuyed: 'stockBuyed',
  stowaway: 'stowaway',
  supplier: 'supplier',
  supplierAccount: 'supplierAccount',
  supplierActivity: 'supplierActivity',
  supplierAddress: 'supplierAddress',
  supplierAgencyTerm: 'supplierAgencyTerm',
  supplierContact: 'supplierContact',
  supplierExpense: 'supplierExpense',
  supplierLog: 'supplierLog',
  tablet: 'tablet',
  tabletDepartment: 'tabletDepartment',
  tag: 'tag',
  tagAbbreviation: 'tagAbbreviation',
  tagI18n: 'tagI18n',
  taxArea: 'taxArea',
  taxClass: 'taxClass',
  taxClassCode: 'taxClassCode',
  taxCode: 'taxCode',
  taxType: 'taxType',
  temperature: 'temperature',
  thermograph: 'thermograph',
  ticket: 'ticket',
  ticketCollection: 'ticketCollection',
  ticketConfig: 'ticketConfig',
  ticketDms: 'ticketDms',
  ticketDocumentation: 'ticketDocumentation',
  ticketDown: 'ticketDown',
  ticketDown_SelectionType: 'ticketDown_SelectionType',
  ticketLastState: 'ticketLastState',
  ticketLog: 'ticketLog',
  ticketObservation: 'ticketObservation',
  ticketPackage: 'ticketPackage',
  ticketPackaging: 'ticketPackaging',
  ticketPackagingStartingStock: 'ticketPackagingStartingStock',
  ticketParking: 'ticketParking',
  ticketRecalc: 'ticketRecalc',
  ticketRefund: 'ticketRefund',
  ticketRequest: 'ticketRequest',
  ticketService: 'ticketService',
  ticketServiceType: 'ticketServiceType',
  ticketSms: 'ticketSms',
  ticketTracking: 'ticketTracking',
  ticketTrackingState: 'ticketTrackingState',
  ticketTrolley: 'ticketTrolley',
  ticketUpdateAction: 'ticketUpdateAction',
  ticketWeekly: 'ticketWeekly',
  till: 'till',
  tillConfig: 'tillConfig',
  time: 'time',
  town: 'town',
  train: 'train',
  trainingCenter: 'trainingCenter',
  trainingCourse: 'trainingCourse',
  trainingCourseType: 'trainingCourseType',
  travel: 'travel',
  travelClonedWeekly: 'travelClonedWeekly',
  travelLog: 'travelLog',
  travelObservation: 'travelObservation',
  travelRecalc: 'travelRecalc',
  travelThermograph: 'travelThermograph',
  trolley: 'trolley',
  userConfig: 'userConfig',
  userLog: 'userLog',
  userPhone: 'userPhone',
  userPhoneType: 'userPhoneType',
  vehicle: 'vehicle',
  vehicleDms: 'vehicleDms',
  vehicleEvent: 'vehicleEvent',
  vehicleInvoiceIn: 'vehicleInvoiceIn',
  vehicleNotes: 'vehicleNotes',
  vehicleState: 'vehicleState',
  volumeConfig: 'volumeConfig',
  wagon: 'wagon',
  wagonVolumetry: 'wagonVolumetry',
  warehouse: 'warehouse',
  warehouseAlias: 'warehouseAlias',
  workCenter: 'workCenter',
  workCenterHoliday: 'workCenterHoliday',
  worker: 'worker',
  workerAppTester: 'workerAppTester',
  workerBosses: 'workerBosses',
  workerBusinessType: 'workerBusinessType',
  workerClockLog: 'workerClockLog',
  workerConfig: 'workerConfig',
  workerDisableExcluded: 'workerDisableExcluded',
  workerDistributionCategory: 'workerDistributionCategory',
  workerDocument: 'workerDocument',
  workerEmergencyBoss: 'workerEmergencyBoss',
  workerHourPrice: 'workerHourPrice',
  workerIrpf: 'workerIrpf',
  workerJourney: 'workerJourney',
  workerLog: 'workerLog',
  workerMana: 'workerMana',
  workerManaExcluded: 'workerManaExcluded',
  workerMistake: 'workerMistake',
  workerMistakeType: 'workerMistakeType',
  workerRelatives: 'workerRelatives',
  workerShelving: 'workerShelving',
  workerTeam: 'workerTeam',
  workerTimeControl: 'workerTimeControl',
  workerTimeControlConfig: 'workerTimeControlConfig',
  workerTimeControlConfig_: 'workerTimeControlConfig_',
  workerTimeControlLog: 'workerTimeControlLog',
  workerTimeControlMail: 'workerTimeControlMail',
  workerTimeControlParams: 'workerTimeControlParams',
  workerTimeControlPin: 'workerTimeControlPin',
  workerTimeControlSchedule: 'workerTimeControlSchedule',
  workers20190711: 'workers20190711',
  workers20190711_FichadasAbril: 'workers20190711_FichadasAbril',
  workers20190711_FichadasJulio11: 'workers20190711_FichadasJulio11',
  workers20190711_FichadasJunio: 'workers20190711_FichadasJunio',
  workers20190711_FichadasMayo: 'workers20190711_FichadasMayo',
  workers20190711_FichadasOctubre: 'workers20190711_FichadasOctubre',
  workers20190711_Garrote: 'workers20190711_Garrote',
  workingHours: 'workingHours',
  zipConfig: 'zipConfig',
  zone: 'zone',
  zoneAgencyMode: 'zoneAgencyMode',
  zoneClosure: 'zoneClosure',
  zoneConfig: 'zoneConfig',
  zoneEvent: 'zoneEvent',
  zoneExclusion: 'zoneExclusion',
  zoneExclusionGeo: 'zoneExclusionGeo',
  zoneFilter: 'zoneFilter',
  zoneGeo: 'zoneGeo',
  zoneGeoRecalc: 'zoneGeoRecalc',
  zoneIncluded: 'zoneIncluded',
  zoneLog: 'zoneLog',
  zoneWarehouse: 'zoneWarehouse'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
