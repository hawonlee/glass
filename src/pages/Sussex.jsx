import Navbar from '../components/Navbar.jsx';
import '../App.css'
import biker from '/timelyBiker.png'
import BackButton from '../components/BackButton.jsx'

import sussex from '/sussex1.png'

import { useEffect } from 'react';

function Sussex() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-1 h-auto">
                {/* first cell */}
                <div className="lg:sticky lg:top-1 flex flex-col rounded-3xl h-[calc(100vh-8px)] bg-[#EFEFEF] pt-8 pl-8 pr-10 pb-10">
                    <div className="flex flex-row justify-between items-center">
                        <BackButton />
                        <Navbar />
                    </div>

                    <div className="h-72" />

                    <div className="text-left">
                        <div className="text-7xl mb-10">
                            Sussex
                        </div>

                        <div className="grid grid-cols-[15%_80%] gap-5">
                            <div className="font-bold">
                                About
                            </div>
                            <div>
                                For this project, I created a landing page mockup for a water purification company. I focused on incorporating curvy details and blue colors that align with the company’s mission, as well as emphasizing their products.
                            </div>
                            <div className="font-bold">
                                Work
                            </div>
                            <div>
                                Web UI Design

                            </div>

                            <div className="font-bold">
                                Tools
                            </div>
                            <div>
                                Figma
                            </div>

                        </div>
                    </div>

                </div>

                {/* second cell */}
                <div className="flex flex-col justify-center items-center rounded-3xl bg-[#EFEFEF] py-12 px-20 mr-1 mb-1">
                    <div className="h-11/12 w-11/12 border border-[#D1CDC9]">
                        <img src={sussex} alt="sussex" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sussex;