"use client";
import data, { dataProps } from "@/data/data";
import React, { useEffect } from "react";
import CardItem from "./Card/Carditem";
import useSelectedItem from "@/store/selectedItemStore";
import { INTERVAL_TIME_MILLISECOND } from "@/config/constants";

const ItemsList = () => {
  const selectedItems = useSelectedItem((state) => state.selectedItems);
  const removeLast = useSelectedItem((state) => state.removeFirst);

  useEffect(() => {
    if (selectedItems.length != 0) {
      const interVal = setInterval(() => {
        if (selectedItems) {
          removeLast();
        }
      }, INTERVAL_TIME_MILLISECOND);
      return () => clearInterval(interVal);
    }
  }, [selectedItems.length != 0]);


  function filterListData(data:dataProps) {
    const result = selectedItems.find(
      (v) => v.name == data.name && v.type == data.type
    );
    if (result) {
      // ถ้าข้อมูลถูกเลือกแล้วไม่ต้องแสดงฝั่งซ้ายสุด
      return false;
    }
    return true;
  }
  return (
    <div className=" w-[35%]">
      <ul>
        {data
          .filter(filterListData)
          .map((data) => {
            return <CardItem key={data.name} data={data} mode="add" />;
          })}
      </ul>
    </div>
  );
};

export default ItemsList;
