import React, { useEffect, useState } from "react";
import api from "../api";
import { toast } from "react-toastify";

const ReviewApplications = ({ jobId }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await api.get(`/company/job-applications/${jobId}`);
        setApplications(response.data.applications);
      } catch (error) {
        console.error("Error fetching applications:", error);
        toast.error("Failed to fetch applications.");
      }
    };

    fetchApplications();
  }, [jobId]);

  const handleUpdateStatus = async (applicationId, status) => {
    try {
      await api.put(`/company/update-application-status/${applicationId}`, {
        status,
      });
      toast.success("Application status updated.");
      setApplications((prev) =>
        prev.map((app) =>
          app._id === applicationId ? { ...app, status } : app
        )
      );
    } catch (error) {
      console.error("Error updating application status:", error);
      toast.error("Failed to update status.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Review Applications</h2>
      {applications.length === 0 ? (
        <p>No applications found for this job.</p>
      ) : (
        applications.map((app) => (
          <div key={app._id} className="p-4 border rounded mb-4">
            <p>Applicant Name: {app.applicantName}</p>
            <p>Status: {app.status}</p>
            <button
              onClick={() => handleUpdateStatus(app._id, "selected")}
              className="bg-green-500 text-white py-2 px-4 rounded mr-2"
            >
              Select
            </button>
            <button
              onClick={() => handleUpdateStatus(app._id, "rejected")}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Reject
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewApplications;
