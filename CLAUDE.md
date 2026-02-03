# MUTON Project Rules

## META INSTRUCTION

이 문서와 참조된 규칙은 프로젝트 법률이다.
코드 작업 전 관련 규칙을 확인하고, 위반 가능성이 있으면 먼저 사용자에게 알려라.

---

## 1. 제품 정의

**MUTON** = MUTE + TONE

하이엔드 주방가구 브랜드의 건축적 정체성을 전달하는 아카이브 중심 브랜드 사이트

### 핵심 가치

| 구분 | 내용 |
|------|------|
| 포지셔닝 | "가구 쇼핑몰"이 아닌 "건축적 작품 아카이브" |
| 신뢰 구축 | 디테일, 소재, 공정으로 증거 기반 설득 |
| 전환 전략 | CTA 남발 아닌 서사적 확신 축적 |

### 톤 키워드

```
Mute / Tone / Shadow / Precision / Sentence / Temperature
```

---

## 2. 타깃 사용자

| ID | 세그먼트 | 핵심 니즈 |
|----|----------|----------|
| U1 | 오너 (감각형) | "이 브랜드가 뭐가 다른가?" |
| U2 | 디벨로퍼 (사업형) | "품질, 납기, 리스크는?" |
| U3 | 실무자 (스펙형) | "스펙 확인, 샘플 요청" |

---

## 3. 정보 구조

```
MUTON
├── Landing        → Hero + Project Preview + Lab Preview
├── About          → Philosophy + Process + Partners
├── Archive        → Project Grid → Project Detail
├── Lab            → Topic Grid → Topic Detail
├── Contact        → Inquiry Form
└── Footer
```

---

## 4. 규칙 문서

### CRITICAL (절대 위반 불가)

| 문서 | 내용 |
|------|------|
| @.claude/rules/pdr.md | 제품 요구사항, 페이지별 명세 |
| @.claude/rules/brand-direction.md | 브랜드 철학, 카피 가이드 |
| @.claude/rules/visual-direction.md | 비주얼/모션 정책, 디자인 토큰 |
| @.claude/rules/mui-grid-usage.md | MUI Grid import 규칙 |

### MUST (반드시 준수)

| 문서 | 내용 |
|------|------|
| @.claude/rules/ux-flow.md | 사용자 시나리오, UX 요소 명세 |
| @.claude/rules/data-models.md | 데이터 모델, props 매핑 |
| @.claude/rules/code-convention.md | 코드 컨벤션 |
| @.claude/rules/design-system.md | 디자인 시스템 |
| @.claude/rules/project-directory.md | 디렉토리 구조 |

### SHOULD (관련 작업 시)

| 문서 | 내용 |
|------|------|
| @.claude/rules/storybook-writing.md | Storybook 작성법 |
| @.claude/rules/components.md | 기존 컴포넌트 목록 |

---

## 5. 핵심 제약 (Quick Check)

### 브랜드

- [ ] 자기선언형 수식어 금지 (최고급, 프리미엄, 명품)
- [ ] 건축적 명사 사용 (재료, 빛, 결, 정밀, 온도)

### 비주얼

- [ ] border-radius: 0
- [ ] 1px gap 그리드 (Archive)
- [ ] 모노톤 기반 (오프화이트/차콜)

### 모션

- [ ] 느린 감각 모션만 (0.2-0.3s, ease-out)
- [ ] 글로우/바운스/과도한 패럴랙스 금지

---

## 6. 데이터 모델 (요약)

### Project

```
id, title, titleEn, year, location, type, scale,
description, thumbnail, heroImage, gallery[],
materials[], keywords[], relatedProjects[]
```

### LabTopic

```
id, title, titleEn, category, thumbnail, heroImage,
content[], relatedProjects[]
```

### Image

```
src, alt, altEn?, width?, height?, caption?
```

상세: @.claude/rules/data-models.md

---

## 7. 페이지별 필수 요소 (요약)

| 페이지 | P0 (필수) | P1 (중요) |
|--------|-----------|-----------|
| Landing | Hero, ProjectPreview | LabPreview, ScrollIndicator |
| About | Philosophy, Process | Partners |
| Archive List | Grid (1px gap), HoverInfo | Filter |
| Archive Detail | Hero, Meta, Gallery | Materials, Related |
| Lab List | Grid, CategoryFilter | - |
| Lab Detail | Hero, Content | RelatedProjects |
| Contact | InquiryForm, ContactInfo | InquiryType |

상세: @.claude/rules/pdr.md

---

## 8. UX 요소 (요약)

### 시나리오별 핵심 요소

| 시나리오 | 핵심 UX 요소 |
|----------|-------------|
| S1. 오너 탐색 | HeroVideo, ProjectGrid, ProjectGallery |
| S2. 디벨로퍼 검증 | FilterBar, ProcessTimeline, InquiryTypeSelect |
| S3. 실무자 스펙 | CategoryFilter, ContentBlocks, MaterialSpec |

### 공통 요소

- GNB (desktop: inline, mobile: drawer)
- LocaleSwitch (ko/en)
- ThemeToggle (light/dark = 조도 변화)
- Footer

상세: @.claude/rules/ux-flow.md

---

## 9. 컴포넌트-페이지 매핑

| 페이지 | 권장 컴포넌트 |
|--------|--------------|
| Landing | `HeroStack`, `LineGrid`, `AspectMedia` |
| About | `SplitScreen`, `FullPageContainer` |
| Archive | `LineGrid` (gap: 1px), `CustomCard` |
| Lab | `CategoryTab`, `LineGrid`, `CustomCard` |
| Contact | `UnderlineInput`, `UnderlineSelect` |

기존 컴포넌트: @.claude/rules/components.md

---

## 10. 작업 흐름

### 컴포넌트 생성 전

1. `components.md`에서 유사 컴포넌트 확인
2. `pdr.md`에서 해당 페이지 요구사항 확인
3. `ux-flow.md`에서 UX 요소 상태/인터랙션 확인
4. `data-models.md`에서 props 구조 확인

### 코드 작성 시

1. 브랜드 제약 체크 (섹션 5)
2. MUI 기반, sx prop 사용
3. Storybook 스토리 작성

### 규칙 충돌 시

```
"이 요청은 [규칙명]과 충돌합니다" 알림 → 사용자 허용 전까지 진행 금지
```

---

## 11. 공통 명령어

```bash
pnpm dev              # 개발 서버
pnpm storybook        # Storybook (포트 6006)
pnpm build            # 빌드
pnpm lint             # 린트
```
