import RootLayout from "@/components/RootLayout";
import { store } from "@/lib/store";
import { Provider } from "react-redux";

export default function Layout() {
  return (
    <Provider store={store}>
      <RootLayout />
    </Provider>
  );
}
