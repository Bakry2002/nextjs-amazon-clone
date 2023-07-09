import { ReactElement } from "react"

import Footer from "./Footer"
import BottomHeader from "./header/BottomHeader"
import Header from "./header/Header"

interface props {
    children: React.ReactElement
}

function RootLayout({children} : props) {
    return (
        <>
            <Header/>
            <BottomHeader/>
            {children}
            <Footer/>
        </>
    )
}

export default RootLayout