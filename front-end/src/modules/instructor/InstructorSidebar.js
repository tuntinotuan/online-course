import React from "react";
import LogoUdemyDark from "../../components/logo/LogoUdemyDark";
import { Link, NavLink } from "react-router-dom";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import useHover from "../../hooks/useHover";

const linkItems = [
  {
    title: "Courses",
    path: "/instructor/courses",
    icon: <OndemandVideoIcon></OndemandVideoIcon>,
  },
  {
    title: "Communication",
    path: "/instructor/communication",
    icon: <ChatOutlinedIcon></ChatOutlinedIcon>,
  },
  {
    title: "Performance",
    path: "/instructor/performance",
    icon: <BarChartIcon></BarChartIcon>,
  },
  {
    title: "Tools",
    path: "/instructor/tools",
    icon: <BuildOutlinedIcon></BuildOutlinedIcon>,
  },
  {
    title: "Resources",
    path: "/instructor/help",
    icon: <HelpOutlineIcon></HelpOutlineIcon>,
  },
];

const InstructorSidebar = () => {
  const { hovered, nodeRef, setHovered } = useHover();
  const commonCss = `instructor-sidebar flex items-center gap-6 w-full text-base text-white font-bold hover:bg-grayHover3E py-4 px-3`;
  return (
    <div className={`absolute h-full bg-primaryBlack z-[999]`} ref={nodeRef}>
      <div
        className={`sticky top-0 overflow-hidden transition-all duration-500 ${
          hovered ? "w-[290px]" : "w-14"
        }`}
      >
        <Link to="/" className="flex hover:bg-grayHover3E">
          <LogoUdemyDark
            className={`flex-shrink-0 ml-5 transition-all duration-500 ${
              hovered ? "" : "opacity-0"
            }`}
          ></LogoUdemyDark>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 213 80"
            fill="none"
            className="absolute -top-1 flex-shrink-0 w-32 p-5"
          >
            <path
              d="M33.059 19.088L16.528 9.544 0 19.088V9.544L16.53 0l16.531 9.544v9.544h-.002z"
              fill="#A435F0"
            />
            <path
              d="M0 27.101h8.659V48.14c0 5.437 4.058 8.085 7.872 8.085 3.842 0 7.872-2.72 7.872-8.157V27.1h8.658V48.64c0 5.008-1.573 8.872-4.722 11.52-3.15 2.648-7.086 3.936-11.88 3.936-4.795 0-8.731-1.288-11.808-3.936C1.573 57.512 0 53.792 0 48.853V27.101zM107.92 53.248c-2.621"
              fill="#fff"
            />
          </svg>
        </Link>
        {linkItems.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? `${commonCss} !border-purpleTextA4` : commonCss
            }
            onClick={() => setHovered(false)}
          >
            {item.icon}
            <div
              className={`transition-all duration-500 ${
                hovered ? "" : "opacity-0"
              }`}
            >
              {item.title}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default InstructorSidebar;
