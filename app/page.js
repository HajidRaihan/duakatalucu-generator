"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [katalucu, setKatalucu] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleKataLucu = async () => {
    setIsLoading(true);
    const response = await fetch("/api/hello");
    const data = await response.json();
    setKatalucu(data);
    setIsLoading(false);
    console.log(data);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <button
        onClick={handleKataLucu}
        className="py-1 px-3 font-semibold bg-white text-black rounded-lg text-lg mb-5 hover:bg-gray-200"
      >
        Dua kata lucu!
      </button>

      {isLoading ? (
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" />
      ) : (
        <p>{katalucu.result}</p>
      )}
    </div>
  );
}
