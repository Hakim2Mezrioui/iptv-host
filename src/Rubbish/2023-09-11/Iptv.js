import React, { useState }from "react";

let IptvContext = React.createContext({
    isPaymentPage: false,
    isAdminPage: false,
    checkPaymentPage: () => {},
    checkAdminPage: () => {}
});

export let IptvContextProvider = (props) => {
    const [isPaymentPage, setPaymentPage] = useState(false);
    const [isAdminPage, setAdminPage] = useState(false);

    let onCheckPaymentPage = (value) => {
        setPaymentPage(value);
    }

    let onCheckAdminPage = (value) => {
        setAdminPage(value)
    }

    return (
        <IptvContext.Provider value={{
            isPaymentPage: isPaymentPage,
            isAdminPage: isAdminPage,
            checkPaymentPage: onCheckPaymentPage,
            checkAdminPage: onCheckAdminPage,
        }}>
            {props.children}
        </IptvContext.Provider>
    )
}

export default IptvContext;