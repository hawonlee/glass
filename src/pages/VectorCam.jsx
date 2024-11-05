import Navbar from '../components/Navbar.jsx';
import '../App.css'
import CD from '../components/Cd.jsx'
import Disk from '/disk.png'
import Project from '../components/Project.jsx'
import arrow from '/arrow.svg'
import VectorCam1 from '/VectorCam1.png'
import VectorCam2 from '/VectorCam2.png'
import VectorCam3 from '/VectorCam3.png'
import VectorCamUserFlow from '/VectorCamUserFlow.png'
import BackButton from '../components/BackButton.jsx'
import { useEffect } from 'react';

function VectorCam() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 h-auto">
                <div>
                    {/* first cell */}
                    <div className="flex flex-col rounded-3xl bg-[#EFEFEF] pt-8 pl-8 pr-10 pb-10 mb-1">
                        <div className="flex flex-row justify-between items-center">
                            <BackButton />
                            <Navbar />
                        </div>

                        <div className="h-72" />

                        <div className="text-left">
                            <div className="text-7xl mb-10">
                                VectorCam
                            </div>

                            <div className="grid grid-cols-[15%_80%] gap-5">
                                <div className="font-bold">
                                    About
                                </div>
                                <div>
                                    As a team lead in Johns Hopkins’ UI/UX club, JHUXplore, I led a team of five students to conduct user research and improve the user experience of a local non-profit organization’s mobile application. We conducted user interviews, met with stakeholders, and designed the interface on Figma. We focused on the UX of the app’s camera function, making gestures and buttons more intuitive and adding more user feedback aspects.
                                </div>
                                <div className="font-bold">
                                    Work
                                </div>
                                <div>
                                    UI/UX Research & Design
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
                    <div className="flex flex-col text-left rounded-3xl bg-[#EFEFEF] space-x-1 pt-8 pl-8 pr-10 pb-10 mb-1">
                        <div className="text-7xl mt-6 mb-10">
                            Background
                        </div>

                        <div className="font-bold">
                            What is VectorCam?
                        </div>

                        <div>
                            VectorCam is a tool that aims to aid malaria prevention and elimination in sub-Saharan Africa by simplifying the mosquito identification process. It allows users to take photos of mosquitos with a smartphone, and using computer vision models, provides characteristics of the specimen.
                        </div>

                        <br>
                        </br>

                        <div className="font-bold">
                            Problem
                        </div>

                        <div>
                            The interface of the app's camera was clustered, lacked structure, and had inconsistent style, disturbing user flow. In addition, there was little feedback regarding the photos that were taken, resulting in poor sample photos.
                        </div>

                    </div>

                </div>

                <div>
                    <div className="sticky top-0 flex justify-center items-center h-[calc(100vh-8px)] rounded-3xl bg-[#EFEFEF] space-x-1 mb-1">
                        <div className="h-9/12 w-9/12 p-6">
                            <img src={VectorCam1} alt="VectorCam" />
                        </div>
                    </div>
                </div>

            </div>


            <div className="flex flex-col text-left rounded-3xl bg-[#EFEFEF] space-x-1 pt-8 pl-8 pr-10 pb-10 mb-1">
                <div className="text-7xl mt-6 mb-10">
                    Research
                </div>

                <div className="font-bold">
                    User Research
                </div>

                <div className="md:w-1/2">
                    The target users for this project were those who lack access to internet and technology. Accordingly, we focused on implementing clear icons and intuitive gestures.
                </div>

                <br>
                </br>

                <div className="font-bold">
                    User Flow
                </div>

                <div className="w-full p-6">
                    <img src={VectorCamUserFlow} alt="VectorCam" />
                </div>
            </div>

            <div className="grid md:grid-cols-[40%_60%] gap-1">
                <div className="flex flex-col text-left rounded-3xl bg-[#EFEFEF] space-x-1 pt-8 pl-8 pr-10 pb-10 md:mb-1">
                    <div className="text-7xl mt-6 mb-10 font-thin">
                        Features & Decisions
                    </div>

                    <div className="font-bold">
                        Solution
                    </div>

                    <div className="">
                        We consolidated the functions of the camera, eliminating unnecessary buttons and decluttering the interface. We also layered relevant information concerning the mosquito onto the camera screen, allowing users to maintain focus on a single element.
                    </div>

                    <br>
                    </br>

                    <div className="font-bold">
                        User Feedback
                    </div>

                    <div className="">
                        To provide feedback to the user, we came up with a system that displays the quality of a image through a colored square around the mosquito and a percentage. This percentage would be based on the sharpness and composition of the photo, and how well the specimen in the photo can be assessed by the computer vision models.

                    </div>

                </div>

                <div className="flex justify-center items-center rounded-3xl bg-[#EFEFEF] space-x-1 mr-1 mb-1">
                    <div className="w-full p-6">
                        <img src={VectorCam2} alt="VectorCam" />
                        <img src={VectorCam3} alt="VectorCam" />
                    </div>
                </div>

            </div>

        </>
    )
}

export default VectorCam;