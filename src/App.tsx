import Categories from "./pages/categories/Categories";
import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Products from "./pages/products/Products";
import SubCategory from "./pages/subCategories/SubCategory";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Menu from "./components/menu/Menu";
import "./styles/global.scss";
import Navbar from "./components/navbar/Navbar";

const queryClient = new QueryClient();
function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
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
          path: "/subcategories",
          element: <SubCategory />,
        },
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
