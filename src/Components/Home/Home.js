import React, { useEffect, useState } from "react";
import AllProducts from "../AllProducts/AllProducts";
import Footer from "../Footer/Footer";

const Home = () => {
  const[products,setProduct] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/manage")
    .then(res=>res.json())
    .then(data => setProduct(data));
  },[]);
  return (
    <div>
      <img
        src="https://waltonbd.com/image/catalog/refrigerator-and-freezer/non-frost.jpg"
        alt=""
      />
      <div>
        <h1 className="text-4xl md:text-6xl underline font-bold font-serif mt-5">
          Refrigerator <span className="text-red-700">Mart</span>
        </h1>
        <p className="text-2xl font-mono font-semibold text-blue-500 mt-3 mb-3">
          Choose Your Best Option From US.... Stay Safe Stay Happy
        </p>
        <button className="bg-rose-300 p-2 mb-3">
          <a
            className=" text-2xl text-blue-500"
            href="https://ministerbd.net/product-category/refrigerator-bangladesh/"
          >
            Buy Now
          </a>
        </button>
      </div>
        <div>
          <h2 className="bg-green-300 text-3xl p-3 font-bold">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto justify-items-center">
        
        {
          products.slice(0, 6).map(product => <AllProducts key={product._id} product={product}></AllProducts>)
        }
      </div>

        </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12  rounded-2xl p-5 bg-slate-100">
        <div>
          <img
            className="rounded-md"
            src="https://ministerbd.net/wp-content/uploads/2021/05/22-1024x576.jpg"
            alt=""
          />
        </div>
        <div className=" bg-white shadow-md justify-around p-5 rounded-3xl ">
          <h1 className="md:mt-20 text-3xl font-bold text-red-700">
            WHO WE ARE
          </h1>

          <p className="text-2xl text-blue-500 mt-5">
            Minister Hi-Tech Park Limited is the fastest growing Electronics
            Industry in our country. Mr. M.A. Razzak Khan Raj, founder, MyOne
            Electronics Industries Limited, has established it on 01 June 2002.
            Later on he has also established Minister Hi-Tech Park Limited on 01
            June 2013. More about Minister please visit: Company Profile
          </p>
        </div>
      </div>

      <div className="bg-green-100 pb-10">
        <h1 className="bg-black text-yellow-400 py-3 text-3xl font-bold">
          Our Achievements
        </h1>
        <div className="justify-center mt-5 grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="w-full shadow-xl bg-white rounded-2xl pt-5 pb-5">
            <h1 className="text-center text-4xl font-bold text-blue-400 mb-2">
              ‘বেস্ট ব্র্যান্ড’ রেফ্রিজারেটর বিভাগে ৩য় ব্রান্ড এর স্বীকৃতি পেল
              মিনিস্টার
            </h1>
            <small className="text-blue-700 font-bold mb-5">
              Author: Sajib Hossain{" "}
            </small>
            <img
              className="mx-auto"
              src="https://ministerbd.net/wp-content/uploads/2022/01/best-brand-minister-2021.png"
              alt=""
            />
            <p className="w-3/4 mx-auto mt-5">
              বাংলাদেশ ব্রান্ড ফোরামের এর ‘বেস্ট ব্র্যান্ড’ রেফ্রিজারেটর বিভাগে
              ৩য় ব্রান্ড এর স্বীকৃতি পেল মিনিস্টার। সম্প্রতি রাজধানীতে ‘বেস্ট
              ব্র্যান্ড অ্যাওয়ার্ড ২০২১’ অনুষ্ঠানে এই স্বীকৃতি দেওয়া হয়
              মিনিস্টার গ্রুপকে। দেশের ফ্রিজ বাজারে ক্রেতার আস্থা অর্জনের
              মাধ্যমে টেকসই ব্র্যান্ড ইক্যুইটি তৈরির স্বীকৃতিস্বরূপ এই পুরস্কার
              পায় দেশের এই ইলেকট্রনিক্স জায়ান্ট।
              মিনিস্টার গ্রুপের কে এম জি কিবরিয়া (এজিএম, ব্র্যান্ড এন্ড কমিউনিকেশন) বলেন, “বেস্ট ব্র্যান্ডের এই স্বীকৃতিতে মিনিস্টার গ্রুপ এর পক্ষ থেকে, আমাদের গ্রাহক, বিক্রেতা, সরবরাহকারী ও শুভানুধ্যায়ীদের জানাই আন্তরিক কৃতজ্ঞতা ও অভিনন্দন।

              আগামীতেও মিনিস্টার এর রেফ্রিজারেটরসহ সকল পণ্য এর গুণগত মান এবং ভোক্তাদের আস্থা ধরে রাখতে মিনিস্টার টিম কাজ করে যাবে বলে জানান তিনি।
            </p>
          </div>
          <div>
            <div className="w-full shadow-xl bg-white rounded-2xl pb-5">
              <h1 className="text-center text-4xl font-bold text-blue-400 mb-2 pt-5">
              বিপিএলে ঢাকা দলে যুক্ত হলো মিনিস্টার গ্রুপ
              </h1>
              <small className="text-blue-700 font-bold mb-5">
                Author: Sajib Hossain{" "}
              </small>
              <img
                className="mx-auto"
                src="https://cdn.ittefaq.com/contents/cache/images/640x0x1/uploads/media/2022/01/20/307674316802aa0a747d24109136ff31-61e925c21f619.jpg"
                alt=""
              />
              <p className="w-3/4 mx-auto mt-5">
              দেশের অন্যতম করপোরেট প্রতিষ্ঠান মিনিস্টার গ্রুপ ঢাকার এবারের ফ্র্যাঞ্চ্যাইজি। বিষয়টি দৈনিক মানবজমিনকে নিশ্চিত করেছেন বিসিবি’র পরিচালক ও বিপিএল গভর্নিং কাউন্সিলের সদস্য সচিব ইসমাঈল হায়দার মল্লিক। তিনি বলেন, ‘মিনিস্টার গ্রুপ ঢাকা Minister  Dhaka দলের মালিকানায় থাকবে। এটা আমরা সিদ্ধান্ত নিয়েছি।
              এর আগে ২০২০ বঙ্গবন্ধু টি-টোয়েন্টি কাপে মিনিস্টার গ্রুপ প্রতিনিধিত্ব করেছিল রাজশাহীর। এবার বিপিএলে রাজশাহী নেই। ঢাকা দলের নামকরণ করা হয়েছে ‘মিনিস্টার ঢাকা’। বিষয়টি নিশ্চিত করেছেন প্রতিষ্ঠানটির মিডিয়া ও মার্কেটিং প্রধান সোহেল কিবরিয়া। তিনি বলেন, “হ্যাঁ, আমরাদের ঢাকার ফ্র্যাঞ্চাইজি দেয়া হচ্ছে এটাই নিশ্চিত। এরই মধ্যে আমরা দলটির নাম রেখেছি মিনিস্টার ঢাকা।”
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
