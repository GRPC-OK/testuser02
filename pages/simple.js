export default function handler(req, res) {
  // 안전한 코드
  res.status(200).json({ 
    message: 'Hello from secure API!',
    timestamp: new Date().toISOString()
  });
}