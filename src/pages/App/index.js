import { useState, useRef, useEffect } from "react";
import "./App.scss";
import avatar from "@/assets/bozai.png";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increament,
  addToNum,
} from "../../store/modules/countStore";
import { fetchChannelLsit } from "../../store/modules/channelStore";
import Item from "../../components/Item";

const classNames = require("classnames");

const user = {
  uid: "30009257",
  avatar,
  uname: "黑马前端",
};
const tabs = [
  { type: "hot", text: "最热" },
  { type: "time", text: "最新" },
];

//自定义hook
function useGetList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:3001/list",
      methods: "get",
    }).then((res) => {
      setList(_.orderBy(res.data, "like", "desc"));
    });
  }, []);
  return [list, setList];
}
const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  useEffect(() => {
    dispatch(fetchChannelLsit());
  }, [dispatch]);

  const [list, setList] = useGetList();
  const [tab, setTab] = useState(tabs);
  const handleDel = (id) => {
    setList(list.filter((item) => item.rpid !== id));
  };
  const [type, setType] = useState("hot");
  const handleClick = (type) => {
    setType(type);
    if (type === "hot") {
      setList(_.orderBy(list, "like", "desc"));
    } else {
      setList(_.orderBy(list, "ctime", "desc"));
    }
  };
  const [content, setContent] = useState("");
  const inputRef = useRef(null);
  const handlePublish = () => {
    setList([
      ...list,
      {
        rpid: uuidv4(),
        user: {
          uid: "13258165",
          avatar,
          uname: "周杰伦",
        },
        content: content,
        ctime: dayjs(new Date()).format("MM-DD HH:mm"), //"10-18 08:15",
        like: 88,
      },
    ]);
    setContent("");
    inputRef.current.focus();
  };

  return (
    <div className="app">
      <div className="reply-navigation">
        <div>
          <span className="total-reply">控制</span>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(increament())}>+</button>
          <button onClick={() => dispatch(addToNum(10))}>+10</button>
        </div>
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">评论</span>
            <span className="total-reply">{count}</span>
          </li>
          <li className="nav-sort">
            {tab.map((item) => (
              <span
                className={classNames("nav-item", {
                  active: type === item.type,
                })}
                key={item.type}
                onClick={() => handleClick(item.type)}
              >
                {item.text}
              </span>
            ))}
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
              value={content}
              onChange={(e) => setContent(e.target.value)}
              ref={inputRef}
            />
            <div className="reply-box-send">
              <div className="send-text" onClick={() => handlePublish()}>
                发布
              </div>
            </div>
          </div>
        </div>
        <div className="reply-list">
          {list.map((item) => (
            <Item item={item} key={item.id} user={user} onDel={handleDel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
