import React from "react";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div> 
      <img src="https://waltonbd.com/image/catalog/refrigerator-and-freezer/non-frost.jpg" alt="" />
      <div>
      <h1 className="text-4xl md:text-6xl underline font-bold font-serif mt-5">Refrigerator <span className="text-red-700">Mart</span></h1>
      <p className="text-2xl font-mono font-semibold text-blue-500 mt-3 mb-3">Choose Your Best Option From US.... Stay Safe Stay Happy</p>
     <button className="bg-rose-300 p-2 mb-3">
      <a className=" text-2xl text-blue-500" href="https://ministerbd.net/product-category/refrigerator-bangladesh/">Buy Now</a></button>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12  rounded-2xl p-5 bg-slate-100">
      <div>
        <img className="rounded-md" src="https://ministerbd.net/wp-content/uploads/2021/05/22-1024x576.jpg" alt="" />
      </div>
      <div className=" bg-white shadow-md justify-around p-5 rounded-3xl ">

        <h1 className="md:mt-24 text-3xl font-bold text-red-700">WHO WE ARE</h1>
      
        <p className="text-2xl text-blue-500 mt-5">Minister Hi-Tech Park Limited is the fastest growing Electronics Industry in our country. Mr. M.A. Razzak Khan Raj, founder, MyOne Electronics Industries Limited, has established it on 01 June 2002. Later on he has also established Minister Hi-Tech Park Limited on 01 June 2013. More about Minister please visit: Company Profile</p>
    
        
      </div>
    </div>
      
      <div>
        <div className="justify-center ">
          <h1 className="text-center text-4xl font-bold text-blue-400 mb-2">‘বেস্ট ব্র্যান্ড’ রেফ্রিজারেটর বিভাগে ৩য় ব্রান্ড এর স্বীকৃতি পেল মিনিস্টার</h1>
          <small className="text-blue-700 font-bold mb-5">Author: Sajib Hossain </small>
          <img  className="mx-auto" src="https://ministerbd.net/wp-content/uploads/2022/01/best-brand-minister-2021.png" alt="" />
          <p>বাংলাদেশ ব্রান্ড ফোরামের এর ‘বেস্ট ব্র্যান্ড’ রেফ্রিজারেটর বিভাগে ৩য় ব্রান্ড এর স্বীকৃতি পেল মিনিস্টার। সম্প্রতি রাজধানীতে ‘বেস্ট ব্র্যান্ড অ্যাওয়ার্ড ২০২১’ অনুষ্ঠানে এই স্বীকৃতি দেওয়া হয় মিনিস্টার গ্রুপকে। দেশের ফ্রিজ বাজারে ক্রেতার আস্থা অর্জনের মাধ্যমে টেকসই ব্র্যান্ড ইক্যুইটি তৈরির স্বীকৃতিস্বরূপ এই পুরস্কার পায় দেশের এই ইলেকট্রনিক্স জায়ান্ট।</p>
          const info = ''
          info.slice(0, 500)
        </div>
      </div>
    </div>
  );
};

export default Home;
