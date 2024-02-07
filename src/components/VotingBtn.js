import * as style from "../styles/style.js";

const VotingBtn = ({ likes, dislikes, setLikes, setDislikes }) => {
  return (
    <div style={style.styleComments}>
      <button
        style={style.styleComments && style.styleLikeBtn}
        onClick={() => setLikes(likes + 1)}
      >
        <img
          src="../../dislike.png"
          style={style.styleLikeIcon}
          alt="like button"
        />
        {likes}
      </button>
      <button
        style={
          style.styleComments && style.styleDisLikeBtn
        }
        onClick={() => setDislikes(dislikes + 1)}
      >
        <img
          src="../../dislike.png"
          style={{ height: "15px", marginInline: "0 0.5rem" }}
          alt="dislike button"
        />{" "}
        {dislikes}
      </button>
    </div>
  );
};

export default VotingBtn;