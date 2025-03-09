import { FaTimes } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { GrAnalytics } from "react-icons/gr";
import { GoPerson } from "react-icons/go";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <header className="bg-[#002244] text-white w-[20%] pt-6 px-4 shadow-md">
      <div className="w-full flex justify-between md:justify-center items-center">
        <span className="brand-text-one self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Fire<span className="brand-text-two text-red-600 ">Eyes</span>
        </span>
        <FaTimes className="md:hidden"/>
      </div>
      <ul className="w-full flex flex-col justify-around items-center h-[70%] pt-10">
        <li className="flex items-center"><IoHomeOutline className="mr-2"/>Home</li>
        <li className="flex items-center"><GrAnalytics className="mr-2"/>Analytics</li>
        <li className="flex items-center"><GoPerson className="mr-2"/>Profile</li>
        <li className="flex items-center"><LiaHandsHelpingSolid className="mr-2"/>Help Desk</li>
        <li className="flex items-center"><IoIosLogOut className="mr-2"/>Logout</li>
      </ul>
    </header>
  );
};

export default Sidebar;
