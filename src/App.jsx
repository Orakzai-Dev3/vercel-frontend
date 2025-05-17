import { useState } from 'react'

import {Routes , Route} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Image_slider from './components/Image_slider'
import MainPage from './components/MainPage'
import WomenLeatherJacket from './components/WomenLeatherJacket'
import MenLeatherJacket from './components/MenLeatherJacket'
import Footer from './components/Footer'
import Men_Aviator_Jacket from './components/Men_Aviator_Jacket'
import Jacket_Detail_Page from './Jacket_Detail_Page'
import Men_Biker_Jacket from './components/Men_Biker_Jacket'
import Men_Cafe_Racer_Jacket from './components/Men_Cafe_Racer_Jacket'
import Men_Bomber_Jacket from './components/Men_Bomber_jacket'
import Men_Puffer_Jacket from './components/Men_Puffer_Jacket'
import Men_Shearling_Jacket from './components/Men_Shearling_Jacket'
import Men_Vest_Jacket from './components/Men_Vest_Jacket'
import Custom_coat_And_Blazer from './components/Custom_coat_And_Blazer'
import Custom_Aviator_Jacket from './components/Custom_Aviator_Jacket'
import Leather_Wallet from './components/Leather_Wallet'
import Leather_Portfolios from './components/Leather_Portfolios'
import Leather_passport_holder from './components/Leather_passport_holder'
import Leather_Duffel_Bag from './components/Leather_Duffel_Bag'
import Leather_Backpacks from './components/Leather_Backpacks'
import Leather_Handbags from './components/Leather_Handbags'
import Corporate_gift from './Corporate_gift'
import Leather_Bags from './components/Leather_Bags'
import Signup_login from './components/Signup_login'
import Login from './components/Login'
import Signup from './components/Signup'
import Admin from './components/Admin'
import Protected_route from './components/Protected_route'
import User from './components/User'
import Unauthorized from './components/Unauthorized'
import PageNotFound from './components/PageNotFound'
import Scin from './components/Scin'
import Shoppint_Cart from './components/Shoppint_Cart'
import { useSelector } from 'react-redux'
import Proceed_Data from './components/Proceed_Data'
import Custom_Leather_Jackets from './components/Custom_Leather_Jackets'
import About_Scin from './components/About_Scin'


function App() {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

 const data1= {cart_Items:cartItems,total_Quantity:totalQuantity,total_Amount:totalAmount}
 
  const [count, setCount] = useState(0)

  return (
  //  <div>
  // <Navbar />
  // <Image_slider/>
  // <MainPage/>
  //  </div>
  <Routes>
    <Route 
    path='/' 
    element = {
      <div>
        <Navbar />
        <Image_slider/>
        <MainPage/>
        <Footer/>
      </div>
    }/>
    <Route 
    path='/women-leather-jackets' 
    element={<><Navbar/><WomenLeatherJacket/><Footer/></>}/>
    <Route path='/men-leather-jackets' 
    element={<><Navbar/><MenLeatherJacket/><Footer/></>}/>
    <Route path='/men-aviator-leather-jackets' 
     element={<><Navbar/> <Men_Aviator_Jacket/> <Footer/></>}/>
    <Route path='/men-biker-leather-jackets' 
     element={<><Navbar/> <Men_Biker_Jacket/> <Footer/></>}/>
    <Route path='/men-bomber-leather-jackets' 
     element={<><Navbar/> <Men_Bomber_Jacket/> <Footer/></>}/>
    <Route path='/men-cafe-racer-leather-jackets' 
     element={<><Navbar/> <Men_Cafe_Racer_Jacket/> <Footer/></>}/>
    <Route path='/men-puffer-leather-jackets' 
     element={<><Navbar/> <Men_Puffer_Jacket/> <Footer/></>}/>
    <Route path='/men-shearling-leather-jackets' 
     element={<><Navbar/> <Men_Shearling_Jacket/> <Footer/></>}/>
    <Route path='/men-leather-vests' 
     element={<><Navbar/><Men_Vest_Jacket/> <Footer/></>}/>
    <Route path='/custom-coat-and-blazer' 
     element={<><Navbar/><Custom_coat_And_Blazer/> <Footer/></>}/>
     {/* custom  */}
    <Route path='/custom-aviator-jacket' 
     element={<><Navbar/><Custom_Aviator_Jacket/> <Footer/></>}/>
     {/* wallets */}
    <Route path='/leather-wallets' 
     element={<><Navbar/><Leather_Wallet/> <Footer/></>}/>
    <Route path='/leather-portfolios' 
     element={<><Navbar/><Leather_Portfolios/> <Footer/></>}/>
    <Route path='/leather-passport-holder' 
     element={<><Navbar/><Leather_passport_holder/><Footer/></>}/>
    <Route path='/corporate-gifts' 
     element={<><Navbar/><Corporate_gift/><Footer/></>}/>
     {/* Bags */}
    <Route path='/leather-duffle-bags' 
     element={<><Navbar/><Leather_Duffel_Bag/><Footer/></>}/>
    <Route path='/leather-backpacks' 
     element={<><Navbar/><Leather_Backpacks/><Footer/></>}/>
    <Route path='/leather-handbags' 
     element={<><Navbar/><Leather_Handbags/><Footer/></>}/>
    <Route path='/leather-bags' 
     element={<><Navbar/><Leather_Bags/><Footer/></>}/>
    <Route path='/scin' 
     element={<><Navbar/><Scin/><Footer/></>}/>
    <Route path='/signin' 
     element={<><Navbar/><Signup_login/><Login/><Footer/></>}/>
    <Route path='/signup' 
     element={<><Navbar/><Signup_login/><Signup/><Footer/></>}/>
    <Route path='/user' 
     element={<><Navbar/><Protected_route allowed_role={'user'}><User/></Protected_route><Footer/></>}/>
    <Route path='/admin' 
     element={<><Navbar/><Protected_route allowed_role={'admin'}><Admin/></Protected_route><Footer/></>}/>
    <Route path='/unauthorized' 
     element={<><Navbar/><Unauthorized/><Footer/></>}/>
    <Route path='/shopping-cart' 
     element={<><Navbar/><Shoppint_Cart/><Footer/></>}/>
    <Route path='/shipping-information' 
     element={<><Navbar/><Protected_route allowed_role={'user'}><Proceed_Data data1={data1}/></Protected_route><Footer/></>}/>
    <Route path='/custom-leather-jackets' 
     element={<><Navbar/><Custom_Leather_Jackets/><Footer/></>}/>
    <Route path='/about-scin' 
     element={<><Navbar/><About_Scin/><Footer/></>}/>

    <Route path='*' 
     element={<><Navbar/><PageNotFound/><Footer/></>}/>


     



    <Route path='/SCIN/Leather-Jackets/:id/:category'element={<><Navbar/><Jacket_Detail_Page/><Footer/></>} />

    </Routes>
     
   

  )
}

export default App
