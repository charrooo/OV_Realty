import React, { useEffect, useState } from "react";

const Data = () => {
  const phrases = ["Buy", "Sale", "Lease"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredExamples, setFilteredExamples] = useState([]);

  const exampleData = [
    {
      id: 1,
      image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/444487332_122150983994204817_2919249753849583586_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGd9Yq0-g5Ur8-TRmkvn2Ax91yG5-L4NBv3XIbn4vg0GyaYH2Zk7pBzBHR3oLVriF7auhMEvGcdQSkfOtcJEqKm&_nc_ohc=Y16iLMm8OkMQ7kNvgHxgdgY&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYDQnE6LNNNDYsjAjHafue1ZvIzUCJJQ3hQQeDosYb4HEQ&oe=66943CCF",
      description: "Century City, Makati"
    },
    {
      id: 2,
      image: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/445414020_122150984228204817_852435553386489340_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHj1fH0MpS2Q4p38OHOHUkxWODTAYk3_rFY4NMBiTf-sapnPbpH0Q81n0W5_RnRPovWsFL_2cZbeLCjB5xEYUzV&_nc_ohc=GQIkyxXjZygQ7kNvgFE8pUv&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYAuPKOrOLYVz3vEt-yrcXtg2neuiLuakTdV9KUeIUWeIg&oe=6694484D",
      description: "Cruzada St, Makati City"
    },
    {
      id: 3,
      image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/444489994_122150984108204817_8679012256543624685_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFHGRNKiMTxWtx_OXSry34-fP0Rc0MfNJ18_RFzQx80nZrliQQJXcAiG00edd1eczQIb3VZ_vO32FjZSiyxFo3a&_nc_ohc=jwXHQE26DOoQ7kNvgGts9wn&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYA3hcFWFdSFDtxmfxcc_EjbSpFJN1yYZDSrXIQxwAvCJg&oe=6694524E",
      description: "Bonifacio Global City, Taguig"
    },
    {
      id: 4,
      image: "https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/442507873_122150984348204817_5117975704511963972_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEey4cLZo3U4ADMvmiQyXhkunF_WQug5Iu6cX9ZC6Dki4uh9sfw7-cKiWr2c2FRrvqDdC4DnOZCjLyrmU6i2DnH&_nc_ohc=hSHWlx-PrVYQ7kNvgFr1-KH&_nc_ht=scontent.fmnl4-1.fna&oh=00_AYDV9shpGGWS0cvVqFg_ywv4pFQ__un2H9s94wuq4v5Nsw&oe=66942C80",
      description: "Mckinley Pkwy, BGC, Taguig City"
    },
    {
      id: 5,
      image: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/444479938_122150984288204817_7157910692788684340_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGGwR_w57V7AxvA3t0QVMT505rgWU6jmt_TmuBZTqOa38PVQARoOvdd-qBLF8wEeTF4i63cyrF3tpMuY-WsGSdL&_nc_ohc=ONI0f7gLWN0Q7kNvgGUta_8&_nc_ht=scontent.fmnl4-2.fna&oh=00_AYAnpnoOaZOEELcBK-PK4KJOTFiBaTPwkC0I4pXDmSYd2w&oe=66943ABE",
      description: "Two Roxas Triangle, Makati City"
    },
    {
      id: 6,
      image: "https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/444490604_122150984180204817_8368034068374169784_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFAAmTIw01qxREFf5wu01Wd_a1eex_AHEz9rV57H8AcTIS5gfEvfVToBwv2P1FopqaLEouiwwHWYn2mMMHdU9LL&_nc_ohc=PElvZL_z0vwQ7kNvgHQ3b61&_nc_ht=scontent.fmnl4-3.fna&oh=00_AYDdn92fKwNSiB_GuLulBUg7ZDeYc_Bfe9VL0OixeabMMw&oe=66944AC8",
      description: "Rockwell, Makati City"
    },
    {
      id: 7,
      image: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/444483252_122150984414204817_2212795710513555266_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFocKg18FTHeOuB5dAkPadjYaklqu8pHDFhqSWq7ykcMfWXGLZ_avi4AjazjZk5ZHYbieyXFdP0Nmy1u3-hSp-O&_nc_ohc=50GUKv0-9mwQ7kNvgHa9oCo&_nc_ht=scontent.fmnl4-6.fna&oh=00_AYBXCkA_gkP9xyXE1ulSsOusZGU7i8bFxcR_18YaWjY2Qg&oe=6694348E",
      description: "412B Zurich St. BF Homes, Las Pinas City"
    },
    {
      id: 8,
      image: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/444482985_122150984546204817_6774135460722508589_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEB4P3Xe6i5WT5VT8I9ldEv77NWxrZWMCrvs1bGtlYwKosV2C27ZMiGN1cydUJy4NgttKDlfAyLeJ7jtYP-sCdV&_nc_ohc=GdnWAjdML6oQ7kNvgF1sLHF&_nc_ht=scontent.fmnl4-6.fna&oh=00_AYARGQEqC4ZzTwcrCzn_KHEEMsB1PWcchGEWpLd7tQ223A&oe=66944ABF",
      description: "32nd St., BGC, Taguig City"
    },
    {
      id: 9,
      image: "https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/444502579_122150984474204817_5156030038070722348_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFaHjbkeLiFeb39p3apibVQoPTsR0BUYYWg9OxHQFRhhX3PL_ZFFvvMGLqjn1B4amen2KE0wKHuNt-MpfsntSNc&_nc_ohc=YocbB6dzaBoQ7kNvgH4SHWv&_nc_ht=scontent.fmnl4-4.fna&oh=00_AYACHjrgud6v-hBAD2q72B4qSqtt-Xi2V6JM6QG4opc07A&oe=66943F11",
      description: "Acacia Estates, Taguig City, Near BGC"
    }
  ];

  useEffect(() => {
    const typeTimer = setTimeout(() => {
      const text = phrases[currentPhraseIndex];
      setCurrentText(text.slice(0, currentText.length + 1));
    }, 150);

    if (currentText === phrases[currentPhraseIndex]) {
      setTimeout(() => {
        setCurrentText("");
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 1500);
    }

    return () => clearTimeout(typeTimer);
  }, [currentText, currentPhraseIndex, phrases]);

  const handleGetStartedClick = () => {
    setShowDialog(true);
    setFilteredExamples(exampleData);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setSearchTerm(""); 
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = exampleData.filter((example) =>
      example.description.toLowerCase().includes(searchTerm)
    );
    setFilteredExamples(filtered);
  };

  return (
    <div className="max-w-[1640px] mx-auto">
      <div className="max-h-[500px] relative">
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="lg:text-3xl font-bold text-blue-950">OV Realty Corp.</h1>
          <h1 className="lg:text-3xl font-bold text-blue-950">
            <span className="text-red-600">{currentText}</span> with Experts at OV.
          </h1>
          <h1 className="lg:text-3xl font-bold text-blue-950">Your Optimal Value Partner.</h1>
          <button
            className="text-md mb-1 mt-6 w-40 cursor-pointer content-center rounded-lg bg-blue-500 py-2.5 font-semibold text-white hover:bg-blue-600"
            onClick={handleGetStartedClick} 
          >
            Get Started
          </button>
        </div>
        <img
          className="w-full h-auto max-h-[500px] object-cover"
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/449090606_363626296752383_69087657724104859_n.png?stp=dst-png_p206x206&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeH7vXIqOs8Ms38YhIiT_m0fe5U7-KVwwy17lTv4pXDDLSV6Eu20ath0vyveP_exeKfPUPr-IZjp6QpRHjI6jJ4Q&_nc_ohc=ndz6MyRm-5gQ7kNvgFoE3iN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QGfBE34ZtcgILwMDwxzQZoynLzqN9ECXNEMGLiukvc_4w&oe=66B32A86"
          alt="company"
        />
      </div>

      {showDialog && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-[90%] max-h-[80%] overflow-y-auto">
            <span
              className="absolute top-0 right-0 p-4 cursor-pointer"
              onClick={handleCloseDialog}
            >
              &times;
            </span>
            <input
              type="text"
              placeholder="Search Location"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
              value={searchTerm}
              onChange={handleSearchChange}
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {filteredExamples.map((example) => (
                <div key={example.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <img
                    src={example.image}
                    alt={example.description}
                    className="w-full h-auto rounded-lg mb-2"
                  />
                  <p className="text-sm text-gray-700">{example.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Data;
