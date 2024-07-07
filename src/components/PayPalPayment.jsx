import { PayPalButtons } from "@paypal/react-paypal-js";


const PayPalPayment = () =>{
    const serverUrl = "http://localhost:5173";
    const createOrder = (productos) => {
       
        return fetch({serverUrl}+"/my-server/capture-paypal-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    cart: Object.productos(input).map(([id, quantity]) => ({
                        id,
                        quantity
                      })),
                }),
            })
            .then((response) => response.json())
            .then((order) => order.id);
    };
    const onApprove = (data) => {
        return fetch({serverUrl}+"/my-server/capture-paypal-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    orderID: data.orderID
                })
            })
            .then((response) => response.json());
    };
    return(<>
    <PayPalButtons
        
        />
        </>
    );
}

export default PayPalPayment