import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use /tmp for Vercel serverless functions (writable)
// Fallback to project root for local development
const getVisitsFilePath = () => {
  const tmpPath = '/tmp/visits.json';
  const projectPath = path.join(__dirname, '..', 'visits.json');
  
  // Try /tmp first (works on Vercel), fallback to project root
  if (process.env.VERCEL) {
    return tmpPath;
  }
  return projectPath;
};

// Initialize visits file
const initializeVisitsFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    // Try to read from project root for initial value
    const projectPath = path.join(__dirname, '..', 'visits.json');
    let initialCount = 0;
    
    if (fs.existsSync(projectPath)) {
      try {
        const projectData = JSON.parse(fs.readFileSync(projectPath, 'utf8'));
        initialCount = projectData.count || 0;
      } catch (e) {
        // Ignore errors, use 0
      }
    }
    
    fs.writeFileSync(filePath, JSON.stringify({ count: initialCount }), 'utf8');
  }
};

// Read visits count
const getVisits = () => {
  try {
    const filePath = getVisitsFilePath();
    initializeVisitsFile(filePath);
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return { count: 0 };
  }
};

// Increment visits count
const incrementVisits = () => {
  try {
    const filePath = getVisitsFilePath();
    initializeVisitsFile(filePath);
    const data = getVisits();
    data.count += 1;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return data;
  } catch (error) {
    return { count: 0 };
  }
};

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      // Return current count
      const data = getVisits();
      return res.status(200).json({ count: data.count });
    }

    if (req.method === 'POST') {
      // Increment and return new count
      const data = incrementVisits();
      return res.status(200).json({ count: data.count });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
