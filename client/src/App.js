import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {

  const [file, setFile] = useState(null);

  const handleUpload = async () => {

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:5000/api/files/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);

    } catch (error) {
      console.log(error);
      alert("Upload failed");
    }
  };

  return (
    <div className="app">

      <h1>CloudVault</h1>

      <p>Simple Cloud File Storage</p>

      <div className="upload-box">

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button onClick={handleUpload}>
          Upload File
        </button>

      </div>

    </div>
  );
}

export default App;