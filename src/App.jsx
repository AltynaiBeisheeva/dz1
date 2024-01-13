import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout.jsx";
import Posts from './pages/Posts.jsx';
import CreatePost from './pages/CreatePost.jsx';
import { useState } from 'react';

const App = () => {
    const [posts, setPosts] = useState([]);

    const addPost = (newPost) => {
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/posts" element={<Posts posts={posts} />} />
                    <Route path="/posts/create" element={<CreatePost addPost={addPost} />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
