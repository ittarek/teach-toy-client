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
import { Spinner } from "react-bootstrap";

const auth = getAuth(app);
// google provider
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [spinner, setSpinner] = useState(true);
  const [photoUrl, setPhotoUrl] = useState(null);
  // console.log("photo", photoUrl);

  //   user create this function by register
  const registration = (email, password) => {
    setSpinner(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   user login this function by login
  const userLogin = (email, password) => {
    setSpinner(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   user login this function by google

  const googleLogin = () => {
    setSpinner(true);
    return signInWithPopup(auth, googleProvider);
  };

  //  user logOut this function
  const loggedOut = () => {
    setSpinner(true);
    signOut(auth);
  };

  // user osbserb this useEffect
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user login  ", currentUser);
      setUser(currentUser);
      setSpinner(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // user data upadte this function
  const userUpdating = (user, name, photoUrl) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        console.log("Your name and photo has been updated");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const authInfo = {
    user,
    registration,
    userLogin,
    loggedOut,
    googleLogin,
    setSpinner,
    spinner,
    photoUrl,
    userUpdating,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
