import React from 'react';
import {Animated} from "react-animated-css"
import Header from "../components/Header";

const HomePages = () => {
    return (
        <>
            <Header/>
            <div className='hero flex items-end text-center'>
                <Animated animationIn="lightSpeedIn" isVisible={true}>
                    <div className='bg-white rounded-t-full w-600 p-20 bg-opacity-70 2xl: hidden'>
                        <h1 className='hero__title text-blue-900 my-auto mt-8'>Welcome to <br/> our page</h1>
                    </div>
                </Animated>
            </div>
        </>

    );
};

export default HomePages;