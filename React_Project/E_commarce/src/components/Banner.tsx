import { FC } from "react";
import { Link } from "react-router-dom";

const Banner: FC = () => (
  <div className="container mt-8 mx-auto px-4 md:flex font-lora">
    <img src="/banner.jpg" alt="banner" className="md:w-1/2" />
    <div className="bg-[#e3edf6] dark:bg-slate-600 dark:text-white md:w-1/2 flex flex-col items-center text-center justify-center p-4">
    
      <Link
        to="/product/4"
        className="inline-block bg-white dark:bg-slate-800 rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
        data-test="banner-btn"
      >
  
      </Link>
    </div>
  </div>
);

export default Banner;
