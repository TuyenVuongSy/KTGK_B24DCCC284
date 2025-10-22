import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../interfaces/Post';

interface PostCardProps {
    post: Post;
    onDelete: (id: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onDelete }) => {

    const shortDescription = post.content.substring(0, 100) + '...';

    const handleDelete = () => {
        if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
            onDelete(post.id);
        }
    };

    return (
        <div className="post-card">
            <img src={post.thumbnailUrl} alt={post.title} className="card-img" />
            <div className="card-content">
                <span className="card-category">{post.category}</span>
                <h3 className="card-title">{post.title}</h3>
                <p className="card-meta">
                    Bởi: {post.author} | {new Date(post.createdAt).toLocaleDateString('vi-VN')}
                </p>
                <p className="card-desc">{shortDescription}</p>
                <div className="card-actions">
                    <Link to={`/posts/${post.id}`} className="btn btn-secondary">
                        Đọc thêm
                    </Link>
                    <button onClick={handleDelete} className="btn btn-danger">
                        Xóa
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;