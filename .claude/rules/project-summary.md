# Project Summary (CRITICAL)

## 프로젝트

**MUTON** 하이엔드 주방가구 브랜드 웹사이트

- 기술: React 19 + MUI 7 + Vite 7 + Storybook 10
- 성격: 아카이브 중심 브랜드 사이트 (쇼핑몰 아님)

## 핵심 규칙

### 컴포넌트

- MUI 기반, sx prop 스타일링
- border-radius: 0
- 1px border/gap

### 모션

- 느린 감각 모션만 (0.2-0.3s)
- 글로우/바운스/과도한 패럴랙스 금지

### 카피

- 자기선언형 수식어 금지 (최고급, 프리미엄)
- 건축적 명사 사용 (재료, 빛, 결, 정밀)

### 작업 분리

- UI 레이어: 순수 프레젠테이션 (로직 없음)
- 로직 레이어: 비즈니스 로직, 상태 관리
- Storybook: UI 레이어만

## 관련 문서

- `pdr.md` - 제품 요구사항
- `ux-flow.md` - 사용자 시나리오, UX 요소
- `data-models.md` - 데이터 모델
- `brand-direction.md` - 브랜드 철학
- `visual-direction.md` - 비주얼 정책
