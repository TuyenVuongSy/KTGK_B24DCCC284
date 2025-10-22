import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Post } from '../interfaces/Post';
import { PostFormData } from '../App';

interface PostFormProps {
    posts?: Post[];
    onSave: (formData: PostFormData, id?: string) => void;
}

type FormErrors = {
    title?: string;
    author?: string;
    content?: string;
};

const PostForm: React.FC<PostFormProps> = ({ posts, onSave }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const isEditMode = !!id;

    const [formData, setFormData] = useState<PostFormData>({
        title: '',
        author: '',
        content: '',
        thumbnailUrl: '',
        category: 'Công nghệ',
    });

    const [errors, setErrors] = useState<FormErrors>({});

    useEffect(() => {
        if (isEditMode && posts) {
            const existingPost = posts.find((p) => p.id === id);
            if (existingPost) {
                setFormData({
                    title: existingPost.title,
                    author: existingPost.author,
                    content: existingPost.content,
                    thumbnailUrl: existingPost.thumbnailUrl,
                    category: existingPost.category,
                });
            }
        }
    }, [id, isEditMode, posts]);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (formData.title.trim().length < 10) {
            newErrors.title = 'Tiêu đề phải có ít nhất 10 ký tự';
        }
        if (formData.author.trim().length < 3) {
            newErrors.author = 'Tác giả phải có ít nhất 3 ký tự';
        }
        if (formData.content.trim().length < 50) {
            newErrors.content = 'Nội dung phải có ít nhất 50 ký tự';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            onSave(formData, id);

            if (isEditMode) {
                alert('Cập nhật thành công!');
                navigate(`/posts/${id}`);
            } else {
                alert('Đăng bài thành công!');
                navigate('/');
            }
        }
    };

    const handleCancel = () => {
        navigate(isEditMode ? `/posts/${id}` : '/');
    };

    return (
        <div className="post-form-container">
            <h2>{isEditMode ? 'Chỉnh sửa bài viết' : 'Tạo bài viết mới'}</h2>
            <form onSubmit={handleSubmit} className="post-form">
                <div className="form-group">
                    <label htmlFor="title">Tiêu đề</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    {errors.title && <span className="error-text">{errors.title}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="author">Tác giả</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                    />
                    {errors.author && <span className="error-text">{errors.author}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="thumbnailUrl">URL Ảnh thumbnail</label>
                    <input
                        type="text"
                        id="thumbnailUrl"
                        name="thumbnailUrl"
                        value={formData.thumbnailUrl}
                        onChange={handleChange}
                        placeholder="https://via.placeholder.com/300x200"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Thể loại</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="Công nghệ">Công nghệ</option>
                        <option value="Du lịch">Du lịch</option>
                        <option value="Ẩm thực">Ẩm thực</option>
                        <option value="Đời sống">Đời sống</option>
                        <option value="Khác">Khác</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="content">Nội dung</label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        rows={15}
                    />
                    {errors.content && <span className="error-text">{errors.content}</span>}
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                        {isEditMode ? 'Cập nhật' : 'Đăng bài'}
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleCancel}
                    >
                        Hủy
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PostForm;