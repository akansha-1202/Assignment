
import React, { useState } from "react";
import axios from "axios"; // Import Axios

function CountWords() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [wordCount, setWordCount] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post('https://countwords.onrender.com/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
      const data = response.data;
      setWordCount(data.wordCount);
      console.log(data);
    } catch (error) {
      console.error("Error occurred while uploading file:", error);
    }
  };

  return (
    <div className="parent">
      <h1>Word Count</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {wordCount && <p>Number of words in the file: {wordCount}</p>}
    </div>
  );
}

export default CountWords;
