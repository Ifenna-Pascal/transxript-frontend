import Link from "next/link";
import React from "react";

type Props = {
  text: string;
}

function HomeLink({text}:Props) {
  return (
    <Link href={"/"}>
      <p className={`home-link ${text}`}>
        Trans<span className="text-gray-800">xript</span> 
      </p>
    </Link>
  );
}

export default HomeLink;
