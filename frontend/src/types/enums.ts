export enum NavigateToRoute {
  HOME = "/",
  FOOD = "food",
  ORDERED_FOODS = "order",
  CART = "cart",
  USER_PROFILE = "profile",
  ADMIN_DASHBOARD = "dashboard",
  ADD_OUTLET = "outlets",
  ADD_ITEM = "items",
  ADD_DELIVERY_STAFF = "staff",
  ORDER_H = "history",
  ORDER_P = "cdashboard",
  ORDER_PRE = "orders",
}

export enum ApiEndpoints {
  USER_REGISTER = "customer/register",
  USER_LOGIN = "customer/login",
  GET_USER = "customer/user",
  GET_ALL_ITEMS = "management/getAllItems",
  ADD_ORDER = "ordering/addOrder",
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
