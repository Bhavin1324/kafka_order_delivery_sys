export enum NavigateToRoute {
  HOME = "/",
  FOOD = "food",
  SEARCH_FOOD = "search",
  CART = "cart",
  USER_PROFILE = "profile",
  ADMIN_DASHBOARD = "dashboard",
  ADD_OUTLET = "outlets",
  ADD_ITEM = "items",
  ADD_DELIVERY_STAFF = "staff",
  ORDER_H = "history",
  ORDER_P = "dashboard",
  ORDER_PRE = "orders"

}

export enum ApiEndpoints {
  USER_REGISTER = "customer/register",
  USER_LOGIN = "customer/login",
  GET_USER = "customer/user",
  GET_ALL_ITEMS_ADMIN = "management/getAllItems",
  DELETE_ITEM = "management/deleteItem/",
  UPDATE_ITEM = "management/editItem/",
  ADD_ITEM = "management/addItems",
  GET_ALL_OUTLETS  = "management/getAllOutlets",
  ADD_OUTLET = "management/addOutlet",
  DELETE_OUTLET = "management/deleteOutlet/",
  UPDATE_OUTLET = "management/editOutlet/",
  GET_ALL_STAFF = "management/getAllDeliveryPerson",
  ADD_STAFF = "management/addDeliveryPerson",
  UPDATE_STAFF = "management/editDeliveryPerson/",
  DELETE_STAFF ="management/deleteDeliveryPerson/",
  GET_CATEGORY = "management/getAllItemCategory",
  GET_ORDERS_BY_OUTLET = "prepration/getOrders/",
  DISPATCH_ORDER = "prepration/postApprovedOrder"
}

export enum ConstantValues {
  INIT_CREDIT = "10000",
}
export enum Roles {
  CUSTOMER = "customer",
  RESTAURANT = "restaurant",
  DELIVERY_PERSON = "deliveryPerson",
  ADMIN = "admin",
}
