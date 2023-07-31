import { Suspense, lazy } from "react";
import Categories from "./pages/categories/Categories";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Menu from "./components/menu/Menu";
import "./styles/global.scss";
import Navbar from "./components/navbar/Navbar";
import PageLoader from "./components/pageloader/PageLoader";

const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/home/Home")), 500);
  });
});
const Products = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/products/Products")), 500);
  });
});
const SubCategory = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/subCategories/SubCategory")), 500);
  });
});

const queryClient = new QueryClient();
function App() {
  // const subCategs = [
  //   {
  //     id: 1,
  //     title: "car",
  //     desc: "categ 1 desc",
  //   },
  //   {
  //     id: 2,

  //     title: "Electronics",
  //     desc: "categ 2 desc",
  //   },
  //   {
  //     id: 3,
  //     title: "Unga",
  //     desc: "categ 3 desc",
  //   },
  // ];
  // const categs = subCategs.map((subCateg) => {
  //   return subCateg;
  // });

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          {/* <div className="menuContainer"> */}
          <Menu />
          {/* </div> */}
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/subcategories/:subCategs",
          element: <SubCategory />,
        },
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
