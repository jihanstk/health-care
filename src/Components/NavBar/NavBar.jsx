"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import useAuth from "../hooks/useAuth";
// import { AuthContext } from "@/app/context/AuthProvider";

const NavLinks = [
<<<<<<< HEAD
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

const Navbar = () => {
  const { user, logout } = useAuth();
  console.log(user);
  const [open, setOpen] = useState(false);
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div
      className={` px-10 md:py-5 py-2 fixed z-10 top-0 left-0 w-full bg-black/20 text-white duration-400`}
      id="nav-bg"
    >
      <nav className="flex justify-between items-center">
        <div className="">
          <h1 className="text-4xl font-bold flex items-center">
            <img
              src="https://i.ibb.co/NpptRzh/download-removebg-preview.png"
              alt=""
              className="h-10 w-10"
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
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <button onClick={handleLogOut}>
                  <li className="text-black">
                    <a>Logout</a>
                  </li>
                </button>
              </ul>
            </div>
          </>
        ) : (
          <Link href="/login" className="btn btn-success">
            <button>Login</button>
          </Link>
        )}
      </nav>
    </div>
  );
=======
	{
		label: 'Home',
		path: '/',
		// icon: <GiFamilyHouse fontSize={20} />,
	},
	{
		label: 'About',
		path: '/about',
		// icon: <SlInfo fontSize={20} />,
	},
	{
		label: 'Contact',
		path: '/Contact',
		// icon: <SlInfo fontSize={20} />,
	},
	{
		label: 'AllDoctors',
		path: '/allDoctors',
		// icon: <FaUserDoctor fontSize={20} ></FaUserDoctor>
	},
	{
		label: 'Dashboard',
		path: '/dashboard',
		// icon: <RxDashboard fontSize={20} />,
	},
];

const Navbar = () => {
	const { user, logout } = useAuth();
	console.log(user);
	const [open, setOpen] = useState(false);
	const handleLogOut = () => {
		logout()
			.then(() => {})
			.catch((error) => console.log(error));
	};
	return (
		<div
			className={` px-10 md:py-5 py-2 fixed z-10 top-0 left-0 w-full bg-black/20 text-white duration-400`}
			id="nav-bg"
		>
			<nav className="flex justify-between items-center">
				<div className="">
					<h1 className="text-4xl font-bold">
						<Link href="/">HealthCare</Link>
					</h1>
				</div>
				<ul
					className={` md:static absolute md:bg-transparent bg-[#0b9795] md:p-0 p-10 md:w-auto text-center w-full   md:flex nav-box duration-300 ${
						open ? 'left-0 top-0 ' : 'left-[-500rem] top-0'
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
									<img src={user?.photoURL} />
								</div>
							</label>
							<ul
								tabIndex={0}
								className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
							>
								<button onClick={handleLogOut}>
									<li className="text-black">
										<a>Logout</a>
									</li>
								</button>
							</ul>
						</div>
					</>
				) : (
					<button className="btn btn-success">
						<Link href="/login">Login</Link>
					</button>
				)
				}
			</nav>
		</div>
	);
>>>>>>> Sraboni
};

export default Navbar;
