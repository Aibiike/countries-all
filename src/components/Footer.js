import React from 'react';

import {Link} from "react-router-dom";

const Footer = () => {
    return (
            <footer className="footer bg-white relative pt-1 border-t-2 border-blue-700 ">
                <div className="container mx-auto px-6">
                    <div className="sm:flex sm:mt-8">
                        <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                            <div className="flex mx-auto ">
                                <span className="my-2"><Link to='/' className="text-blue-900  text-md hover:text-blue-200 text-2xl mr-5">Home</Link></span>
                                <span className="my-2"><Link to='/countries' className="text-blue-900  text-md hover:text-blue-200 text-2xl mr-5">Countries</Link></span>
                                <span className="my-2"><Link to='/galleries' className="text-blue-900 text-md hover:text-blue-200 text-2xl mr-5">Gallery</Link></span>
                                <span className="my-2"><Link to='/galleries' className="text-blue-900 text-md hover:text-blue-200 text-2xl mr-5">Top</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-6">
                    <div className="mt-16 border-t-2 border-blue-700 flex flex-col items-center">
                        <div className="sm:w-2/3 text-center py-6">
                            <p className="text-sm text-blue-700 font-bold mb-2">
                                © 2021 by Crocko Laco Team
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;