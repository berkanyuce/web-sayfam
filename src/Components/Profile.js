import React from "react";

const Profile = ({ profileData, bodyClassName }) => {
  const basicInfoHeaders = profileData.profile["basic-info"]["basic-info-headers"];
  const basicInfoValues = [
    profileData.profile["basic-info"]["doğum-tarihi"],
    profileData.profile["basic-info"]["ikamet-sehri"],
    profileData.profile["basic-info"]["egitim-durumu"],
    profileData.profile["basic-info"]["tercih-rol"]
  ];
  const basicInfoData = basicInfoHeaders.slice(1, 5).map((header, index) => ({
    header,
    value: basicInfoValues[index],
  }));
  
  const backgroundColor = bodyClassName === 'dark' ? "dark:bg-dark-blue" : "bg-custom-blue"

  return (
    <div className={`${backgroundColor} text-green-100 flex flex-col items-center justify-center pl-8 pr-8 pt-16 pb-16`}>
      <h2 className="text-3xl lg:text-left text-center lg:w-8/12 mb-4 text-custom-green font-bold">{profileData.titles[1]}</h2>
      <div className="flex profile-content w-8/12 items-center lg:flex-row flex-col">
        <div className="flex flex-col p-4 pl-0">
          <h2 className="col-span-2 text-2xl items-center mb-4 text-white">{basicInfoHeaders[0]}</h2>
          <div>
            {basicInfoData.map((data, index) => (
              <div key={index} className="flex justify-between items-center mb-4 ml-0 mr-0 mt-0">
                <div className="text-custom-green ml-0">{data.header}</div>
                <div className="text-white mr-0">{data.value}</div>
              </div>
            ))}
          </div>
        </div>


        <div className="profile-img flex-1 flex items-center justify-center mx-4 hidden lg:block">
          <img
            src="https://media.licdn.com/dms/image/C4E22AQFcz-wiTjIxHg/feedshare-shrink_800/0/1674122752546?e=2147483647&v=beta&t=OO9C5VuFHVuILsadqtGDkMtALKmEEEx51xzQrJIDyi4"
            alt="Resim Açıklaması"
            className="rounded-lg shadow-2xl bg-cover "
          />
        </div>
        <div className="profile-about-me flex-1 text-left p-4 text-white">
          <h2 className="text-3xl mb-4">{profileData.titles[2]}</h2>
          <span>{profileData.profile["about-me"]}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
