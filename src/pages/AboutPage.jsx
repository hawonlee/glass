import Navbar from '../components/Navbar.jsx';
import '../App.css'
import Menu from '../components/Menu';
import CD from '../components/Cd.jsx'
import Disk from '/disk2.png'

function AboutPage() {

  return (
    <>
      <div className="w-full rounded-3xl bg-[#EFEFEF]">
        <Menu />
      </div>

      <div className="h-1"></div>

      <div className="grid grid-cols-2 xl:grid-cols-2 gap-1 h-auto">
      {/* h-[calc(43.89vh)] */}
        <div className="flex flex-col text-left justify-end rounded-3xl h-[calc(88.2vh)] md:h-[calc(88.2vh)] bg-[#EFEFEF] pt-8 pl-8 pr-10 pb-10 overflow-hidden">
          <div className="text-7xl mb-10">
            About Me
          </div>
          <p>
            Hi! I'm Hawon, a third year student at Johns Hopkins University studying Computer Science, Cognitive Science, and Visual Arts. I am passionate about the intersection of these three fields, where I can create designs that are both visually appealing and user-centered.
          </p>
          <br></br>
          <p>
            Outside of design, I enjoy photography and producing music.
          </p>
          <br></br>
          <p>
            Email
          </p>
        </div>

        <div className="flex flex-col justify-center items-center rounded-3xl h-[calc(88.2vh)] md:h-[calc(88.2vh)] bg-[#EFEFEF] mb-1 overflow-hidden">
          <div className="w-[350px] h-[350px] xl:w-[650px] xl:h-[650px] flex items-center justify-center">
            <img
              src={Disk}
              alt={"disk"}
              className="w-full h-full object-cover animate-spin-slow"
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default AboutPage;