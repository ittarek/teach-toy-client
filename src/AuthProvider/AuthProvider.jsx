import React, { createContext } from "react";
import {

  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [spinner, setSpinner] = useState(true);
  const [photoUrl, setPhotoUrl] = useState(null);
  // console.log("photo", photoUrl);

  //   register provider
  const createUser = (email, password) => {
    setSpinner(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login provider
  const createLogin = (email, password) => {
    setSpinner(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   google provider

  const googleLogin = () => {
    setSpinner(true);
    return signInWithPopup(auth, googleProvider);
  };

 

  //   logOut provider
  const loggedOut = () => {
    setSpinner(true);
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("logged isn user inside auth state ", loggedUser);
      setUser(loggedUser);
      setSpinner(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);


  const updateUser = (user, name,photoUrl) => {
    updateProfile(user, {
        displayName: name,
        photoURL : photoUrl
    })
        .then(() => {
            console.log('user name and photo updated')
        })
        .catch(error => {
            setError(error.message);
        })
}



  const authInfo = {
    user,
    createUser,
    createLogin,
    loggedOut,
    googleLogin,

    spinner,
    photoUrl,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
