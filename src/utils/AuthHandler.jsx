"use client";

import { useRouter } from "next/navigation"; // Note: using next/navigation instead of next/router
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { addUser, removeUser } from "@/redux/useSlice";
import { useEffect } from "react";

// Create a separate component for the auth logic
export default function AuthHandler({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        router.push("/browse"); // Note: using router.push instead of router
      } else {
        dispatch(removeUser());
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, router]);

  return children;
}
