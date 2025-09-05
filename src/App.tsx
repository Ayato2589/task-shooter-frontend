import { useState, useEffect } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await fetch("https://task-shooter-api.onrender.com/");
        const data = await res.text();
        setMsg(data);
      } catch (err) {
        console.error(err);
        setMsg("Error fetching message");
      }
    };

    fetchMessage();
  }, []);

  return (
    <div>
      {msg || "Loading..."}
    </div>
  );
}

export default App;
