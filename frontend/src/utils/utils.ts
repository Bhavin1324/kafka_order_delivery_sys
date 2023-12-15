/* eslint-disable @typescript-eslint/no-unused-vars */
import { jwtDecode } from "jwt-decode";
import {
  DeliveryPerson,
  ILoginPayload,
  ILoginResponse,
  ITokenPayload,
  IUser,
  Outlet,
} from "../types/interfaces";
import { Roles } from "../types/commons";

type T =
  | IUser
  | ILoginPayload
  | ILoginResponse
  | Outlet
  | DeliveryPerson
  | Outlet;
export function hasAnyEmptyKeys(obj: T): boolean {
  let counter: number = 0;
  Object.keys(obj).map((item) => {
    if (obj[item].length === 0 || !obj[item].trim()) {
      counter++;
    }
  });
  if (counter === 0) {
    return false;
  } else {
    return true;
  }
}

export function isTokenExpired(miliseconds: number): boolean {
  if (miliseconds > new Date().getTime()) {
    return false;
  } else {
    return true;
  }
}
export const TokenValidation = (): { role: Roles; isExpired: boolean } => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decode: ITokenPayload = jwtDecode(token);
      console.log(isTokenExpired(decode.exp));
      return { isExpired: isTokenExpired(decode.exp), role: decode.groups[0] };
    } catch (ex) {
      return { isExpired: true, role: "" };
    }
  }
  return { isExpired: true, role: "" };
};
