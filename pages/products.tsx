import List from "@Filters/List";
import Product from "@Products/Product";
import Image from "next/image";
import { ReactElement } from "react";
import Layout from "../components/Layouts/layout";

import thingsfallapart from "../public/images/products/things-fall-apart.jpg";

const books = [
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
  {
    title: "Things Fall Apart",
    image: thingsfallapart,
    price: "1600.00",
    oldPrice: "2495.00",
    discountPercent: "30",
  },
];

export default function Products() {
  return (
    <div className="px-5 md:px-18 lg:px-24 xl:px-32 z-20">
      <div className="flex">
        <div className="w-48">
          <Product />
          <List heading="Book Genre" />
          <hr className="" />
          <List
            heading="Authors"
            notification="Only top 20 Authors are shown."
          />
        </div>

        <div className="flex flex-col">
          <div className="py-6 px-12 flex">
            <div className="px-4">
              <h1 className="text-[2.5rem] text-gray-800">Genres</h1>
            </div>
            <div className="py-7 text-sm">
              <span className="text-gray-400">Found:</span>{" "}
              <span className="font-FiraSans_Medium">1,456 Books</span>
            </div>
          </div>

          <div className="pl-16 flex flex-row flex-wrap">
            {books.map((book, idx) => (
              <div
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 px-2 md:px-4 mb-8"
                key={idx}
              >
                <div className="relative">
                  <Image
                    src={thingsfallapart}
                    alt=""
                    blurDataURL="URL"
                    placeholder="blur"
                    className="w-full z-10"
                  />
                  <div className="absolute top-0 right-0 px-2 py-1 bg-slate-800 text-white z-[20]">
                    <span className="text-sm">-{book.discountPercent}%</span>
                  </div>
                </div>
                <div className="pt-3 text-center">
                  <div className="pb-0.5">
                    <span className="text-gray-400">{book.title}</span>
                  </div>
                  <div>
                    <span className="text-sm font-FiraSans_SemiBold">
                      ${book.price}
                    </span>
                    <span className="pl-2 text-sm text-gray-400 line-through">
                      ${book.oldPrice}
                    </span>
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
