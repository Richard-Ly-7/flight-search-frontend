import { useNavigate } from 'react-router-dom';

export default function NavigateButton({ url }){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${url}`);
    }

    return (
        <button type="button" onClick={handleClick} className='btn btn-lg btn-primary mt-4'>Return To Home</button>
    );
}