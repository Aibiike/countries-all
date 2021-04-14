import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import Layout from "./Layout";
import {Animated} from 'react-animated-css'
import Spinner from "./Spinner";

const CountryDetails = () => {
    const {name} = useParams()
    const [country, setCountry] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(res => {
                setCountry(res.data[0])
                setIsLoading(false)
            })

    }, [])

if (isLoading) return <Spinner />

    return (
        <Layout>
            <section className=" text-gray-700 body-font overflow-hidden bg-white about flex items-center">
                <div className="container px-5 py-24 mx-auto">
                    <Animated animationIn='zoomIn' isVisible={true}>
                        <div className="lg:w-4/5 md:w-1  mx-auto flex flex-wrap">
                            <div
                                className='box h-full flex flex-col align-middle bg-green-600 bg-opacity-70 rounded p-3 text-white border border-gray-500 shadow-lg'>
                                <img alt="ecommerce"
                                     className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 p-5"
                                     src={country?.flag}/>
                                {console.log(country)}
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-10">
                                    <h2 className="text-sm title-font text-white tracking-widest text-white mt-10 ">Country</h2>
                                    <h1 className="text-white text-6xl title-font font-medium mb-1 text-white">{country?.name}</h1>
                                    <p className="leading-relaxed text-white text-2xl">Region: {country?.region}</p>
                                    <p className="leading-relaxed text-white text-2xl">Capital: {country?.capital}</p>
                                    <p className="leading-relaxed text-white text-2xl">Population: {country?.population}</p>
                                    <p className="leading-relaxed text-white text-2xl">Numeric Code: {country?.numericCode}</p>
                                </div>
                            </div>
                        </div>
                    </Animated>
                </div>
            </section>
        </Layout>
    );
};

export default CountryDetails;