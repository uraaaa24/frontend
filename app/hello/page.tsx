'use client'

import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Page() {
    const { data, error, isLoading } = useSWR('/api/hello', fetcher)

    console.log(data)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading</div>

    return <div>hello {data.name}</div>
}
