# TestUser02 - Vulnerable Dependencies Application

⚠️ **WARNING: 이 저장소는 의존성 취약점 테스트 목적으로 만들어진 애플리케이션입니다.**

## 특징
- **코드 자체는 안전함** - SQL Injection, XSS 등의 코딩 취약점 없음
- **취약한 의존성 포함** - 오래된 라이브러리들로 인한 보안 이슈
- **취약한 Docker 설정** - 보안 모범사례를 따르지 않은 컨테이너 설정

## 포함된 취약한 의존성들
- express@4.16.0 (CVE-2022-24999)
- lodash@4.17.4 (CVE-2019-10744) 
- moment@2.24.0 (CVE-2022-24785)
- axios@0.18.0 (CVE-2020-28168)

## Docker 보안 이슈
- 오래된 기본 이미지 (node:14-alpine)
- Root 사용자로 실행
- 불필요한 패키지 설치
- 환경변수에 민감정보 노출

## 사용법
```bash
npm install
npm run dev