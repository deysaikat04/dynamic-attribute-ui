import React from "react";
const InputField = ({ attrs }) => {
  const { ipName, ipId, ipClass, ipSize, ipType, ipPlaceholder, ipLabel } =
    attrs;
  return (
    <>
      {ipLabel && <label>{ipLabel}: </label>}
      <input
        type={ipType}
        id={ipId}
        className={`${ipClass}`}
        aria-describedby="ipSize"
        name={ipName}
        size={ipSize}
        placeholder={ipPlaceholder}
      />
    </>
  );
};

export default InputField;
