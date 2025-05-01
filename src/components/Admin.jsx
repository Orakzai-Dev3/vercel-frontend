import React from 'react';

const data = [
  {
    "id": 18,
    "order_id": 3,
    "full_name": "abdurrehman",
    "address": "G 10/2 liaquat square, malir, karachi",
    "city": "karachi",
    "state": "sindh",
    "postal_code": "4444",
    "country": "Pakistan",
    "items": [
      {
        "id": 9,
        "order_id": 18,
        "product_id": 221,
        "quantity": 1,
        "price": "49.00",
        "product_name": "Black Leather Wallet",
        "image_url": "https://cdn.leatherscin.com/img/variant/large/scin-13324w-black.jpg"
      }
    ]
  },
  {
    "id": 19,
    "order_id": 3,
    "full_name": "abdurrehman",
    "address": "G 10/2 liaquat square, malir, karachi",
    "city": "karachi",
    "state": "sindh",
    "postal_code": "4444",
    "country": "Pakistan",
    "items": [
      {
        "id": 10,
        "order_id": 19,
        "product_id": 221,
        "quantity": 1,
        "price": "49.00",
        "product_name": "Black Leather Wallet",
        "image_url": "https://cdn.leatherscin.com/img/variant/large/scin-13324w-black.jpg"
      }
    ]
  },
  {
    "id": 20,
    "order_id": 3,
    "full_name": "abdurrehman",
    "address": "G 10/2 liaquat square, malir, karachi",
    "city": "karachi",
    "state": "sindh",
    "postal_code": "757575",
    "country": "Pakistan",
    "items": [
      {
        "id": 11,
        "order_id": 20,
        "product_id": 161,
        "quantity": 1,
        "price": "249.00",
        "product_name": "SCIN Camel Brown Coat",
        "image_url": "https://cdn.leatherscin.com/img/variant/large/scin-13157-camelbrown.jpg"
      }
    ]
  },
  {
    "id": 21,
    "order_id": 3,
    "full_name": "abdurrehman",
    "address": "G 10/2 liaquat square, malir, karachi",
    "city": "karachi",
    "state": "sindh",
    "postal_code": "4444",
    "country": "Pakistan",
    "items": [
      {
        "id": 12,
        "order_id": 21,
        "product_id": 357,
        "quantity": 1,
        "price": "1600.00",
        "product_name": "Two-Tone Duffle Bag",
        "image_url": "https://cdn.leatherscin.com/img/variant/large/scin-13229-blackandbrown.jpg"
      },
      {
        "id": 13,
        "order_id": 21,
        "product_id": 370,
        "quantity": 1,
        "price": "1300.00",
        "product_name": "Retro Brown Duffle",
        "image_url": "https://cdn.leatherscin.com/img/variant/large/scin-13230-brown.jpg"
      }
    ]
  }
];

const Admin = () => {
  return (
    <div className="p-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((order) => (
        <div
          key={order.id}
          className="border border-[#CA9154] rounded-lg p-4 shadow-lg bg-white"
        >
          {/* Order Header */}
          <h2 className="text-[#683A25] text-xl font-semibold mb-2">
            Order ID: {order.order_id}
          </h2>
          
          {/* Customer Info */}
          <div className="mb-4">
            <p className="text-[#683A25] font-semibold">Customer:</p>
            <p className="text-[#683A25]">{order.full_name}</p>
            <p className="text-[#683A25]">{order.address}</p>
            <p className="text-[#683A25]">{order.city}, {order.state}</p>
            <p className="text-[#683A25]">Postal Code: {order.postal_code}</p>
            <p className="text-[#683A25]">Country: {order.country}</p>
          </div>
          
          {/* Items */}
          <div className="mb-4">
            <h3 className="text-[#683A25] font-semibold mb-2">Items:</h3>
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center mb-2">
                <img
                  src={item.image_url}
                  alt={item.product_name}
                  className="w-12 h-12 object-cover mr-3 rounded"
                />
                <div>
                  <p className="text-[#683A25] font-semibold">{item.product_name}</p>
                  <p className="text-[#683A25]">Qty: {item.quantity}</p>
                  <p className="text-[#683A25]">Price: ${item.price}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Total Price */}
          <div className="mb-4">
            <p className="text-[#683A25] font-semibold">Total:</p>
            <p className="text-[#683A25] font-bold">
              ${order.items.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0).toFixed(2)}
            </p>
          </div>
          
          {/* Action Button */}
          <button
            className="bg-[#CA9154] text-white px-4 py-2 rounded hover:bg-[#b97c49] transition-colors duration-300"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Admin;