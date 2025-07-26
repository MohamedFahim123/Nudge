"use client";

import { fetchApi } from "@/Actions/FetchApi";
import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import { CartItem } from "@/store/cart";
import { baseUrl } from "@/utils/baseUrl";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "../ToastContext/ToastContext";
interface MyCartProps {
  cartData: CartItem[] | null;
  getCartData: () => Promise<void>;
}
const MyCart = ({ cartData, getCartData }: MyCartProps) => {
  const { showToast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [removeConflict, setRemoveConflict] = useState(false);
  const [isSubmittingCheckout, setIsSubmittingCheckout] = useState(false);
  if (!cartData) return null;

  const handleCheckout = async () => {
    setIsSubmittingCheckout(true);

    const data = {
      payment_method: paymentMethod,
      remove_conflict: removeConflict ? "1" : "0",
    };

    try {
      const res = await fetch(`${baseUrl}/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${await getTokenFromServerCookies()}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result?.data?.url) {
        window.location.href = result.data.url;
        return;
      }

      if (!res.ok) {
        showToast(result.message || "Failed to checkout", "error");
        const errors = result.errors as Record<string, string[]>;

        Object.entries(errors).forEach(([, value]) => {
          showToast(value[0] || "Failed to checkout", "error");
        });
      }
    } catch (error) {
      console.error("Checkout error:", error);
      showToast("Unexpected error occurred during checkout", "error");
    } finally {
      setIsSubmittingCheckout(false);
    }
  };

  const removeTicketFromCart = async (ticketId: number) => {
    setIsSubmittingCheckout(true);
    const res = await fetchApi<{
      status: number;
      message: string;
      data: { cart: { cart: CartItem[] } };
    }>(`remove-from-cart/${ticketId}`, {
      method: "DELETE",
      cache: "no-cache",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${await getTokenFromServerCookies()}`,
      },
    });
    if (res.status === 200) {
      showToast(res.message || "Ticket removed from cart", "success");
      await getCartData();
    }

    if (res.status !== 200) {
      showToast(res.message || "Failed to remove ticket from cart", "error");
    }

    setIsSubmittingCheckout(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 My Cart</h1>

      <div className="space-y-4">
        {cartData?.length > 0 ? (
          cartData?.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-gray-200 rounded-lg p-4 bg-white shadow flex justify-between items-center tramsition-all duration-300 hover:shadow-md hover:border-gray-400 hover:bg-gray-50"
            >
              <div>
                <p className="font-semibold text-lg capitalize">
                  {item.ticket.type} Ticket
                </p>
                <p className="text-gray-600">
                  Price:{" "}
                  <span className="font-medium">${item.ticket.price}</span>
                </p>
                {item.your_ticket && (
                  <p className="text-green-600 font-medium">Your Ticket</p>
                )}
                {!item.your_ticket && item.invited && (
                  <div className="text-sm text-gray-700 mt-1">
                    <p>Invited: {item.invited.name}</p>
                    <p>Code: {item.invited.code}</p>
                  </div>
                )}
              </div>
              <button
                title="Remove Ticket"
                onClick={() => removeTicketFromCart(item.id)}
                className="text-red-500 hover:underline text-sm cursor-pointer transition-all duration-300"
              >
                Remove
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600">Your cart is empty</p>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6 shadow-lg max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4">Proceed to Checkout</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">
            Payment Method
          </label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-purple-500 transition-all duration-300 mb-3"
          >
            <option value="" disabled>
              Select Payment Method
            </option>
            <option value="stripe">stripe</option>
          </select>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <input
            type="checkbox"
            checked={removeConflict}
            onChange={() => setRemoveConflict((prev) => !prev)}
            className="w-4 h-4 cursor-pointer"
            id="removeConflict"
          />
          <label
            htmlFor="removeConflict"
            className="text-sm cursor-pointer font-semibold text-gray-800"
          >
            Remove conflict if exists
          </label>
        </div>

        <button
          title="Checkout Now"
          onClick={handleCheckout}
          disabled={isSubmittingCheckout || cartData?.length === 0}
          className="w-full disabled:opacity-50 bg-purple-600 border border-purple-600 cursor-pointer text-white py-2 rounded hover:bg-white hover:text-purple-600 transition-all duration-300"
        >
          {isSubmittingCheckout ? "Processing..." : "Checkout Now"}
        </button>
      </motion.div>
    </div>
  );
};

export default MyCart;
