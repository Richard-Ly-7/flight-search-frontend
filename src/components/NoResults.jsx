import NavigateButton from './NavigateButton';

export default function NoResults({ from, to }) {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
            <h2 className="mb-5">No Results</h2>
            <p>Sorry, we couldn't find any flights from {from} to {to}.</p>
            <NavigateButton url='' />
        </div>
    );
}