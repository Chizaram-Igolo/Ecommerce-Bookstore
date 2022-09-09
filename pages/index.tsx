import { useState, useEffect } from "react";

import CurrentFiltersAndReset from "@Filters/CurrentFiltersAndReset";
import List from "@Filters/List";
import {
  faSort,
  faSortAmountAsc,
  faStairs,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadCrumb from "@Navigation/BreadCrumb";
import SelectMenu from "@Navigation/SelectMenu";
import Product from "@Products/Product";
import Image from "next/image";
import { ReactElement } from "react";
import Layout from "../components/Layouts/layout";

import { faker } from "@faker-js/faker";

interface IBook {
  title: string;
  price: string;
  oldPrice: string;
  discount: number;
  image: string;
}

export default function Products() {
  const [books, setBooks] = useState<IBook[]>([]);

  let oldPrice: string;
  let price: string;
  let image: string;

  useEffect(() => {
    let createdBooks: IBook[] = [];

    function createRandomBook() {
      oldPrice = faker.commerce.price(1400, 2200);
      price = faker.commerce.price(1200, 2000);
      image = `${faker.image.abstract(135, 186)}?random=${Math.round(
        Math.random() * 1000
      )}`;

      let discount = 0;

      if (price < oldPrice) {
        discount =
          ((parseFloat(oldPrice) - parseFloat(price)) / parseFloat(oldPrice)) *
          100;
      }

      return {
        title: faker.commerce.productName(),
        image,
        price,
        oldPrice,
        discount,
      };
    }

    Array.from({ length: 17 }).forEach(() => {
      createdBooks.push(createRandomBook());
    });

    setBooks(createdBooks);
  }, []);

  return (
    <div className="px-5 md:px-18 lg:px-24 xl:px-32 z-20">
      <div className="flex">
        <div className="w-48">
          {/* <Product /> */}
          <BreadCrumb />
          <CurrentFiltersAndReset />
          <List heading="Book Genre" />
          <hr className="" />
          <List
            heading="Authors"
            notification="Only top 20 Authors are shown."
          />
        </div>

        <div className="flex flex-col">
          <div className="py-6 flex flex-col">
            <div className="flex px-20">
              <h1 className="text-[2.5rem] text-gray-800">Genres</h1>

              <div className="pl-4 text-sm">
                <span className="inline-block h-full pt-7 text-gray-400">
                  Found:
                </span>
                {"  "}
                <span className="inline-block h-full pt-7 font-FiraSans_Medium">
                  1,456 Books
                </span>
              </div>
            </div>

            <div className="flex pt-2 pb-3 px-20">
              <span className="pr-2 py-0.5 text-sm text-gray-400">
                <FontAwesomeIcon icon={faSortAmountAsc} />
              </span>
              <span className="pt-[3px] pr-1 text-sm text-gray-400">
                Sort By -{" "}
              </span>
              <SelectMenu
                selected={
                  <span className="font-FiraSans_Medium text-sm">
                    Price High to Low
                  </span>
                }
              />
            </div>
          </div>

          <div className="w-full pl-[4.5rem] md:pl-16 flex flex-row flex-wrap ">
            {books.map((book, idx) => (
              <div
                className="w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 px-2 md:px-4 mb-8"
                key={idx}
              >
                <div className="w-full min-h-[176px] relative">
                  <Image
                    src={book.image}
                    alt=""
                    blurDataURL="URL"
                    placeholder="blur"
                    width={135}
                    height={186}
                    className="w-full z-10"
                  />

                  {/* <Image
                    className="w-full z-10"
                    width={135}
                    height={186}
                    // layout="fill"
                    src={`http://fakeimg.pl/135x186/?text=${idx}`}
                  /> */}
                  {parseFloat(book.discount.toFixed(0)) > 0 && (
                    <div className="absolute top-0 right-0 px-2 py-1 bg-slate-800 text-white z-[20]">
                      <span className="text-sm">
                        -{book.discount.toFixed(0)}%
                      </span>
                    </div>
                  )}
                </div>
                <div className="pt-3 text-center">
                  <div className="pb-0.5">
                    <span className="text-gray-400">{book.title}</span>
                  </div>
                  <div>
                    <span className="text-sm font-FiraSans_SemiBold">
                      ₦{book.price}
                    </span>

                    {book.price < book.oldPrice && (
                      <span className="pl-2 text-sm text-gray-400 line-through">
                        ₦{book.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Products.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
