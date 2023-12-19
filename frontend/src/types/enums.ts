export enum NavigateToRoute {
  HOME = "/",
  NAVIGATION = "navigation",
  DELIVERY_HOME = "delivery",
  FOOD = "food",
  ORDERED_FOODS = "order",
  CART = "cart",
  USER_PROFILE = "profile",
  ADD_OUTLET = "outlets",
  ADD_ITEM = "items",
  ADD_DELIVERY_STAFF = "staff",
  ORDER_H = "history",
  ORDER_P = "dashboard",
  ORDER_PRE = "orders",
  DELIVERY_ORDERS = "home",
  DELIVERY_COMPLETED ="delivered" 
}

export enum ApiEndpoints {
  USER_REGISTER = "customer/register",
  USER_LOGIN = "customer/login",
  GET_USER = "customer/user",
  GET_ALL_ITEMS = "management/getAllItems",
  ADD_ORDER = "ordering/addOrder",
  ADD_USER_ADDRESS = "customer/addAddress",
  UPDATE_USER_ADDRESS = "customer/updateAddress",
  GET_USER_CREDITS = "customer/getCredits",
  GET_ORDER_HISTORY = "ordering/getOrderHistory",
  GET_ALL_OUTLETS = "management/getAllOutlets",
  GET_ALL_ITEMS_ADMIN = "management/getAllItems",
  DELETE_ITEM = "management/deleteItem/",
  UPDATE_ITEM = "management/editItem/",
  ADD_ITEM = "management/addItems",
  ADD_OUTLET = "management/addOutlet",
  DELETE_OUTLET = "management/deleteOutlet/",
  UPDATE_OUTLET = "management/editOutlet/",
  GET_ALL_STAFF = "management/getAllDeliveryPerson",
  ADD_STAFF = "management/addDeliveryPerson",
  UPDATE_STAFF = "management/editDeliveryPerson/",
  DELETE_STAFF ="management/deleteDeliveryPerson/",
  GET_CATEGORY = "management/getAllItemCategory",
  GET_ORDERS_BY_OUTLET = "prepration/getOrders/",
  DISPATCH_ORDER = "prepration/postApprovedOrder",
  GET_TAX_SLAB = "management/getAllTaxSlabs",
  GET_TODAYS_ORDERS_BY_OUTLET = "ordering/getTodaysOrders/",
  GET_ORDERS_FOR_DELIVERY = "ordering/getOrdersByDeliveryPerosn/",
  SEND_OTP_TO_CUST = "delivery/getOTPForCustomer/",
  UPDATE_STATUS_TO_DELIVERED = "delivery/updateDeliveryStatusToDelivered/"
}

export enum ConstantValues {
  INIT_CREDIT = 10000,
  DELIVERY_CHARGE = 25,
}
export enum Roles {
  CUSTOMER = "customer",
  RESTAURANT = "restaurant",
  DELIVERY_PERSON = "deliveryPerson",
  ADMIN = "admin",
}
