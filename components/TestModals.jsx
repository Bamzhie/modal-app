import React, { useState } from "react";
import Image from "next/image";
import Trophy from "../public/trophy.png";
import Gift from "../public/gift.png";
import { AiFillFire } from "react-icons/ai";

const TestModals = () => {
  const [showModal, setShowModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  return (
    <div className="flex md:flex-col justify-center items-center mt-40">
      <div className="flex gap-5">
        <button
          type="button"
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center p-2 rounded-md"
          onClick={() => setShowModal(true)}
        >
          Open First Modal <AiFillFire className="text-xl" />
        </button>
        <button
          type="button"
          className=" text-black active:bg-black hover:bg-black hover:text-white flex justify-center items-center p-2 border border-blue-100 rounded-md"
          onClick={() => setSecondModal(true)}
        >
          Open Second Modal <AiFillFire className="text-xl" />
        </button>
      </div>
      {showModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
          <Image src={Trophy} />
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
      ) : null}

      {secondModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
          <Image src={Gift} />
          <button onClick={() => setSecondModal(false)}>X</button>
        </div>
      ) : null}
    </div>
  );
};

export default TestModals;
