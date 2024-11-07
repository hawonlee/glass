import Navbar from '../components/Navbar.jsx';
import '../App.css'
import BackButton from '../components/BackButton.jsx'

import koreaTown1 from '/koreaTown1.png'
import koreaTown2 from '/koreaTown2.png'

import { useEffect } from 'react';

function KoreaTown() {

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
                            Koreatown
                        </div>

                        <div className="grid grid-cols-[15%_80%] gap-5">
                            <div className="font-bold">
                                About
                            </div>
                            <div>
                                I created a map brochure of Korean businesses in Koreatown Ellicot City for the Korean Society of Maryland and Howard County Travel department. The businesses are categorized into the following: Food, Dessert, Shopping, and Things To Do. While creating this brochure, I maintained the perspective of a visitor who wants to experience and learn more about Korean culture.
                            </div>
                            <div className="font-bold">
                                Work
                            </div>
                            <div>
                                Brochure Design

                            </div>

                            <div className="font-bold">
                                Tools
                            </div>
                            <div>
                                Figma, Adobe Illustrator

                            </div>

                        </div>
                    </div>

                </div>

                {/* second cell */}
                <div className="flex flex-col justify-center items-center rounded-3xl bg-[#EFEFEF] py-12 px-20 space-y-8 mr-1 mb-1">
                    <div className="h-11/12 w-11/12 border border-[#D1CDC9]">
                        <img src={koreaTown1} alt="koreaTown" />
                    </div>

                    <div className="h-11/12 w-11/12 border border-[#D1CDC9]">
                        <img src={koreaTown2} alt="koreaTown" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default KoreaTown;