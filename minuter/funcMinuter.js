import React, { useState, useEffect } from "react";

export default function ClsMinuter() {
  const [nbr, setNbr] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() =>
      setNbr((nbr) => nbr + 1), 1000);
       setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (nbr === 10) {
      clearInterval(intervalId);
      const id = setInterval(() =>setNbr((nbr) => nbr + 1), 1000);
      setIntervalId(id);
      alert("nbr=10");
      setNbr(0);
    }
  }, [nbr]);

  const stopInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const startInterval = () => {
    if (!intervalId) {
      const id = setInterval(() => setNbr((nbr) => nbr + 1), 1000);
      setIntervalId(id);
    }
  };

  return (
    <div style={{ marginLeft: "40%" }}>
      <h1>compteur: {nbr}</h1>
      <button onClick={() => setNbr(0)}>initialiser</button>
      <button onClick={stopInterval}>stop nbr</button>
      <button onClick={startInterval}>continue</button>
    </div>
  );
}
