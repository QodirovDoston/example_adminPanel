import React from "react";
import { Link } from "react-router-dom";
import { IoListSharp } from "react-icons/io5";
import { CiBookmarkPlus } from "react-icons/ci";
import { AiOutlineHdd } from "react-icons/ai";
// import { AiFillGithub } from "react-icons/ai";
import '../Navbar/Nav.css'
// import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const NavbaRouter = () => {
  // const { t } = useTranslation()

  const handlClick = (lang) => {
    i18next.changeLanguage(lang)
  }
  return (
    <div className="bg-slate-300 h-[120px]">
      <div className="container sm:h-20 h-20 flex"  >
        <div className="sm:mt-[9px] mt-[4px] ">
          <div className="flex">
            <div className="flex w-[4px] ">
              <div className=" flex sm:ml-[-40px]  sm:gap-[400px] ml-[30px]      ">
                <Link href style={{ color: "black", textDecoration: "none", marginTop: "8px" }} to="https://github.com/QodirovDoston">
                  <li className=' list-none sm:text-[50px] text-[30px] sm:mt-2 mt-2  ml-1'>
                  <i class="fa-brands fa-amazon fa-2xl" ></i>
                  </li>
                </Link>
                <div className=" flex ">
                  <div className="dropdown">
                    <button className="dropbtn ">
                      <Link style={{ color: "black", textDecoration: "none", marginTop: "8px", paddingLeft: "10px" }} to="/home">
                        <li className='list-none sm:text-[50px] text-[30px] sm:mt-[-12px] mt-[-12px] '>
                          <IoListSharp />
                          <h5 className="sm:ml-[-15px]  ml-[1px] sm:text-[25px] text-[15px]">Menu</h5>
                        </li>
                      </Link>
                    </button>
                    <div className="dropdown-content">
                      <a href="/home" > About</a>
                      <p className='m-2' onClick={() => handlClick("rus")}>Russian</p>
                      <p className='m-2' onClick={() => handlClick("uz")}>Uzbek</p>
                      <p className='m-2' onClick={() => handlClick("eng")}> English</p>
                    </div>
                  </div>
                </div>
                <Link style={{ color: "black", textDecoration: "none", marginTop: "8px", paddingLeft: "10px" }} to="/create">
                  <li className='list-none sm:text-[50px] text-[30px] sm:mt-2 mt-2 ' >
                    <CiBookmarkPlus />
                    <h5 className="sm:ml-[-15px]  ml-[1px] sm:text-[25px] text-[15px]">Create</h5>
                  </li>
                </Link>
                <Link style={{ color: "black", textDecoration: "none", marginTop: "8px", paddingLeft: "10px" }} to="/table">
                  <li className='list-none sm:text-[50px] text-[30px] sm:mt-2 mt-2 '>
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