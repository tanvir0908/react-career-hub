import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localstorage";

export default function JobDetails() {
  const jobs = useLoaderData();
  const { id } = useParams();

  const job = jobs.find((job) => job.id == id);

  const handleApplyJob = () => {
    saveJobApplication(parseInt(id));
    toast("Applied Successfully");
  };

  return (
    <div>
      <h2>Job details of: {id}</h2>
      <div>
        <h2>Job Title: {job.job_title}</h2>
      </div>
      <button onClick={handleApplyJob} className="btn btn-primary">
        Apply Now
      </button>
      <ToastContainer />
    </div>
  );
}
