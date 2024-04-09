"use client";
import { dataProps } from "@/data/data";
import useSelectedItem from "@/store/selectedItemStore";
import React from "react";
type Props = {
  data: dataProps;
  mode: "add" | "remove";
};
const Carditem = ({ data, mode }: Props) => {
  const addItems = useSelectedItem((state) => state.addItem);
  const removeItem = useSelectedItem((state) => state.removeItem);

  function handleAddItem() {
    addItems(data);
  }
  function handleRemoveItem() {
    removeItem(data);
  }
  return (
    <li
      onClick={() => {
        if (mode === "add") {
          handleAddItem();
        } else if (mode === "remove") {
          handleRemoveItem();
        }
      }}
      className="w-full min-h-[3rem] mb-3 border border-gray-300 rounded-lg shadow-lg   text-center hover:bg-gray-100 cursor-pointer "
    >
      <p className="mt-2"> {data.name}</p>
    </li>
  );
};

export default Carditem;
