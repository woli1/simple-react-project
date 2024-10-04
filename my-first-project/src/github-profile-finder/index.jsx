import {useEffect, useState } from "react";
import User from "./user";
import './style.css'


export default function GithubProfileFinder(){
    const [userName,setUserName]=useState('walid');
    const [userData,setUserData]=useState(null);
    const [loading,setLoading]=useState(true);

    async function fetchGithubUserData() {
        setLoading (true);
        const res=await fetch(`https://api.github.com/users/${userName}`).then((r)=>r.json()).catch((e)=>{console.log(e.message)});
        console.log(res);
        if(res){
            setUserData(res);
            setLoading(false);
            setUserName('');
       }
    }
        function handleSubmit(){
            fetchGithubUserData()
        }
        useEffect(()=>{
            fetchGithubUserData();
        },[])
        if(loading){
            return <h1>Loading data! Please wait</h1>
        }

        return (
            <div className="github-profile-container">
                <div className="input-wrapper">
                    <input
                    name="search-by-username"
                    type="text"
                    placeholder="Search Github Username...."
                    value={userName}
                    onChange={(event)=>{setUserName(event.target.value)}}
                    />
                    <button onClick={handleSubmit}>Search</button>
                </div>
            {userData !== null ?<User user={userData}/>:null}
            </div>
        )
    
}