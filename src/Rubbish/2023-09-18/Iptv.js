import React, { useState, useRef }from "react";

let IptvContext = React.createContext({
    isPaymentPage: false,
    isAdminPage: false,
    homeSection: "",
    subscriptionSection: "",
    contactSection: "",
    checkPaymentPage: () => {},
    checkAdminPage: () => {},
    scrollToSection: () => {}
});

export let IptvContextProvider = (props) => {
    const [isPaymentPage, setPaymentPage] = useState(false);
    const [isAdminPage, setAdminPage] = useState(false);

    const home = useRef();
    const subscription = useRef();
    const contact = useRef();

    const onScrollToSection = (section) => {
        // console.log(section);
        window.scrollTo({
            top: section.current.offsetTop,
            behavior: "smooth",
        })
    }

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
            homeSection: home,
            subscriptionSection: subscription,
            contactSection: contact,
            checkPaymentPage: onCheckPaymentPage,
            checkAdminPage: onCheckAdminPage,
            scrollToSection: onScrollToSection,
        }}>
            {props.children}
        </IptvContext.Provider>
    )
}

export default IptvContext;