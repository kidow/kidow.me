import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: (
    <svg
      className="h-7"
      viewBox="0 0 747 173"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.9066 0L21.4398 135H0.697632L24.1644 0H44.9066ZM96.059 39.9023L48.3344 85.4297L21.3519 109.424L18.891 90.0879L38.5785 69.5215L69.516 39.9023H96.059ZM58.8812 135L36.2054 89.4727L50.9711 75.4102L81.6449 135H58.8812Z"
        fill="currentColor"
      />
      <path
        d="M119.448 39.9023L102.925 135H82.2707L98.7941 39.9023H119.448ZM101.695 15.293C101.636 11.8945 102.749 9.11133 105.034 6.94336C107.32 4.77539 110.132 3.66211 113.472 3.60352C116.695 3.54492 119.448 4.54102 121.734 6.5918C124.077 8.58398 125.249 11.25 125.249 14.5898C125.308 17.9883 124.165 20.7422 121.821 22.8516C119.536 24.9609 116.753 26.0449 113.472 26.1035C110.249 26.1621 107.495 25.2246 105.21 23.291C102.925 21.2988 101.753 18.6328 101.695 15.293Z"
        fill="currentColor"
      />
      <path
        d="M174.391 114.082L194.166 0H214.996L191.529 135H172.896L174.391 114.082ZM118.844 89.209L119.02 87.3633C119.781 81.5039 121.158 75.6445 123.15 69.7852C125.201 63.9258 127.955 58.5645 131.412 53.7012C134.928 48.8379 139.205 44.9707 144.244 42.0996C149.342 39.2285 155.318 37.8809 162.174 38.0566C168.15 38.2324 173.131 39.7852 177.115 42.7148C181.1 45.6445 184.205 49.4238 186.432 54.0527C188.717 58.6816 190.27 63.6914 191.09 69.082C191.91 74.4141 192.174 79.6289 191.881 84.7266L191.178 90.7031C190.24 96.0938 188.658 101.543 186.432 107.051C184.205 112.559 181.305 117.598 177.73 122.168C174.215 126.738 169.996 130.371 165.074 133.066C160.211 135.762 154.645 137.021 148.375 136.846C142.105 136.611 136.92 135.029 132.818 132.1C128.717 129.111 125.553 125.273 123.326 120.586C121.1 115.84 119.664 110.742 119.02 105.293C118.375 99.7852 118.316 94.4238 118.844 89.209ZM139.937 87.1875L139.762 89.0332C139.41 92.0801 139.264 95.332 139.322 98.7891C139.381 102.246 139.85 105.557 140.728 108.721C141.666 111.826 143.219 114.404 145.387 116.455C147.613 118.506 150.719 119.619 154.703 119.795C159.332 119.971 163.434 118.916 167.008 116.631C170.641 114.346 173.658 111.357 176.061 107.666C178.463 103.975 180.162 100.049 181.158 95.8887L183.619 79.8047C183.795 76.875 183.59 73.9746 183.004 71.1035C182.477 68.2324 181.51 65.625 180.103 63.2812C178.697 60.9375 176.822 59.0332 174.478 57.5684C172.193 56.0449 169.41 55.2539 166.129 55.1953C161.793 55.0195 158.043 55.8984 154.879 57.832C151.773 59.7656 149.195 62.3438 147.145 65.5664C145.152 68.7891 143.57 72.3047 142.398 76.1133C141.227 79.9219 140.406 83.6133 139.937 87.1875Z"
        fill="currentColor"
      />
      <path
        d="M206.481 89.0332L206.745 87.0117C207.448 80.4492 209.059 74.209 211.579 68.291C214.098 62.373 217.438 57.1289 221.598 52.5586C225.817 47.9297 230.768 44.3262 236.452 41.748C242.194 39.1699 248.581 37.9688 255.612 38.1445C262.409 38.2617 268.239 39.668 273.102 42.3633C278.024 45.0586 282.009 48.6621 285.055 53.1738C288.161 57.627 290.329 62.7246 291.559 68.4668C292.79 74.1504 293.112 80.0977 292.526 86.3086L292.35 88.3301C291.589 94.8926 289.919 101.104 287.341 106.963C284.821 112.822 281.452 118.037 277.233 122.607C273.073 127.119 268.122 130.664 262.38 133.242C256.696 135.762 250.368 136.934 243.395 136.758C236.657 136.641 230.827 135.264 225.905 132.627C221.042 129.932 217.057 126.357 213.952 121.904C210.905 117.451 208.766 112.412 207.536 106.787C206.305 101.104 205.954 95.1855 206.481 89.0332ZM227.311 87.0117L227.136 89.0332C226.843 92.2559 226.813 95.6543 227.048 99.2285C227.282 102.803 227.985 106.143 229.157 109.248C230.329 112.354 232.145 114.902 234.606 116.895C237.067 118.887 240.348 119.941 244.45 120.059C248.786 120.176 252.565 119.297 255.788 117.422C259.011 115.547 261.706 113.027 263.874 109.863C266.042 106.699 267.77 103.242 269.059 99.4922C270.348 95.6836 271.198 91.9629 271.608 88.3301L271.784 86.3086C272.136 83.1445 272.194 79.7754 271.96 76.2012C271.725 72.5684 271.022 69.1699 269.85 66.0059C268.678 62.7832 266.862 60.1758 264.401 58.1836C261.94 56.1328 258.659 55.0488 254.557 54.9316C250.163 54.8145 246.354 55.7227 243.132 57.6562C239.909 59.5312 237.214 62.0801 235.046 65.3027C232.878 68.5254 231.149 72.041 229.86 75.8496C228.63 79.6582 227.78 83.3789 227.311 87.0117Z"
        fill="currentColor"
      />
      <path
        d="M319.343 112.939L353.005 39.9023H366.892L358.982 63.0176L325.408 135H313.015L319.343 112.939ZM319.431 39.9023L323.211 115.488L321.101 135H308.181L299.744 39.9023H319.431ZM373.923 112.324L402.312 39.9023H423.054L381.658 135H367.947L373.923 112.324ZM368.562 39.9023L377 114.258L375.857 135H364.519L355.291 60.9082L355.554 39.9023H368.562Z"
        fill="currentColor"
      />
      <path
        d="M466.23 0H486.972L466.845 115.928L461.659 135H442.763L466.23 0ZM531.972 86.0449L531.796 87.8906C531.034 93.75 529.657 99.6094 527.665 105.469C525.732 111.27 523.036 116.572 519.579 121.377C516.181 126.182 511.962 130.02 506.923 132.891C501.943 135.703 496.054 137.021 489.257 136.846C483.222 136.729 478.183 135.234 474.14 132.363C470.155 129.492 467.021 125.771 464.736 121.201C462.45 116.631 460.898 111.68 460.077 106.348C459.257 100.957 458.964 95.6836 459.198 90.5273L459.902 84.5508C460.898 79.1016 462.48 73.623 464.648 68.1152C466.874 62.5488 469.745 57.4805 473.261 52.9102C476.777 48.2812 480.966 44.6191 485.829 41.9238C490.751 39.1699 496.347 37.8809 502.616 38.0566C509.179 38.2324 514.511 39.8145 518.612 42.8027C522.714 45.7324 525.82 49.541 527.929 54.2285C530.097 58.916 531.445 64.043 531.972 69.6094C532.558 75.1758 532.558 80.6543 531.972 86.0449ZM511.054 87.8027L511.318 85.8691C511.669 82.8809 511.816 79.6289 511.757 76.1133C511.757 72.5977 511.318 69.2578 510.439 66.0938C509.56 62.9297 508.007 60.3516 505.78 58.3594C503.612 56.3086 500.478 55.2246 496.376 55.1074C492.743 54.9316 489.462 55.5176 486.532 56.8652C483.603 58.1543 481.025 59.9707 478.798 62.3145C476.571 64.5996 474.726 67.2363 473.261 70.2246C471.796 73.2129 470.683 76.3184 469.921 79.541L467.46 95.625C467.284 99.5508 467.782 103.33 468.954 106.963C470.126 110.596 472.06 113.613 474.755 116.016C477.45 118.359 480.995 119.59 485.39 119.707C489.784 119.883 493.505 119.004 496.552 117.07C499.657 115.137 502.177 112.588 504.111 109.424C506.103 106.26 507.655 102.773 508.769 98.9648C509.882 95.1562 510.644 91.4355 511.054 87.8027Z"
        fill="currentColor"
      />
      <path
        d="M575.752 0L552.285 135H531.631L555.01 0H575.752Z"
        fill="currentColor"
      />
      <path
        d="M568.204 89.0332L568.468 87.0117C569.171 80.4492 570.782 74.209 573.302 68.291C575.821 62.373 579.161 57.1289 583.321 52.5586C587.54 47.9297 592.491 44.3262 598.175 41.748C603.917 39.1699 610.303 37.9688 617.335 38.1445C624.132 38.2617 629.962 39.668 634.825 42.3633C639.747 45.0586 643.731 48.6621 646.778 53.1738C649.884 57.627 652.052 62.7246 653.282 68.4668C654.512 74.1504 654.835 80.0977 654.249 86.3086L654.073 88.3301C653.311 94.8926 651.641 101.104 649.063 106.963C646.544 112.822 643.175 118.037 638.956 122.607C634.796 127.119 629.844 130.664 624.102 133.242C618.419 135.762 612.091 136.934 605.118 136.758C598.38 136.641 592.55 135.264 587.628 132.627C582.764 129.932 578.78 126.357 575.675 121.904C572.628 117.451 570.489 112.412 569.259 106.787C568.028 101.104 567.677 95.1855 568.204 89.0332ZM589.034 87.0117L588.858 89.0332C588.565 92.2559 588.536 95.6543 588.77 99.2285C589.005 102.803 589.708 106.143 590.88 109.248C592.052 112.354 593.868 114.902 596.329 116.895C598.79 118.887 602.071 119.941 606.173 120.059C610.509 120.176 614.288 119.297 617.51 117.422C620.733 115.547 623.428 113.027 625.596 109.863C627.764 106.699 629.493 103.242 630.782 99.4922C632.071 95.6836 632.921 91.9629 633.331 88.3301L633.507 86.3086C633.858 83.1445 633.917 79.7754 633.682 76.2012C633.448 72.5684 632.745 69.1699 631.573 66.0059C630.401 62.7832 628.585 60.1758 626.124 58.1836C623.663 56.1328 620.382 55.0488 616.28 54.9316C611.885 54.8145 608.077 55.7227 604.854 57.6562C601.632 59.5312 598.936 62.0801 596.768 65.3027C594.6 68.5254 592.872 72.041 591.583 75.8496C590.352 79.6582 589.503 83.3789 589.034 87.0117Z"
        fill="currentColor"
      />
      <path
        d="M727.648 39.9023H746.632L730.9 132.275C729.728 140.654 726.974 147.891 722.638 153.984C718.361 160.078 712.824 164.736 706.027 167.959C699.23 171.24 691.613 172.764 683.175 172.529C678.957 172.471 674.797 171.797 670.695 170.508C666.593 169.277 662.785 167.49 659.269 165.146C655.754 162.803 652.736 159.902 650.216 156.445L661.027 144.141C663.722 147.773 666.886 150.645 670.519 152.754C674.152 154.863 678.224 155.977 682.736 156.094C687.658 156.211 692.023 155.303 695.832 153.369C699.64 151.494 702.746 148.799 705.148 145.283C707.609 141.768 709.22 137.607 709.982 132.803L722.287 60.3809L727.648 39.9023ZM656.72 89.209L656.984 87.2754C657.687 81.416 659.093 75.5566 661.203 69.6973C663.312 63.7793 666.125 58.418 669.64 53.6133C673.214 48.75 677.55 44.9121 682.648 42.0996C687.804 39.2871 693.81 37.9395 700.666 38.0566C706.877 38.2324 711.974 39.7559 715.959 42.627C720.002 45.498 723.107 49.2188 725.275 53.7891C727.502 58.3594 728.996 63.3398 729.757 68.7305C730.519 74.1211 730.754 79.4531 730.461 84.7266L729.757 90.7031C728.82 96.1523 727.238 101.631 725.011 107.139C722.785 112.646 719.884 117.686 716.31 122.256C712.795 126.768 708.576 130.371 703.654 133.066C698.791 135.762 693.195 137.021 686.867 136.846C680.597 136.67 675.382 135.117 671.222 132.188C667.062 129.199 663.839 125.361 661.554 120.674C659.269 115.986 657.746 110.889 656.984 105.381C656.281 99.873 656.193 94.4824 656.72 89.209ZM677.726 87.2754L677.55 89.1211C677.199 92.2266 677.082 95.5078 677.199 98.9648C677.316 102.422 677.873 105.703 678.869 108.809C679.865 111.914 681.505 114.492 683.791 116.543C686.076 118.535 689.181 119.59 693.107 119.707C697.853 119.941 702.043 118.945 705.675 116.719C709.367 114.492 712.414 111.533 714.816 107.842C717.277 104.15 719.005 100.166 720.002 95.8887L722.463 79.8047C722.697 76.8164 722.521 73.8867 721.935 71.0156C721.349 68.0859 720.324 65.4492 718.859 63.1055C717.453 60.7617 715.578 58.8867 713.234 57.4805C710.89 56.0156 708.048 55.2539 704.709 55.1953C700.314 55.0195 696.505 55.8984 693.283 57.832C690.119 59.7656 687.453 62.3438 685.285 65.5664C683.175 68.7891 681.505 72.3047 680.275 76.1133C679.045 79.9219 678.195 83.6426 677.726 87.2754Z"
        fill="currentColor"
      />
    </svg>
  ),
  project: {
    link: 'https://github.com/kidow/kidow.me'
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    return {
      ...(asPath === '/'
        ? { title: 'Kidow Blog' }
        : { titleTemplate: '%s - Kidow Blog' })
    }
  },
  primaryHue: 32,
  chat: {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M139.248 241.117C128.789 241.117 119.409 238.419 111.108 233.023C102.808 227.545 96.25 219.618 91.4355 209.242C86.7041 198.783 84.3384 186.207 84.3384 171.515C84.3384 156.656 86.7871 143.998 91.6846 133.539C96.582 122.997 103.14 115.111 111.357 109.881C119.658 104.652 128.955 102.037 139.248 102.037C145.972 102.037 151.782 103.116 156.68 105.274C161.66 107.35 165.686 110.047 168.757 113.368C171.912 116.605 174.526 120.299 176.602 124.449C176.851 124.864 177.017 125.196 177.1 125.445C177.183 125.611 177.349 125.943 177.598 126.441H178.718V58.707H215.574V239H179.341V217.459H177.598L176.851 218.954C174.692 223.104 172.036 226.798 168.882 230.035C165.728 233.189 161.66 235.846 156.68 238.004C151.699 240.079 145.889 241.117 139.248 241.117ZM150.703 211.732C156.763 211.732 161.951 210.03 166.267 206.627C170.667 203.224 173.987 198.534 176.228 192.557C178.552 186.498 179.714 179.4 179.714 171.266C179.714 163.131 178.552 156.075 176.228 150.099C173.987 144.039 170.708 139.432 166.392 136.278C162.075 133.124 156.846 131.546 150.703 131.546C144.561 131.546 139.331 133.207 135.015 136.527C130.781 139.764 127.544 144.371 125.303 150.348C123.062 156.324 121.941 163.297 121.941 171.266C121.941 179.317 123.062 186.373 125.303 192.433C127.627 198.492 130.906 203.224 135.139 206.627C139.456 210.03 144.644 211.732 150.703 211.732Z"
          fill="#A3A3A3"
        />
        <path
          d="M125.91 225.41C115.451 225.41 106.071 222.712 97.77 217.316C89.4692 211.838 82.9116 203.911 78.0972 193.535C73.3657 183.076 71 170.5 71 155.808C71 140.949 73.4487 128.291 78.3462 117.832C83.2437 107.29 89.8013 99.4038 98.019 94.1743C106.32 88.9448 115.617 86.3301 125.91 86.3301C132.633 86.3301 138.444 87.4092 143.341 89.5674C148.322 91.6426 152.348 94.3403 155.419 97.6606C158.573 100.898 161.188 104.592 163.263 108.742C163.512 109.157 163.678 109.489 163.761 109.738C163.844 109.904 164.01 110.236 164.259 110.734H165.38V43H202.235V223.293H166.002V201.752H164.259L163.512 203.247C161.354 207.397 158.698 211.091 155.543 214.328C152.389 217.482 148.322 220.139 143.341 222.297C138.361 224.372 132.55 225.41 125.91 225.41ZM137.365 196.025C143.424 196.025 148.612 194.323 152.929 190.92C157.328 187.517 160.648 182.827 162.89 176.85C165.214 170.791 166.376 163.693 166.376 155.559C166.376 147.424 165.214 140.368 162.89 134.392C160.648 128.332 157.37 123.725 153.053 120.571C148.737 117.417 143.507 115.839 137.365 115.839C131.222 115.839 125.993 117.5 121.676 120.82C117.443 124.057 114.206 128.664 111.964 134.641C109.723 140.617 108.603 147.59 108.603 155.559C108.603 163.61 109.723 170.666 111.964 176.726C114.289 182.785 117.567 187.517 121.801 190.92C126.117 194.323 131.305 196.025 137.365 196.025Z"
          fill="#6F4E37"
        />
        <path d="M71 259H227V279H149H71V259Z" fill="#6F4E37" />
      </svg>
    ),
    link: 'https://coddee.dev'
  },
  docsRepositoryBase: 'https://github.com/kidow/kidow.me',
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1
  },
  footer: {
    text: `© ${new Date().getFullYear()} kidow. All rights reserved.`
  },
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()

    const TITLE = 'Kidow Blog'
    const DESCRIPTION = '더 게으르기 위해 더 열심히 공부하는 개발자입니다.'
    const URL = 'https://kidow.me'
    const IMAGE = 'https://kidow.me/api/image?id=rxzt4zk0v4o'
    return (
      <>
        <link rel="canonical" href={URL + asPath} />
        <link
          rel="icon"
          type="image/png"
          href="favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon-16x16.png"
          sizes="16x16"
        />
        <meta
          name="description"
          content={frontMatter.description || DESCRIPTION}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#e67a00" />
        <meta name="msapplication-TileColor" content="#e67a00" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="blog, react, nextjs, nextra, tailwindcss, typescript, vercel, front-end, github"
        />
        <meta name="author" content="Dongwook Kim" />
        <meta
          name="google-site-verification"
          content="dpMF3-oHfMYFVkjgJpIJSGM_W_aL_gSFFnmWHM90NHU"
        />
        <meta
          name="naver-site-verification"
          content="6aad57e80bc0cb85f4d497fde9a243497dfa5a3d"
        />
        <meta name="og:title" content={frontMatter.title || TITLE} />
        <meta
          name="og:description"
          content={frontMatter.description || DESCRIPTION}
        />
        <meta name="og:type" content="website" />
        <meta name="og:image" content={frontMatter.thumbnail || IMAGE} />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="600" />
        <meta name="og:url" content={URL + asPath} />
        <meta name="og:locale" content={frontMatter.language || 'ko_KR'} />
        <meta name="og:site_name" content={frontMatter.title || TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontMatter.title || TITLE} />
        <meta
          name="twitter:description"
          content={frontMatter.description || DESCRIPTION}
        />
        <meta name="twitter:domain" content={URL + asPath} />
        <meta name="twitter:image" content={frontMatter.thumbnail || IMAGE} />
        <script
          type="text/javascript"
          async
          defer
          src="https://cdn.feedbank.app/plugin.js"
          plugin-key="dcdeb4a4-36bb-4437-8220-bc91eb430960"
        />
      </>
    )
  },
  i18n: [
    { locale: 'ko', text: '한국어' },
    { locale: 'en', text: 'English' }
  ]
}

export default config
