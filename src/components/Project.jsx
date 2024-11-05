import Navbar from '../components/Navbar.jsx';
import '../App.css'
import CD from '../components/Cd.jsx'
import React, { useState } from "react";
import Disk from '/disk.png'
import Menu from '../components/Menu';
import { useNavigate } from 'react-router-dom';

function Project(props) {
    const tags = props.tags || [];
    // props: image, title, description, tags

    const navigate = useNavigate();

    const handleProjectClick = (projectName) => {
        navigate(projectName);
    };

    return (
        <>
            <div className="flex flex-col w-1/2 rounded-3xl bg-[#EFEFEF] mt-1 mb-1 overflow-hidden">
                <div className="flex text-sm justify-end pt-5 pr-6">
                    {props.count}
                </div>

                <div className="p-6">
                    <img src={props.image} alt="Logo" onClick={() => handleProjectClick('/vectorcam')} className="cursor-pointer"/>
                </div>

                <div className="flex flex-row text-sm font-light pl-6">
                    <div className="h-4 w-4 mr-2">
                        <img src={props.image} alt="Logo" />
                    </div>

                    {props.title}
                </div>

                <div className="flex pt-2 pl-6 pb-6">
                    {tags.map((tag, index) => (
                        <div key={index} className="flex text-xs text-[#FFFFFF] rounded-full px-6 py-1 bg-[#B7B3AF] mr-2">{tag}</div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Project;