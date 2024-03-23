import React, { useState, useEffect } from 'react';
import "../Layout.css"
const Hospitals = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');
  const [hospitals, setHospitals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => {
          setError('Error getting user location. Please enable location services in your browser.');
          console.error('Error getting user location:', error);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    setSearchLocation(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className='location-form'>
        <div className="search">
          <input
            type="text"
            placeholder="Enter location"
            value={searchLocation}
            onChange={handleSearch}
          />
          <button type="submit">Search</button>
        </div>
      </form>

      {userLocation ? (
        <div style={{ width: '100%', height: '100%' ,"marginBottom":"20px"}} >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${userLocation.lat},${userLocation.lng}&z=15&output=embed`}
            title="User Location"
          />
        </div>
      ) : (
        <p>{error ? error : 'Loading...'}</p>
      )}

      {hospitals.length > 0 && (
        <div>
          <h2>Nearby Hospitals:</h2>
          <ul>
            {hospitals.map((hospital, index) => (
              <li key={index}>{hospital.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hospitals;
