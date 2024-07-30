// src/components/RazerPay.js
import React, { useState } from 'react';

const RazerPay = () => {
    const [orderID, setOrderID] = useState(null);

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const fetchOrderID = async () => {
        const response = await fetch('https://aisoft-payment-production-4340.up.railway.app/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: 500 }), 
        });
        const data = await response.json();
        setOrderID(data.id);
    };

    const displayRazerPay = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Razer Pay SDK failed to load.');
            return;
        }

        if (!orderID) {
            await fetchOrderID();
        }

        const options = {
            key: 'rzp_live_gwN4MYAKKclYZW',
            amount: 249*100, 
            currency: 'INR', 
            order_id: orderID, 
            name: 'Aisoft Software Solution',
            description: 'Test Transaction',
            //  image: '../../Images/AISOFTLOGO.jpg',
            image: '../../Images/ICON/LOGO.png',
            handler: function (response) {
                alert(`Payment ID: ${response.razorpay_payment_id}`);
                alert(`Order ID: ${response.razorpay_order_id}`);
                alert(`Signature: ${response.razorpay_signature}`);
            },
            prefill: {
                name: 'John Doe',
                email: 'john.doe@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Corporate Office',
            },
            theme: {
                color: '#F37254',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div>
            <button onClick={displayRazerPay}>Pay with Razer Pay</button>
        </div>
    );
};

export default RazerPay;
