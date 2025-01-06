import React, { useEffect, useState } from 'react';
import SigleCard from './SigleCard';

const Blog = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        fetch("/whatido.json")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <div className="max-w-[1340px] mx-auto px-3 mt-10 mb-48">
            <h1 className="text-center text-4xl mb-10 font-semibold uppercase text-[#FF024F]">blog</h1>
                <div className="grid md:grid-cols-3 gap-10 rounded-md">
                    {
                        data.map((data, index) => <SigleCard key={index} data={data}></SigleCard>)
                    }
                </div>
        </div>
    );
};

export default Blog;