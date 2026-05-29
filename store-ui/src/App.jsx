import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation();
  // Show loading indicator when navigating between routes
  return (
    <React.Fragment>
      <Header />
      {navigation.state === "loading" ? (
        <div className="flex items-center justify-center min-h-screen">
          <span className="text-2xl font-semibold text-primary dark:text-light">Loading...</span>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </React.Fragment>
  );
}

export default App;
