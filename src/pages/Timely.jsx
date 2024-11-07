import Navbar from '../components/Navbar.jsx';
import '../App.css'
import biker from '/timelyBiker.png'
import BackButton from '../components/BackButton.jsx'
import timely0 from '/timely0.png'
import timely1 from '/timely1.png'
import timely2 from '/timely2.png'
import timely3 from '/timely3.png'
import TimelyFigma from '../components/TimelyFigma';
import { useEffect } from 'react';

function Timely() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const prototypeButton = () => {
        console.log("333");
        window.open("https://www.figma.com/proto/GUabBCghEl0PJZEiXepCM8/Time-Zone-Converter?node-id=60-1188&node-type=canvas&t=QaJk6mZn2aSEvXAb-1&scaling=scale-down&content-scaling=fixed&page-id=60%3A1187&starting-point-node-id=60%3A1188", "_blank", "noreferrer");
    }

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 h-auto mb-1">
                {/* first cell */}
                <div className="flex flex-col rounded-3xl bg-[#EFEFEF] pt-8 pl-8 pr-10 pb-10">
                    <div className="flex flex-row justify-between items-center">
                        <BackButton />
                        <Navbar />
                    </div>

                    <div className="h-72" />

                    <div className="text-left">
                        <div className="text-7xl mb-10">
                            Timely
                        </div>

                        <div className="grid grid-cols-[15%_80%] gap-5">
                            <div className="font-bold">
                                About
                            </div>
                            <div>
                                TIMELY is a time converter app that allows travelers to easily convert their local time to their hometown timezone.
                            </div>
                            <div className="font-bold">
                                Work
                            </div>
                            <div>
                                Mobile UI/UX Design
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
                <div className="flex justify-center items-center h-full rounded-3xl bg-[#EFEFEF] space-x-1">
                    <div className="h-8/12 w-8/12 p-6">
                        <img src={timely0} alt="timely0" />
                    </div>
                </div>

                {/* 3 cell */}
                <div className="flex flex-col text-left rounded-3xl bg-[#EFEFEF] pt-8 pl-8 pr-10 pb-10 ">
                    <div className="text-7xl mt-6 mb-10">
                        Research
                    </div>

                    <div className="font-bold">
                        Competitor Analysis
                    </div>

                    <div className="">
                        Before creating the design, I looked at existing time converter app to identify trends and gaps that are yet to be addressed. I found that most apps do not have a main element displaying the time of a chosen "main" timezone. Thus, upon opening the app, the eyes must wander over the screen to find a specific timezone.
                    </div>

                    <br>
                    </br>

                    <div className="font-bold">
                        User Persona
                    </div>

                    <div className="">
                        To better understand the user's perspective, I created a user persona to represent a potential user's pain points, needs, and behaviors.
                    </div>
                </div>

                {/* 4 cell */}
                <div className="flex flex-col text-left rounded-3xl bg-[#F1EBF1] text-[#6B0000] pt-16 pb-20 px-20">
                    <div className="flex items-center">
                        <div className="h-2/12 w-2/12 pr-4 pt-4 pb-4 mr-4 mb-4">
                            <img src={biker} alt="biker" />
                        </div>

                        <div className="flex flex-col">
                            <div className="font-bold">Amy<span className="font-normal">, Female 32</span></div>
                            <div>Professional Cyclist</div>
                        </div>
                    </div>

                    <div>Fred is a professional cyclist who frequently travels to compete in races. He has family all over the world, and wants to keep in touch with them through phone calls. To do so, he often finds himself needing to convert his local time to multiple other time zones, which has become a tedious task.</div>
                    <br></br>
                    <div className="font-bold">Pain Points</div>
                    <ul className="list-disc list-inside">
                        <li>Having to do multiple time conversions.</li>
                        <li>Mentally keeping track of different time zones.</li>
                    </ul>

                </div>

            </div>

            <div className="grid md:grid-cols-[40%_60%] gap-1">
                <div className="md:sticky md:top-1 md:h-[calc(100vh-7px)] flex flex-col text-left rounded-3xl bg-[#EFEFEF] space-x-1 pt-8 pl-8 pr-10 pb-10 md:mb-1">
                    <div className="text-7xl mt-6 mb-10 font-thin">
                        Design
                    </div>

                    <div className="font-bold">
                        Features
                    </div>

                    <div className="">
                        The time of one "main" timezone is displayed at the top of the page, making it easy for the user to see the time conversions.
                    </div>
                    <br></br>

                    <button onClick={() => prototypeButton()} className="flex w-fit transition ease-in-out px-4 py-2 border hover:border-[#2A2927] hover:bg-[#EFEFEF] hover:text-[#2A2927] rounded-full bg-[#2A2927] text-[#EFEFEF]">
                        <div >Test Prototype</div>
                    </button>

                    {/* 
                    <div className="w-96">
                        <iframe src="https://embed.figma.com/proto/R6hV0DU3Zmwh67ysog1wwb/Timely?node-id=1-37&node-type=canvas&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A37&embed-host=share&client-id=qRCEe8jfVDi2xd0mmrZhW9" allowFullScreen>
                        </iframe>
                    </div> */}

                    {/* 
                    <br>
                    </br>

                    <div className="font-bold">
                        User Feedback
                    </div>

                    <div className="">
                        To provide feedback to the user, we came up with a system that displays the quality of a image through a colored square around the mosquito and a percentage. This percentage would be based on the sharpness and composition of the photo, and how well the specimen in the photo can be assessed by the computer vision models.

                    </div> */}

                </div>

                <div className="flex flex-col justify-center rounded-3xl bg-[#EFEFEF] mr-1 mb-1">
                    <div className="flex flex-row justify-center items-center space-between">
                        <div className="w-60 text-left pl-20">Input your local time zone, time, and date</div>
                        <div className="w-9/12 pr-4"><img src={timely1} alt="timely1" /></div>
                    </div>
                    <div className="flex flex-row justify-center items-center space-between">
                        <div className="w-9/12 pl-4"><img src={timely2} alt="timely3" /></div>
                        <div className="w-60 text-right pr-20">Add a different time zone for conversion.</div>
                    </div>
                    <div className="flex flex-row justify-center items-center space-between">
                        <div className="w-60 text-left pl-20">Manage your list of time zones as needed.</div>
                        <div className="w-9/12 pr-4"><img src={timely3} alt="timely3" /></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Timely;