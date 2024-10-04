import { useEffect, useState } from "react";


export default function useLocalStorage(key,defaultValue){
    const [value,setValue]=useState(()=>{

        let currentValue;
        try{
            currentValue=JSON.parse(
                localStorage.getItem(key)||String(defaultValue)
            );
        }
        catch(e){
            console.log(e);
            currentValue=defaultValue;

        }
        return currentValue;

    })
    useEffect(()=>{
        console.log('this effect');
        localStorage.setItem(key,JSON.stringify(value));

    },[key,value]);

    return [value,setValue];
    /*No, return [value, setValue] in the custom hook does not run on every re-render. It is part of the hook's definition and only runs once during the initial render of the component. */}