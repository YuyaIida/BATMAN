import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from 'next/router'
import { route } from "next/dist/next-server/server/router"

const Batman = () => {

    const router = useRouter()
    const { id } = router.query
    
    return (
        <div>
            <p>バットマン参上　{id}</p>
        </div>
    )
}

export default Batman

// export const getStaticPaths: GetStaticPaths = async () => {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//     const repos = await res.json()
//     const paths = repos.map(data => {
//         return data.show.id
//     })

//     return { paths, fallback: false }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     console.log(params)
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//     const data = await res.json()
//     const shows = data.map(list => {
//         return list.show
//     })

//     return {
//         props: {
//             shows
//         }
//     }
// }