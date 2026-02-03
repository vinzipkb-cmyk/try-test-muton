# UX Flow & Elements (MUST)

## 1. UX 원칙

| 원칙 | 설명 |
|------|------|
| 압축된 정보 | 처음엔 짧게, 깊이는 단계적으로 |
| 갤러리형 탐색 | 검색/필터/태그로 작품처럼 |
| 증거 기반 신뢰 | 디테일, 소재, 공정으로 설득 |
| 서사적 전환 | CTA 남발 아닌 확신 축적 |

---

## 2. 사용자 시나리오별 UX 요소

### S1. 오너의 브랜드 탐색

**여정**: 진입 → 인상 → 탐색 → 확인 → 확신 → 문의

| 단계 | 페이지 | UX 요소 | 인터랙션 |
|------|--------|---------|----------|
| 진입 | Landing | Hero (영상/이미지) | 자동재생, 미세 패럴랙스 |
| 인상 | Landing | 한 문장 카피 | 페이드인 |
| 탐색 | Archive | 프로젝트 그리드 | 호버 → 정보 오버레이 |
| 확인 | Project Detail | 갤러리 | 스크롤 순차 노출 |
| 확인 | Project Detail | 소재 정보 | 클릭 → Lab 연결 |
| 확신 | Project Detail | 관련 프로젝트 | 카드 클릭 → 이동 |
| 문의 | Contact | 폼 | 간결한 필드, 제출 |

**핵심 UX 요소**:
- `HeroVideo`: 전체화면 무음 영상
- `ProjectGrid`: 1px 간격, 호버 오버레이
- `ProjectGallery`: 세로 스크롤 갤러리
- `RelatedProjects`: 3-4개 카드 추천

---

### S2. 디벨로퍼의 검증 여정

**여정**: 진입 → 레퍼런스 → 역량 → 프로세스 → 미팅

| 단계 | 페이지 | UX 요소 | 인터랙션 |
|------|--------|---------|----------|
| 진입 | Any | GNB | 명확한 메뉴 구조 |
| 레퍼런스 | Archive | 필터 | 타입/규모 필터링 |
| 레퍼런스 | Project Detail | 프로젝트 정보 | 위치, 규모, 연도 |
| 역량 | About | 프로세스 섹션 | 단계별 시각화 |
| 역량 | Lab | 카테고리 필터 | 수직 필터 바 |
| 미팅 | Contact | 문의 유형 선택 | 프로젝트 상담 옵션 |

**핵심 UX 요소**:
- `FilterBar`: 타입, 규모, 연도 필터
- `ProcessTimeline`: 3-5단계 프로세스
- `CategoryFilter`: 수직 카테고리 탭
- `InquiryTypeSelect`: 문의 유형 드롭다운

---

### S3. 실무자의 스펙 확인

**여정**: 진입 → 검색 → 스펙 → 요청

| 단계 | 페이지 | UX 요소 | 인터랙션 |
|------|--------|---------|----------|
| 진입 | Any | 검색 (P2) | 키워드 검색 |
| 검색 | Lab | 카테고리 필터 | 클릭 필터링 |
| 스펙 | Lab Detail | 콘텐츠 블록 | 이미지+텍스트 교차 |
| 스펙 | Lab Detail | 관련 프로젝트 | 적용 사례 확인 |
| 요청 | Contact | 자료 요청 옵션 | 문의 유형 선택 |

**핵심 UX 요소**:
- `SearchBar`: 전체 검색 (P2)
- `ContentBlocks`: 텍스트/이미지 블록
- `MaterialSpec`: 소재 스펙 테이블
- `RelatedProjects`: 적용 프로젝트

---

## 3. 페이지별 UX 요소 명세

### 3.1 Landing Page

| 요소 | 역할 | 상태 | 인터랙션 |
|------|------|------|----------|
| HeroSection | 첫인상 | default | 영상 자동재생, 스크롤 시 페이드 |
| HeroTagline | 브랜드 메시지 | default | 지연 페이드인 |
| ProjectPreview | 대표 작업 | default, hover | 호버 시 제목/연도 오버레이 |
| LabPreview | 연구 미리보기 | default | 클릭 → Lab 이동 |
| ScrollIndicator | 스크롤 유도 | visible, hidden | 스크롤 시 숨김 |

### 3.2 About Page

| 요소 | 역할 | 상태 | 인터랙션 |
|------|------|------|----------|
| PhilosophySection | 브랜드 철학 | default | 스크롤 페이드인 |
| ProcessSection | 프로세스 소개 | default | 단계별 순차 노출 |
| PartnerSection | 신뢰 구축 | default | 로고 그리드 |

### 3.3 Archive Page (List)

| 요소 | 역할 | 상태 | 인터랙션 |
|------|------|------|----------|
| FilterBar | 필터링 | default, active | 클릭 → 필터 적용 |
| ProjectGrid | 프로젝트 목록 | default | 1px gap 그리드 |
| ProjectCard | 개별 프로젝트 | default, hover | 호버 → 오버레이, 클릭 → 상세 |

