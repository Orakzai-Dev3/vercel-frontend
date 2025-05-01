import React, { useEffect, useState } from 'react'

function User() {
  const [orders, setOrder] = useState([]); // initialize as array

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch('https://railway-backend-production-08c2.up.railway.app/get-user-orders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || 'Order failed');
        }

        // Assuming result is an array of orders
        setOrder(result);

        console.log(result);
        alert(result.message);

        if (result.redirect) {
          window.location.href = result.redirect;
        }
      } catch (err) {
        alert(err.message);
        console.log('Error:', err.message);
      }
    };

    fetchOrder();
  }, []);

  return (
    <div>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-card bg-white shadow-md rounded-lg p-4 mb-6 border-[#CA9154]">
            {/* Order Header */}
            <div className="order-header border-b pb-2 mb-3">
              {/* Changed heading text to "SS0 {orderId}" */}
              <h3 className="text-lg font-semibold text-[#683A25]">OrderID : SS0{order.id}</h3>
              <p className="text-gray-600">
                Date: {new Date(order.created_at).toLocaleDateString()}
              </p>
            </div>

            {/* Shipping Address */}
            <div className="address-section mb-4">
              <h4 className="font-medium text-gray-800">Shipping Address:</h4>
              <p>{order.full_name}</p>
              <p>{order.address}</p>
              <p>
                {order.city}, {order.state} {order.postal_code}
              </p>
              <p>{order.country}</p>
            </div>

            {/* Order Items */}
            <div className="items-section">
              <h4 className="font-medium text-gray-800 mb-2">Order Items:</h4>
              <div className="grid gap-4">
                {order.items.map((item) => (
                  <div key={item.id} className="item-card flex border rounded p-3">
                    <img
                      src={item.image_url}
                      alt={item.product_name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-3">
                      <h5 className="font-medium">{item.product_name}</h5>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Total */}
            <div className="total-section mt-4 pt-3 border-t text-right">
              <p className="font-semibold">
                Total: $
                {order.items.reduce(
                  (sum, item) => sum + parseFloat(item.price) * item.quantity,
                  0
                )}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default User;