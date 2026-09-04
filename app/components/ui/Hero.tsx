import React from "react";
import Link from "next/link";

// https://elliott.mangham.dev/ Really nice hero with text
export default function Hero() {
  return (
    <div className="h-36 m-6 flex flex-col items-center justify-center">
      <p className="m-2">UI Kitchen</p>
      <p>A collection of UI experiments from across the web</p>
      <Link href="/dev">Dev mode</Link>
    </div>
  );
}
