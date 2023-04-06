import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Checkout from "./Checkout";


const CartItems = () => {
    const cart = useSelector((state) => state.cart);

  const taxPrice = 0.1 * cart.total;

  const finishPrice = taxPrice + cart.total;

  const [open, setOpen] = useState(false);



  return (
    <div className="cartItems">
      <div className="cartItemsDiv">
        <h3 className="cartItesmsTitle">
          Your Cart (
          {cart.products.length === 1
            ? `${cart.products.length} House`
            : `${cart.products.length} Houses`}{" "}
          )
        </h3>
        <div className="cartItemsGroups">
          <div className="cartItemsLeft">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>House</th>
                  <th>Price</th>
                  
                  <th>SubTotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.products.length === 0 ? (
                  <h4 className="noProducts">No Products in Your Cart</h4>
                ) : (
                  cart.products.map((product) => (
                    <tr key={product._id}>
                      <td>
                        <span className="cartItemsDelete"></span>
                      </td>
                      <td>
                        <div className="cartItemsDiv">
                          <div className="cartItemsTop product">
                            <div className="cartItemsTopInner">
                              <img
                                src={`./assets/uploads/${product.image}`}
                                alt={product.name}
                                className="sliderImage"
                              />
                            </div>
                            <div className="cartItemsTopHover">
                              <Link
                                to="/product/23234"
                                className="cartItemsLink"
                              >
                                <FaEye />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h3 className="cartItemsName">{product.name}</h3>
                      </td>
                      <td>
                        <span className="cartItemsPrice">
                          TND {product.price}
                        </span>
                      </td>
                      {/* <td>
                        <div className="cartItemsQuantity">
                          <div className="productQuantityRight">
                            <input type="button" value="-" className="minus" />
                            <input
                              type="number"
                              min="1"
                              step="1"
                              value={product.quantity}
                              className="value"
                            />
                            <input type="button" value="+" className="plus" />
                          </div>
                        </div>
                      </td> */}
                      <td>
                        <h4 className="cartItemsPriceSubTotal">
                          TND {(product.price * product.quantity)}
                        </h4>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="cartItemsRight">
            <div className="cartItemsRightDiv">
              <h3 className="cartItemsRightTitle">Cart Totals</h3>
              <div className="cartItemsRightContent">
                <div className="cartItemsRightContentLeft">
                  <span>SubTotal:</span>
                </div>
                <div className="cartItemsRightContentRight">
                  <span>TND {cart.total}</span>
                </div>
              </div>
              <div className="cartItemsRightContent">
                <div className="cartItemsRightContentLeft">
                  <span>Tax 10%:</span>
                </div>
                <div className="cartItemsRightContentRight">
                  <span>TND {taxPrice?.toFixed(0)}</span>
                </div>
              </div>
              <div className="cartItemsRightContent">
                <div className="cartItemsRightContentLeft">
                  <span className="total">Total:</span>
                </div>
                <div className="cartItemsRightContentRight">
                  <span className="totalPrice">TND {finishPrice}</span>
                </div>
              </div>
              {cart.products.length !== 0 && (
                <button className="checkout" onClick={() => setOpen(true)}>
                  Proceed to Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {open && <Checkout setOpen={setOpen} finishPrice={finishPrice} />}
    </div>
  );
};

export default CartItems;
