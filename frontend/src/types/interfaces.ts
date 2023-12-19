import { OrderStatus, PaymentMethod, Roles } from "./commons";

/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IOrder {
  id: string;
  username: string;
  items: [
    {
      name: string;
      quantity: number;
    }
  ];
  payable_amount: number;
  order_status: string;
}
export interface IPincode {
  pincode: number;
  district: string;
  state: string;
}
export interface IOutlet {
  id: string;
  name: string;
  address: string;
  phoneNo: number;
  latitude?: number;
  longitude?: number;
  pincode: IPincode;
}
export interface Item {
  id: string;
  name: string;
  category_id: string;
  description: string;
  tax_slab_id: string;
  price: number;
  img: any;
  is_veg: boolean;
}
export interface DeliveryPerson {
  id: string;
  username: string;
  current_status: string;
  adhar_number: number;
  letitude: number;
  logitude: number;
  outlet_id: string;
}

export interface ILoginPayload {
  email: string;
  password: string;
  outlet: string;
}
export interface ILoginResponse {
  userid: string;
  token: string;
}
export interface IUser {
  id?: string;
  userid?: string;
  name: string;
  username: string;
  password: string;
  email: string;
  phone_no: string;
  role?: string;
  credits?: number;
  address?: ICustomerAddress[];
}

export interface ITokenPayload {
  iss: string;
  aud: string;
  jti: string;
  exp: number;
  iat: number;
  sub: string;
  upn: string;
  preferred_username?: string;
  groups: Roles[];
}

export interface ICategory {
  id: string;
  isSizeVarient: boolean;
  name: string;
}
export interface ITaxSlab {
  id: string;
  percentage: number;
}
export interface IItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  itemImage?: Uint8Array;
  categoryId: ICategory;
  taxSlabId: ITaxSlab;
}

export interface ICustomerOrder {
  items: { quantity: number; itemId: string }[];
  amount: string;
  paymentMethod: PaymentMethod;
  userId: string;
  outletId: string;
}
export interface ICartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  taxSlab: number;
}
export interface ICartItemState {
  items: ICartItem[];
  totalQuantity: number;
  total: number;
}

export interface ICustomerAddress {
  id: string;
  address: string;
  pincode: string;
}
export interface IOrderHistory {
  id: string;
  orderStatus: OrderStatus;
  paymentMethod: string;
  amount: number;
  payableAmount: number;
  orderDate: string;
  outletId: {
    id: string;
    name: string;
    address: string;
    pincode: string;
    phoneNo: number;
  };
  deliveryPersonId?: {
    name: string;
    phoneNo: number;
  };
  items: { price: number; quantity: number; name: string; tax: number }[];
}
