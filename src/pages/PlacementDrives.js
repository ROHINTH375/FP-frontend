// src/pages/PlacementDrives.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PlacementDrives() {
  const [drives, setDrives] = useState([]);
  const [newDrive, setNewDrive] = useState({
    name: '',
    date: '',
    location: '',
    description: '',
  });

  useEffect(() => {
    fetchDrives();
  }, []);

  const fetchDrives = async () => {
    try {
      const response = await axios.get('/api/placement-drives');
      setDrives(response.data);
    } catch (error) {
      console.error('Error fetching placement drives:', error);
    }
  };

  const createDrive = async () => {
    try {
      const response = await axios.post('/api/placement-drives/create', newDrive);
      setDrives([...drives, response.data.drive]);
      setNewDrive({ name: '', date: '', location: '', description: '' });
    } catch (error) {
      console.error('Error creating placement drive:', error);
    }
  };

  return (
    <div className="placement-drives">
      <h1>Placement Drives</h1>
      <div>
        <h2>Create New Drive</h2>
        <input
          type="text"
          placeholder="Drive Name"
          value={newDrive.name}
          onChange={(e) => setNewDrive({ ...newDrive, name: e.target.value })}
        />
        <input
          type="date"
          placeholder="Date"
          value={newDrive.date}
          onChange={(e) => setNewDrive({ ...newDrive, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newDrive.location}
          onChange={(e) => setNewDrive({ ...newDrive, location: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newDrive.description}
          onChange={(e) => setNewDrive({ ...newDrive, description: e.target.value })}
        />
        <button onClick={createDrive}>Create Drive</button>
      </div>
      <h2>All Placement Drives</h2>
      <ul>
        {drives.map((drive) => (
          <li key={drive._id}>
            <h3>{drive.name}</h3>
            <p>{drive.date}</p>
            <p>{drive.location}</p>
            <p>{drive.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlacementDrives;
