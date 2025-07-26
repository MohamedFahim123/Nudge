"use client";

import { useState } from "react";
import AddToCartModal from "../AddToCartModal/AddToCartModal";
interface Props {
  text: string;
  ticketId: string;
}

const AddToCartBtn = ({ text, ticketId }: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        type="button"
        className="cursor-pointer duration-300 border border-green-600 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-white hover:text-green-600 transition"
        onClick={() => setShowModal(true)}
      >
        {text}
      </button>

      {showModal && (
        <AddToCartModal
          ticketId={ticketId}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default AddToCartBtn;
