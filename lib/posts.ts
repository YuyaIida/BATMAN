import axios from "axios"

export async function getHero() {
    
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    console.log(data)
    return { 
        data
    }
}