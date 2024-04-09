"use client";
import { dataProps } from "@/data/data";
import useSelectedItem from "@/store/selectedItemStore";
import React from "react";
type Props = {
  data: dataProps;
  mode: "add" | "remove";
};
const CardItem = ({ data, mode }: Props) => {
  const addItems = useSelectedItem((state) => state.addItem);
  const removeItem = useSelectedItem((state) => state.removeItem);

  function handleOnClickCard() {
    if (mode === "add") {
      addItems(data);
    } else if (mode === "remove") {
      removeItem(data);
    }
  }
  return (
    <li
      onClick={() => handleOnClickCard()}
      className="w-full min-h-[3rem] mb-3 border border-gray-300 rounded-lg shadow-lg   text-center hover:bg-gray-100 cursor-pointer"
    >
      <p className="mt-2"> {data.name}</p>
    </li>
  );
};

export default CardItem;
