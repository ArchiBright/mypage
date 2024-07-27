import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './blog.css'


const Blog = () => {
  const [hello, setHello] = useState('');
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [newTitle, setNewTitle] = useState('');

  const addItem = () => {
    axios.post('http://localhost:5001/api/items', { text: newItem, title: newTitle })
      .then(response => {
        setItems([...items, response.data.data]);
        setNewItem('');
        setNewTitle('');
      })
      .catch(error => console.error('Error adding item:', error));
  };

  // const fetchPosts = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5001/api/posts');
  //     setPosts(response.data);
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  // const createPost = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:5001/api/posts', { title, content });
  //     setPosts([...posts, response.data]);
  //     setTitle('');
  //     setContent('');
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };
  useEffect(() => {
    axios.get('http://localhost:5001/api/items')
      .then(response => setItems(response.data.data))
      .catch(error => console.error('Error fetching data:', error));

    axios.get('http://localhost:5001/')
      .then(response => setHello(response.data))
      .catch(error => console.error('Error fetching data:', error));
    // fetchPosts();
  }, []);
  return (
    <div>

      <p>{hello}</p>
      <h1 className="blog__entries">Blog Entries</h1>
        <div className="blog__posts">
          {items.map(item => (
            <article className="blog__post" key={item.id}>
              <h2 className="blog__post-header">{item.title}</h2>
              <p className="blog__post-text">{item.text}</p>
            </article>
          ))}
        </div>

        <input 
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)} />
        <textarea
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add Entry</button>
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Blog
