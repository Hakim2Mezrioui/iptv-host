import React, { useState, useRef }from "react";

let IptvContext = React.createContext({
    isPaymentPage: false,
    isAdminPage: false,
    homeSection: "",
    subscriptionSection: "",
    contactSection: "",
    abonnement: {},
    setAbonnement: () => {},
    checkPaymentPage: () => {},
    checkAdminPage: () => {},
    scrollToSection: () => {}
});

export let IptvContextProvider = (props) => {
    const [isPaymentPage, setPaymentPage] = useState(false);
    const [isAdminPage, setAdminPage] = useState(false);
    const [abonnement, setAbonnement] = useState();

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

    let onSetAbonnement = (data) => {
        setAbonnement(data);
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
            abonnement: abonnement,
            checkPaymentPage: onCheckPaymentPage,
            checkAdminPage: onCheckAdminPage,
            scrollToSection: onScrollToSection,
            setAbonnement: onSetAbonnement,
        }}>
            {props.children}
        </IptvContext.Provider>
    )
}

export default IptvContext;