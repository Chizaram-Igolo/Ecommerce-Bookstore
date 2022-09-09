import { faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import styles from "./List.module.css";

const filteredCategories = [
  { cat: "Fiction" },
  { cat: "Horror" },
  { cat: "Adventure" },
];

export default function CurrentFiltersAndReset() {
  return (
    <div className="mt-4 -ml-4 p-4 border-dotted border-[1.5px]">
      <div className="mb-4">
        <span
          className="py-[4px] text-sm text-gray-400 decoration-dotted 
                     underline underline-offset-4"
        >
          Reset all filters
        </span>
      </div>

      <h3 className="font-FiraSans_Medium mb-1">Genres</h3>

      <ul
        className={`text-[15px] w-48 h-auto overflow-y-auto scroll ${styles.list}`}
      >
        {filteredCategories.map((item, idx) => (
          <li className="flex" key={idx}>
            <div className="pt-1 pr-2 text-lg">
              <FontAwesomeIcon icon={faXmark} />
            </div>
            <div
              className="py-[4px] text-gray-400 decoration-dotted 
                         underline underline-offset-4"
            >
              {item.cat}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
