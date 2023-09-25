/* eslint-disable react/prop-types */

export default function Job({ job }) {
  const { logo } = job;

  return (
    <div>
      <img src={logo} alt="" />
    </div>
  );
}
