import React from 'react';
import './CreatePost.css'

import { supabase } from '../client'
import { useEffect,useState } from 'react';

console.log("About to run Post")
const CreatePost = ()=> {
    const [post, setPost] = useState({name: "", speed: "", color: ""})
    console.log("Running Post")
    const createPost = async (event) => {
        event.preventDefault();
       await supabase
        .from('Crewmates')
        .insert({name: post.name, speed: post.speed, color: post.color})
        .select();
    
        window.location = "/";
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    return (
        <div>
            <form >
                <label for="title">Name</label> <br />
                <input onChange={handleChange} value={post.name} type="text" id="title" name="name" /><br />
                <br/>

                <label for="author">Speed</label><br />
                <input onChange={handleChange} value={post.speed} type="text" id="author" name="speed" /><br />
                <br/>

                <label for="description">Color: <span style={{ color: post.color }}>{post.color}</span></label><br />
                

<input onChange={handleChange} type="radio" name="color" id="red" value="red" />
<label for="red"><span class="red"></span></label>

<input onChange={handleChange}  type="radio" name="color" id="green" value="green"/>
<label for="green"><span class="green"></span></label>

<input onChange={handleChange}  type="radio" name="color" id="yellow" value="yellow"/>
<label for="yellow"><span class="yellow"></span></label>

<input onChange={handleChange}  type="radio" name="color" id="orange" value="orange"/>
<label for="orange"><span class="orange"></span></label>

<input onChange={handleChange} type="radio" name="color" id="blue" value="blue"/>
<label for="blue"><span class="blue"></span></label>

                <br/>
                <input onClick={createPost} type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost