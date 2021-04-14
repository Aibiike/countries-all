import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {Animated} from "react-animated-css";
import Layout from "./Layout";
import Spinner from "./Spinner";
import Alert from "./Alert";


const SearchList = () => {
    const {name} = useParams()
    const [searchList, setSearchList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        axios(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(({data}) => {
                setSearchList(data)
                setIsLoading(false)
            })
            .catch(() => {
                setIsError(true)
            })
    }, [name])

    if (isError) return <Alert/>

    if (isLoading) return <Spinner/>
    return (
        <Layout>
            <section className=' bg-gradient-to-r from-green-400 to-blue-900 pb-20 h-full'>
                <div className='container mx-auto'>
                    <div className='flex flex-wrap  -mx-10  my-2 flex  justify-center'>
                        {
                            searchList.map(el => (
                                <div key={el.alpha2Code} className=' backdrop w-10/12 md:w-1/4  mt-20 mx-10'>
                                    <Link to={`/countries/${el.name}`}>
                                        <Animated animationIn='rotateIn' isVisible={true}>
                                            <div
                                                className='box h-full flex flex-col align-middle bg-white bg-opacity-10 rounded p-3 text-white border border-gray-300 shadow-lg cards '>
                                                <img className="w-100 h-60 " src={el.flag} alt="flags"/>
                                                <div className="text-center">
                                                    <div className="px-6 py-4">
                                                        <div
                                                            className="font-bold text-xl  text-4xl mb-3">{el.name}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Animated>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </Layout>
    );
};

export default SearchList;