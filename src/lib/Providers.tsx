"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {/* By using StyledComponentsRegistry, no antD design will break */}
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
  );
};

export default Providers;
