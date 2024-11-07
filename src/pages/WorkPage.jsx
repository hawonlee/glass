import Navbar from '../components/Navbar.jsx';
import '../App.css'
import CD from '../components/Cd.jsx'
import Disk from '/disk.png'
import Project from '../components/Project.jsx'
import Menu from '../components/Menu';
import VectorCam from '/VectorCam0.png'
import Timely from '/timely0.png'
import KoreaTown from '/koreaTown1.png'
import Sussex from '/sussex0.png'
import { useNavigate } from 'react-router-dom';
// import Disk from '/disk.png'

function WorkPage() {
    const vectorTags = ['UI/UX Design', 'Mobile'];
    const timelyTags = ['UI/UX Design', 'Mobile'];
    const ktwownTags = ['UI/UX Design', 'Mobile'];
    const susTags = ['UI/UX Design', 'Mobile'];

    return (
        <>
            <div className="w-full rounded-t-3xl bg-[#EFEFEF]">
                <Menu />
            </div>
            <div className="flex flex-col w-full rounded-b-3xl bg-[#EFEFEF] overflow-hidden mb-1">
                <div className="flex justify-center mt-12 z-0">
                    <CD cd={Disk} />
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 h-auto">
                <Project count={"01"} image={VectorCam} title={"VectorCam"} tags={vectorTags} page={'/vectorcam'} paddingX={'7rem'} paddingY={'0rem'}/>
                <Project count={"02"} image={Timely} title={"Timely"} tags={timelyTags} page={'/timely'} paddingX={'6rem'} paddingY={'0rem'}/>
                <Project count={"03"} image={KoreaTown} title={"KoreaTown"} tags={ktwownTags} page={'/koreatown'} paddingX={'3rem'} paddingY={'1.5rem'}/>
                <Project count={"03"} image={Sussex} title={"Sussex"} tags={susTags} page={'/sussex'} paddingX={'3rem'} paddingY={'1.5rem'}/>
            </div>

            <div className="h-1"></div>

            {/* <div className="flex flex-row space-x-1">
                <Project count={"01"} image={Disk} title={"timely"} tags={timelyTags} />
                <Project count={"02"} image={Disk} title={"timely"} tags={timelyTags} />
            </div> */}
        </>
    )
}

export default WorkPage;