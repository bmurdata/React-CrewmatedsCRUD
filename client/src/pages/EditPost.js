import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css';
import { supabase } from '../client';

const EditPost = ({ data }) => {
  const { id } = useParams();
  const [post, setPost] = useState({}); // Use state for form data

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from('Crewmates')
        .select()
        .eq('id', id);
      setPost(data[0]); // Set initial form data
    }

    fetchData().catch(console.error());
  }, [id]);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost(prevPost => ({ ...prevPost, [name]: value }));
  }

  // UPDATE post
  const updatePost = async (event) => {
    event.preventDefault();

    await supabase
      .from('Crewmates')
      .update({ name: post.name, speed: post.speed, color: post.color })
      .eq('id', id);

    window.location = "/";
  }

  // DELETE post
  const deletePost = async (event) => {
    event.preventDefault();

    await supabase
      .from('Crewmates')
      .delete()
      .eq('id', id);

    window.location = "http://localhost:3000/";
  }

  return (
    <div>
      <form onSubmit={updatePost}>
        <label htmlFor="title">Name</label> <br />
        <input type="text" id="title" name="name" value={post.name} onChange={handleInputChange} /><br />
        <br />

        <label htmlFor="author">Speed</label><br />
        <input type="text" id="author" name="speed" value={post.speed} onChange={handleInputChange} /><br />
        <br />

        <label htmlFor="description">Color</label><br />
        <textarea rows="5" cols="50" id="description" name="color" value={post.color} onChange={handleInputChange}></textarea>
        <br />
        <input type="submit" value="Submit" />
        <button className="deleteButton" onClick={deletePost}>Delete</button> {/* Add onClick event handler */}
      </form>
    </div>
  )
}

export default EditPost;