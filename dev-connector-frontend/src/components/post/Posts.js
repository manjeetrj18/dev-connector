import { Link, useRouteLoaderData } from "react-router-dom";
import AddPost from "./AddPost";
import { getToken } from "../../util/auth";
import deleteHandler from "./PostActions";

import "./Posts.css";

function Posts() {
  const PostData = useRouteLoaderData("post");
  console.log(PostData[0]);

  const token = getToken();

  const user_id = sessionStorage.getItem("user_id");

  const dateOptions = {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const deleteReplyHandler = function () {
    PostData.map((post) => {
      const comments = post.comments.findIndex((each) => each.user === user_id);
      console.log("final", comments);
      return post.comments;
    });
  };

  return (
    <>
      <AddPost />

      <hr />
      <div>
        <ul>
          {PostData.map((post) => (
            <li key={post._id}>
              <div className="be-comment-block">
                <div className="be-comment">
                  <div className="be-img-comment">
                    <a href="blog-detail-2.html">
                      <img
                        src={post.avatar}
                        alt={post._id}
                        className="be-ava-comment"
                      />
                    </a>
                  </div>
                  <div className="be-comment-content">
                    <span className="be-comment-name">
                      <a href="blog-detail-2.html">By: {post.name}</a>
                    </span>
                    <span className="be-comment-time">
                      <i className="fa fa-clock-o"></i>
                      {new Intl.DateTimeFormat("en-In", dateOptions).format(
                        new Date(post.date)
                      )}
                    </span>
                    <p className="be-comment-text">
                      {post.text}
                      {user_id === post.user && (
                        <button
                          style={{ color: "red", float: "right" }}
                          onClick={() => deleteHandler(post._id)}
                        >
                          Del
                        </button>
                      )}
                    </p>
                    <br />
                    <div className="btn-group">
                      <a
                        className="btn btn-sm btn-default btn-hover-success"
                        href="#"
                        style={{ backgroundColor: "white" }}
                      >
                        <i className="fa fa-thumbs-up">{post.likes.length}</i>
                      </a>
                      {/* <a
                        className="btn btn-sm btn-default btn-hover-danger"
                        href="#"
                      >
                        <i className="fa fa-thumbs-down"></i>
                      </a> */}
                      <Link to={post._id}>Reply ({post.comments.length})</Link>
                    </div>

                    {post.comments.length > 0 && (
                      <div>
                        <br />
                        {console.log(post.comments)}
                        Replies :-
                        <h3 className="be-comment-text">
                          {post.comments.map((comment) => (
                            <div key={comment._id}>
                              <p style={{ color: "green" }}>
                                Replied by : {comment.name}
                              </p>
                              <h3>
                                {comment.text}
                                {user_id === comment.user && (
                                  <button
                                    style={{
                                      color: "red",
                                      float: "right",
                                      backgroundColor: "transparent",
                                    }}
                                    onClick={() =>
                                      console.log(
                                        post.comments.findIndex(
                                          (each) => each.user === user_id
                                        )
                                      )
                                    }
                                  >
                                    Delete reply
                                  </button>
                                )}
                              </h3>
                            </div>
                          ))}
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Posts;

// () => {
// console.log("comments: ", post.comments);
// post.comments = post.comments.filter(
//   (each) => each.user !== user_id
// );
// return post.comments;
// console.log(
//   "comments: after: ",
//   post.comments
// );
// }
