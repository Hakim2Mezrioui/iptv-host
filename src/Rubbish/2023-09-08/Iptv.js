import React, { useState }from "react";

let IptvContext = React.createContext({
    isPaymentPage: false,
    checkPaymentPage: () => {}
});

export let IptvContextProvider = (props) => {
    const [isPaymentPage, setPaymentPage] = useState(false);

    let onCheckPaymentPage = (value) => {
        setPaymentPage(value);
        console.log(isPaymentPage);
    }

    return (
        <IptvContext.Provider value={{
            isPaymentPage: isPaymentPage,
            checkPaymentPage: onCheckPaymentPage
        }}>
            {props.children}
        </IptvContext.Provider>
    )
}

export default IptvContext;