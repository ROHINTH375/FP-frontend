import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageWrapper from './PageWrapper';

const Settings = () => {
  const [config, setConfig] = useState({ emailNotifications: false });
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get('https://fp-backend-6.onrender.com/api/settings');
        setConfig(response.data);
      } catch (err) {
        console.error('Error fetching settings:', err);
        setError('Failed to load settings. Please try again.');
      }
    };
    fetchSettings();
  }, []);

  const handleUpdate = async () => {
    setIsSaving(true);
    try {
      await axios.put('https://fp-backend-6.onrender.com/api/settings', config);
      alert('Settings updated successfully!');
    } catch (err) {
      console.error('Error updating settings:', err);
      setError('Failed to update settings. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Settings</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            className="mr-2"
            checked={config.emailNotifications}
            onChange={(e) =>
              setConfig((prevConfig) => ({
                ...prevConfig,
                emailNotifications: e.target.checked,
              }))
            }
          />
          Enable Email Notifications
        </label>
        <button
          onClick={handleUpdate}
          className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${
            isSaving ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isSaving}
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </PageWrapper>
  );
};

export default Settings;
