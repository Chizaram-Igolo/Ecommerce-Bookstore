import Link from "next/link";

import { FIRST_YEAR_OF_PUBLICATION } from "@utils/constants";

export default function Footer() {
  let currYear = new Date().getFullYear();

  return (
    <div
      className="w-full absolute bottom-100 mb-5 p-8 pt-4  
    
    px-5 md:px-18 lg:px-20 xl:px-24 z-20"
    >
      <div className="flex items-center justify-between py-0">
        <div>
          <p className="mt-0 text-sm md:text-sm font-medium leading-6">
            &copy;
            {new Date().getFullYear() > FIRST_YEAR_OF_PUBLICATION
              ? `${FIRST_YEAR_OF_PUBLICATION} - ${currYear}`
              : `${currYear}`}
            &nbsp;Mmuo, Dibia LLC. All rights reserved.
          </p>

          <p className="mt-1 text-sm md:text-sm font-medium leading-6">
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
            &nbsp; | &nbsp;
            <Link href="/terms-of-service">
              <a>Terms of Use</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
