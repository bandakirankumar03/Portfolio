import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { Low, JSONFile } from 'lowdb';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 5000;

// Setup uploads directory
const UPLOADS_DIR = join(__dirname, 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR);
}

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// LowDB setup
const dbFile = join(__dirname, 'db.json');
const adapter = new JSONFile(dbFile);
const db = new Low(adapter);
await db.read();
db.data ||= { projects: [] };

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(UPLOADS_DIR));

// Get all projects
app.get('/api/projects', async (req, res) => {
  await db.read();
  res.json(db.data.projects);
});

// Upload a new project
app.post('/api/projects', upload.single('file'), async (req, res) => {
  const { title, description } = req.body;
  const file = req.file;
  if (!title || !file) {
    return res.status(400).json({ error: 'Title and file are required.' });
  }
  const newProject = {
    id: Date.now(),
    title,
    description,
    fileUrl: `/uploads/${file.filename}`,
    originalName: file.originalname,
    createdAt: new Date().toISOString(),
  };
  db.data.projects.push(newProject);
  await db.write();
  res.status(201).json(newProject);
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
}); 