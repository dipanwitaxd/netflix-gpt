"use client";
import { makeStore } from "@/redux/store";
import { useRef } from "react";
import { Provider } from "react-redux";

import AuthHandler from "@/utils/AuthHandler";

export default function StoreProvider({ children }) {
  const storeRef = useRef(undefined);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <AuthHandler>{children}</AuthHandler>
    </Provider>
  );
}
