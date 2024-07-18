import React from "react";

export default function BookingCard() {
  return (
    
      <div className="bg-white w-[250px] flex flex-col">
        <img
          src="https://th.bing.com/th/id/OIP.akzNiDdSETKdLZ39FzM5uQHaEz?rs=1&pid=ImgDetMain"
          alt="location"
          className=" w-[250px]"/>

        <div className="text-xl p-4">
          <p className="py-4 font-semibold">Fri 27 Nov 2016</p>
          <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
           <button className="bg-black hover:bg-gray-500 p-3 mt-8 text-white uppercase">Buy Tickets</button>
        </div>

        

       
      </div>
    
  );
}
