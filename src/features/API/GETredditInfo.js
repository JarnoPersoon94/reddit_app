const baseUrl = 'https://www.reddit.com/';


async function getData(url){
    try{
        const response = await fetch(url)
        if(response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        }
    }catch(error){
        console.log(error)
    }
}

export async function getPopularSubReddits(){
    const popularSubredditEndpoint = 'subreddits/popular.json';
    let urlToFetch = `${baseUrl}${popularSubredditEndpoint}`

    const jsonResponsePopularReddits = await getData(urlToFetch)
    return jsonResponsePopularReddits
}