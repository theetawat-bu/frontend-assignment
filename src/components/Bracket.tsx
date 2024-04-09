"use client";
import React from "react";
import Carditem from "./Card/Carditem";
import useSelectedItem from "@/store/selectedItemStore";
type Props = {
  name: string;
  type: "Fruit" | "Vegetable";
};
const Bracket = ({ name, type }: Props) => {
  const items = useSelectedItem((state) => state.selectedItems);

  return (
    <div className="border border-gray-500 min-w-[20%] text-center">
      <div className="bg-gray-200 h-10 pt-1 ">
        <h1 className="text-xl font-bold">{name}</h1>
      </div>
      <div className="mt-3 mx-3">
        <ul>
          {items
            .filter((item) => item.type === type)
            .map((item) => {
              return <Carditem key={item.name} data={item}  mode="remove"/>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default Bracket;
