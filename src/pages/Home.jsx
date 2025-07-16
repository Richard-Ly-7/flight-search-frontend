import SearchForm from '../components/SearchForm';

export default function Home() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
            <h1>Search for Flights</h1>
            <SearchForm />
        </div>
    );
}