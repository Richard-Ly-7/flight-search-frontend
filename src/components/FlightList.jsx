import FlightCard from './FlightCard';

export default function FlightList({ flights }) {
    return (
        <div className='d-flex gap-3'>
            {flights.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
            ))}
        </div>
    );
}