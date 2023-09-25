import { useLoaderData, useParams } from "react-router-dom";

export default function JobDetails() {
  const jobs = useLoaderData();
  const { id } = useParams();

  const job = jobs.find((job) => job.id == id);

  return (
    <div>
      <h2>Job details of: {id}</h2>
      <div>
        <h2>Job Title: {job.job_title}</h2>
      </div>
    </div>
  );
}
