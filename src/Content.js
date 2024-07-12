import { posts } from "./App";
import Post from "./Post";

export default function Content({ isActive }) {
  return (
    <div
      className="content"
      style={isActive === "create" ? { display: "none" } : {}}
    >
      <ul className="posts">
        {posts.map((post) => (
          <Post posts={post.image} key={post.id} />
        ))}
      </ul>
    </div>
  );
}
