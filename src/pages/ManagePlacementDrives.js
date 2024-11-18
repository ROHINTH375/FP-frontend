import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ManagePlacementDrives() {
  const [placementDrives, setPlacementDrives] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    companiesParticipating: [],
  });
  const [editingDrive, setEditingDrive] = useState(null);

  useEffect(() => {
    fetchPlacementDrives();
  }, []);

  const fetchPlacementDrives = async () => {
    try {
      const response = await axios.get('/api/placement-drives');
      setPlacementDrives(response.data);
    } catch (error) {
      console.error('Error fetching placement drives:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingDrive) {
        await axios.put(`/api/placement-drives/${editingDrive._id}`, formData);
      } else {
        await axios.post('/api/placement-drives', formData);
      }
      fetchPlacementDrives();
      setFormData({ title: '', description: '', date: '', location: '', companiesParticipating: [] });
      setEditingDrive(null);
    } catch (error) {
      console.error('Error saving placement drive:', error);
    }
  };

  const handleEdit = (drive) => {
    setFormData(drive);
    setEditingDrive(drive);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/placement-drives/${id}`);
      fetchPlacementDrives();
    } catch (error) {
      console.error('Error deleting placement drive:', error);
    }
  };

  return (
    <div>
      <h1>Manage Placement Drives</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Title" required />
        <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" required />
        <input type="date" name="date" value={formData.date} onChange={handleInputChange} required />
        <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" required />
        <button type="submit">{editingDrive ? 'Update' : 'Create'}</button>
      </form>

      <ul>
        {placementDrives.map((drive) => (
          <li key={drive._id}>
            <h2>{drive.title}</h2>
            <p>{drive.description}</p>
            <p>{new Date(drive.date).toLocaleDateString()}</p>
            <p>{drive.location}</p>
            <button onClick={() => handleEdit(drive)}>Edit</button>
            <button onClick={() => handleDelete(drive._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManagePlacementDrives;
