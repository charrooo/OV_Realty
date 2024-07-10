import React from "react";

const Title = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1640px] mx-auto bg-gray-300">
      <img
        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/448592988_459438103564092_3922642147214909742_n.png?stp=dst-png_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGvjpjxqMZNY6NZnv3iL_dmV_xsdIBkK-NX_Gx0gGQr432U0Uk8qa2n-6V5fWAq79tAAzn3YuKzfT9hsyaWgIzo&_nc_ohc=THmXk3Oqfq4Q7kNvgGNbk4m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QHbqZQLx71T5odFlv3KGgt02yHOSiutXyjicOQD7PRAMw&oe=66B33C93"
        alt="Logo"
        className="h-20 w-auto pl-8"
      />
      <h1 className="w-full h-full text-4xl font bold text-blue-950 pt-8 font-serif">
        OV Realty
      </h1>
      <ul className="text-blue-950 flex cursor-pointer font-serif text-xl font-bold">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Title;
