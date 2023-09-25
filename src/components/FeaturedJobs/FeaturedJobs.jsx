import { useEffect, useState } from "react";
import Job from "../Job/Job";

export default function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-5xl text-center">Featured Jobs: {jobs.length}</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          consequuntur non veritatis, illo optio nam!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary text-white"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
}
