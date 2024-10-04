import { createContext, useState } from "react";
import {useNavigate} from "react-router-dom";



export const my_context=createContext(null)
export default function GlobalState({children}){
    const [searchParam,setSearchParam]=useState("");
    const [loading,setLoading]=useState(false);
    const [recipeList,setRecipList]=useState([]);
    const [recipeDetailsData,setRecipeDetailsData]=useState(null);
    const [favoritesList,setFavoritesList]=useState([]);

    const navigat=useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        try{
            const res=await fetch(
                 `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
            );
        const data =await res.json();
        if(data?.data?.recipes){
            setRecipList(data?.data?.recipes);
            setLoading(false);
           // setSearchParam("");
            navigat('/');
        }
        }
        catch(e){
            console.log(e);
            setLoading(false);
            setSearchParam("");
        }

    }
    function handleAddToFavorite(getCurrentItem) {
        console.log(getCurrentItem);
        let cpyFavoriteList=[...favoritesList];
        const index=cpyFavoriteList.findIndex(item=>item.id===getCurrentItem.id);
        if(index===-1){
            cpyFavoriteList.push(getCurrentItem);

        }
        else{
            cpyFavoriteList.splice(index);
        }
        setFavoritesList(cpyFavoriteList);
        console.log(favoritesList,'favoritesList');
    }
    return (
        <my_context.Provider value={{
            searchParam,
            loading,
            recipeList,
            setSearchParam,
            handleSubmit,
            recipeDetailsData,
            setRecipeDetailsData,
            handleAddToFavorite,
            favoritesList,
        }}>
           { children}

        </my_context.Provider>
    )
}