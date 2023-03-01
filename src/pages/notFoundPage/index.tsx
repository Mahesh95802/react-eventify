import React from "react"
import Footer from "../../components/footer"
import Header from "../../components/header"
import { ThemeProp } from "../../interfaces/themes"

const NotFoundPage: React.FC<ThemeProp> = (prop) => {
    return (
        <div>
            <Header />
            Page not Found.
            <Footer {...prop as ThemeProp}/>
        </div>
    )
}

export default NotFoundPage