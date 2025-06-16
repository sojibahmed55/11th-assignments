import React, { useEffect, useState } from "react";

const MyAttempts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/myattemps")
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  return <div>{data.length}</div>;
};

export default MyAttempts;
