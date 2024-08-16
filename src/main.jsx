import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store/store.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DataPage from "./pages/dataPage/DataPage.jsx";
import {HiPage} from "./pages/hiPage/HiPage.jsx";
import {CorelationPage} from "./pages/corelationPage/CorelationPage.jsx";
import {FtestPage} from "./pages/fTestPage/FtestPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/data",
    element: <DataPage/>,
  },
  {
    path: "/hipage",
    element: <HiPage/>,
  },
  {
    path: "/corelation",
    element: <CorelationPage/>,
  },
  {
    path: "/ftest",
    element: <FtestPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  ,
)
