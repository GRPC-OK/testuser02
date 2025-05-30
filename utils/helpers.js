// 안전하게 작성된 유틸리티 함수들

// ✅ 안전한 입력 검증 함수
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ✅ 안전한 문자열 처리
export function sanitizeString(input) {
  if (typeof input !== 'string') {
    return '';
  }
  
  return input
    .trim()
    .replace(/[<>]/g, '') // 기본적인 XSS 방지
    .substring(0, 100); // 길이 제한
}

// ✅ 안전한 숫자 파싱
export function parsePositiveInteger(value) {
  const parsed = parseInt(value, 10);
  return (isNaN(parsed) || parsed < 0) ? 0 : parsed;
}

// ✅ 안전한 객체 복사
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  return JSON.parse(JSON.stringify(obj));
}

// ✅ 안전한 배열 처리
export function getUniqueItems(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  
  return [...new Set(array)];
}

// ✅ 안전한 날짜 처리
export function formatDate(date) {
  try {
    return new Date(date).toLocaleDateString();
  } catch (error) {
    return 'Invalid Date';
  }
}