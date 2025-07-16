import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/results?from=${from}&to=${to}`);
    };

    return (
        <form onSubmit={handleSubmit} className='p-3'>
            <label className='d-flex justify-content-between'>
                <span className='mx-3'>From:</span>
                <input type='text' value={from} onChange={(e) => setFrom(e.target.value)} required />
            </label>
            <br />
            <label className='d-flex justify-content-between'>
                <span className='mx-3'>To:</span>
                <input type='text' value={to} onChange={(e) => setTo(e.target.value)} required />
            </label>
            <br />
            <button type='submit' className='btn btn-lg btn-primary'>Search Flights</button>
        </form>
    );
}