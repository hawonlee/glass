import React from "react";
import ReactDOM from "react-dom";
import './Menu.css'
import Navbar from '../components/Navbar'

function Menu() {

    const currDate = new Date().toLocaleDateString();

    const onClickMusic = () => {
        window.open("https://open.spotify.com/artist/6R5n86gJJwS69t22FAW27M?si=Xf9ffCDAQiuaR59rf-nsbQ", "_blank", "noreferrer");
    }


    return (
        <div className="w-full flex justify-center h-auto flex text-sm sticky top-0 px-10 py-8">
            <div className='flex flex-row justify-start text-left w-full'>
                <div className='text-sm text-black'>
                    <p>Hawon Lee &nbsp;</p>
                </div>
                <div className='text-sm text-[#9A9A9A]'>
                    (이하원)
                </div>
            </div>

            <div className='flex justify-center w-full'>
                <Navbar />
            </div>

            <div className='flex w-full justify-end'>

                <nav className="menu" onClick={() => onClickMusic()}>
                    <div className="menu__item">
                        <div className="marquee">
                            <div className="marquee__inner">
                                <span> * + :｡ .｡˚ · • * . ° . </span>
                                <span> * + :｡ .｡˚ · • * . ° . </span>
                                <span> * + :｡ .｡˚ · • * . ° . </span>
                                <span> * + :｡ .｡˚ · • * . ° . </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>



            {/* <div className='time-container'>
        <div className='loop'>
          <div className='loop-slide'>
            <div className='time'>*</div>
          </div>
          <div className='loop-slide'>
            <div className='time'>*</div>
          </div>
        </div>


      </div> */}

        </div>


    )
}

export default Menu
