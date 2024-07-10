import React from 'react';

const About = () => {

  const imageUrl = 'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/448306001_122157053768204817_386063371479911583_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE17ltCUb-fNc91h4s8G7NO76KVOocv8srvopU6hy_yyoDAD7ORK4ODOMlyRvyAYkfWAhe4HRsR40Qq1Mar2yMr&_nc_ohc=Du_ycJSswRAQ7kNvgHv1gA-&_nc_ht=scontent.fcrk1-4.fna&oh=00_AYA7S7bNRlV81smZM0D6mqxvKG4eCc0JvDKEr3RchHIbHA&oe=66930C60'; 

  return (
    <div className="flex flex-col justify-center items-center p-4 bg-gray-300 h-96">
  <div className="bg-white shadow-md rounded-lg border border-gray-200 p-4 max-w-[1640px] mb-4">
    <h2 className="text-xl font-bold mb-2">About Us</h2>
    <p className="text-gray-700 font-serif">
      AP Creatives Advertising Corp is a leading marketing company dedicated to delivering innovative and impactful advertising solutions. We are part of Alpha Infinity Holdings Corp, a conglomerate that includes various successful ventures such as NEON NIGHTS CORP., PRO GROUP E-BIKE AND SCOOTER, OV REALTY CORP., and AP CREATIVES ADVERTISING CORP. At AP Creatives, we believe in fostering a diverse and inclusive workplace where every team member is valued and respected.
    </p>
  </div>
</div>
  );
};

export default About
