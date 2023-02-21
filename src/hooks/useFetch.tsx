// customHook to fetch petitions

import {useState,useEffect} from 'react';

export const useFetch=()=>{
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);


    useEffect(()=>{
        const getData=async (url)=>{
            try{
                let res=await fetch(url);
                if(!res.ok){
                    throw {
                        err:true,
                        status:res.status,
                        statusText:!res.statusText
                        ?"An error occurred"
                        :res.statusText}
                }
                let data=await res.json();

                setIsPending(false)
                setData(data)
                setError({err:false})
            }catch(err){
                setIsPending(false)
                setError({err:true})
                
            }
        };

        getData(url)
    },[url])

    return {
        data,
        isPending,
        error
    }

}