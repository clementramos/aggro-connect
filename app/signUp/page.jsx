"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/router";

export default function Login() {
  const [name, setName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    const { result, error } = await signUp(
      name,
      lastName,
      city,
      email,
      password
    );

    if (error) {
      return console.log(error);
    }
    console.log(result);
    return router.push("/account");
  };

  return (
    <>
      <Navbar />
      <div className="h-full bg-white bg-no-repeat bg-cover to-orange-aggro">
        <div className="pt-16 pb-6 flex flex-col items-center justify-center">
          <Image
            src="/AGGRO CONNECT - LIGHT.svg"
            alt="logo"
            width={200}
            height={200}
            className="mx-auto mb-10 px-5"
            loading="lazy"
          />
          <div className="bg-white shadow-2xl rounded w-1/4 p-10">
            <p className="text-3xl text-left font-black w-fit">
              Création de compte
            </p>
            <p className="pb-10 text-md text-left font-thin w-fit">
              Déja un compte ?{" "}
              <a
                href="signIn"
                className="hover:underline decoration-orange-aggro hover:text-orange-aggro font-medium"
              >
                Connectez-vous ici.
              </a>
            </p>
            <button
              aria-label="Continue with google"
              role="button"
              class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mb-6"
            >
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                alt="google"
              />
              <p class="text-base font-medium ml-4 text-gray-700">
                Connexion avec Google
              </p>
            </button>
            <button
              aria-label="Continue with apple"
              role="button"
              class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
            >
              <Image src="/apple-logo.png" alt="apple" width={20} height={20} />
              <p class="text-base font-medium ml-4 text-gray-700">
                Connexion avec Apple
              </p>
            </button>
            <div class="w-96 flex items-center justify-between py-5 z-50">
              <hr class="w-full bg-black h-0.5" />
              <p class="text-base font-medium leading-4 px-2.5 text-black">
                OU
              </p>
              <hr class="w-full bg-black h-0.5" />
            </div>

            <form className="column max-w-5xl" onSubmit={handleForm}>
              <label
                htmlFor="name"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2">Nom :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-orange-aggro py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="name"
                  name="name"
                  id="name"
                  placeholder="aggro-connect@mail.com"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label
                htmlFor="lastName"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2">Prénom :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-orange-aggro py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="lastName"
                  name="lastName"
                  id="lastName"
                  placeholder="aggro-connect@mail.com"
                  onChange={(e) => setlastName(e.target.value)}
                />
              </label>
              <label
                htmlFor="city"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2">Ville :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-orange-aggro py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="city"
                  name="city"
                  id="city"
                  placeholder="aggro-connect@mail.com"
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
              <label
                htmlFor="email"
                className="text-left block text-base font-medium text-black"
              >
                <p className="pb-2">E-mail :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-orange-aggro py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="aggro-connect@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label
                htmlFor="password"
                className="pt-2 text-left block mb-2 text-base font-medium text-black"
              >
                <p className="pb-1">Mot de passe :</p>
                <input
                  className="focus:outline-none focus:ring focus:border-none focus:ring-orange-aggro py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full"
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Mot de passe"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <div id="divLoginError" class="group">
                <div id="forgotPassword" class="errorlabel">
                  <a
                    href="passwordReset"
                    className="underline decoration-orange-aggro hover:text-orange-aggro font-medium"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
              </div>
              <div className="pt-8"></div>
              <button
                className="button-inverse w-full uppercase py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-orange-aggro  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                type="submit"
                id="btnLogin"
              >
                Connexion
              </button>
            </form>

            {/*<a href="signInWithMail">
              <button
                aria-label="Continue with twitter"
                role="button"
                class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
              >
                <img src="/email.png" alt="mail" />
                <p class="text-base font-medium ml-4 text-gray-700">
                  Connexion par mail
                </p>
              </button>
  </a>*/}
            <p className="pt-8 pb-4 text-xl text-center font-thin italic sm:px-5 sm:text-center sm:text-sm w-fit">
              En continuant, vous indiquez acceptez notre{" "}
              <a
                href="javascript:void(0)"
                class="underline decoration-orange-aggro hover:text-orange-aggro"
                target="_blank"
              >
                politique de confidentialité{" "}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
