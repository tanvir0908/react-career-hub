/* eslint-disable react/prop-types */
import { GrLocation } from "react-icons/gr";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Job({ job }) {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold mr-4 border rounded text-purple-600 border-purple-600">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold mr-4 border rounded text-purple-600 border-purple-600">
            {job_type}
          </button>
        </div>
        <div className="flex gap-5">
          <h2 className="flex gap-1 items-center">
            <GrLocation className="text-2xl" />
            {location}
          </h2>
          <h2 className="flex gap-1 items-center">
            <HiOutlineCurrencyDollar className="text-2xl" />
            {`Salary: ${salary}`}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
