import React, { useState } from 'react';

const UniversityFinder = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const response = await fetch(`https://api.example.com/universities?city=${city}&country=${country}`);
        const data = await response.json();
        setResults(data);
    };

    return (
        <div>
            <h1>University Finder</h1>
            <div>
                <label>
                    City:
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Country:
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                </label>
            </div>
            <button onClick={handleSearch}>Search</button>
            <div>
                <h2>Results</h2>
                <ul>
                    {results.map((university, index) => (
                        <li key={index}>{university.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UniversityFinder;