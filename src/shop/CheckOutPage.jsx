import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useLocation, useNavigate } from 'react-router-dom';
import "../components/modal.css";

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    // Direct to home page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleOrderConfirm = () => {
        alert("Your Order is placed successfully");
        localStorage.removeItem("cart");
        navigate(from, { replace: true });
    };

    return (
        <div className='modalCard'>
            <Button variant="primary" className='py-2' onClick={handleShow}>
                Proceed to Checkout
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className='modal fade'
                centered
            >
                <div className='modal-dialog'>
                    <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
                    <div className='modal-content'>
                        <div className='modal-body'>
                            <div className="tabs mt-3">
                                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <a 
                                            href="#visa" 
                                            className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                                            id='visa-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='visa'
                                            aria-selected={activeTab === "visa"}
                                            onClick={() => handleTabChange("visa")}
                                        >
                                            <img src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/15343b77-ac9c-41f9-992d-d95ac337a90c/Footer/Resource/Learning%20Centre/Pay%20Detail%20Pages/Credit%20Card/What%20is%20the%20Difference%20Between%20Visa%20and%20MasterCard/banner.png" alt="" width="80"/>
                                        </a>
                                    </li>

                                    <li className='nav-item' role='presentation'>
                                        <a 
                                            href="#paypal" 
                                            className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                                            id='paypal-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='paypal'
                                            aria-selected={activeTab === "paypal"}
                                            onClick={() => handleTabChange("paypal")}
                                        >
                                            <img src="https://i.pinimg.com/736x/76/0d/47/760d4774c0f800c0e8488a4d5d76efc5.jpg" alt="" width="80" />
                                        </a>
                                    </li>
                                </ul>

                                {/* Contents */}
                                <div className='tab-content' id='myTabContent'>
                                    {/* Visa Contents */}
                                    <div 
                                        className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                                        id='visa'
                                        role='tabpanel'
                                        aria-labelledby='visa-tab'
                                    >
                                        <div className='mt-4 mx-4'>
                                            <div className='text-center'>
                                                <h5>Credit card</h5>
                                            </div>
                                            <div className='form mt-3'>
                                                <div className='inputbox'>
                                                    <input type="text" name="name" id="name" className='form-control' required />
                                                    <span>Cardholder Name</span>
                                                </div>
                                                <div className='inputbox'>
                                                    <input type="text" name="number" id="number" className='form-control' required />
                                                    <span>Card Number</span><i className='fa fa-eye'></i>
                                                </div>
                                                <div className='d-flex flex-row'>
                                                    <div className='inputbox'>
                                                        <input type="text" name="expiry" id="expiry" className='form-control' required />
                                                        <span>Expiration Date</span>
                                                    </div>
                                                    <div className='inputbox'>
                                                        <input type="text" name="cvv" id="cvv" className='form-control' required />
                                                        <span>CVV</span>
                                                    </div>
                                                </div>
                                                <div className='px-5 pay'>
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>
                                                        Order Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* PayPal Contents */}
                                    <div 
                                        className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                                        id='paypal'
                                        role='tabpanel'
                                        aria-labelledby='paypal-tab'
                                    >
                                        <div className='mt-4 mx-4'>
                                            <div className='text-center'>
                                                <h5>Paypal Account Info</h5>
                                            </div>
                                            <div className='form mt-3'>
                                                <div className='inputbox'>
                                                    <input type="email" name="email" id="email" className='form-control' required />
                                                    <span>Enter Your Email</span>
                                                </div>
                                                <div className='inputbox'>
                                                    <input type="text" name="name" id="name" className='form-control' required />
                                                    <span>Your Name</span><i className='fa fa-eye'></i>
                                                </div>
                                                <div className='d-flex flex-row'>
                                                    <div className='inputbox'>
                                                        <input type="text" name="extraInfo" id="extraInfo" className='form-control' required />
                                                        <span>Extra Info</span>
                                                    </div>
                                                </div>
                                                <div className='px-5 pay'>
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>
                                                        Add PayPal
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Disclaimer */}
                                <p className='mt-3 px-4 p-Disclaimer'>
                                    <em>Payment Disclaimer: In no event shall payment or partial payment by owner for any material or service...</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CheckOutPage;
