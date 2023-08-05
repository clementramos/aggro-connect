"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Homepage() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div
        style={{
          paddingBottom: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          scrollBehavior: "smooth",
        }}
      >
        <div id="map" className="h-screen bg-white">
          <div className="w-full pt-12">
            <p className="text-3xl font-bold mb-3 uppercase text-center">
              la carte de vos marchés dans votre région
            </p>
            <p className="text-xl font-semibold mb-1 text-center">
              Tous vos agriculteurs favoris, au même endroit.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 w-screen py-20 px-12">
            <div className="bg-orange-aggro">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46156.885407463065!2d3.751516842727845!3d43.69381019443139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6aa35e69c57ef%3A0x62561cee376dd28d!2sPoissonnerie%20Gaillard!5e0!3m2!1sfr!2sfr!4v1691225913056!5m2!1sfr!2sfr"
                className="w-full h-full"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="">
              <div className="grid grid-cols-2 w-fit">
                <Link href="/profile">
                  <Image
                    src="/agri1.jpg"
                    alt="avatar"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto"
                    priority="primary"
                    title="Voir son profil"
                  />
                </Link>
                <div className="grid grid-rows-2 h-min gap-4">
                  {" "}
                  <p className="text-3xl font-bold">Jean DUPONT</p>
                  <p className="text-xl ">
                    Ferme du Bonheur Vert - 34380 Argelliers{" "}
                  </p>
                </div>
              </div>
              <p className="text-xl text-justify pt-12 px-8">
                Je suis Jean Dupont, un agriculteur passionné et fier
                propriétaire de la Ferme du Bonheur Vert. Ma ferme est un
                véritable joyau niché au cœur de la campagne pittoresque.
                <br></br>À la Ferme du Bonheur Vert, je propose une large gamme
                de fruits et légumes cultivés avec amour dans mes champs. Vous
                pourrez déguster des pommes croquantes, des fraises juteuses,
                des carottes croquantes et bien d&apos;autres délices de saison.
                <br></br>
                J&apos;ai également mis en place une petite boutique où vous
                trouverez des spécialités locales, comme du miel récolté à
                proximité et des fromages artisanaux produits par des
                producteurs voisins.
                <br></br>
                <br></br> Si vous souhaitez me rendre visite, je serai ravi de
                vous accueillir du mardi au samedi, de 9h00 à 18h00. Le
                dimanche, vous pourrez venir à la ferme de 9h00 à 13h00, et
                ainsi profiter d&apos;un agréable moment en famille avant de
                vous régaler avec des produits frais pour le déjeuner. En tant
                qu&apos;agriculteur, je m&apos;engage à vous offrir des produits
                de qualité, cultivés et élevés avec passion et respect de
                l&apos;environnement.<br></br>
                <br></br> La Ferme du Bonheur Vert est un lieu incontournable
                pour tous ceux qui aiment la nature, la bonne cuisine et le
                plaisir de découvrir le goût authentique des produits frais.
                J&apos;attends avec impatience votre visite et suis convaincu
                que vous passerez un moment mémorable à la Ferme du Bonheur
                Vert.
              </p>
              <div className="px-8">
                <button className="group px-5 py-4 transition-colors mt-12 flex w-[250px] h-[60px] justify-center items-center text-xl bg-orange-aggro uppercase font-bold rounded-full hover:bg-slate-100">
                  <a href="/profile">voir son profil</a>
                  <span className="ml-1 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
