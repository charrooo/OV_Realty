import React, { useState, useEffect } from 'react';


const images = [
    'https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/450098185_122165631998204817_7344111320184103748_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHpNchU4vuR8gC8UluGqalrvaIarypbDru9ohqvKlsOu6gA2QXFGT-I3z4dN2vryB7n5eqx7OFTEZHQ6Qs22Bvw&_nc_ohc=gJPC2d37Qt0Q7kNvgEJybuo&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYAzBiNKrQ9d-OTxc12VSTs5-Ure303o1JqHA9NpKBPwXg&oe=6691E86D',
    
  ];

const Photo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); 

    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden bg-black">
      <div className="flex transition-transform duration-1000 ease-in-out " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((imageUrl, index) => (
          <div key={index} className="w-full h-64 md:h-96 lg:h-128 flex-shrink-0">
            <img src={imageUrl} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photo