import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Post } from './interfaces/Post';
import { initialPosts } from './Data/initialPosts';
import Navbar from './components/Navbar';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import PostForm from './pages/PostForm';
import './App.css';

export type PostFormData = Omit<Post, 'id' | 'createdAt'>;

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleSavePost = (formData: PostFormData, id?: string) => {
    if (id) {
      const updatedPost: Post = {
        ...posts.find((p) => p.id === id)!,
        ...formData,
      };
      setPosts(
        posts.map((post) => (post.id === id ? updatedPost : post))
      );
    } else {
      const newPost: Post = {
        ...formData,
        id: (Date.now() + Math.random()).toString(),
        createdAt: new Date().toISOString(),
      };
      setPosts([newPost, ...posts]);
    }
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<PostList posts={posts} onDelete={handleDeletePost} />}
          />
          <Route
            path="/create"
            element={<PostForm onSave={handleSavePost} />}
          />
          <Route
            path="/posts/:id"
            element={
              <PostDetail posts={posts} onDelete={handleDeletePost} />
            }
          />
          <Route
            path="/posts/edit/:id"
            element={
              <PostForm posts={posts} onSave={handleSavePost} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;