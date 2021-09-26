import React from "react";
const Card = ({ attrs }) => {
  const { ipName, ipId, ipClass, ipSize, ipType, ipPlaceholder } = attrs;
  const str = `<input
  type="${ipType}"
  id="${ipId}"
  className="${ipClass}"
  aria-describedby="ipSize"
  name="${ipName}"
  size="${ipSize}"
  placeholder="${ipPlaceholder}"
/>`;
  return (
    <div className="card text-dark bg-light mt-5">
      <div className="card-body">
        <h5 className="card-title">Code of the dynamic input field</h5>
        <p className="">
          <code>{str}</code>
        </p>
      </div>
    </div>
  );
};

export default Card;
