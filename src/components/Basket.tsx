"use client";
import React from "react";
import CardItem from "./Card/Carditem";
import useSelectedItem from "@/store/selectedItemStore";
type Props = {
  name: string;
  type: "Fruit" | "Vegetable";
};
const Basket = ({ name, type }: Props) => {
  const selectedItems = useSelectedItem((state) => state.selectedItems);

  return (
    <div className="border border-gray-500 min-w-[20%] text-center">
      <ContainerBasketName name={name}  />
      <div className="m-3">
        <ul>
          {selectedItems
            .filter((item) => item.type === type)
            .map((item) => {
              return <CardItem key={item.name} data={item} mode="remove" />;
            })}
        </ul>
      </div>
    </div>
  );
};

const ContainerBasketName = ({ name }:Pick< Props,"name">) => {
  return (
    <div className="bg-gray-200 h-10 pt-1 ">
      <h1 className="text-xl font-bold">{name}</h1>
    </div>
  );
};

export default Basket;
