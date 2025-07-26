"use client";

import { fetchApi } from "@/Actions/FetchApi";
import { getTokenFromServerCookies } from "@/Actions/TokenHandlers";
import { AnimatePresence, motion } from "framer-motion";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { useToast } from "../ToastContext/ToastContext";
import { useCartsStore } from "@/store/cart";

interface ModalProps {
  ticketId: string;
  onClose: () => void;
}

type TicketForm = {
  book_type: "me" | "me_and_others" | "others";
  your_ticket: string;
  tickets: {
    type: string;
    quantity: string;
    codes: string[];
  }[];
};

const AddToCartModal = ({ ticketId, onClose }: ModalProps) => {
  const { showToast } = useToast();
  const { getCartItems } = useCartsStore();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting },
  } = useForm<TicketForm>({
    defaultValues: {
      book_type: "me",
      your_ticket: ticketId,
      tickets: [
        {
          type: "",
          quantity: "",
          codes: [""],
        },
      ],
    },
  });

  const ticketsField = useFieldArray({
    control,
    name: "tickets",
  });

  const bookType = useWatch({ control, name: "book_type" });
  const ticketsWatch = useWatch({ control, name: "tickets" });

  const addCodeToTicket = (ticketIndex: number) => {
    const currentCodes = ticketsWatch?.[ticketIndex]?.codes || [];
    const newCodes = [...currentCodes, ""];
    setValue(`tickets.${ticketIndex}.codes`, newCodes);
  };

  const removeCodeFromTicket = (ticketIndex: number, codeIndex: number) => {
    const currentCodes = ticketsWatch?.[ticketIndex]?.codes || [];
    const newCodes = currentCodes.filter((_, i) => i !== codeIndex);
    setValue(`tickets.${ticketIndex}.codes`, newCodes);
  };

  const onSubmit = async (data: TicketForm) => {
    const token = await getTokenFromServerCookies();
    if (data.book_type === "others" || data.book_type === "me_and_others") {
      data.tickets = data.tickets.map((tic) => ({
        ...tic,
        type: "1",
      }));
    }

    let payload: Record<string, unknown> = {};

    switch (data.book_type) {
      case "me":
        payload = {
          book_type: data.book_type,
          your_ticket: data.your_ticket,
        };
        break;
      case "others":
        payload = {
          book_type: data.book_type,
          tickets: data.tickets.map((tic) => ({
            ...tic,
            type: "1",
          })),
        };
        break;
      case "me_and_others":
        payload = {
          book_type: data.book_type,
          your_ticket: data.your_ticket,
          tickets: data.tickets.map((tic) => ({
            ...tic,
            type: "1",
          })),
        };
        break;
      default:
        break;
    }

    const res = await fetchApi<{
      status: number;
      message: string;
      errors: { [key: string]: string[] };
      data: [];
    }>("add-to-cart", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    if (res.status === 200) {
      await getCartItems();
      showToast(res.message || "Ticket added to cart", "success");
      onClose();
    }
    if (res.message === "Validation error" || res.status >= 400) {
      showToast(res.message || "Something went wrong", "error");
      Object.entries(res.errors || {}).forEach(([, value]) => {
        value.map((val: string) => showToast(val, "error"));
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg text-start"
      >
        <h2 className="text-3xl font-semibold mb-6">Add to Cart</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xl block">Booking For</label>
            <div className="flex gap-4">
              {["me", "me_and_others", "others"].map((val) => (
                <label
                  key={val}
                  className="flex items-center gap-2 capitalize cursor-pointer"
                >
                  <input
                    type="radio"
                    value={val}
                    className="cursor-pointer"
                    {...register("book_type")}
                  />
                  {val.replace(/_/g, " ")}
                </label>
              ))}
            </div>
          </div>

          <AnimatePresence initial={false}>
            {(bookType === "me_and_others" || bookType === "others") && (
              <motion.div
                key="ticket-fields"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {ticketsField.fields.map((field, i) => (
                  <div
                    key={field.id}
                    className="tranistion-all duration-300 border border-gray-200 p-4 rounded-lg hover:shadow-sm mb-4 bg-gray-50"
                  >
                    <div className="mb-2">
                      <label className="block text-sm mb-1">Quantity</label>
                      <input
                        {...register(`tickets.${i}.quantity`)}
                        className="w-full border rounded px-2 py-1 outline-none border-gray-300 bg-white focus:border-purple-600 transition-all duration-300"
                        placeholder="Quantity"
                      />
                    </div>

                    <div className="mb-2">
                      <label className="block text-sm mb-1">Codes</label>
                      {ticketsWatch?.[i]?.codes?.map((_, j) => (
                        <div key={j} className="flex items-center gap-2 mb-2">
                          <input
                            {...register(`tickets.${i}.codes.${j}`)}
                            className="flex-1 border rounded px-2 py-1 outline-none border-gray-300 bg-white focus:border-purple-600 transition-all duration-300"
                            placeholder={`Code ${j + 1}`}
                          />
                          {ticketsWatch[i].codes.length > 1 && (
                            <button
                              type="button"
                              className="cursor-pointer hover:underline text-[#ff2020] text-xs transition-all duration-300"
                              onClick={() => removeCodeFromTicket(i, j)}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        className="cursor-pointer text-purple-600 hover:underline transition-all duration-300 text-sm mt-1"
                        onClick={() => addCodeToTicket(i)}
                      >
                        + Add Code
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded hover:bg-white hover:text-purple-600 border border-purple-600 transition-all duration-300"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer bg-gray-700 text-white px-4 py-2 rounded hover:bg-white hover:text-gray-700 border border-gray-700 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddToCartModal;
