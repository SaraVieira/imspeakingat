import React, { useState } from "react";
import PropTypes from "prop-types";
import Transition from "./Transition";

function Dropdown({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
      onFocus={() => setDropdownOpen(true)}
      onBlur={() => setDropdownOpen(false)}
    >
      <a
        className="flex items-center px-3 py-2 text-zinc-600 transition duration-150 ease-in-out hover:text-zinc-900 lg:px-5"
        href="#0"
        aria-expanded={dropdownOpen}
        onClick={(e) => e.preventDefault()}
      >
        {title}
        <svg
          className="ml-1 h-3 w-3 flex-shrink-0 cursor-pointer fill-current text-zinc-500"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
        </svg>
      </a>
      <Transition
        show={dropdownOpen}
        tag="ul"
        className="absolute right-0 top-full ml-4 w-40 origin-top-right rounded bg-white py-2 shadow-lg"
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        {children}
      </Transition>
    </li>
  );
}

export default Dropdown;

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  title: PropTypes.string.isRequired,
};
