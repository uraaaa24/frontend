'use client'

import useSWR from 'swr'

const API_HELLO_BACKEND = '/api/hello_db/backend/'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Page() {
    const { data, error, isLoading } = useSWR(API_HELLO_BACKEND, fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading</div>

    return <div>hello {data.message}</div>
}
