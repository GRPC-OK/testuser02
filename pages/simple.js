// 간단하고 안전한 API 엔드포인트
export default function handler(req, res) {
  
  // ✅ 안전한 코드 - 사용자 입력 검증
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // ✅ 하드코딩된 안전한 응답
  const safeResponse = {
    message: 'Hello from secure API!',
    timestamp: new Date().toISOString(),
    status: 'success'
  };

  // ✅ 적절한 헤더 설정
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(safeResponse);
}