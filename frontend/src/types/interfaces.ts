import { Roles } from "./commons";

export interface IOrder{
    id:string,
    name :string,
    items : Iitemslist[],
    payable_amount :number,
    order_status : string
}
interface Iitemslist {
    name:string,
    quantity :number
}
export interface IOutlet{
    id?:string,
    name:string,
    address:string,
    phoneNo:number,
    latitude:number,
    longitude:number,
    pincode : number
}
export interface IItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  itemImage?: Uint8Array;
  categoryId?: ICategory;
  isVeg:boolean;
  taxSlabId:ITaxSlab,
}

export interface IItemScattered {
  id: string;
  categoryId_id?:string,
  categoryId_isSizeVarient?:boolean,
  categoryId_name?:string,
  name: string;
  price: number;
  description?: string;
  itemImage?: Uint8Array;
  isVeg:boolean;
  taxSlabId_id?:string,
  taxSlabId_percentage?:string
}
export interface ICategory {
  id: string;
  isSizeVarient: boolean;
  name: string;
}
export interface ITaxSlab {
  id: string;
  percentage: number;
}
export interface IDeliveryPerson {
  id?: string;
  name:string,
  username: string;
  password?:string;
  email:string;
  phone_no:string;
  role?:string;
  credits?:string
  aadharNumber: number;
  outletId: string;
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
