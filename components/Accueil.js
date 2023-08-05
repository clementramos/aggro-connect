"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";

export default function Homepage() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          scrollBehavior: "smooth",
        }}
      >
        <div
          id="accueil"
          className="h-screen flex flex-col items-center justify-center bg-white bg-cover bg-no-repeat pr-24 py-32"
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
              <p className="text-3xl font-bold mb-3">AGGRO CONNECT</p>
              <p className="text-xl font-semibold mb-1">
                Votre nouvelle connexion avec le monde agricole.
              </p>
              <p className="text-lg text-justify">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className="grid grid-cols-2 h-fit">
                <button className="group px-5 py-4 transition-colors mt-12 flex w-[250px] h-[60px] justify-center items-center text-xl bg-orange-aggro uppercase font-bold rounded-full hover:bg-slate-100">
                  <a href="#concept">en savoir plus</a>
                  <span className="ml-1 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </button>{" "}
                {/* <Image
                  className=""
                  src="/champ.png"
                  alt="Aggro connect Logo"
                  width={375}
                  height={375}
                  priority
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="concept"
        className="h-screen flex flex-col items-start justify-start bg-white bg-cover bg-no-repeat pt-12"
      >
        <div className="h-screen px-24">
          <p className="uppercase font-bold text-3xl mb-3">le concept</p>
          <p className="text-xl font-semibold mb-1">
            Retrouvez vos agriculteurs de coeurs dans les marchés près de chez
            vous.
          </p>
          <p className="text-lg text-justify">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <button className="group px-5 py-4 transition-colors mt-12 flex w-[250px] h-[60px] justify-center items-center text-xl bg-orange-aggro uppercase font-bold rounded-full hover:bg-slate-100">
              <Link href="/map">ouvrir la carte</Link>
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </button>
            <div className="mt-12">
              <Image
                className=""
                src="/Acheteur (1).svg"
                alt="Aggro connect Logo"
                width={375}
                height={375}
                priority
              />
            </div>
            <div className="mt-12">
              <Image
                className=""
                src="/vendeur.svg"
                alt="Aggro connect Logo"
                width={375}
                height={375}
                priority
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
