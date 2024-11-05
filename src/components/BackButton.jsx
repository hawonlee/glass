import { useNavigate } from 'react-router-dom';
import arrow from '/arrow.svg'

function BackButton() {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className="flex justify-center items-center w-6">
            <img src={arrow} alt="Logo"></img>
        </button>
    );
}

export default BackButton;
