import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './blog.css'
import { render } from 'react-dom';


const Blog = () => {
  const [hello, setHello] = useState('');
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [images, setImages] = useState([]);

  const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts/3')
    .then(response => response.json())
    .then(post => renderPost(post))
  }

  function renderPost(post) {
    // let postElement = document.querySelector('.api__test');
    // postElement.textContent = post.body;
  }
  getPosts();

  fetch('https://jsonplaceholder.typicode.com/albums/2/photos/')
      .then(response => response.json())
      .then(data => setImages(data));


  const addItem = () => {
    axios.post('http://localhost:5001/api/items', { text: newItem, title: newTitle })
      .then(response => {
        setItems([...items, response.data.data]);
        setNewItem('');
        setNewTitle('');
      })
      .catch(error => console.error('Error adding item:', error));
  };

  useEffect(() => {
    axios.get('http://localhost:5001/api/items')
      .then(response => setItems(response.data.data))
      .catch(error => console.error('Error fetching data:', error));

    axios.get('http://localhost:5001/')
      .then(response => setHello(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  
  return (
    <div>

      <p>{hello}</p>
      <h1 className="blog__entries">Blog Entries</h1>

      <div className='image__galery'>
          {images.map(image => (
            <li key={image.id}>
              <img className="image" src={image.src} alt={image.alt} />
              <p className="img__description">{image.title}</p>
            </li>
          ))}
        </div>

      <div class="api__test">
        
      </div>
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
      {}
    </div>
  );
};

export default Blog
