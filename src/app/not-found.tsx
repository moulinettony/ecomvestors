import { Error404 } from '@/components/pages/errors'
import { type Metadata } from 'next'

export const metadata: Metadata = {
    title: '404 - Page not found',
    description: 'Sorry, we couldn&apos;t find the page you&apos;re looking for.',
}

export default function NotFound() {
    return <Error404 />
}
