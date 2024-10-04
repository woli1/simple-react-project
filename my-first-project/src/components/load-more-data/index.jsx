import { useEffect, useState } from "react";
import './style.css'

export default function LoadMoreData(){
    const [loading ,setLoading]=useState(false);
    const [products,setProducts]=useState([]);
    const [count,setCount]=useState(0);
    const [disableButton,setDisableButton]=useState(false);


    async function fetchProducts(){
        try{
            setLoading(true);
            const response=await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0?0:count*20}`);
            const result=await response.json();

            if(result&&result.products&& result.products.length){
                setProducts((prev)=>[...prev,...result.products]);
                setLoading(false);
            }
            console.log(result);

        }
        catch(e){
            console.log(e);
            setLoading(false);

            
        }
    }
    useEffect(()=>{
        fetchProducts();
        if(products&&products.length===100)setDisableButton(true);
    },[count]);
    useEffect(()=>{
        
    },[products]);
    if(loading){
        return <div>Loading data! Please wait.</div>
    }
    return (
        <div className="Load-more-container">
            <div className="product-container">
                {products&&products.length?
                products.map((item)=>(
                    <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                )
                    

                )
                
                :null
                }
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={()=>setCount((prev)=>prev+1)}>
                    Load More Products
                </button>
                {disableButton?<p>You have reached to 100 products</p>:null}
            </div>
        </div>
    )
}