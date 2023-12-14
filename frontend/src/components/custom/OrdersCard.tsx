function OrderCard({ order }: { order: Order }) {
    const { personName, address, items, totalCost } = order;
  
    const formatPrice = (price: number) => `$${price.toFixed(2)}`;
  
    return (
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="font-bold text-xl mb-2">{personName}'s Order</h3>
        <p className="text-sm mb-4">Delivery Address: {address}</p>
        <ul className="list-none">
          {items.map((item) => (
            <li key={item.name} className="flex items-center mb-2">
              <span className="w-1/4 text-right mr-2">{item.quantity}</span>
              <span className="flex-grow">{item.name}</span>
              <span className="ml-2 font-light">{formatPrice(item.price)}</span>
            </li>
          ))}
        </ul>
        <p className="font-bold text-lg mb-2">Total: {formatPrice(totalCost)}</p>
      </div>
    );
  }
  
  interface Order {
    personName: string;
    address: string;
    items: OrderItem[];
    totalCost: number;
  }
  
  interface OrderItem {
    name: string;
    quantity: number;
    price: number;
  }
  
  export default OrderCard;