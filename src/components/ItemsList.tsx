"use client";
import data from "@/data/data";
import React, { useEffect } from "react";
import Carditem from "./Card/Carditem";
import useSelectedItem from "@/store/selectedItemStore";

const ItemsList = () => {
  const selectedItems = useSelectedItem((state) => state.selectedItems);
  const removeLast = useSelectedItem((state) => state.removeFirst);
  useEffect(() => {
    if (selectedItems.length != 0) {
      const inter = setInterval(() => {
        if (selectedItems) {
          console.log(selectedItems);
          removeLast();
        }
      }, 2000);
      return () => clearInterval(inter);
    }
  }, [selectedItems.length != 0]);
  return (
    <div className=" w-[30%]">
      <ul className="">
        {data
          .filter((data) => {
            const result = selectedItems.find(
              (v) => v.name == data.name && v.type == data.type
            );
            if (result) {
              return false;
            }
            return true;
          })
          .map((data) => {
            return <Carditem key={data.name} data={data} mode="add" />;
          })}
      </ul>
    </div>
  );
};

export default ItemsList;
