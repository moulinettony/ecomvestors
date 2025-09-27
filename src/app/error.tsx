'use client'

import Error500 from '@/components/pages/errors'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return <Error500 error={error} reset={reset} />
}
