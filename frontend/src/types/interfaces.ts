export interface Outlet{
    id:string,
    name:string,
    address:string,
    phoneno:number,
    latitude:number,
    longitude:number,
    pincode : number
}
export interface Item {
    id:string,
    name :string,
    category_id : string,
    description:string,
    tax_slab_id :string,
    price : number,
    img : any,
    is_veg :boolean
}
export interface DeliveryPerson {
    id:string ,
    username: string,
    current_status:string,
    adhar_number:number,
    latitude:number,
    longitude:number,
    outlet_id:string 
}
