import React, { useState } from 'react';

const TaxiSearch = () => {
  const [startingPoint, setStartingPoint] = useState('');
  const [destination, setDestination] = useState('');
  
  const handleStartingPointChange = (e) => {
    setStartingPoint(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSearch = () => {

    document.write('Searching for taxis from ', startingPoint, ' to ', destination);
  };

  return (
    <div>
      <input type="text" placeholder="Starting Point" value={startingPoint} onChange={handleStartingPointChange} />
      <input type="text" placeholder="Destination" value={destination} onChange={handleDestinationChange} />
      <button onClick={handleSearch}>Search Taxis</button>
    </div>
  );
};

export default TaxiSearch;
