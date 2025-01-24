"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

import React, { ReactNode } from "react";

function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
