"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setData(data);
        }
      })
      .catch((err) => setError("Failed to fetch data!"));
  }, []);

  return (
    <div className="bg-amber-700 p-10">
      <h1>Hello there!!</h1>
      <b className="text-red-500 px-5">This is Extension Trail</b>
      <b>Yehyy</b>

      {error ? (
        <p className="mt-4 text-red-500">⚠ Error: {error}</p>
      ) : data ? (
        <p className="mt-4 text-white">
          API Response: {data.message} at {data.time} by {data.vali}
        </p>
      ) : (
        <p className="mt-4 text-white">Loading...</p>
      )}
    </div>
  );
}
