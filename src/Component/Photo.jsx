import React, { useState, useEffect } from 'react';


const images = [
    'https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/450098185_122165631998204817_7344111320184103748_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHpNchU4vuR8gC8UluGqalrvaIarypbDru9ohqvKlsOu6gA2QXFGT-I3z4dN2vryB7n5eqx7OFTEZHQ6Qs22Bvw&_nc_ohc=gJPC2d37Qt0Q7kNvgEJybuo&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYAzBiNKrQ9d-OTxc12VSTs5-Ure303o1JqHA9NpKBPwXg&oe=6691E86D',
    'https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/449853488_122165632010204817_5931973759652516396_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG4KOUM0CDNJsSrAJ2su6UBs2KCefkHXS2zYoJ5-QddLZDb-51dpeN79iRUsL49aXVGQU11OjTIBP-UcKdvacSc&_nc_ohc=U-CYDeiUpf8Q7kNvgEPJl0K&_nc_ht=scontent.fmnl4-2.fna&oh=00_AYCGAqqFIRt-iiK2pDMMMJZDVhcQ5leWq3jNgG09qcBGPg&oe=6691EDA4',
    'https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/450098141_122165632022204817_4236175068655186005_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF_DlQatWzvf-82skR-1Qe9dXLuCfeKj5B1cu4J94qPkAxynCI7ZKgBykwjxghBfQ_0whyOCHhf1HXdeQG7upGR&_nc_ohc=IFEARUkRyjMQ7kNvgGyWb4Z&_nc_ht=scontent.fmnl4-2.fna&oh=00_AYAPx_j7iQfNjEhli0ctqyOF5LzOy5myJ_2Rhj7piY3Gaw&oe=66920881',
    'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/449835654_122165632046204817_7360227852283522841_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGvPU4XTjFIY2pEt3QpDsz8Xor3Bof3OPxeivcGh_c4_PVhC3j_GN8TYEahBCxQWi6LUVvuG5sQaem46OStxSf4&_nc_ohc=LLrANUi3uN8Q7kNvgHLDiDh&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYA4sx7zeXstmfP1V9xPvyaa6dmkx1TJA0tQjJoUZHZHgQ&oe=6691E98D',
    'https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/449102019_122161736276204817_8009042678724824853_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFsToh2lYksrSh14Ls4oumYIT0vYHrgH9IhPS9geuAf0lHSR4mrdUv7DCUd1_1DupLfkOqRZUa9b7mPRpyIa-E_&_nc_ohc=mwTgKI9ryZkQ7kNvgEcwu62&_nc_ht=scontent.fmnl4-7.fna&oh=00_AYDE5NWFK9pObxXdhf9d_EqpPcfJbtCnTd2kgNBI_63YuA&oe=66921883',
    'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/448575522_17863431030155961_1995286472990032731_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEPRS8ufR_IrnR2j4hcMIWVBMwARzs96lcEzABHOz3qVxdnTLMhXxcnJqcGfn8WtyAfnbOVQ-4JUTA9c-OOmDeF&_nc_ohc=fdu2xQo_0WgQ7kNvgFdz8_i&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYDSCvus65cL0SiMulwqBvjJCWH2wpg6-56AoAbkgCU0yA&oe=6691EC32',
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