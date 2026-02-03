# Data Models (MUST)

## 개요

MUTON 웹사이트의 정적 데이터 모델 정의.
모든 데이터는 JSON 형태로 관리되며, 컴포넌트 props와 직접 매핑됨.

---

## 1. Project (프로젝트)

Archive 페이지의 핵심 데이터.

### 스키마

```typescript
interface Project {
  id: string;                    // 고유 식별자 (slug)
  title: string;                 // 프로젝트명
  titleEn: string;               // 프로젝트명 (영문)
  year: number;                  // 완공 연도
  location: string;              // 위치
  locationEn: string;            // 위치 (영문)
  type: ProjectType;             // 프로젝트 타입
  scale: ProjectScale;           // 규모
  description: string;           // 설명 (3-5문장)
  descriptionEn: string;         // 설명 (영문)
  thumbnail: Image;              // 썸네일 이미지
  heroImage: Image;              // 상세 페이지 히어로 이미지
  gallery: Image[];              // 갤러리 이미지 목록
  materials: string[];           // 사용 소재 ID 목록
  keywords: string[];            // 키워드 태그
  relatedProjects: string[];     // 관련 프로젝트 ID 목록
  featured: boolean;             // 랜딩 페이지 노출 여부
  order: number;                 // 정렬 순서
}
```

### Enum 정의

```typescript
type ProjectType =
  | 'residential'    // 주거
  | 'hotel'          // 호텔
  | 'resort'         // 리조트
  | 'restaurant'     // 레스토랑
  | 'office'         // 오피스
  | 'showroom';      // 쇼룸

type ProjectScale =
  | 'small'          // 소규모 (개인 주거)
  | 'medium'         // 중규모 (복합 주거, 소형 상업)
  | 'large';         // 대규모 (호텔, 리조트)
```

### 예시 데이터

```json
{
  "id": "hannam-residence",
  "title": "한남 레지던스",
  "titleEn": "Hannam Residence",
  "year": 2024,
  "location": "서울, 한남동",
  "locationEn": "Hannam-dong, Seoul",
  "type": "residential",
  "scale": "medium",
  "description": "한강이 내려다보이는 주거 공간. 빛의 흐름을 따라 소재의 결이 드러나도록 설계했다.",
  "descriptionEn": "A residential space overlooking the Han River. Designed to reveal material textures following the flow of light.",
  "thumbnail": {
    "src": "/images/projects/hannam/thumb.webp",
    "alt": "한남 레지던스 주방 전경"
  },
  "heroImage": {
    "src": "/images/projects/hannam/hero.webp",
    "alt": "한남 레지던스 메인 뷰"
  },
  "gallery": [...],
  "materials": ["oak-veneer", "nero-marquina", "brass-hardware"],
  "keywords": ["주거", "한강뷰", "오크", "석재"],
  "relatedProjects": ["cheongdam-penthouse", "seongsu-loft"],
  "featured": true,
  "order": 1
}
```

---

## 2. LabTopic (연구 주제)

Lab 페이지의 연구/소재 콘텐츠.

### 스키마

```typescript
interface LabTopic {
  id: string;                    // 고유 식별자 (slug)
  title: string;                 // 주제명
  titleEn: string;               // 주제명 (영문)
  category: LabCategory;         // 카테고리
  thumbnail: Image;              // 썸네일 이미지
  heroImage: Image;              // 상세 페이지 히어로 이미지
  content: ContentBlock[];       // 본문 콘텐츠 블록
  relatedProjects: string[];     // 관련 프로젝트 ID 목록
  order: number;                 // 정렬 순서
}
```

### Enum 정의

```typescript
type LabCategory =
  | 'material'       // 소재
  | 'light'          // 빛
  | 'hardware'       // 하드웨어
  | 'detail'         // 디테일
  | 'process';       // 공정
```

### ContentBlock 정의

```typescript
type ContentBlock =
  | { type: 'text'; content: string; contentEn: string }
  | { type: 'image'; image: Image }
  | { type: 'imageGrid'; images: Image[]; columns: 2 | 3 }
  | { type: 'quote'; content: string; contentEn: string };
```

### 예시 데이터

```json
{
  "id": "oak-veneer-study",
  "title": "오크 베니어의 결",
  "titleEn": "Oak Veneer Grain Study",
  "category": "material",
  "thumbnail": {
    "src": "/images/lab/oak/thumb.webp",
    "alt": "오크 베니어 클로즈업"
  },
  "heroImage": {
    "src": "/images/lab/oak/hero.webp",
    "alt": "오크 베니어 패널"
  },
  "content": [
    {
      "type": "text",
      "content": "나무의 결은 시간의 기록이다.",
      "contentEn": "Wood grain is a record of time."
    },
    {
      "type": "image",
      "image": {
        "src": "/images/lab/oak/detail-01.webp",
        "alt": "오크 결 디테일"
      }
    }
  ],
  "relatedProjects": ["hannam-residence", "gangnam-showroom"],
  "order": 1
}
```

---

## 3. Image (이미지)

모든 이미지의 공통 구조.

### 스키마

```typescript
interface Image {
  src: string;           // 이미지 경로
  alt: string;           // 대체 텍스트 (한글)
  altEn?: string;        // 대체 텍스트 (영문)
  width?: number;        // 원본 너비 (optional)
  height?: number;       // 원본 높이 (optional)
  caption?: string;      // 캡션 (optional)
  captionEn?: string;    // 캡션 영문 (optional)
}
```

### 이미지 네이밍 규칙

