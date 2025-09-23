import React from "react";
import { MyBooks } from "./MyBooks";

const Bookshelf = () => {
  return (
    <section
      id="bookshelf"
      className="
        flex flex-col
        items-center
        gap-8
        px-4
        py-12
      "
    >
      <h1 className="heading mb-8 text-3xl font-bold text-center">
        My Bookshelf
      </h1>

      <div className="w-full max-w-6xl flex-col">
        <MyBooks />
      </div>
    </section>
  );
};

export default Bookshelf;
