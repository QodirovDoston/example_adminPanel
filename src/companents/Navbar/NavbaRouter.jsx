import React from "react";
import { Link } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { CiBookmarkPlus } from "react-icons/ci";
import { AiOutlineHdd } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const NavbaRouter = () => {
  return (
    <div className="bg-slate-300 h-[120px]">
      <div className="container sm:h-20 h-20 flex"  >
        <div className="sm:mt-[9px] mt-[4px] ">
          <div className="flex">
            <div className="flex w-[4px] ">
              <div className=" flex sm:ml-[-40px] sm:gap-[400px]   ">
                <Link href style={{ color: "black", textDecoration: "none", marginTop: "8px" }} to="https://github.com/QodirovDoston">
                  <li className=' list-none sm:text-[50px] text-[50px] sm:mt-2 mt-2  ml-1'>
                    <AiFillGithub />
                    <h5 className="sm:ml-[-13px] ml-[1px] sm:text-[25px] text-[15px]">Github</h5>
                    </li>
                </Link>
                <Link style={{ color: "black", textDecoration: "none", marginTop: "8px", paddingLeft: "10px" }} to="/home">
                  <li className='list-none sm:text-[50px] text-[50px] sm:mt-2 mt-2 '>
                    <FiUsers />
                    <h5 className="sm:ml-[-15px]  ml-[1px] sm:text-[25px] text-[15px]">About</h5>
                    </li>
                </Link>
                <Link style={{ color: "black", textDecoration: "none", marginTop: "8px", paddingLeft: "10px" }} to="/create">
                  <li className='list-none sm:text-[50px] text-[50px] sm:mt-2 mt-2 ' >
                    <CiBookmarkPlus />
                    <h5 className="sm:ml-[-15px]  ml-[1px] sm:text-[25px] text-[15px]">Create</h5>
                    </li>
                </Link>
                <Link style={{ color: "black", textDecoration: "none", marginTop: "8px", paddingLeft: "10px" }} to="/table">
                  <li className='list-none sm:text-[50px] text-[50px] sm:mt-2 mt-2 '>
                    <AiOutlineHdd />
                <h5 className="sm:ml-[-25px]  ml-[1px] sm:text-[25px] text-[15px]">Databasa</h5>
                  </li>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavbaRouter