import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import { productsLoader } from "./components/Home.jsx";
import { contactAction } from "./components/Contact.jsx";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} loader={productsLoader} />
    <Route path="/home" element={<Home />} loader={productsLoader} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} action={contactAction} />
    <Route path="/login" element={<Login />} />
    <Route path="/cart" element={<Cart />} />
  </Route>,
);

const appRouter = createBrowserRouter(routeDefinitions);

//Commenting the routing below, since we are now using createRoutesFromElements to define our routes. Both approaches are valid, and you can choose the one that best fits your coding style and project requirements.
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true, //used to define a default child route. It tells the router to render a specific component when the user is at the parent route's exact path and no other child route matches. In this case, we have not defined any component for / path, so it will render the Home component when the user is at the root path ("/").
//         element: <Home />,
//       },
//       {
//         path: "home",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
    <ToastContainer
      position="top-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={localStorage.getItem("theme") === "dark" ? "dark" : "light"}
      transition={Bounce}
    />
  </StrictMode>,
);
