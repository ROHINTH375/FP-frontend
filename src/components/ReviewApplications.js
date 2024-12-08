import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchApplicationsForJob } from '../api';
import { useSelector, useDispatch } from 'react-redux';


// import axios from "axios";

const ReviewApplications = ({  }) => {
  const jobId = useSelector((state) => state.jobs.selectedJobId);
  const dispatch = useDispatch();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        if (!jobId || jobId.trim() === '') {
          toast.error('Invalid jobId provided.');
          return;
        }

        const data = await fetchApplicationsForJob(jobId);
        console.log('Applications:', data);
        setApplications(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching applications:', error);
        toast.error('Failed to fetch applications.');
        setLoading(false);
      }
    };

    if (jobId) fetchApplications();
  }, [jobId]);

  // const updateStatus = async (applicationId, status) => {
  //   try {
  //     await axios.put(`/api/update-application-status/${applicationId}`, { status });
  //     setApplications((prev) =>
  //       prev.map((app) => (app.id === applicationId ? { ...app, status } : app))
  //     );
  //     toast.success('Application status updated.');
  //   } catch (error) {
  //     console.error('Error updating status:', error);
  //     toast.error('Failed to update application status.');
  //   }
  // };

  if (loading) {
    return <p>Loading applications...</p>;
  }

  if (applications.length === 0) {
    return <p>No applications available for this job.</p>;
  }

  return (
    <div className="container mx-auto p-4">
    <h2 className="text-xl font-bold mb-4">Applications for Job</h2>
    return <div>Review Applications Page</div>;
    <ul className="bg-white shadow-md rounded">
      {applications.map((app) => (
        <li key={app._id} className="p-4 border-b">
          <p>
            <strong>Student:</strong> {app.studentId.firstname} {app.studentId.lastname} ({app.studentId.email})
          </p>
          <p>
            <strong>Job Title:</strong> {app.jobId.title}
          </p>
          <p>
            <strong>Status:</strong> {app.status}
          </p>
          <p>
            <strong>Applied Date:</strong> {new Date(app.appliedDate).toLocaleDateString()}
          </p>
          <a
            href={app.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Resume
          </a>
        </li>
      ))}
    </ul>
  </div>
);
};

export default ReviewApplications;
