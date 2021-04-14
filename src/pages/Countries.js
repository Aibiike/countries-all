import React, {useState, useEffect} from 'react';
import axios from "axios";
import Pagination from "../components/Pagination";
import CountryCard from "../components/CountryCard";
import Layout from "../components/Layout";


const Countries = () => {
    const [countries, setCountries] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        axios('https://restcountries.eu/rest/v2/all')
            .then(res => setCountries(res.data))
    }, [])
    const pagesCount = Math.ceil(countries.length / 40)
    const viewCountries = countries.slice((currentPage - 1) * 40, currentPage * 40)


    return (
        <Layout>
            <section className='hero bg-gradient-to-r from-green-400 to-blue-900 pb-20'>
                <div className='container mx-auto '>
                    <div className='flex flex-wrap  -mx-10  my-2 flex  justify-center'>
                        {
                            viewCountries.map(country => (
                                <CountryCard country={country}/>
                            ))
                        }
                    </div>
                    <Pagination setCurrentPage={setCurrentPage} pagesCount={pagesCount}/>
                </div>
            </section>
        </Layout>
    );
};

export default Countries
