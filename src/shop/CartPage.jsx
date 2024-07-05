import React, { useEffect ,useState} from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png"
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    const [cartItems, setcartItems] = useState([]);

    useEffect(()=>{
         const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
         setcartItems(storedCartItems);
    },[])
    //calculate prices

    const calculateTotalPrice = (item) =>{
        return item.price * item.quantity;
    }

    //handle quantity increses

    const handleIncrease = (item)=>{
        item.quantity += 1;
        setcartItems([...cartItems]);

        //update local storage with new cart items

        localStorage.setItem("cart",JSON.stringify(cartItems));
    };

    //handle quantity Decreses
    const handleDecrease = (item) =>{
        if(item.quantity > 1){
            item.quantity -= 1;
            setcartItems([...cartItems]);

            //update local storage with new cart items

        localStorage.setItem("cart",JSON.stringify(cartItems));
    
        }
    };
   // handle item to remove

   const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItems) => cartItems.id !== item.id);
     //update new cart

     setcartItems(updatedCart);

     updateLocalStorage(updatedCart);
   }

   const updateLocalStorage = (cart)=>{
          localStorage.setItem("cart",JSON.stringify(cart));
   }

   //cart subtotal
   const cartSubtotal = cartItems.reduce((total,item)=>{
    return  total + calculateTotalPrice(item);
   },0)

   //order total
   const orderTotal = cartSubtotal;


  return (
    <div>
        <PageHeader title={"Shop Cart"} curPage={"Cart Page"}/>

        <div className='shop-cart padding-tb'>
           <div className="container">
            <div className="section-wrapper">
                {/* cart top*/}
                <div className='cart-top'>
                  <table>
                    <thead>
                        <tr>
                            <th className='cat-product'>Product</th>
                            <th className='cat-price'>Price</th>
                            <th className='cat-quantity'>Quantity</th>
                            <th className='cat-toprice'>Total</th>
                            <th className='cat-edit'>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.map((item,indx) => (
                                <tr key={indx}>
                                    <td className='product-item cat-product'>
                                     <div className='p-thumb'>
                                      <Link to="/shop"><img src={item.img} alt="" /></Link>
                                     </div>
                                     <div className='p-content'>
                                      <Link to="/shop">{item.name}</Link>
                                     </div>
                                    </td>
                                    <td className='cat-price'>${item.price} </td>
                                    <td className='cat-quantity'>
                                        <div className='cart-plus-minus'>
                                         <div className='dec qtybutton' onClick={()=>handleDecrease(item)}>-</div>
                                         <input type="text"  className='cart-plus-minus-box' name='qtybutton' value={item.quantity}/>
                                         <div className='inc qtybutton' onClick={()=>handleIncrease(item)}>+</div>
                                        </div>
                                    </td>
                                    <td className='cart-toprice'>${calculateTotalPrice(item)}</td>
                                    <td className='ct-edit'>
                                        <a href="#" onClick={()=>handleRemoveItem(item)}>
                                            <img src={delImgUrl} alt="" />
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                  </table>
                </div>

                {/* --------------cart top ends---------*/}
                {/*  cart bottom*/}
                <div className='cart-bottom'>
                 {/* checkout box */}
                 <div className='cart-checkout-box'>
                    <form className='coupon'>
                      <input  className='cart-page-input-text'type="text" name="coupon" id="coupon" placeholder='Coupon code....' />
                      <input type="submit" value={"Apply coupon"} />
                    </form>
                    <form className='cart-checkout'>
                        <input type="submit" value={"Update Cart"} />
                        <div>
                            <CheckOutPage/>
                        </div>
                    </form>
                 </div>
                 {/*  check out box ends*/}

                 {/* shoping box */}
                 <div className='shiping-box'>
                   <div className='row'>
                    <div className='col-md-6 col-12'>
                      <div className='calculate-shiping'>
                        <h3>Calculate Shipping</h3>
                        <div className="outline-select">
                            <select>
                                <option value="uk">United Kingdom</option>
                                <option value="bd">Bangladesh</option>
                                <option value="pak">Pakistan</option>
                                <option value="ind">India</option>
                                <option value="np">Nepal</option>
                                <option value="Aus">Australia</option>
                            </select>
                            <span className='select-icon'>
                                <i className='icofont-rounded-down'></i>
                            </span>
                        </div>

                        <div className='outline-select shipping-select'>
                        <select>
                                <option value="uk">New york</option>
                                <option value="bd">Dhaka</option>
                                <option value="pak">Karachi</option>
                                <option value="ind">Delhi</option>
                                <option value="np">Kathmandu</option>
                                <option value="Aus">Canberra</option>
                            </select>
                            <span className='select-icon'>
                                <i className='icofont-rounded-down'></i>
                            </span>
                        </div>
                        <input type="text" name="postalCode" id="postalCode"  placeholder ="Postcode/ZIP"  className='cart-page-input-text' />
                        <button type='submit'>Update Address</button>
                      </div>
                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='cart-overview'>
                            <h3> Cart Totals</h3>
                            <ul className='lab-ul'>
                                <li>
                                    <span className='pull-left'>Cart Subtotal</span>
                                    <p className='pull-right'>${cartSubtotal}</p>
                                </li>
                                <li>
                                    <span className='pull-left'>Shipping and Handling</span>
                                    <p className='pull-right'>Free Shipping</p>
                                </li>
                                <li>
                                    <span className='pull-left'>Order Total</span>
                                    <p className='pull-right'>${orderTotal.toFixed(2)}</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                   </div>
                 </div>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default CartPage