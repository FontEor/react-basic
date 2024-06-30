import { useState } from "react";
import "./App.scss";
import avatar from "./images/bozai.png";

const defaultList = [
  {
    rpid: 3,
    user: {
      uid: "13258165",
      avatar,
      uname: "周杰伦",
    },
    content: "哎哟，不错哦",
    ctime: "10-18 08:15",
    like: 88,
  },
  {
    rpid: 2,
    user: {
      uid: "36080105",
      avatar,
      uname: "许嵩",
    },
    content: "我寻你千百度 日出到迟暮",
    ctime: "11-13 11:29",
    like: 88,
  },
  {
    rpid: 1,
    user: {
      uid: "30009257",
      avatar,
      uname: "黑马前端",
    },
    content: "学前端就来黑马",
    ctime: "10-19 09:00",
    like: 66,
  },
];
const user = {
  uid: "30009257",
  avatar,
  uname: "黑马前端",
};
const tabs = [
  { type: "hot", text: "最热" },
  { type: "time", text: "最新" },
];

const App = () => {
  const [list, setList] = useState(defaultList);
  const handleDel = (id) => {
    setList(list.filter((item) => item.rpid !== id));
  };
  return (
    <div className="app">
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            <span className="total-reply">{10}</span>
          </li>
          <li className="nav-sort">
            <span className="nav-item">最新</span>
            <span className="nav-item">最热</span>
          </li>
        </ul>
      </div>
      <div className="reply-wrap">
        <div className="box-normal">
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="用户头像" />
            </div>
          </div>
          <div className="reply-box-wrap">
            <textarea
              className="reply-box-textarea"
              placeholder="发一条友善的评论"
            />
            <div className="reply-box-send">
              <div className="send-text">发布</div>
            </div>
          </div>
        </div>
        <div className="reply-list">
          {list.map((item) => (
            <div key={item.rpid} className="reply-item">
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img
                    className="bili-avatar-img"
                    alt=""
                    src={item.user.avatar}
                  />
                </div>
              </div>
              <div className="content-wrap">
                <div className="user-info">
                  <div className="user-name">{item.user.uname}</div>
                </div>
                <div className="root-reply">
                  <span className="reply-content">{item.content}</span>
                  <div className="reply-info">
                    <span className="reply-time">{item.ctime}</span>
                    <span className="reply-time">点赞数:{item.like}</span>
                    {item.user.uid === user.uid && (
                      <span
                        className="delete-btn"
                        onClick={() => handleDel(item.rpid)}
                      >
                        删除
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
