
const PreparedOrders = () => {
  const initialState= {
    orders :   [{
       id:"Asdadadadad",
       name : "Raj patel",
       items : [{
           name:"Seven Cheese",
           quantity:2,
       },{
           name:"Tomato Medium Pizza",
           quantity :1
       },{
           name:"Onion veg pizza",
           quantity : 3
       }],
       payable_amount :450,
       order_status : "PLACED"
   },
   {
       id:"wewAsdadadadad",
       name : "Sahil patel",
       items : [{
           name:"Cheese Burst",
           quantity:1,
       },{
           name:"Tomato Medium Pizza",
           quantity :1
       }],
       payable_amount :500,
       order_status : "PLACED"
   },
   {
       id:"Asdadad79adad",
       name : "jaimin bhatt",
       items : [{
           name:"Garlic Cheese",
           quantity:3,
       },{
           name:"Onion veg pizza",
           quantity : 3
       }],
       payable_amount :350,
       order_status : "PLACED"
   },
   {
       id:"A87adadadad",
       name : "Bhavin Jariwala",
       items : [{
           name:"Veg Cheese",
           quantity:2,
       },{
           name:"Tomato Medium Pizza",
           quantity :1
       },{
           name:"Onion veg pizza",
           quantity : 3
       }],
       payable_amount :458,
       order_status : "INTANSIST"
   }]
   }
    
  return (
    <>
    </>
  )
}

export default PreparedOrders