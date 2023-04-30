import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const baseUrl = 'https://www.reddit.com/';

//Method to load subreddit info
export const getPopularSubReddits = createAsyncThunk(
    'subReddits/LoadSubreddits',
    async() => {
    const popularSubredditEndpoint = 'subreddits/popular.json';
    let urlToFetch = `${baseUrl}${popularSubredditEndpoint}`

    const response = await fetch(urlToFetch)
    const jsonResponse = await response.json()
    return jsonResponse
    }
)

const apiSubredditSlice = createSlice({
    name: 'subreddit',
    initialState: {
        subreddits: {},
        isLoadingSubreddits: false,
        failedToLoadSubreddits: false
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPopularSubReddits.pending, (state) =>{
            state.isLoadingSubreddits = true;
            state.failedToLoadSubreddits = false;
        })
        .addCase(getPopularSubReddits.fulfilled, (state, action) => {
            state.isLoadingSubreddits = false;
            state.subreddits = action.payload;
        })
        .addCase(getPopularSubReddits.rejected, (state) => {
            state.isLoadingSubreddits = false;
            state.failedToLoadComments = true;
        })
    }
});

export const selectSubreddit = (state) => state.subreddit.subreddits

export default apiSubredditSlice.reducer;