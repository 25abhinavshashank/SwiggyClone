import { useSelector, useDispatch } from "react-redux";
import { IncrementItems, DecrementItems } from "../Stored/CartSlicer";

export default function Checkout() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartslice.items);

  // Calculate total price
  const totalAmount = items.reduce(
    (total, item) => total + (item.price / 100) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Checkout</h1>

      {items.length === 0 ? (
        <div className="text-2xl text-gray-600 font-medium">
          Your cart is empty 😔
        </div>
      ) : (
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-5"
            >
              {/* Left side - Image + Info */}
              <div className="flex items-center gap-4">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150,c_fit/" +
                    item.imageId
                  }
                  alt={item.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 text-base">
                    ₹{item.price / 100}
                  </p>
                </div>
              </div>

              {/* Right side - Quantity controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(DecrementItems(item))}
                  className="px-3 py-1 bg-gray-200 text-xl rounded-full hover:bg-gray-300"
                >
                  −
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => dispatch(IncrementItems(item))}
                  className="px-3 py-1 bg-orange-500 text-white text-xl rounded-full hover:bg-orange-600"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {/* Total Section */}
          <div className="flex justify-between mt-6 text-2xl font-semibold">
            <span>Total:</span>
            <span>₹{totalAmount.toFixed(2)}</span>
          </div>

          <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 text-xl rounded-lg font-bold shadow-md transition">
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}
