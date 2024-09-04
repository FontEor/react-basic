import { useSelector, useDispatch, Provider } from "react-redux";
import { useState, useRef, useEffect } from "react";

import { fetchChannelLsit } from "../store/modules/channelStore";
const Channle = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChannelLsit());
  }, [dispatch]);
  const { channelList } = useSelector((state) => state.channel);
  return (
    <ul>
      {channelList.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
export default Channle;
