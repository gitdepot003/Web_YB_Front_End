import React, { useState } from 'react';
import axios from 'axios';

const ARcomp= ({ userId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [downloadLink, setDownloadLink] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('photo', selectedFile); // 'photo' should match the field name in your backend

    try {
      setIsUploading(true);
      setDownloadLink('');

      // Send the form data to the backend
      const response = await axios.patch("http://localhost:8000/api/v1/user/updatePhoto/66d499ff94ecf1e3b616a66c", formData, {
        responseType: 'blob', // Expecting the compiled .mind file as a Blob
      });

      // Create a download link for the compiled .mind file
      const blob = new Blob([response.data], { type: 'application/octet-stream' });
      const downloadUrl = URL.createObjectURL(blob);
      setDownloadLink(downloadUrl);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading or compiling the image.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button type="submit" disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Upload and Compile'}
        </button>
      </form>

      {downloadLink && (
        <div>
          <a href={downloadLink} download={`${selectedFile?.name}.mind`}>
            Download Compiled .mind File
          </a>
        </div>
      )}
    </div>
  );
};

export default ARcomp;
