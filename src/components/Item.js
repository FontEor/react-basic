//封装组件
export default function Item({ item, onDel, user }) {
  return (
    <div key={item.rpid} className="reply-item">
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img className="bili-avatar-img" alt="" src={item.user.avatar} />
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
              <span className="delete-btn" onClick={() => onDel(item.rpid)}>
                删除
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
