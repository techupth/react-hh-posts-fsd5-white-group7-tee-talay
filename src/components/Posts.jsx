import postDetail from "../data/post-detail";
import { useState } from "react";

// function Posts() {
//   return (
//     <div class="app-wrapper">
//       <h1 class="app-title">Posts</h1>
//       <div class="post-list">
//         {postDetail.map((item, index) => {
//           const [like, setLike] = useState(item.likes);

//           const addLike = () => {
//             setLike(like + 1);
//           };

//           const disLike = () => {
//             if (like > 0) {
//               setLike(like - 1);
//             }
//           };
//           return (
//             <div class="post-item" key={index}>
//               <div class="post-header">
//                 <h2>{item.title}</h2>
//                 <div class="post-social-media-stats">
//                   <span class="stats-topic">Likes: </span>
//                   <span class="post-likes">{like}</span>
//                 </div>
//               </div>
//               <p class="post-content">{item.content}</p>
//               <div class="post-actions">
//                 <button class="like-button" onClick={addLike}>
//                   Like
//                 </button>
//                 <button class="dislike-button" onClick={disLike}>
//                   Dislike
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

function Posts() {
  const [like, setLike] = useState(postDetail);

  const addLike = (index) => {
    const newLike = [...like];
    newLike[index].likes += 1;
    setLike(newLike);
  };

  const disLike = (index) => {
    const newLike = [...like];
    if (newLike[index].likes > 0) {
      newLike[index].likes -= 1;
      setLike(newLike);
    }
  };
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {postDetail.map((item, index) => {
          return (
            <div class="post-item" key={index}>
              <div class="post-header">
                <h2>{item.title}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{like[index].likes}</span>
                </div>
              </div>
              <p class="post-content">{item.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => {
                    addLike(index);
                  }}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => {
                    disLike(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
