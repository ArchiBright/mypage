import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './blog.css'


const Blog = () => {
  const [data, setData] = useState('');
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const createPost = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/posts', { title, content });
      setPosts([...posts, response.data]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    axios.get('http://localhost:5000') // Use relative URL
      .then(response => setData(response.data))
      .catch(error => console.log('error', error));
    fetchPosts();
  }, []);
  return (
    <div>
      <p>HERE!</p>
      <p>{data}</p>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        ></textarea>
        <button onClick={createPost}>Create Post</button>
      </div>
      <div>
        {posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{new Date(post.date).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog
