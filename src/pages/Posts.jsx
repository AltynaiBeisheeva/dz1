import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/posts");
                setPosts(response.data.posts);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Posts List</h1>
            <ul>
                {posts.map((post) => (
                    <div key={post.id}>
                        <li>
                            <p>{post.title}</p>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
