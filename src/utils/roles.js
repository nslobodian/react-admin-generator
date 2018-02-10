import url from './urls'

export const roles = {
  USERS_READ: 'USERS_READ',
  USERS_EDIT: 'USERS_EDIT',
  SETTINGS_READ: 'SETTINGS_READ',
  SETTINGS_EDIT: 'SETTINGS_EDIT',
  INSPIRATIONS_READ: 'INSPIRATIONS_READ',
  INSPIRATIONS_EDIT: 'INSPIRATIONS_EDIT',
  INSPIRATIONS_DELETE: 'INSPIRATIONS_DELETE',
  INSPIRATIONS_SCHEDULE: 'INSPIRATIONS_SCHEDULE',
  PRODUCTS_READ: 'PRODUCTS_READ',
  PRODUCTS_EDIT: 'PRODUCTS_EDIT',
  PRODUCTS_DELETE: 'PRODUCTS_DELETE',
  ORDERS_READ: 'ORDERS_READ',
  ORDERS_EDIT: 'ORDERS_EDIT',
  ORDERS_LOCK: 'ORDERS_LOCK',
  ORDERS_UNLOCK: 'ORDERS_UNLOCK',
  ERP_READ: 'ERP_READ',
  ERP_EDIT: 'ERP_EDIT',
  ERP_LOCK: 'ERP_LOCK',
  ERP_UNLOCK: 'ERP_UNLOCK',
  i: (roles, role) => roles === undefined || (!role || !!roles && roles.includes(role)),
}

export const urlRoles = {
  [url.attributes]: roles.PRODUCTS_READ,
  [url.attributeSets]: roles.PRODUCTS_READ,
  [url.categories]: roles.PRODUCTS_READ,
  [url.categoryRoots]: roles.PRODUCTS_READ,
  [url.categoryRoots]: roles.PRODUCTS_READ,
  [url.createInspiration]: roles.INSPIRATIONS_EDIT,
  [url.createProduct]: roles.PRODUCTS_EDIT,
  [url.createPurchaseOrder]: roles.ERP_READ,
  [url.inspirationLine]: roles.INSPIRATIONS_READ,
  [url.inspirations]: roles.INSPIRATIONS_READ,
  [url.order]: roles.ORDERS_READ,
  [url.orderedProductsListing]: roles.ORDERS_EDIT,
  [url.orders]: roles.ORDERS_READ,
  [url.products]: roles.PRODUCTS_READ,
  [url.purchaseOrders]: roles.ERP_READ,
  [url.settings]: roles.SETTINGS_READ,
  [url.stockedProducts]: roles.ERP_READ,
  [url.user]: roles.USERS_EDIT,
  [url.users]: roles.USERS_READ,
  [url.home]: roles.USERS_READ,
}

export const getRole = pathname => urlRoles[`/${pathname.split('/')[1]}`]

export default roles
