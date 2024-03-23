import React, { useState } from 'react';
import { createWorker } from 'tesseract.js';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import './Prescription.css'; // Import CSS file for styling
import Loading from '../../../components/Loading';

// Register FilePond plugins
registerPlugin();

const Prescription = () => {
  const [file, setFile] = useState(null);
  const [ocrResult, setOcrResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (files) => {
    setFile(files[0]);
  };

  const handleOCR = async () => {
    if (!file) {
      alert('Please upload a file first.');
      return;
    }

    setLoading(true);

    const worker = createWorker({
      logger: (m) => console.log(m),
    });

    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(file.file);
    setOcrResult(text);
    setLoading(false);

    await worker.terminate();
  };

  return (
    <div className="prescription-container">
      <h1 className='prescription-head'>Prescription</h1>
      <FilePond
        allowMultiple={false}
        
        acceptedFileTypes={['image/*', 'application/pdf']}
        labelIdle='Drag & Drop your file or <span class="filepond--label-action">Browse</span>'
        onupdatefiles={(fileItems) => handleFileChange(fileItems)}
        
      />
      
      <button onClick={handleOCR} className='btn btn-outline-primary '>OCR</button>
      {loading && <Loading/>}
      {ocrResult && (
        <div className="ocr-result">
          <h2>OCR Result:</h2>
          <pre>{ocrResult}</pre>
        </div>
      )}
    </div>
  );
};

export default Prescription;
