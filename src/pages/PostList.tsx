import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../interfaces/Post';
import PostCard from '../components/PostCard';

interface PostListProps {
    posts: Post[];
    onDelete: (id: string) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onDelete }) => {
    const [filter, setFilter] = useState('');

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="post-list-page">
            <div className="list-header">
                <h2>Tất cả bài viết ({filteredPosts.length})</h2>
                <input
                    type="text"
                    placeholder="Tìm kiếm theo tiêu đề..."
                    className="filter-input"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <Link to="/create" className="btn btn-primary">
                    Viết bài mới
                </Link>
            </div>

            <div className="post-list-grid">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <PostCard key={post.id} post={post} onDelete={onDelete} />
                    ))
                ) : (
                    <p>Không tìm thấy bài viết nào.</p>
                )}
            </div>
        </div>
    );
};

export default PostList;