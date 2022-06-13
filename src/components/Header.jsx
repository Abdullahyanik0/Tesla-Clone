import { useState } from "react";
import { Icon } from "Icon";
import { getInvoices } from "data";

const cars = getInvoices();

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const menuItem = [{ item: "Shop" }, { item: "Account" }, { item: "Menu" }];

  return (
    <div className="absolute font-family  font-semibold tracking-wider w-full h-full">
      <div className="flex items-center   justify-between  h-14 fixed w-full z-10 px-6">
        <div className="pl-6">
          <a href="/">
            <Icon name="logo" size={120} />
          </a>
        </div>
        <nav className="">
          <section className="   lg:hidden">
            <div
              className=" xl:absolute px-8 sm:px-4 right-0 space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 bg-black"></span>
              <span className="block h-0.5 w-8 bg-black"></span>
              <span className="block h-0.5 w-8 bg-black"></span>
            </div>

            <div  className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              {" "}
              <div
                className=" absolute right-7 -top-6 h-20"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-6 w-6 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className=" flex flex-col mt-6   ">
                {cars.map((car) => (
                  <li>
                    <a
                      className="px-2 my-1 ease-in duration-200 h-8 flex items-center rounded-xl hover:bg-gray-500 hover:bg-opacity-20"
                      href="/models"
                    >
                      {car.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <div className="ml-24">
            <ul className=" hidden space-x-4 lg:flex  ">
            {cars.map((car) => (
                  <li>
                    <a
                      className="px-2 ease-in duration-200 h-8 flex items-center rounded-xl hover:bg-gray-500 hover:bg-opacity-20"
                      href="/models"
                    >
                      {car.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </nav>
        <div>
          <ul className=" hidden space-x-4 lg:flex ">
            {menuItem.map((item) => (
              <li>
                <a
                  className="px-2 ease-in duration-200 h-8 flex items-center rounded-xl hover:bg-gray-500 hover:bg-opacity-20"
                  href="/"
                >
                  {item.item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <style>{`
    .hideMenuNav {
      display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 294px;
      height: 100vh;
      top: 0;
      right: 0;
      background: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      padding:0 2.1rem;
      
    }
  `}</style>
      </div>
    </div>
  );
}
