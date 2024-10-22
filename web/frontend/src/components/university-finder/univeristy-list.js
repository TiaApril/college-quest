import React, { useState } from 'react';
import './university-list.css'


const UniversityList = () => {
    const [universities, setUniversities] = useState([
        { name: 'Harvard University', location: 'Cambridge, MA', founded: 1636 },
        { name: 'Stanford University', location: 'Stanford, CA', founded: 1885 },
        { name: 'Massachusetts Institute of Technology', location: 'Cambridge, MA', founded: 1861 },
        { name: 'California Institute of Technology', location: 'Pasadena, CA', founded: 1891 },
        { name: 'University of Oxford', location: 'Oxford, England', founded: 1096 },
        { name: 'University of Cambridge', location: 'Cambridge, England', founded: 1209 },
        { name: 'Princeton University', location: 'Princeton, NJ', founded: 1746 },
        { name: 'Yale University', location: 'New Haven, CT', founded: 1701 },
        { name: 'University of Chicago', location: 'Chicago, IL', founded: 1890 },
        { name: 'Columbia University', location: 'New York, NY', founded: 1754 }
    ]);

    const [filter, setFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSortChange = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const handleCardClick = (university) => {
        // Assuming you have a route set up for university details
        window.location.href = `/university/${university.name.replace(/\s+/g, '-').toLowerCase()}`;
    };

    const [filterType, setFilterType] = useState('name');

    const handleFilterTypeChange = (e) => {
        setFilterType(e.target.value);
    };

    const filteredUniversities = universities
        .filter(university => {
            if (filterType === 'name') {
                return university.name.toLowerCase().includes(filter.toLowerCase());
            } else if (filterType === 'city') {
                return university.location.toLowerCase().includes(filter.toLowerCase());
            } else if (filterType === 'country') {
                return university.location.toLowerCase().includes(filter.toLowerCase());
            }
            return true;
        })
        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

    return (
        <div className="university-list-container">
            <input 
                type="text" 
                placeholder="Search universities by name, city, or country" 
                value={filter} 
                onChange={handleFilterChange} 
                className="filter-input"
            />
            <button onClick={handleSortChange} className="sort-button">
                Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
            </button>
            <div className="university-cards">
                {filteredUniversities.map((university, index) => (
                    <div 
                        key={index} 
                        className="university-card" 
                        onClick={() => handleCardClick(university)}
                    >
                        <h3>{university.name}</h3>
                        <p>Location: {university.location}</p>
                        <p>Founded: {university.founded}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UniversityList;