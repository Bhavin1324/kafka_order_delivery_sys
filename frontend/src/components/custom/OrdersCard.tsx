import { IOrder } from "../../types/interfaces";

function OrderCard({ order }: { order: IOrder }) {
 
  
    const formatPrice = (price: number) => `$${price.toFixed(2)}`;
  
    return (
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="font-bold text-xl mb-2">{order.name}'s Order</h3>
        <ul className="list-none">
          {order.items.map((item) => (
            <li key={item.name} className="flex items-center mb-2">
              <span className="w-1/4 text-right mr-2">{item.quantity}</span>
              <span className="flex-grow">{item.name}</span>
            </li>
          ))}
        </ul>
        <p className="font-bold text-lg mb-2">Total: {formatPrice(order.payable_amount)}</p>
      </div>
    );
  }
  
  export default OrderCard;