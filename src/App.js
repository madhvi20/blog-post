import React from 'react';
import BlogList from './components/BlogList';
import UserList from './components/UserList';
import BlogComments from './components/BlogComments';
import UserDetails from './components/UserDetails';
import UserComments from './components/UserComments';
import UserBlogs from './components/UserBlogs';

const App = () => {
    return (
        <div className="App">
            <h1>Blog Application</h1>
            <BlogList />
            <UserList />
            {/* Add specific BlogComments, UserDetails, UserComments, UserBlogs components with appropriate IDs */}
        </div>
    );
};

export default App;
