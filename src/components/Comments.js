import VotingBtn from "./VotingBtn";
import * as style from '../styles/style.js';

export const Comments = ({commentsArr,likes,dislikes,setLikes,setDislikes}) =>{ 
    const comments = commentsArr.map((comment) => {
    return (
      <div key={comment.id} style={style.styleComments}>
        <img
          src={`https://ui-avatars.com/api/?name=${comment.user}&background=random&rounded=true&size=40`}
          alt="avatar"
        />
        <div className="content" style={style.styleContent}>
          <h5 style={style.styleH3Comment}>@{comment.user}</h5>
          <p style={style.stylePComment}>{comment.comment}</p>
          <VotingBtn
            likes={likes}
            dislikes={dislikes}
            setLikes={setLikes}
            setDislikes={setDislikes}
          />
        </div>
      </div>
    );
  });
  return comments;
}