  import Home from "./components/pages/Home";
  import Cart from "./components/pages/Cart";
  import Body from "./components/pages/Body";
  import ReactDOM  from "react-dom/client";
  import { Provider } from "react-redux";
  import store from "./utils/store";
  import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";


  const root = ReactDOM.createRoot(document.getElementById('root'))

  const AppLayout = () => {
    return(
        <Provider store={store}>
          <Home/>
          <Outlet />
        </Provider>
    )
  }

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout />,
      children:[
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/',
          element:<Body />
        }
      ]
  }
  ])
  root.render(<RouterProvider router={appRouter}/>)

