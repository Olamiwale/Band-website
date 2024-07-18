import React from "react";
import BookingCard from "./BookingCard";

export default function Booking() {
  return (
    <div className=" bg-black flex flex-col items-center">

      <div className="text-white p-4 flex justify-center flex-col items-center ">
        <p className="text-3xl uppercase p-5 pt-20">Tour dates</p>
        <p>Remember to book your ticket</p>
      </div>

      <div className="flex justify-center items-center py-10">
        <div className=" bg-gray-300 w-[35rem] md:w-[50rem]">
          <div className="flex justify-between px-20  font-bold p-3        items-center">
            <p>September</p>
            <p className="bg-red-700 p-2 text-white">Sold Out</p>
          </div>

          <div className="bg-black/60 h-[1px]"></div>

          <div className="flex justify-between px-20  font-bold p-5 items-center">
            <p>October</p>
            <p className="bg-red-700 p-2 text-white">Sold Out</p>
          </div>
          <div className="bg-black h-[1px]"></div>
          <div className="flex justify-between px-20  font-bold p-5     items-center">
            <p>November</p>
            <p className="bg-black p-2 rounded-full w-10 h-10 flex justify-center text-white mr-[18px]">
              3
            </p>
          </div>
        </div>
        
      </div>
      <div className="grid md:grid-cols-3 gap-3 mb-3">
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </div>

      <div></div>
    </div>
  );
}
