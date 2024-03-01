import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import LandingPage from "./components/LandingPage/LandingPage";
import AdminLayout from "./components/AdminPage/AdminLayout";
import DashboardBody from "./components/AdminPage/DashboardBody";
import Products from "./components/AdminPage/Products/Products";
import Settings from "./components/AdminPage/Settings";
import AddProductForm from "./components/AdminPage/Products/AddProductForm";
import LandingBody from "./components/LandingPage/LandingBody";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />}>
        <Route index element={<LandingBody />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardBody />} />
        <Route path="products" element={<Products />} />
        <Route path="products/new" element={<AddProductForm />} />
        {/* <Route path="products/new" element={<AddFormtwo />} /> */}
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
