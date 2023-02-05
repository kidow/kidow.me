import { useEffect, useState } from 'react'
import type { FC, KeyboardEvent } from 'react'
import { toast, useObjectState } from 'services'
import {
  ArrowDownIcon,
  ArrowDownLeftIcon,
  ArrowDownRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpLeftIcon,
  ArrowUpRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import Script from 'next/script'
import classnames from 'classnames'

export interface Props {}
interface State {
  searchQuery: string
  results: kakao.maps.services.PlacesSearchResult
  latitude: number
  longitude: number
  markers: kakao.maps.Marker[]
  polylines: kakao.maps.Polyline[]
  hasNextPage: boolean
  infoWindow: kakao.maps.InfoWindow | null
  total: number
  page: number
}

const Board: string[][] = [
  [
    '찌개',
    '국밥',
    '고깃집',
    '족발,보쌈',
    '국수',
    '찜',
    '해물,생선',
    '쌈밥',
    '돈까스'
  ],
  ['짜장면', '짬뽕', '마라탕', '양꼬치', '훠궈', '', '', '', ''],
  [
    '초밥,스시',
    '라멘',
    '우동',
    '돈가츠',
    '오마카세',
    '샤브샤브',
    '텐동',
    '',
    ''
  ],
  ['파스타', '피자', '스테이크', '샐러드', '뷔페', '멕시칸,브라질', '', '', ''],
  [
    '한식',
    '중식',
    '일식',
    '양식',
    '혼밥',
    '아시아음식',
    '분식',
    '패스트푸드',
    '술집'
  ],
  ['베트남음식', '태국음식', '인도음식', '', '', '', '', '', ''],
  ['떡볶이', '김밥', '라면', '만두', '도시락', '', '', '', '편의점'],
  ['버거', '토스트', '샌드위치', '타코', '핫도그', '도넛', '빵', '카페', ''],
  ['치킨', '와인바', '포장마차', '파전', '', '', '', '', '']
]

const LunchMenu: FC<Props> = () => {
  const [
    {
      searchQuery,
      results,
      latitude,
      longitude,
      markers,
      polylines,
      hasNextPage,
      infoWindow,
      total,
      page
    },
    setState,
    onChange
  ] = useObjectState<State>({
    searchQuery: '',
    results: [],
    latitude: 0,
    longitude: 0,
    markers: [],
    polylines: [],
    hasNextPage: false,
    infoWindow: null,
    total: 0,
    page: 1
  })
  const [map, setMap] = useState<kakao.maps.Map>()

  const get = async (keyword: string, page: number = 1) => {
    map.setCenter(new kakao.maps.LatLng(latitude, longitude))
    const center = map?.getCenter()
    const places = new kakao.maps.services.Places()

    places.keywordSearch(
      keyword,
      (data, status, pagination) => {
        setState({
          total: pagination.totalCount,
          hasNextPage: pagination.hasNextPage,
          ...(!data.length ? { results: [] } : {})
        })
        if (page > 1) pagination.gotoPage(page)
        if (!data.length && !!results.length) {
          results.forEach((_, i) => {
            markers[i].setMap(null)
            polylines[i].setMap(null)
          })
        }
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds()
          let searchResult: kakao.maps.services.PlacesSearchResult = []
          if (!infoWindow)
            setState({
              infoWindow: new kakao.maps.InfoWindow({
                zIndex: 1,
                removable: true
              })
            })
          else infoWindow.close()

          if (!!results.length) {
            results.forEach((_, i) => {
              markers[i].setMap(null)
              polylines[i].setMap(null)
            })
          }

          const searchMarkers: kakao.maps.Marker[] = []
          const searchPolylines: kakao.maps.Polyline[] = []

          for (const item of data) {
            searchResult.push(item)
            bounds.extend(new kakao.maps.LatLng(Number(item.y), Number(item.x)))

            const marker = new kakao.maps.Marker({
              position: new kakao.maps.LatLng(Number(item.y), Number(item.x))
            })
            const points = [center, marker.getPosition()]
            const polyline = new kakao.maps.Polyline({
              path: points,
              strokeColor: 'black',
              strokeOpacity: 0.3
            })

            searchMarkers.push(marker)
            searchPolylines.push(polyline)

            polyline.setMap(map)
            marker.setMap(map)

            kakao.maps.event.addListener(marker, 'click', () => {
              infoWindow?.setContent(
                `<div style="color: black; padding: 2px;">${item.place_name}</div>`
              )
              infoWindow?.open(map, marker)
            })
          }
          setState({
            results: page === 1 ? searchResult : [...results, ...searchResult],
            markers:
              page === 1 ? searchMarkers : [...markers, ...searchMarkers],
            polylines:
              page === 1 ? searchPolylines : [...polylines, ...searchPolylines],
            page: pagination.current
          })

          map.setBounds(bounds)
        }
        map.setCenter(new kakao.maps.LatLng(latitude, longitude))
      },
      {
        location: center,
        sort: kakao.maps.services.SortBy.DISTANCE,
        radius: 500
      }
    )
  }

  const onSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!searchQuery) return
    if (e.keyCode === 13) get(searchQuery)
  }

  useEffect(() => {
    if (
      typeof window.navigator === 'undefined' ||
      typeof window.navigator.geolocation === 'undefined'
    ) {
      toast.info('호환되지 않는 브라우저입니다.')
      return
    }

    window.navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => setState({ latitude, longitude })
    )
  }, [])
  return (
    <>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c0986f45ad519044d2574ac8091cb572&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
      <div className="mx-auto max-w-3xl">
        <h2 className="mt-16 text-center text-5xl font-semibold">
          점심 뭐 먹지?
        </h2>
        <div className="flex items-center justify-center py-10">
          <div className="flex items-center rounded-full border py-3 px-4 dark:border-neutral-700">
            <input
              value={searchQuery}
              name="searchQuery"
              onChange={onChange}
              onKeyDown={onSearch}
              spellCheck={false}
              autoFocus
              autoComplete="off"
              className="bg-transparent"
            />
            <MagnifyingGlassIcon className="h-5 w-5 dark:text-neutral-500" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <Map
          center={{ lat: latitude, lng: longitude }}
          style={{ width: '576px', height: '576px' }}
          onCreate={setMap}
        >
          {results.map((item, key) => (
            <MapMarker
              key={key}
              position={{ x: Number(item.x), y: Number(item.y) }}
            />
          ))}
        </Map>
        <div className="grid grid-cols-3 border-t dark:border-neutral-800 dark:text-neutral-200">
          {Board.map((item, i) => (
            <div
              key={i}
              className="grid h-48 w-48 grid-cols-3 text-sm dark:odd:bg-neutral-900"
            >
              {item.map((menu, j) => (
                <div
                  key={j}
                  onClick={() => {
                    if (!menu) return
                    setState({ searchQuery: menu })
                    get(menu)
                  }}
                  className={classnames(
                    'relative h-16 w-16 border-b border-r p-1 dark:border-neutral-800',
                    i % 2 === 0
                      ? 'dark:hover:bg-neutral-700'
                      : 'dark:hover:bg-neutral-800'
                  )}
                >
                  <button className="flex h-full w-full items-center justify-center">
                    {menu}
                  </button>
                  {i === 4 && (
                    <>
                      {j === 0 && (
                        <ArrowUpLeftIcon className="absolute top-0 left-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 opacity-20" />
                      )}
                      {j === 1 && (
                        <ArrowUpIcon className="absolute top-0 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 opacity-20" />
                      )}
                      {j === 2 && (
                        <ArrowUpRightIcon className="absolute top-0 right-0 h-5 w-5 translate-x-1/2 -translate-y-1/2 opacity-20" />
                      )}
                      {j === 3 && (
                        <ArrowLeftIcon className="absolute top-1/2 left-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 opacity-20" />
                      )}
                      {j === 5 && (
                        <ArrowRightIcon className="absolute top-1/2 right-0 h-5 w-5 translate-x-1/2 -translate-y-1/2 opacity-20" />
                      )}
                      {j === 6 && (
                        <ArrowDownLeftIcon className="absolute bottom-0 left-0 h-5 w-5 -translate-x-1/2 translate-y-1/2 opacity-20" />
                      )}
                      {j === 7 && (
                        <ArrowDownIcon className="absolute bottom-0 left-1/2 h-5 w-5 -translate-x-1/2 translate-y-1/2 opacity-20" />
                      )}
                      {j === 8 && (
                        <ArrowDownRightIcon className="absolute bottom-0 right-0 h-5 w-5 translate-x-1/2 translate-y-1/2 opacity-20" />
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="w-72 divide-y border-y border-r dark:divide-neutral-800 dark:border-neutral-800">
          <p className="flex h-10 items-center px-2 text-sm dark:text-neutral-300">
            총<b className="ml-1">{total}</b>개의 검색 결과를 가져왔습니다.
          </p>
          <ul className="max-h-[532px] overflow-auto overscroll-contain">
            {results.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer p-4 dark:hover:bg-neutral-800"
                onClick={() => {
                  const marker = new kakao.maps.Marker({
                    position: new kakao.maps.LatLng(
                      Number(item.y),
                      Number(item.x)
                    )
                  })
                  infoWindow?.close()
                  infoWindow?.setContent(
                    `<div style="color: black; padding: 2px;">${item.place_name}</div>`
                  )
                  infoWindow?.open(map, marker)
                  map.setCenter(
                    new kakao.maps.LatLng(Number(item.y), Number(item.x))
                  )
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">
                    {item.place_name}
                  </span>
                  <div className="flex-1 text-sm dark:text-neutral-500">
                    {item.distance}m
                  </div>
                </div>
                <div className="text-sm dark:text-neutral-300">
                  {item.category_name}
                </div>
                <div className="mt-1 flex items-center gap-1">
                  <span className="text-xs dark:text-neutral-500">
                    {item.phone}
                  </span>
                  <a
                    href={item.place_url}
                    target="_blank"
                    className="dark:text-neutral-500 dark:hover:text-neutral-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </a>
                </div>
              </li>
            ))}
            {hasNextPage && (
              <li
                className="cursor-pointer py-2 text-center text-sm dark:text-neutral-400 dark:hover:bg-neutral-800"
                onClick={() => get(searchQuery, page + 1)}
              >
                더 부르기
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default LunchMenu
