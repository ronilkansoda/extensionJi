"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const fetchData = () => {
    if (!inputValue) {
      setError("Please enter a value before fetching data!");
      return;
    }

    setError(null);
    setData(null);

    fetch(`https://extension-ji.vercel.app/api/hello?value=${encodeURIComponent(inputValue)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setData(data);
        }
      })
      .catch(() => {
        setError("Failed to fetch data!");
      });
  };

  return (
    <div className="bg-amber-700 p-10">
      <h1>Hello there!!</h1>
      <b className="text-red-500 px-5">This is Extension Trail</b>
      <b>Yehyy</b>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter value..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="mt-4 px-4 py-2 border rounded text-black"
      />

      {/* Fetch Data Button */}
      <button
        onClick={fetchData}
        className="ml-2 mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Show
      </button>

      {/* Error Message */}
      {error ? (
        <p className="mt-4 text-red-500">⚠ Error: {error}</p>
      ) : data ? (
        <p className="mt-4 text-white">
          API Response: {data.message} at {data.time} by {data.vali}
        </p>
      ) : (
        <p className="mt-4 text-white">Waiting for input...</p>
      )}
    </div>
  );
}
