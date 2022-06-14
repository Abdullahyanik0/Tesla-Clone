import React from "react";

const footerItem = [
  { item: "Tesla © 2022" },
  { item: "Privacy & Legal" },
  { item: "Vehicle Recalls" },
  { item: "Contact" },
  { item: "Careers" },
  { item: "News" },
  { item: "Engage" },
  { item: "Locations" },
];

const Footer = () => {
  return (
    <>
      <div className="footer sm:hidden  sm:grid-cols-4 sm:px-2 sm:text-[11px]  flex gap-x-4 h-16 justify-center text-sm items-center">
        {footerItem.map((item) => (
          <ul>
            <li>
              <a href="/">{item.item}</a>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Footer;
