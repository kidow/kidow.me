import { ImageResponse } from '@vercel/og'
import type { ImageResponseOptions } from '@vercel/og'
import { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const config = {
  runtime: 'edge'
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
)

const response = (
  title: string = '개발자 Kidow 블로그',
  description: string = '더 게으르기 위해 더 열심히 공부하는 개발자입니다.',
  color: string = '#2f363d'
) => (
  <div tw="flex flex-col h-full w-full bg-white relative p-20">
    <div tw="flex mb-[1.8rem] w-[1040px]">
      <div tw="flex-1 text-[5rem] text-[#2f363d]" style={{ lineHeight: 0.98 }}>
        {title}
      </div>
      <img
        src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/publics/kidow.png`}
        alt="Kidow"
        width={150}
        tw="ml-10"
      />
    </div>
    <div tw="text-[#6e7681]" style={{ fontSize: '33.6px' }}>
      {description}
    </div>
    <div tw="flex absolute left-20 bottom-32 text-[2rem] items-center">
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        fill="#2f363d"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
      </svg>
      <div tw="ml-4 text-[#2f363d]">https://github.com/kidow</div>
    </div>
    <div tw="flex absolute left-20 bottom-20 text-[2rem] items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#2f363d"
        width={32}
        height={32}
      >
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </svg>
      <div tw="ml-4 text-[#2f363d]">wcgo2ling@gmail.com</div>
    </div>
    <div
      tw="absolute bottom-0 w-[1200px] h-6"
      style={{ backgroundColor: color }}
    />
  </div>
)

export default async function handler(req: NextRequest) {
  try {
    const options: ImageResponseOptions = {
      width: 1200,
      height: 600
    }
    const { searchParams } = new URL(req.url)
    const { data } = await supabase
      .from('thumbnails')
      .select('title, description, color, url')
      .eq('id', searchParams.get('id'))
      .single()
    if (!data) return new ImageResponse(response(), options)

    return new ImageResponse(
      response(data.title, data.description, data.color),
      options
    )
  } catch (e) {
    console.log(e)
    return new ImageResponse(response(), { width: 1200, height: 600 })
  }
}
