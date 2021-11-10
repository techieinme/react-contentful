import React ,{ Component} from 'react';
import { usePosts} from '../../custom-hooks'
import {readableDate} from '../helpers'
import { Link } from "react-router-dom";
import './Posts.css'
export default function Posts(){
    const [posts,loading]  = usePosts();
    const renderPosts = () => {
        if (loading) return <p>Loading...</p>;
    
    
        return posts.map(post => (

          <Link
            className="posts__post"
            key={post.fields.slug}
            to={post.fields.slug}
          >
            <div className="posts__post__img__container">
              <img
                className="posts__post__img__container__img"
                src={post.fields.url.fields.file.url}
                alt={post.fields.title}
              />
            </div>
            <small>{readableDate(post.fields.date)}</small>
            <h3>{post.fields.title}</h3>
    
            <p>{post.fields.description}</p>
          </Link>
        ));
      };
    
      return (
        <div className="posts__container">
          <h2>Phone</h2>
    
          <div className="posts">{renderPosts()}</div>
        </div>
      );
}

