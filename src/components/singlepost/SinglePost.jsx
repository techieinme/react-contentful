import React from "react";
import { Link, useParams } from "react-router-dom";
import MD from "react-markdown";

import { useSinglePost } from "../../custom-hooks";
import { readableDate } from "../helpers";
import "./SinglePost.css";

export default function SinglePost() {
  const { id } = useParams();
  const [post, isLoading] = useSinglePost('posts',id);

  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>;

    return (
      <React.Fragment>
        <div className="post__intro">
          <h2 className="post__intro__title">{post.title}</h2>
          <small className="post__intro__date">{readableDate(post.date)}</small>
          <p className="post__intro__desc">{post.description}</p>

          <img
            className="post__intro__img"
            src={post.url.fields.file.url}
            alt={post.title}
          />
        </div>

        <div className="post__body">
          {post.body}
          <MD source={post.body} />
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="post">
      <Link className="post__back" to="/">
        {"< Back"}
      </Link>

      {renderPost()}
    </div>
  );
}
