import React from 'react'

const Footer = () => {

    const imageUrl = 'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/448306001_122157053768204817_386063371479911583_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE17ltCUb-fNc91h4s8G7NO76KVOocv8srvopU6hy_yyoDAD7ORK4ODOMlyRvyAYkfWAhe4HRsR40Qq1Mar2yMr&_nc_ohc=Du_ycJSswRAQ7kNvgHv1gA-&_nc_ht=scontent.fcrk1-4.fna&oh=00_AYA7S7bNRlV81smZM0D6mqxvKG4eCc0JvDKEr3RchHIbHA&oe=66930C60'; 

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="flex-none p-4">
        <img src={imageUrl} alt="Placeholder" className="rounded-lg w-72 h-72 object-cover" />
      </div>

      <div className="flex-none p-4">
        <div className="bg-white shadow-md rounded-lg border border-gray-200 p-4 max-w-xs">
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Address</h2>
            <p className="text-gray-700 font-serif">Century Diamond Tower, Kalayaan Ave., cor. Salamanca St., Brgy. Poblacion, Makati, Philippines, 1210</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Mobile</h2>
            <p className="text-gray-700 font-serif">0956 216 1407</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Email</h2>
            <p className="text-gray-700 font-serif">info@ovrealty.ph</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer