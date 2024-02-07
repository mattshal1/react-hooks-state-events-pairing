import { useEffect, useState } from "react";
import video from "../data/video.js";
import VotingBtn from "./VotingBtn";
import { Comments } from "./Comments";
import { SearchBar } from "./SearchBar";
import * as style from "../styles/style";

function App() {
  const [upvotes, setUpVotes] = useState(video.upvotes);
  const [downvotes, setDownVotes] = useState(video.downvotes);
  const [isShow, setIsShow] = useState(true);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [commentsArr, setCommentsArr] = useState(video.comments);
  const [commentsLength, setCommentsLength] = useState(video.comments.length);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    setUpVotes(upvotes);
    setDownVotes(downvotes);
    setDislikes(likes);
    setDislikes(dislikes);
    setCommentsLength(commentsLength);
    setSearchName(searchName);
  }, [upvotes, downvotes, likes, dislikes, commentsLength, searchName]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    e.preventDefault();
    setSearchName(e.target.value);
    const filterUser = video.comments.filter((user) =>
      user.user.includes(value)
    );
    setCommentsArr(filterUser);
    if (value.length === 0) return setCommentsArr(video.comments);
  };

  return (
    <div className="App" style={style.styleApp}>
      <iframe
        width="1271"
        height="715"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
        style={{width: "80dvw",borderRadius:'1rem'}}
      />
      <h1>{video.title}</h1>
      <div style={style.styleCommentsViews}>
        <h4 style={style.styleH4}>
          {video.views} views | {video.createdAt}
        </h4>
        <VotingBtn
          likes={upvotes}
          dislikes={downvotes}
          setLikes={setUpVotes}
          setDislikes={setDownVotes}
        />
      </div>
      <div style={style.styleCommentsBtn}>
        <h2 style={style.styleH2}>{video.comments.length} Comments</h2>
        <button onClick={() => setIsShow(!isShow)}>
          {isShow ? "Hide" : "Show"} Comments
        </button>
        <button
          onClick={() => {
            video.comments.length = 0;
            setCommentsLength(video.comments.length);
          }}
        >
          Remove Comment
        </button>
        <SearchBar searchName={searchName} handleSearchChange={handleSearchChange}/>
      </div>
      {isShow && (
        <Comments
          commentsArr={commentsArr}
          likes={likes}
          dislikes={dislikes}
          setLikes={setLikes}
          setDislikes={setDislikes}
        />
      )}
    </div>
  );
}

export default App;