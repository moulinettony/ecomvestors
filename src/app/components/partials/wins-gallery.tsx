'use client'

import React, { Fragment, useEffect } from 'react'
import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-video.css'

// Import scss
import 'lightgallery/scss/lightgallery.scss'
import 'lightgallery/scss/lg-zoom.scss'

// ? Import plugins that are needed for the gallery.
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'
import Image from 'next/image'
import { winsData } from '@/app/components/partials/wins-data'
import { Button } from '@/components/ui/button'
import { Instagram, More2 } from 'iconsax-react'
import { useMediaQuery } from 'react-responsive'

export default function WinsGallery() {
    const [visibleItems, setVisibleItems] = React.useState(5)
    const isMd = useMediaQuery({ query: '(min-width: 768px)' })
    const isLg = useMediaQuery({ query: '(min-width: 1024px)' })
    const isXl = useMediaQuery({ query: '(min-width: 1280px)' })
    const is2Xl = useMediaQuery({ query: '(min-width: 1536px)' })

    useEffect(() => {
        if (visibleItems === winsData.length) {
            return
        }

        if (is2Xl) {
            setVisibleItems(10)
        } else if (isXl) {
            setVisibleItems(8)
        } else if (isLg) {
            setVisibleItems(6)
        } else if (isMd) {
            setVisibleItems(5)
        } else {
            setVisibleItems(3)
        }
    }, [isMd, isLg, isXl, is2Xl])

    const showMore = () => {
        setVisibleItems(winsData.length)
    }

    const items: {
        type: string
        src: string
        thumb?: string
        size: string
        subHtml: string
        poster?: string
        video?: {
            source: { src: string; type: string }[]
            attributes: { preload: boolean; controls: boolean }
        }
    }[] = winsData

    const visibleItemsData = items.slice(0, visibleItems)

    return (
        <Fragment>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgVideo]}
                elementClassNames="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full place-items-center text-center justify-center items-center grid-flow-row px-4 sm:px-6 md:px-8"
                download={false}
                videojs={true}
                closable={true}
                mobileSettings={{
                    controls: true,
                    download: false,
                    showCloseIcon: true,
                }}
            >
                {visibleItemsData.map((item, index) => (
                    <Fragment key={index}>
                        {item.type === 'image' && (
                            <Fragment>
                                <div
                                    data-lg-size={item.size}
                                    className="aspect-square size-full max-w-full overflow-hidden rounded-3xl border border-gray-800/50 bg-gray-50 shadow-2xl shadow-blue-500/10"
                                    data-src={item.src}
                                >
                                    <Image
                                        alt={item.subHtml}
                                        width={Number(item.size.split('-')[0].toString())}
                                        height={Number(item.size.split('-')[1].toString())}
                                        className="size-full object-contain"
                                        src={item.thumb ?? item.src}
                                    />
                                </div>
                            </Fragment>
                        )}
                        {item.type === 'video' && (
                            <Fragment>
                                <a
                                    className="aspect-square size-full max-w-full overflow-hidden rounded-3xl border border-gray-800/50 bg-gray-50 shadow-2xl shadow-blue-500/10"
                                    data-lg-size={item.size}
                                    data-video={JSON.stringify(item.video)}
                                    data-poster={item.poster}
                                    data-sub-html="<h4>فيديو شهادة</h4>"
                                >
                                    <Image
                                        width={Number.parseInt(item.size.split('-')[0])}
                                        height={Number.parseInt(item.size.split('-')[1])}
                                        className="size-full object-contain"
                                        src={item.poster ?? item.src}
                                        alt={item.subHtml}
                                    />
                                </a>
                            </Fragment>
                        )}
                    </Fragment>
                ))}
            </LightGallery>
            <div
                dir="rtl"
                className="relative mt-10 flex flex-row flex-wrap items-center justify-center gap-2 px-4 sm:px-6 md:px-8"
            >
                {visibleItems < winsData.length && (
                    <Button className="w-full" variant="default" size={'lg'} shape={'pill'} onClick={showMore}>
                        <More2 className="h-6 w-6" color="currentColor" variant="Bulk" />
                        تحميل المزيد
                    </Button>
                )}
                <Button className="w-full" variant="secondary" size={'lg'} shape={'pill'} asChild>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/stories/highlights/17953204130763591/"
                    >
                        <Instagram className="h-6 w-6" color="currentColor" variant="Bulk" />
                        اكتشف المزيد من قصص النجاح على انستغرام
                    </a>
                </Button>
            </div>
        </Fragment>
    )
}
