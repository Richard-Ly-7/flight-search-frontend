import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import FlightList from '../components/FlightList';
import NoResults from '../components/NoResults';
import NavigateButton from '../components/NavigateButton';
import Spinner from 'react-bootstrap/Spinner'; 

export default function Results() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const from = searchParams.get('from');
    const to = searchParams.get('to');

    const [flights, setFlights] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const api = import.meta.env.VITE_API_URL;
        fetch(`${api}/flights?from=${from}&to=${to}`)
            .then((res) => res.json())
            .then((data) => {
                setFlights(data.data); //use .data only if paginated
                setIsLoading(false);
            });
    }, [from, to]);

    if (isLoading){
        return (
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <Spinner animation='border' role='status' variant='primary'>
                    <span className='visually-hidden'>Loading flights...</span>
                </Spinner>
            </div>
            );
    }
    if(flights.length === 0) {
        return <NoResults from={from} to={to} navigate={navigate} />;
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center vh-100 m-5'>
            <h2 className='mb-5'>Flights from {from} to {to}</h2>
            <FlightList flights={flights} />
            <NavigateButton url='' />
        </div>
    );
}