
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserList from "./components/list/UserList";
import ProductList from "./components/list/ProductList";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs , productInputs} from './formsource'
import './style/dark.scss'
import { useTheme } from "../src/hooks/useTheme";


function App() {

  const {darkMode} = useTheme()

  return (
    <div className= {darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route index element={<UserList />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new"  element={<New inputs = {userInputs} title="Add New User" />}/>
            </Route>

           <Route path="products">
              <Route index element={<ProductList />} />
              <Route path=":productId" element={<Single/>} />
              <Route path="new"  element={<New inputs = {productInputs} title="Add New Product"/>}/>
           </Route> 
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;