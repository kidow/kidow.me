import {
  BriefcaseIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'
import type { FC } from 'react'
import Link from 'next/link'

import Divider from './Divider'
import Card from './Card'
import Item from './Item'

export interface Props {}
interface State {}

const Resume: FC<Props> = () => {
  return (
    <div className="pt-4 text-neutral-700 dark:text-neutral-400">
      <div className="justify-between sm:flex">
        <div className="mb-5 flex-1 space-y-1 sm:mb-0">
          <div className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
            김동욱
          </div>
          <div className="text-xl text-neutral-500">Kim Dong Wook</div>
        </div>
        <div className="flex-1">
          <ul className="space-y-1.5 text-sm">
            <li className="flex items-center gap-2">
              <BriefcaseIcon className="h-5 w-5" />
              <span>Front-end Developer</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5" />
              <span>Hanam, Gyeonggi-do, South Korea</span>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5" />
              <a href="mailto:wcgo2ling@gmail.com" className="hover:underline">
                wcgo2ling@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              <a
                href="https://www.linkedin.com/in/kidow/"
                target="_blank"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Divider />

      <Card title="소개" id="intro">
        <div className="flex-1">
          <div className="content space-y-5">
            <p>
              <span className="font-medium text-neutral-900 dark:font-normal dark:text-neutral-200">
                2018년 4월
              </span>{' '}
              군 전역 후 바로 웹 개발의 세계에 빠져들었고, 지금까지 5년 이상
              개발을 해오면서 3년이 넘는 경력을 쌓았습니다.
            </p>
            <p>
              <span className="font-medium text-neutral-900 dark:font-normal dark:text-neutral-200">
                더 게으르게 개발하기 위해, 더 부지런히 공부하는 것
              </span>
              을 항상 모토로 삼고 있습니다. 더 빠르고, 더 완성도 있는 개발을
              함으로써 여유 있는 개발자의 삶을 살고 싶습니다.
            </p>
            <p>
              주로{' '}
              <span className="font-medium text-neutral-900 dark:font-normal dark:text-neutral-200">
                Front-end
              </span>{' '}
              개발자로 일하는 것을 선호합니다. 다만 풀스택으로 개발해본 적도
              있기 때문에 어느 정도 소통 가능한 백엔드 지식은 있는 편입니다.
            </p>
            <p>
              가장 최근에 SaaS를 혼자 창업했다가 정리하고,{' '}
              <a
                href="#일간 ProductHunt"
                className="font-medium text-neutral-900 underline dark:font-normal dark:text-neutral-200"
              >
                일간 ProductHunt
              </a>
              라는 사이드 프로젝트 등을 개발 및 운영하고 블로그를 정리해나가며
              구직을 이어가고 있습니다.
            </p>
          </div>
        </div>
      </Card>

      <Divider />

      <Card title="기술" id="skills">
        <div className="flex-1 space-y-5">
          <div className="flex">
            <div className="flex-1">
              <div className="text-lg text-neutral-700 dark:text-neutral-300">
                프론트엔드
              </div>
              <div className="text-sm text-neutral-500">Front-end</div>
            </div>
            <ul className="flex-1 space-y-1.5">
              <li className="font-medium text-neutral-900 dark:font-semibold dark:text-neutral-200">
                Next.js
              </li>
              <li className="font-medium text-neutral-900 dark:font-semibold dark:text-neutral-200">
                Typescript
              </li>
              <li className="font-medium text-neutral-900 dark:font-semibold dark:text-neutral-200">
                TailwindCSS
              </li>
              <li className="font-medium text-neutral-900 dark:font-semibold dark:text-neutral-200">
                Recoil
              </li>
              <li>React.js</li>
              <li>Redux</li>
              <li>Vue.js</li>
            </ul>
          </div>

          <div className="flex">
            <div className="flex-1">
              <div className="text-lg text-neutral-700 dark:text-neutral-300">
                백엔드
              </div>
              <div className="text-sm text-neutral-500">Back-end</div>
            </div>
            <ul className="flex-1 space-y-1.5">
              <li className="font-medium text-neutral-900 dark:font-semibold dark:text-neutral-200">
                Node.js
              </li>
              <li className="font-medium text-neutral-900 dark:font-semibold dark:text-neutral-200">
                PostgreSQL
              </li>
              <li>MySQL</li>
            </ul>
          </div>

          <div className="flex">
            <div className="flex-1">
              <div className="text-lg text-neutral-700 dark:text-neutral-300">
                인프라
              </div>
              <div className="text-sm text-neutral-500">Infrastructure</div>
            </div>
            <ul className="flex-1 space-y-1.5">
              <li className="font-medium text-neutral-900 dark:font-semibold dark:text-neutral-200">
                Vercel
              </li>
              <li className="font-medium text-neutral-900 dark:font-semibold dark:text-neutral-200">
                Supabase
              </li>
              <li>Firebase</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </Card>

      <Divider />

      <Card title="경력" id="careers">
        <div className="flex-1 space-y-10">
          <Item
            url="https://feedbank.app/?utm_source=resume&utm_medium=resume"
            title="피드뱅크"
            date="2022년 8월 ~ 2023년 3월"
            keywords="Next.js, Typescript, TailwindCSS"
            image="/assets/resume/feedbank.png"
          >
            <p>
              <span className="mr-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                웹사이트 피드백 수집툴
              </span>
              피드뱅크를 혼자 창업하고 개발했습니다.
            </p>
            <p>
              이후 사업성이 없다고 판단, 7개월 만에 사업을 종료하고 다시 구직을
              이어나가고 있습니다.
            </p>
            <p>
              <a
                className="font-medium text-neutral-800 underline dark:font-normal dark:text-neutral-200"
                href="#Feedbank"
              >
                피드뱅크 설명
              </a>
            </p>
          </Item>

          <Item
            url="https://fetching.co.kr"
            title="페칭"
            date="2021년 9월 ~ 2022년 8월"
            keywords="Next.js, Typescript, TailwindCSS, Recoil, Slack, Notion"
            image="/assets/resume/fetching.jpg"
          >
            <p>
              온라인 명품 구매 플랫폼 페칭에서 프론트엔드 개발자로 일하고
              있습니다.
            </p>
            <p>
              카페24로 운영되던 기존 커머스 사이트를
              <span className="mx-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                Next.js
              </span>
              기반으로 새롭게 구축하였고, 어드민 사이트 개선 및 신규 어드민
              이전, 파트너센터 신규 구축을 담당했습니다.
            </p>
            <p>업무 상 소통은 Slack, 업무 관리는 Notion을 사용하였습니다.</p>
            <ul className="list-outside list-disc space-y-1">
              <li>
                <span className="font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  Ant Design
                </span>
                의 컴포넌트 설계 방식을 도입함으로써 프로젝트를 설계하는 방식을
                더 직관적이고 효율적으로 업그레이드했습니다.
              </li>
              <li>
                SCSS 대신 새로 공부했던
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  TailwindCSS
                </span>
                를 회사 내 신규 런칭 프로젝트에 도입 후 개발 속도를 이전
                방식보다 더 빠르게 높힐 수 있었습니다.
              </li>
              <li>
                TailwindCSS를 도입한 이후 UI 라이브러리 없이 직접 UI
                Component들을 만들기 시작하면서
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  UI에 대한 이해도
                </span>
                가 한 층 더 높아졌고, 직접 만든 컴포넌트들을 개인적으로 정리하는
                <a
                  href="https://archive.kidow.me"
                  className="ml-1 font-medium text-neutral-800 underline dark:font-normal dark:text-neutral-200"
                  target="_blank"
                >
                  archive.
                </a>
                와
                <a
                  href="https://components.kidow.me"
                  className="ml-1 font-medium text-neutral-800 underline dark:font-normal dark:text-neutral-200"
                  target="_blank"
                >
                  components.
                </a>
                도 만들면서{' '}
                <span className="font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  재사용성
                </span>
                도 높이고 경력에 도움이 되는 포트폴리오도 만들 게 되는 큰 실력
                향상이 있었습니다.
              </li>
              <li>
                설계하는 데만 시간을 여러모로 잡아먹는 Redux를 과감히 버리고,
                새로 등장한
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  Recoil
                </span>
                을 도입 후 상태 관리 구축에 들어가는 시간과 코드량을 줄이면서도
                전역 상태 관리 용도 그 자체로만 활용함으로써 더욱 직관적으로
                유지보수가 가능하도록 업그레이드했습니다.
              </li>
              <li>
                프론트 동료 개발자들과의
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  코드 리뷰
                </span>
                를 주선하면서 4개 프로젝트(커머스, 어드민, 파트너센터, 앱)의
                코드 퀄리티를 동시에 높혔고, Merge 시에 코드 충돌이 생기게 되자
                Pull Request 를 할 때 템플릿을 만들고 꼭 해당 프로젝트의 모든
                담당 개발자들의 확인을 거친 후 Merge하도록 함으로써 협업 퀄리티
                또한 높였습니다.
              </li>
              <li>
                카페24로 유지되던 메인 서비스를
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  Next.js
                </span>
                로 옮기는 프로젝트를 진행했는데, 거기서
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  상품 리스트, 브랜드 리스트, 프로모션 리스트
                </span>
                를 주로 담당했습니다. 여기서 필터 기능을 만들기 위해 페칭
                카테고리, 가격, 정렬, 성별, 브랜드, 프로모션을 고려해야 했고,
                페이지네이션도 생각해야 했습니다. 좋은 사용자 경험을 위해 이
                필터값들을
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  쿼리스트링
                </span>
                으로 관리할 수 있도록 하였습니다. 또한 상품이 많고 객단가가 높은
                점을 고려해 고객이 여러 상품을 둘러볼 것이라 생각하였고, 상품
                클릭 시 페이지 이동이 아닌 새 창을 띄우는 방식을 택했습니다.
              </li>
              <li>
                네이버 쇼핑 검색을 통해 들어온 고객들이 최저가임을 알지 못해
                이탈하는 일이 빈번해지자, 네이버 검색 api를 활용하여
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  다른 쇼핑몰의 같은 상품 목록을 가져와서 '우리의 이 상품이 다른
                  쇼핑몰보다 이만큼 싸다'
                </span>
                라는 것을 알리도록 하였고, 구매 전환율을 높이는 데 기여를 하게
                했습니다.
              </li>
              <li>
                어드민 주문 상세에서 발주, 주문, 반품, 교환, 환불, 결제, 배송,
                메모에 대한 정보를
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  한 페이지에 전부 담아야 하는
                </span>
                미션이 있었습니다. 해당 정보들을
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  쿼리스트링
                </span>
                을 통해 각각의 탭으로 분리하였고, 그러함으로써 링크를 타고
                들어올 때 원하는 탭으로 한 번에 갈 수 있도록 하였습니다. 가장
                중요했던 발주 정보의 경우 환율, 관부가세 등의 세금, 프로모션,
                자체 할인, 배송비 및 경유지 수수료, 페칭 수수료, 쿠폰 및 적립금,
                환율까지
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  한 번에 다 계산이 된 채로
                </span>
                주문 금액이 나와야 하는데, 여기서
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  실시간으로 조정
                </span>
                이 가능하고 모든 가격이 영향을 받아야 했습니다. 또한 돈이 걸린
                일이기 때문에 절대로 제 실수로 오차가 생기면 안되는데, 배포 후
                사고가 터지진 않았습니다.
              </li>
              <li>
                어드민에서 발주 정보를 최신화하기 위한 노력이 필요했습니다. 해외
                명품 특성상 상품 가격 변동이 심하고, 한 주문에 실수로 발주를 두
                번넣게 되는 일이 일어나면 안됐으며, 원화나 유로, 달러에 따라
                가격도 달라질 수 있기 때문에 환율도 실시간으로 고려를 해야
                했습니다. 이 때
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  SWR
                </span>
                을 도입하여 데이터의 최신화를 기대한 만큼 이룰 수 있었습니다.
              </li>
              <li>
                파트너센터의 초기 버전 프론트를 전부 담당했습니다. <br />
                제일 중요한 기능은
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  상품 등록
                </span>
                이었는데, 이미지 업로드와 위지윅 에디터는 기본이고 명품 브랜드와
                페칭 카테고리에 상품을 매핑하는 로직, 색상 및 사이즈 등의 옵션을
                책정하고 옵션마다 금액 가감을 따로 할 수 있는 로직, 한 상품에
                배송 타입이 다 다를 수 있기 때문에 배송 정보를 따로 적용하는
                로직, 마지막으로 입력한 정보를 토대로 페칭 상품 상세에 어떻게 뜰
                것인지 미리보기를 만드는 작업까지 적용을 했습니다. <br />그
                다음으로 중요했던 기능은
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  입점 신청
                </span>
                이었는데, 약관 동의, 사업자 정보, 담당자 정보, 배송 정보,
                마지막으로 서명까지 한 번에 받아야 했기 때문에 관련
                라이브러리까지도 사용해서 구현해야 했습니다. 또한 입점 시에
                기재해야 하는 정보가 많다보니 임시저장이 필요했고,
                로컬스토리지를 활용하여 저장 및 불러오기를 할 수 있도록
                하였습니다.
              </li>
            </ul>
          </Item>

          <Item
            url="https://insunet.co.kr"
            title="링크플래너"
            date="2019년 9월 ~ 2020년 10월"
            keywords="Next.js, React.js, Redux, Mobx, Material-UI, Typescript, Storybook, Jest, Slack, Jira"
            image="/assets/resume/linkplanner.png"
          >
            <p>
              보험 가입 및 상담 서비스 플랫폼 인슈넷, 보험 설계사 플랫폼
              링크플래너의 유지보수 및 신기능 추가 및 어드민 사이트 개발까지
              전반적인 업무를 주로 맡았습니다.
            </p>
            <p>업무 상 소통은 Slack, 업무 관리는 Jira를 사용했습니다.</p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                보험 상품 및 설계사에 대한
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  검색 최적화(SEO)
                </span>
                를 새로 적용하고, 네이버와 구글 검색 시 메인 상위에 뜨도록
                하였습니다.
              </li>
              <li>
                보험 가입을 온라인으로 간소화하기 위해 PDF에 서명(이미지)을
                삽입하는 기능을 개발, CS가 기존에 전화로 진행했던 일들을 줄일 수
                있게 되었습니다.
              </li>
              <li>
                19년 7월 Next.js 9 버전에서 새로 등장한
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  정적 페이지 생성
                </span>
                기능을 도입, 기존에 페이지에 접근할 때마다 서버에 일일히
                데이터를 보내 조회했던 보험 상품, 보험 용어 등의 페이지들을 빌드
                시에 한 번만 요청하여 페이지를 만드는 것으로 변경하여 서버의
                부담을 크게 줄였습니다. 보험 용어 같은 페이지들은 데이터가
                변경되는 일이 드물었기 때문에 해당 방법이 효과가 있을 수
                있었습니다.
              </li>
              <li>
                <span className="font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  TypeScript
                </span>{' '}
                를 직접 배워서 처음 도입함으로써 타입 불일치로 인한 오류를
                줄이고, 변수들과 함수에 타입을 명시함으로써 보다 명시적으로
                알아볼 수 있는 코드를 작성할 수 있게 되었고 코드 퀄리티 상승
                효과를 얻을 수 있게 되었습니다.
              </li>
              <li>
                회사에 디자이너가 없어서 직접 목업을 만드는 일들이 필요했는데,
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  Storybook
                </span>{' '}
                을 처음 도입하여 UI Design에 관한 소통의 부담을 한결 줄였던
                경험이 있습니다.
              </li>
              <li>
                <span className="font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  Jest
                </span>{' '}
                를 처음 도입하여 오류를 줄이기 위한 노력을 했습니다. 당시에는
                자세하게는 하지 않고 페이지 렌더링, 컴포넌트 렌더링, api 이상
                체크 정도만 했습니다.
              </li>
              <li>
                초기에는 당시 쓰고 있던 Redux가 너무 설계가 복잡해서, 설계와
                유지보수가 상대적으로 쉬운
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  MobX
                </span>{' '}
                로 노선을 변경했었습니다. 하지만 Mobx가 쓰는 Decorator 문법에
                이질감을 느끼게 되었고, Redux의 설계를 더 쉽게 해주는
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  Redux-toolkit
                </span>{' '}
                을 찾게 되면서 코드 퀄리티를 한결 더 높일 수 있었습니다.
              </li>
            </ul>
          </Item>

          <Item
            url="https://mybiskit.com"
            title="마이비스킷"
            date="2019년 2월 ~ 2019년 6월"
            image="/assets/resume/mybiskit.png"
            keywords="Nuxt.js, Element-UI, SQL, Slack, Trello"
          >
            <p>
              직장인 익명 커뮤니티
              <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                blind
              </span>
              에서 신 사업으로 추진한 온라인 취미 클래스 플랫폼 '마이비스킷'의
              전반적인 프론트엔드 업무를 맡았습니다. 당시 React인 줄 알고 갔으나
              회사의 요청으로 급하게 Nuxt.js를 배워서 만들었습니다.
            </p>
            <p>
              커머스 프론트와 어드민 프론트를
              <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                Nuxt.js
              </span>
              와 UI 라이브러리인
              <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                Element-UI
              </span>
              를 사용하여 만들었습니다.
            </p>
            <p>
              당시 저는 주로 JS, 즉 동적인 기능에 집중했고 퍼블리셔와 마케팅,
              기획 및 CS, 웹 디자인 등 많은 직종과 협업을 했습니다. 하나의
              팀으로 하나의 서비스를 만든 첫 프로젝트다 보니 다양한 직종 분들과
              협업하는 노하우를 많이 배웠습니다.
            </p>
            <p>업무 상 소통은 Slack, 업무 관리는 Trello를 사용했습니다.</p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                Vue와 Nuxt.js를 비록 급하게 배웠지만, React를 이미 알고 있던
                시점에서 Vue를 새로 배우고 도입하는 데 큰 어려움 없이 프로젝트를
                진행할 수 있었습니다. (오히려 Vue가 React보다 더 좋다고 생각을
                해서 이후에 Vue를 한동안 공부했었던 기억이 납니다.)
              </li>
              <li>
                어느정도 백엔드 지식도 공부했던 덕분에, 백엔드 개발자와 함께
                <span className="ml-1 font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                  SQL
                </span>{' '}
                코드를 같이 짜보면서 서 프론트와 백 사이의 소통의 효율성을 한층
                더 높일 수 있었습니다.
              </li>
            </ul>
          </Item>

          <Item
            url="https://gangmom.kr"
            image="/assets/resume/gangmom.png"
            title="강남엄마"
            date="2019년 1월 ~ 2019년 2월"
            keywords="Node.js, SQL, Slack, Trello"
          >
            <p>
              전국 학원 검색 플랫폼 '강남엄마'에서 첫 개발 업무로 백엔드 보조
              알바를 하였습니다. 주로 SQL 작성을 맡았습니다.
            </p>
            <p>
              주된 작업은 SQL 작성으로, 기존에 있던 학원만을 모으는 기능에 더해
              선생님 기능을 추가하여, 학원에 속한 선생님들 리스트, 특정 선생님의
              이력 및 이력에 따른 학원 목록 가져오기 등등을 맡았습니다.
            </p>
            <p>업무 상 소통은 Slack, 업무 관리는 Trello를 사용했습니다.</p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                학원 강사 및 선생님 플랫폼으로도 활동 변경을 넓히는 방향으로
                프로젝트를 계획하였고, 선생님 테이블 추가, 학원 테이블에 선생님
                테이블 연결, 선생님 상세 조회 시 연관된 선생님 추가로 조회 등의
                기능을 개발했습니다.
              </li>
              <li>
                학원 상세 데이터 조회시 연관된 학원 조회 등의 기능을
                개발했습니다.
              </li>
            </ul>
          </Item>
        </div>
      </Card>

      <Divider />

      <Card title="프로젝트" id="projects">
        <div className="flex-1 space-y-10">
          <Item
            url="https://daily-producthunt.kidow.me"
            image="/assets/resume/daily-producthunt.png"
            title="일간 ProductHunt"
            date="2023년 2월 20일 ~ 진행 중"
            keywords="Next.js, Typescript, TailwindCSS, Slack, Notion, Vercel, Discord, Telegram, Supabase"
          >
            <p>
              글로벌 IT 메이커 플랫폼 ProductHunt에 올라오는 상위 제품들을
              평일마다 요약해서 소개하는 서비스입니다. Slack과 Discord,
              Telegram을 통해 콘텐츠를 전달하고 Notion을 통해 유저의
              데이터베이스에 내용을 저장합니다.
            </p>
            <p>
              IT 프로덕트와 창업에 관심이 많아서 매일 ProductHunt를 들여다
              보는게 발단이었고, 이 것을 쉽게 정리해서 아카이브에 저장하는
              것으로 시작했다가 이 것을 개발 기술을 이용해서 사람들에게도
              공유하면 더 동기 부여가 될 것 같아서 프로젝트를 시작했습니다. 6월
              기준 500개 넘는 프로덕트를 소개했고, 계속 진행 중입니다.
            </p>
            <p>
              Next.js의 신기능인{' '}
              <span className="font-medium text-neutral-800 dark:font-normal dark:text-neutral-200">
                App Router
              </span>
              를 이용해서 만들었습니다. 처음이라 나름 시행착오를 겪고 있지만
              해본 느낌으로는 이전 Pages Router보다 훨씬 더 프로젝트를 정교하게
              구성할 수 있는 것 같다고 느껴집니다.
            </p>
            <p>
              Supabase를 이용해 백엔드를 구성했습니다. 유저와 예약 콘텐츠
              테이블을 만드는 용도로 주로 사용했습니다.
            </p>
            <p>
              Nextjs API Router를 통해 Slack, Notion 리다이렉트 라우터와 전송
              라우터를 만들었고, 대시보드도 한 프로젝트에서 만들어서 관리하고
              있습니다. 오픈 소스로도 만들었기 때문에 보안적인 측면에서도 어느
              정도 구성은 해놓았습니다.
            </p>
          </Item>

          <Item
            url="https://feedbank.app"
            image="/assets/resume/feedbank.png"
            title="Feedbank"
            date="2022년 8월 ~ 2023년 3월"
            keywords="Next.js, TailwindCSS, Typescript"
          >
            <p>
              웹사이트를 방문하는 방문자들에게서 즉각적으로 피드백 및 의견을
              수집할 수 있도록 위젯을 삽입하는 솔루션입니다.
            </p>
            <p>
              화면 왼쪽 하단에 고정된 버튼을 누르면 텍스트 창이 뜨는데, 보낼
              의견을 작성 후 등록하면 바로 창이 닫히면서 방문자는 웹서핑을
              이어가고 운영자는 소중한 의견을 이메일로 전달받아 서비스를
              개선하는 데 반영할 수 있습니다.
            </p>
            <p>
              <a
                className="font-medium text-neutral-800 underline dark:font-normal dark:text-neutral-200"
                href="https://blog.feedbank.app/%ED%94%BC%EB%93%9C%EB%B1%85%ED%81%AC%EB%A5%BC-%EC%8B%9C%EC%9E%91%ED%95%A9%EB%8B%88%EB%8B%A4/"
                target="_blank"
              >
                피드뱅크 출시 후기
              </a>
            </p>
          </Item>

          <Item
            url="https://embedgpt.kidow.me"
            image="/assets/resume/embedgpt.png"
            title="EmbedGPT"
            date="2023년 3월 1일 ~ 2023년 3월 4일"
            keywords="Next.js, TailwindCSS, Typescript, Vercel, Chrome Extension"
          >
            <p>
              ChatGPT 내용을 다른 사람들과 공유하고, 커뮤니티 게시판에 쉽게
              임베딩할 수 있는 커뮤니티입니다.
            </p>
          </Item>

          <Item
            url="https://kidow.me"
            image="/assets/resume/kidow.png"
            title="Blog v5"
            date="2023년 1월 ~ 진행 중"
            keywords="Next.js, Nextra, i18n, TailwindCSS, Typescript, Quill, Giscus, Vercel"
          >
            <p>
              5번째로 만든 블로그입니다.
              <a
                href="https://nextra.site/"
                className="ml-1 font-medium text-neutral-800 underline dark:font-normal dark:text-neutral-200"
              >
                Nextra
              </a>
              라는 Next.js & Mdx 혼합 오픈 소스를 활용하여 만들었습니다.
            </p>
            <p>
              기존에 운영 중이던 6개의 서브도메인 프로젝트인{' '}
              <a
                href="https://archive.kidow.me"
                target="_blank"
                className="font-medium text-neutral-800 underline dark:font-normal dark:text-neutral-200"
              >
                archive.
              </a>
              ,{' '}
              <a
                href="https://components.kidow.me"
                target="_blank"
                className="font-medium text-neutral-800 underline dark:font-normal dark:text-neutral-200"
              >
                components.
              </a>
              ,{' '}
              <a
                href="https://memo.kidow.me"
                target="_blank"
                className="font-medium text-neutral-800 underline dark:font-normal dark:text-neutral-200"
              >
                memo.
              </a>
              ,{' '}
              <a
                href="https://og.kidow.me"
                target="_blank"
                className="font-medium text-neutral-800 underline dark:font-normal dark:text-neutral-200"
              >
                opengraph.
              </a>
              ,{' '}
              <a
                href="https://blog.kidow.me"
                target="_blank"
                className="font-medium text-neutral-800 underline dark:font-normal dark:text-neutral-200"
              >
                blog.
              </a>
              ,{' '}
              <a
                href="https://resume.kidow.me"
                target="_blank"
                className="font-medium text-neutral-800 underline dark:font-normal dark:text-neutral-200"
              >
                resume.
              </a>
              를 모두 1개의 프로젝트로 통합하였습니다.
            </p>
            <p>
              <Link
                href="/contents/6-projects-to-one"
                className="font-medium text-neutral-800 underline dark:font-normal dark:text-neutral-200"
              >
                5번째 블로그 만든 후기
              </Link>
            </p>
          </Item>

          <Item
            url="https://coddee.dev"
            image="/assets/resume/coddee.png"
            title="Coddee"
            date="2022년 10월 ~ 진행 중"
            keywords="Next.js, TailwindCSS, Typescript"
          >
            <p>
              개발자 채팅방입니다. 2년 전에 만들었다가 중단했던 서비스를 다시
              만들었습니다.
            </p>
            <p>
              기존 채팅방 서비스와는 다르게 코드블록을 올릴 수 있습니다. 또한
              Github로만 로그인할 수 있기 때문에, 개발자들만의 신뢰있는 커뮤니티
              공간으로 만들어 보려 합니다.
            </p>
            <p>
              2년 전에는 Firebase로 만들었었는데, 유지보수가 너무 힘들어
              중단했고 지금은 기술이 훨씬 편해졌기 떄문에 다시 만들고 싶은
              욕심이 생기게 되어 만들게 되었습니다.
            </p>
            <p>
              코드 관련 질문을 올려도 좋고, 개발 관련 수다들을 떨어도 되는
              자유로운 공간으로 운영할 계획입니다.
            </p>
          </Item>
        </div>
      </Card>

      <Divider />

      <Card title="학력" id="education">
        <div className="flex-1 space-y-10">
          <Item
            url="http://sejong.ac.kr/"
            image="/assets/resume/sejong-university.jpg"
            title="세종대학교"
            date="2015년 물리학과 입학 ~"
            keywords=""
          >
            <p>
              2학년 1학기까지 다녔지만 전공과 지금 하는 일이 맞지 않고, 학업보다
              개발에 뜻을 두고자, 현재는 제적된 상태입니다.
            </p>
          </Item>
        </div>
      </Card>
    </div>
  )
}

export default Resume
