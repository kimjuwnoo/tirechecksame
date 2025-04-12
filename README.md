This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 타이어체크 (TireCheck) 웹 애플리케이션

타이어 관리 및 점검을 위한 웹 애플리케이션입니다. 타이어 자가 점검, 교체 주기 계산 등 다양한 기능을 제공합니다.

## 주요 기능

- **타이어 자가 점검**: 타이어 상태를 체크하고 점수화하여 결과 제공
- **타이어 교체 시기 계산기**: 트레드웨어와 주행 거리를 바탕으로 교체 시기 예측
- **자주 묻는 질문 (FAQ)**: 타이어 관련 정보 제공

## 기술 스택

- Next.js 15.2.0
- React 18.3
- TypeScript
- Tailwind CSS
- Lucide React (아이콘)

## 로컬 개발 환경 설정

1. 저장소 클론
   ```bash
   git clone [저장소 URL]
   cd tirecheck-app
   ```

2. 의존성 설치
   ```bash
   npm install
   # 또는
   bun install
   ```

3. 개발 서버 실행
   ```bash
   npm run dev
   # 또는
   bun run dev
   ```

4. 브라우저에서 `http://localhost:3000` 접속

## 빌드 및 배포

정적 사이트로 빌드:

```bash
npm run build
# 또는
bun run build
```

빌드된 파일은 `out` 디렉토리에 생성됩니다.

## 프로젝트 구조

- `/src/app/page.tsx` - 메인 페이지
- `/src/app/self_test/tire_self_check/page.tsx` - 타이어 자가 점검 페이지
- `/src/app/self_test/tire_self_check/results/page.tsx` - 자가 점검 결과 페이지
- `/src/app/self_test/tire_change_test/page.tsx` - 타이어 교체 주기 계산기
- `/src/app/faq/page.tsx` - FAQ 페이지
- `/src/app/globals.css` - 전역 스타일 시트

## 기여 방법

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 라이센스

MIT 라이센스에 따라 배포됩니다.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
