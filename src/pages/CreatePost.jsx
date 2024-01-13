import { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ addPost }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("https://dummyjson.com/posts/add", {
                title: title,
                userId: "1",
            });

            const newPost = response.data.post;
            addPost(newPost);
            setTitle('');
            console.log("Успешно добавлен");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <br />
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
