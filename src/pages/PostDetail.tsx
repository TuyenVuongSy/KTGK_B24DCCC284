import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Post } from '../interfaces/Post';

interface PostDetailProps {
    posts: Post[];
    onDelete: (id: string) => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ posts, onDelete }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const post = posts.find((p) => p.id === id);

    if (!post) {
        return (
            <div>
                <h2>Không tìm thấy bài viết</h2>
                <Link to="/">Quay lại trang chủ</Link>
            </div>
        );
    }

    const handleDelete = () => {
        if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
            onDelete(post.id);
            navigate('/');
        }
    };

    return (
        <div className="post-detail">
            <div className="detail-actions">
                <Link to="/" className="btn btn-secondary">
                    &larr; Quay lại
                </Link>
                <div>
                    <Link to={`/posts/edit/${post.id}`} className="btn btn-primary">
                        Chỉnh sửa
                    </Link>
                    <button onClick={handleDelete} className="btn btn-danger">
                        Xóa bài viết
                    </button>
                </div>
            </div>
            <h1 className="detail-title">{post.title}</h1>
            <p className="detail-meta">
                Viết bởi <strong>{post.author}</strong> vào{' '}
                {new Date(post.createdAt).toLocaleDateString('vi-VN')} | Thể loại: {post.category}
            </p>
            <img src={post.thumbnailUrl} alt={post.title} className="detail-img" />
            <div className="detail-content">
                { }
                <p style={{ whiteSpace: 'pre-wrap' }}>{post.content}</p>
            </div>
        </div>
    );
};

export default PostDetail;