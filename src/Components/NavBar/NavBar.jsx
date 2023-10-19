"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
// import { AuthContext } from "@/app/context/AuthProvider";

const NavLinks = [
  {
    label: "Home",
    path: "/",
    // icon: <GiFamilyHouse fontSize={20} />,
  },
  {
    label: "About",
    path: "/about",
    // icon: <SlInfo fontSize={20} />,
  },
  {
    label: "Contact",
    path: "/Contact",
    // icon: <SlInfo fontSize={20} />,
  },
  {
    label: "Doctors",
    path: "/doctors",
    // icon: <FaUserDoctor fontSize={20} ></FaUserDoctor>
  },
  {
    label: "Dashboard",
    path: "/dashboard",
    // icon: <RxDashboard fontSize={20} />,
  },
];
const user = undefined;
const Navbar = () => {
  // const { user,googleSignIn } = useContext(AuthContext);
  // console.log(nishat);
  // const handleLogOut = () => {
  //     logOut()
  //         .then(() => { })
  //         .catch(error => console.log(error));
  // }
  // const handleGoogleSignIn =async() => {
  //    try{
  //     await googleSignIn();
  //    }
  //    catch(error){
  //     console.log(error);
  //    }
  // }

  //   useEffect(() => {
  //     const navbg = document.querySelector("#nav-bg");
  //     const observer = new IntersectionObserver((entries) => {
  //       console.log(entries);
  //     });
  //     observer.observe(navbg);
  //   });

  const [open, setOpen] = useState(false);
  return (
    <div
      className={` px-10 md:py-5 py-2 fixed z-10 top-0 left-0 w-full bg-black/20 text-white duration-400`}
      id="nav-bg"
    >
      <nav className="flex justify-between items-center">
        <div className="">
          <h1 className="text-4xl font-bold flex items-center">
            <img
              className="w-14 h-14"
              src="https://i.ibb.co/NpptRzh/download-removebg-preview.png"
              alt=""
            />
            <Link href="/">HealthCare</Link>
          </h1>
        </div>
        <ul
          className={` md:static absolute md:bg-transparent bg-[#0b9795] md:p-0 p-10 md:w-auto text-center w-full   md:flex nav-box duration-300 ${
            open ? "left-0 top-0 " : "left-[-500rem] top-0"
          } `}
        >
          {NavLinks.map((item, i) => {
            return (
              <li
                key={i}
                className="mr-4 md:hover:text-[#0b9795] hover:text-black navBar-list md:mt-0 mt-10"
              >
                <Link href={`${item.path}`} className="text-xl ">
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="font-bold z-20 duration-200 menu-bars p-6 md:hidden inline-block">
          {open ? (
            <AiOutlineClose
              onClick={() => setOpen(!open)}
              className="font-bold text-3xl"
            ></AiOutlineClose>
          ) : (
            <AiOutlineMenuUnfold
              onClick={() => setOpen(!open)}
              className="font-bold text-3xl"
            ></AiOutlineMenuUnfold>
          )}
        </div>
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li className="text-black">
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link href="/login">
            <button className="btn btn-success">Login</button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
