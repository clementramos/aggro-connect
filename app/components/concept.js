import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Concept() {
  return (
    <div
      id="accueil"
      className="h-screen flex flex-col items-center justify-center bg-white bg-cover bg-no-repeat pr-24"
    >
      <div className="grid grid-cols-2 w-full flex items-start mx-auto">
        <Image
          className="mx-auto"
          src="/AGGRO CONNECT - LIGHT.png"
          alt="Aggro connect Logo"
          width={350}
          height={37}
          priority
        />
        <div>
          <p className="text-3xl font-bold mb-3"> AGGRO CONNECT </p>{" "}
          <p className="text-xl font-semibold mb-1">
            Votre nouvelle connexion avec le monde agricole.{" "}
          </p>{" "}
          <p className="text-lg text-justify">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo.{" "}
          </p>{" "}
          <div className="grid grid-cols-2 h-fit">
            <button className="mt-12 flex w-[250px] h-[60px] justify-center items-center text-xl bg-orange-aggro uppercase font-bold rounded-full hover:bg-slate-100">
              <Link
                href="/concept"
                className="group px-5 py-4 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                en savoir plus{" "}
                <span className="ml-1 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  - & gt;{" "}
                </span>{" "}
              </Link>{" "}
            </button>{" "}
            <Image
              className=""
              src="/champ.png"
              alt="Aggro connect Logo"
              width={375}
              height={375}
              priority
            />
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
