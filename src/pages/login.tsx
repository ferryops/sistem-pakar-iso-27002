import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, firebase } from "@/utils/firebase";

export default function Login() {
  const [user, setUser] = useState<any>();
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const loginGoogle = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        const userLogin = auth.currentUser;
        if (userLogin) {
          setUser(user);
          console.log(user);
        } else {
          // User is signed out
          setUser(null);
          router.push("/login");
        }
      });
    });

    const logout = () => {
        auth.signOut();
        window.localStorage.removeItem("emailForSignIn");
        // router.push("/login");
      };

  return (
    <>
      <p onClick={loginGoogle}>login</p>
      <p onClick={logout}>logout</p>
      {user ? (
        <>
          <p>Selamat datang, {user.displayName}</p>
          <p>photo url, {user.photoURL}</p>
          <p>Provider ID: {user.providerId}</p>
          <p>Uid: {user.uid}</p>
        </>
      ) : null}
    </>
  );
}