**ProjectCard 상태**:
- `default`: 이미지만 표시
- `hover`: 반투명 오버레이 + 제목/연도/키워드

### 3.4 Archive Page (Detail)

| 요소 | 역할 | 상태 | 인터랙션 |
|------|------|------|----------|
| ProjectHero | 대표 이미지 | default | 전체폭 이미지 |
| ProjectMeta | 메타 정보 | default | 제목/위치/연도/규모 |
| ProjectDescription | 설명 | default | 3-5문장 |
| ProjectGallery | 이미지 갤러리 | default | 세로 스크롤, 순차 노출 |
| MaterialList | 소재 목록 | default | 클릭 → Lab 연결 |
| RelatedProjects | 관련 프로젝트 | default | 3-4개 카드 |

### 3.5 Lab Page (List)

| 요소 | 역할 | 상태 | 인터랙션 |
|------|------|------|----------|
| CategoryFilter | 카테고리 필터 | default, active | 수직 탭, 클릭 필터 |
| LabGrid | 주제 목록 | default | 그리드 |
| LabCard | 개별 주제 | default, hover | 호버 → 오버레이 |

### 3.6 Lab Page (Detail)

| 요소 | 역할 | 상태 | 인터랙션 |
|------|------|------|----------|
| LabHero | 대표 이미지 | default | 전체폭 이미지 |
| LabMeta | 메타 정보 | default | 제목/카테고리 |
| ContentBlocks | 본문 | default | 텍스트/이미지 블록 |
| RelatedProjects | 적용 프로젝트 | default | 카드 목록 |

### 3.7 Contact Page

| 요소 | 역할 | 상태 | 인터랙션 |
|------|------|------|----------|
| InquiryForm | 문의 폼 | default, error, success | 입력/검증/제출 |
| ContactInfo | 연락처 | default | 이메일/전화/주소 |

**InquiryForm 상태**:
- `default`: 빈 폼
- `error`: 검증 오류 표시
- `success`: 제출 완료 메시지

### 3.8 공통 요소

| 요소 | 역할 | 상태 | 인터랙션 |
|------|------|------|----------|
| GNB | 네비게이션 | default, scrolled | 스크롤 시 스타일 변화 |
| MobileDrawer | 모바일 메뉴 | open, closed | 햄버거 클릭 → 열림 |
| LocaleSwitch | 언어 전환 | ko, en | 클릭 → 전환 |
| ThemeToggle | 다크/라이트 | light, dark | 클릭 → 전환 |
| Footer | 푸터 | default | 연락처, 링크 |

---

## 4. 인터랙션 패턴

### 4.1 허용 인터랙션

| 패턴 | 용도 | 속도/이징 |
|------|------|----------|
| Fade In | 요소 등장 | 0.3s ease-out |
| Hover Overlay | 카드 정보 표시 | 0.2s ease |
| Scroll Fade | 스크롤 연동 등장 | viewport 기반 |
| Page Transition | 페이지 전환 | 0.2s fade |

### 4.2 금지 인터랙션

- Bounce, Spring 애니메이션
- 과도한 Parallax
- Glow, Pulse 효과
- 슬라이드 캐로셀 자동재생

---

## 5. 반응형 브레이크포인트

| 브레이크포인트 | 범위 | 레이아웃 변화 |
|---------------|------|--------------|
| Mobile (xs) | 0-599px | 1열, 스택 레이아웃, 드로어 메뉴 |
| Tablet (sm-md) | 600-1199px | 2열, 축소 그리드 |
| Desktop (lg+) | 1200px+ | 4열, 풀 그리드 |

### 주요 변화점

| 요소 | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| GNB | 드로어 | 드로어 | 인라인 메뉴 |
| ProjectGrid | 1열 | 2열 | 4열 |
| FilterBar | 하단 시트 | 사이드 | 상단 고정 |
| Hero 높이 | 100vh | 80vh | 100vh |

---

## 6. 상태 관리

### 6.1 전역 상태

| 상태 | 타입 | 용도 |
|------|------|------|
| locale | 'ko' \| 'en' | 언어 설정 |
| theme | 'light' \| 'dark' | 테마 설정 |
| isMenuOpen | boolean | 모바일 메뉴 상태 |

### 6.2 페이지 상태

| 페이지 | 상태 | 타입 |
|--------|------|------|
| Archive | activeFilters | { type, scale, year } |
| Lab | activeCategory | string |
| Contact | formState | { data, errors, isSubmitting } |

---

## 7. 접근성 요구사항

| 요소 | 요구사항 |
|------|----------|
| 이미지 | alt 텍스트 필수 |
| 링크/버튼 | 키보드 포커스 visible |
| 폼 | 라벨 연결, 에러 메시지 |
| 색상 대비 | WCAG AA 준수 |
| 모션 | prefers-reduced-motion 대응 |
