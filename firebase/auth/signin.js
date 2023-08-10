import firebase_app from "../config";
import { signInWithEmailAndPasword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email, password) {
    let result = null,
    error = null;
    try {
        result = await signInWithEmailAndPasword(auth, email, password);
    } catch(e) {
        error = e;
    }

    return { result, error };
    
}