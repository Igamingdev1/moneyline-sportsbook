import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { MenuIcon, CloseIcon } from "../../components/Icons";
import { NavLink, useNavigate } from "react-router-dom";

const NavbarComponent: React.FC = () => {
  const navigate = useNavigate();
  const [showResponsiveBar, setShowResponsiveBar] = useState<boolean>(false);
  const headItems = [
    {
      href: "/nfl",
      title: "NFL",
      iconURL: "NFL.png",
    },
    {
      href: "/nba",
      title: "NBA",
      iconURL: "NBA.png",
    },
    {
      href: "/nhl",
      title: "NHL",
      iconURL: "NHL.png",
    },
    {
      href: "/ncaafb",
      title: "NCAAFB",
      iconURL: "NCAAFB.png",
    },
    {
      href: "/ncaam",
      title: "NCAAM",
      iconURL: "NCAAM.png",
    },
    {
      href: "/wnba",
      title: "WNBA",
      iconURL: "WNBA.png",
    },
    {
      href: "/news",
      title: "NEWS",
      iconURL: "NEWS.svg",
    },
  ];
  const menuItem = [
    {
      href: "/home",
      title: "HOME",
    },
    {
      href: "/signup",
      title: "SIGN UP",
    },
    {
      href: "/login",
      title: "LOGIN",
    },
    {
      href: "/odds",
      title: "ODDS",
    },
    {
      href: "/news",
      title: "NEWS",
    },
  ];

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    script.async = true;
    script.innerHTML += `
          {
          "symbols": [
            {
              "proName": "FOREXCOM:SPXUSD",
              "title": "S&P 500"
            },
            {
              "description": "",
              "proName": "NASDAQ:IBET"
            },
            {
              "description": "",
              "proName": "NASDAQ:GAMB"
            },
            {
              "description": "Draft Kings",
              "proName": "NASDAQ:DKNG"
            },
            {
              "description": "Flutter Entertainment Group",
              "proName": "LSE:FLTR"
            },
            {
              "description": "",
              "proName": "AMEX:BETZ"
            },
            {
              "description": "Genius Sports Limited",
              "proName": "NYSE:GENI"
            },
            {
              "description": "Sports Radar",
              "proName": "NASDAQ:SRAD"
            },
            {
              "description": "Roundhill Sports Betting & iGaming",
              "proName": "AMEX:BETZ"
            },
            {
              "description": "fuboTV",
              "proName": "NYSE:FUBO"
            },
            {
              "description": "Penn National Gaming",
              "proName": "NASDAQ:PENN"
            },
            {
              "description": "Caesars Entertainment",
              "proName": "NASDAQ:CZR"
            },
            {
              "description": "MGM Resorts",
              "proName": "NYSE:MGM"
            }
          ],
          "colorTheme": "dark",
          "isTransparent": false,
          "showSymbolLogo": true,
          "locale": "en"
        }`;
    let myContainer = document.getElementsByClassName(
      "tradingview-widget-container"
    )[0];
    const node = myContainer.firstElementChild;
    node?.appendChild(script);

    return () => {
      // clean up the script when the component in unmounted
      node?.removeChild(script);
    };
  }, []);

  const onLogo = () => {
    navigate("/");
  };

  const goNewLink = (url: string) => {
    window.open(url);
  };

  return (
    <div className="mx-auto w-full top-0 relative">
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright"></div>
      </div>
      <div className="bg-white mx-auto flex items-center justify-between relative p-2 overflow-hidden">
        <img
          onClick={() => onLogo()}
          src="/moneyline_sportsbook_logo.png"
          className="sm:h-12 h-10 cursor-pointer sm:ml-4 ml-8"
          alt=""
        />
        <img
          onClick={() =>
            goNewLink(
              "https://promo.nj.betmgm.com/en/promo/geolocator?orh=sports.betmgm.com"
            )
          }
          className="lg:block hidden mr-20 cursor-pointer"
          src="/BANNER.png"
          alt="Not Found"
        />
        <div className="absolute left-0 block sm:hidden">
          <button
            className="text-black bg-white font-bold p-2 rounded"
            onClick={() => setShowResponsiveBar(!showResponsiveBar)}
          >
            <MenuIcon width={24} height={24}></MenuIcon>
          </button>
        </div>
        <div className="absolute right-4 hidden sm:block">
          <Menu
            animate={{
              mount: { y: 0 },
              unmount: { y: 30 },
            }}
          >
            <MenuHandler>
              <button className="text-black bg-white hover:bg-blue-300 font-bold p-2 rounded">
                <MenuIcon width={24} height={24}></MenuIcon>
              </button>
            </MenuHandler>
            <MenuList className="bg-midenight-blue text-white">
              {menuItem.map((val, key) => {
                return (
                  <MenuItem
                    className="hover:bg-[#ffffff12] hover:text-white"
                    key={key}
                  >
                    <NavLink
                      to={val.href}
                      type="button"
                      className="flex items-center"
                    >
                      {val.title}
                    </NavLink>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex sm:justify-center justify-start p-2 md:gap-x-10 gap-x-6 overflow-auto bg-midenight-blue">
          {headItems.map((val, key) => {
            return (
              <div
                className="text-white font-bold hover:text-green-500 p-1 flex"
                key={key}
              >
                <NavLink
                  to={val.href}
                  className="flex items-center"
                  type="button"
                >
                  <img
                    src={`/assets/icons/${val.iconURL}`}
                    className="h-6 w-6 mr-2"
                    alt=""
                  />
                  {val.title}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`transform w-60 z-40 h-full fixed top-0 px-2 bg-midenight-blue shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out overflow-scroll ${
          showResponsiveBar ? "" : "-translate-x-60"
        }`}
      >
        <div className="flex justify-end my-4">
          <button
            className="cursor-pointer"
            onClick={() => setShowResponsiveBar(!showResponsiveBar)}
          >
            <CloseIcon width={25} height={25} color="#FFFFFF" />
          </button>
        </div>
        <div className="flex flex-col mb-2">
          <div className="text-gray-200 text-left font-semibold bg-[#ffffff12] py-2 px-4 mb-2">
            Menu
          </div>
          {menuItem.map((val, key) => {
            return (
              <div
                className="text-gray-300 text-left font-semibold py-2 px-8 cursor-pointer"
                key={key}
              >
                <NavLink to={val.href} type="button">
                  {val.title}
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <div className="text-gray-200 text-left font-semibold bg-[#ffffff12] py-2 px-4 mb-2">
            SPORTS
          </div>
          {headItems.map((val, key) => {
            return (
              <div
                className="text-gray-300 text-left font-semibold py-2 px-8 cursor-pointer"
                key={key}
              >
                <NavLink className="flex" to={val.href} type="button">
                  <img
                    src={`/assets/icons/${val.iconURL}`}
                    className="h-6 w-6 mr-4"
                    alt=""
                  />
                  {val.title}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
