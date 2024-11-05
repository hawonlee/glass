import Navbar from '../components/Navbar.jsx';
import '../App.css'
import CD from '../components/Cd.jsx'
import Disk from '/disk.png'
import Project from '../components/Project.jsx'
import Menu from '../components/Menu';
import { useNavigate } from 'react-router-dom';
// import Disk from '/disk.png'

function WorkPage() {
    const timelyTags = ['Project', 'Mobile'];

    return (
        <>
            <div className="w-full rounded-t-3xl bg-[#EFEFEF]">
                <Menu />
            </div>
            <div className="flex flex-col w-full rounded-b-3xl bg-[#EFEFEF] overflow-hidden">
                <div className="flex justify-center mt-12 z-0">
                    <CD cd={ Disk }/>
                </div>
            </div>

            <div className="flex flex-row space-x-1">
                <Project count={"01"} image={Disk} title={"timely"} tags={timelyTags} />
                <Project count={"02"} image={Disk} title={"timely"} tags={timelyTags} />
            </div>
        </>
    )
}

export default WorkPage;