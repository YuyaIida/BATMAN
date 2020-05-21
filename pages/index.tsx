import { GetStaticPaths, GetStaticProps } from "next"
import { AsyncLocalStorage } from "async_hooks"
import Link from "next/link"
import { getHero } from "../lib/posts"

export default function Home ({ shows }) {

   // console.log(data)

    return (
        <div>
            <h1>BATMAN</h1>
            <ul>
                {shows && shows.map(show => {
                    return (
                        <li key={show.id}>
                            {/* <a href={show.url}>
                                {show.name}
                            </a> */}
                            <Link href="/posts/[id]" as={`/posts/${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                            {/* {show._source.title}{show._source.price} */}
                            <img src={show.image.medium} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    console.log(data)
    const shows = data.map(entry => {
        return entry.show
    })

    // const data = getHero()
    // console.log(data)
    return {
        props: {
            shows
        }
    }
}


// elasticsearchテスト
// export const getStaticProps: GetStaticProps = async () => {

//     const data = await fetch('http://127.0.0.1:9200/library/_search').then((res) => res.json())
//     const hits = data.hits.hits
//     // const hits = data.map(x => {
//     //     return x.hits.hits
//     // })

//     console.log(hits)
    

//     // const data = getHero()
//     // console.log(data)
//     return {
//         props: {
//             hits
//         }
//     }
// }