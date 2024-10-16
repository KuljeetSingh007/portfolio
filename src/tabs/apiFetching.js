import React, { useEffect, useState } from 'react';
import "../styles/apiFetching.css";
import axios from 'axios';
import NavBar from '../pages/NavBar';
import Card from '../components/Card';
import useLoadingNavigation from '../components/navigationFunc';
import Loading from '../components/Loading';

export default function ApiFetching() {
    const { handleNavigation, LoadingBarComponent } = useLoadingNavigation();
    
    const [posts, setPost] = useState([]);
    const [fetchMsg, setfetchMsg] = useState(true);
    const fetchData = async () => {
        // instead of using fetch func use axios.get method...
        const fetchApi = await axios.get("https://fakestoreapi.com/products");
        setfetchMsg(false);
        console.log(fetchApi.data);//see what is fetched from apiurl..
        setPost(fetchApi.data);
        // fetch("https://fakestoreapi.com/products").then((response) => response.json()).then((data) => setPost(data));
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <LoadingBarComponent color={"#EEEEEE"} />
            <NavBar handleNavigation={handleNavigation} />
            <div className='mainBoxapi'>
                {fetchMsg && <Loading />}
                <div className="container">
                    {posts.map((post, index) => <div className='apiBox' key={index}>
                        <Card title={post.title.slice(0, 10)} imageUrl={post.image} id={post.id} description={post.description.slice(0, 100)} category={post.category} rate={post.rating.rate} count={post.rating.count} />
                    </div>)}
                  
                </div>
            </div>
        </div>
    )
}

