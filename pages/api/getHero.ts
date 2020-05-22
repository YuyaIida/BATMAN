import{ NextApiRequest, NextApiResponse } from 'next'
import json from './../../public/searchBatman.json'

export default async(_: NextApiRequest, res: NextApiResponse) => {
    const response = await fetch('http://127.0.0.1:9200/batman/_search', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(json)
    })
    const data = await response.json()
    console.log(data)
    res.status(200).json(data)
}