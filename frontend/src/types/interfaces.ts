import { Roles } from "./commons";

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
export interface Outlet {
  id: string;
  name: string;
  address: string;
  phoneno: number;
  latitude: number;
  longitude: number;
  pincode: number;
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
}
export interface ILoginResponse {
  userid: string;
  token: string;
}
export interface IUser {
  id?: string;
  name: string;
  username: string;
  password: string;
  email: string;
  phone_no: string;
  role?: string;
  credits?: string;
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
