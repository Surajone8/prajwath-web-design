import React from 'react'
// import TotalData from './Data/Totaldata'
import "./HomePage.css"
import Carousel from './Carousel'
import ReservationForm from './ReservationForm'
import Footer from './Footer'

const HomePage = () => {
    // console.log(TotalData[0].bbqs)
    return (
        <>
            {/* <img src={TotalData[1].best_foods[0].img} alt="" /> */}
            <Carousel />
            <ReservationForm />
            <Footer />
        </>
    )
}

export default HomePage