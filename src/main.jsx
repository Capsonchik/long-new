import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store/store.js";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import DataPage from "./pages/dataPage/DataPage.jsx";
import {HiPage} from "./pages/hiPage/HiPage.jsx";
import {CorelationPage} from "./pages/corelationPage/CorelationPage.jsx";
import {FtestPage} from "./pages/fTestPage/FtestPage.jsx";
import {LoginPage} from "./pages/loginPage/LoginPage.jsx";

const ProtectedRoute = ({children}) => {
  const token = localStorage.getItem('longAuthToken');

  if (!token) {
    return <Navigate to="/login"/>;
  }

  return children;
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><App/></ProtectedRoute>,
  },
  {
    path: "/data",
    element: <ProtectedRoute><DataPage/></ProtectedRoute>,
  },
  {
    path: "/hipage",
    element: <ProtectedRoute><HiPage/></ProtectedRoute>,
  },
  {
    path: "/corelation",
    element: <ProtectedRoute><CorelationPage/></ProtectedRoute>,
  },
  {
    path: "/ftest",
    element: <ProtectedRoute><FtestPage/></ProtectedRoute>,
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  ,
)
