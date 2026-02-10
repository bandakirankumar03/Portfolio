import React, { useState } from 'react';

const API_URL = 'http://localhost:5000/api/projects';

const ProjectUpload: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !file) {
      setStatus('Title and file are required.');
      return;
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) {
        const err = await res.json();
        setStatus('Error: ' + (err.error || 'Upload failed.'));
      } else {
        setStatus('Project uploaded successfully!');
        setTitle('');
        setDescription('');
        setFile(null);
      }
    } catch (err) {
      setStatus('Error uploading project.');
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', background: '#222', padding: 24, borderRadius: 8, color: 'white' }}>
      <h2>Upload New Project</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>Title*</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            style={{ width: '100%', padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            style={{ width: '100%', padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Image/Video File*</label>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={e => setFile(e.target.files ? e.target.files[0] : null)}
            required
            style={{ width: '100%', marginTop: 4 }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 24px', background: '#f50057', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }}>
          Upload
        </button>
      </form>
      {status && <div style={{ marginTop: 16 }}>{status}</div>}
    </div>
  );
};

export default ProjectUpload; 