```
/images/
├── projects/
│   └── {project-id}/
│       ├── thumb.webp      # 썸네일 (800x600)
│       ├── hero.webp       # 히어로 (1920x1080)
│       └── gallery-{nn}.webp  # 갤러리 (1600x1200)
│
├── lab/
│   └── {topic-id}/
│       ├── thumb.webp
│       ├── hero.webp
│       └── content-{nn}.webp
│
├── about/
│   ├── hero.webp
│   ├── process-{n}.webp
│   └── partner-{name}.webp
│
└── landing/
    └── hero.mp4            # 히어로 영상
```

---

## 4. Navigation (네비게이션)

사이트 네비게이션 구조.

### 스키마

```typescript
interface NavItem {
  id: string;
  label: string;         // 메뉴명 (한글)
  labelEn: string;       // 메뉴명 (영문)
  path: string;          // 경로
  children?: NavItem[];  // 하위 메뉴 (optional)
}

interface Navigation {
  main: NavItem[];       // 메인 메뉴
  footer: NavItem[];     // 푸터 메뉴
}
```

### 데이터

```json
{
  "main": [
    { "id": "about", "label": "ABOUT", "labelEn": "ABOUT", "path": "/about" },
    { "id": "archive", "label": "ARCHIVE", "labelEn": "ARCHIVE", "path": "/archive" },
    { "id": "lab", "label": "LAB", "labelEn": "LAB", "path": "/lab" },
    { "id": "contact", "label": "CONTACT", "labelEn": "CONTACT", "path": "/contact" }
  ],
  "footer": [
    { "id": "privacy", "label": "개인정보처리방침", "labelEn": "Privacy Policy", "path": "/privacy" },
    { "id": "terms", "label": "이용약관", "labelEn": "Terms of Use", "path": "/terms" }
  ]
}
```

---

## 5. SiteConfig (사이트 설정)

사이트 전역 설정.

### 스키마

```typescript
interface SiteConfig {
  siteName: string;
  siteNameEn: string;
  tagline: string;
  taglineEn: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    addressEn: string;
  };
  social: {
    instagram?: string;
    linkedin?: string;
  };
  copyright: string;
}
```

### 데이터

```json
{
  "siteName": "MUTON",
  "siteNameEn": "MUTON",
  "tagline": "정밀함으로 건축을 완성하다",
  "taglineEn": "Precision that completes architecture",
  "contact": {
    "email": "contact@muton.kr",
    "phone": "+82-2-0000-0000",
    "address": "서울특별시 강남구",
    "addressEn": "Gangnam-gu, Seoul, Korea"
  },
  "social": {
    "instagram": "https://instagram.com/muton_official"
  },
  "copyright": "© 2024 MUTON. All rights reserved."
}
```

---

## 6. Inquiry (문의)

Contact 폼 제출 데이터.

### 스키마

```typescript
interface Inquiry {
  name: string;                  // 이름
  email: string;                 // 이메일
  phone?: string;                // 연락처 (optional)
  type: InquiryType;             // 문의 유형
  message: string;               // 메시지
  createdAt: string;             // 제출 시간 (ISO 8601)
}

type InquiryType =
  | 'project'        // 프로젝트 상담
  | 'material'       // 자료 요청
  | 'partnership'    // 파트너십 문의
  | 'other';         // 기타
```

---

## 7. Filter (필터)

Archive, Lab 페이지 필터 옵션.

### 스키마

```typescript
interface FilterOption {
  id: string;
  label: string;
  labelEn: string;
}

interface FilterConfig {
  archive: {
    type: FilterOption[];
    scale: FilterOption[];
    year: FilterOption[];
  };
  lab: {
    category: FilterOption[];
  };
}
```

### 데이터

```json
{
  "archive": {
    "type": [
      { "id": "all", "label": "전체", "labelEn": "All" },
      { "id": "residential", "label": "주거", "labelEn": "Residential" },
      { "id": "hotel", "label": "호텔", "labelEn": "Hotel" },
      { "id": "resort", "label": "리조트", "labelEn": "Resort" },
      { "id": "restaurant", "label": "레스토랑", "labelEn": "Restaurant" }
    ],
    "scale": [
      { "id": "all", "label": "전체", "labelEn": "All" },
      { "id": "small", "label": "소규모", "labelEn": "Small" },
      { "id": "medium", "label": "중규모", "labelEn": "Medium" },
      { "id": "large", "label": "대규모", "labelEn": "Large" }
    ]
  },
  "lab": {
    "category": [
      { "id": "all", "label": "전체", "labelEn": "All" },
      { "id": "material", "label": "소재", "labelEn": "Material" },
      { "id": "light", "label": "빛", "labelEn": "Light" },
      { "id": "hardware", "label": "하드웨어", "labelEn": "Hardware" },
      { "id": "detail", "label": "디테일", "labelEn": "Detail" }
    ]
  }
}
```

---

## 8. 컴포넌트 Props 매핑

### ProjectCard

```typescript
interface ProjectCardProps {
  project: Pick<Project, 'id' | 'title' | 'titleEn' | 'year' | 'type' | 'thumbnail' | 'keywords'>;
  locale: 'ko' | 'en';
}
```

### LabCard

```typescript
interface LabCardProps {
  topic: Pick<LabTopic, 'id' | 'title' | 'titleEn' | 'category' | 'thumbnail'>;
  locale: 'ko' | 'en';
}
```

### ProjectDetail

```typescript
interface ProjectDetailProps {
  project: Project;
  locale: 'ko' | 'en';
}
```

### InquiryForm

```typescript
interface InquiryFormProps {
  inquiryTypes: FilterOption[];
  locale: 'ko' | 'en';
  onSubmit: (data: Inquiry) => void;
}
```

---

## 데이터 파일 위치

```
src/
└── data/
    ├── projects.json       # 프로젝트 데이터
    ├── lab-topics.json     # Lab 데이터
    ├── navigation.json     # 네비게이션
    ├── site-config.json    # 사이트 설정
    └── filters.json        # 필터 옵션
```
