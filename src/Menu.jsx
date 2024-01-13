

import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/posts/create">Create Post</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
