import { GetStaticPaths, GetStaticProps, GetServerSideProps} from "next"
import { AsyncLocalStorage } from "async_hooks"
import Link from "next/link"

export default function Home ({ shows }) {

    return (
        <div>
            <h1>BATMAN</h1>
            <ul>
                {shows && shows.map(show => {
                    return (
                        <li key={show.id}>
                            <Link href="/posts/[id]" as={`/posts/${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                            <img src={show.image.medium} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

// Batmanページから直接持ってくるパターン
// export const getStaticProps: GetStaticProps = async () => {

//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//     const data = await res.json()
//     console.log(data)
//     const shows = data.map(entry => {
//         return entry.show
//     })

//     // const data = getHero()
//     // console.log(data)
//     return {
//         props: {
//             shows
//         }
//     }
// }


//elasticsearchから持ってくるパターン
export const getStaticProps: GetStaticProps = async () => {

    const data = await fetch('http://127.0.0.1:3000/api/getHero').then((res) => res.json())
    const hits = data.hits.hits
    const shows = hits.map(x => {
        return x._source.show
    })

    return {
        props: {
            shows
        }
    }
}