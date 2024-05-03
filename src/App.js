import {
  useParams,
  RouterPOutlet,
  Link, rovider, useNavigate, createBrowserRouter, BrowserRouter, Routes, Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import { ItemPage } from './pages/goods-item/goods-page';
import GoodsList from './pages/home/GoodsList'
import { Header } from "./components/header/header";
import { CartPage } from "./pages/cart";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Header,
    children: [
      {
        path: "/",
        Component: GoodsList,
        children: [
          {
            path: "goods/:id",
            Component: ItemPage
          },]
      },
    ],
  },
]);


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={< GoodsList />} />
              <Route path="goods/:id" element={< ItemPage />} />
              <Route path="cart" element={< CartPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
