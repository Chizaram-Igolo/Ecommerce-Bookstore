/**
 * React imports.
 */
import Link from "next/link";

import { Auth } from "firebase/auth";

interface INavTitle {
  loading: boolean;
  user: Auth;
}

const NavTitle: React.FC<INavTitle> = ({ loading, user }) => {
  return (
    <div className="flex justify-start items-center h-full lg:w-0 lg:flex-1">
      <Link href={!loading && user ? "/feed/ig" : "/"}>
        <a>
          <span className="sr-only">Mmuo</span>
          {/* tracking-[2px] text-[1.8rem] */}
          <h2 className="text-slate-800 tracking-[2px] text-[2.0rem] font-black">
            Mmuo
          </h2>
        </a>
      </Link>
    </div>
  );
};

export default NavTitle;
