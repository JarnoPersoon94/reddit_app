import React, { useEffect } from 'react';
//import { useState } from 'react';
//import {getPopularSubReddits} from '../../features/API/GETredditInfo'
import {useSelector, useDispatch} from 'react-redux'
import {selectSubreddit, getPopularSubReddits} from '../../features/API/apiSubredditSlice'

export function SubReddits(){
    const dispatch = useDispatch()
    const SubReddit = useSelector(selectSubreddit);

    useEffect(() => {
        dispatch(getPopularSubReddits());
    }, []);

    console.log(SubReddit)
//    const [subRedditsJson, setSubRedditsJson] = useState([]);

  //  useEffect(() =>{
  //      setSubRedditsJson(getPopularSubReddits().then(
  //              (value) => {
  //                  return value.data.children})
  //              )
 //   }
  //  )
// PUT async logic in a store
    return (
        <ul>
            <li></li>
        </ul>
    );
}