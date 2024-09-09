import { useEffect, useState } from "react";
import { getChannelAPI, getArticleAPI } from "@/apis/article";
function useChanel() {
  const [channelList, setChannelList] = useState([]);
  const [article, setArticleList] = useState({
    list: [],
    count: 0,
  });
  const [params, setParams] = useState({
    page: 1,
    per_page: 2,
    begin_pubdate: null,
    end_pubdate: null,
    status: null,
    channel_id: null,
  });
  useEffect(() => {
    const getChannelList = async () => {
      const res = await getChannelAPI();
      setChannelList(res.data.channels);
    };
    const fetchArticleList = async () => {
      console.log(params);
      const res = await getArticleAPI(params);
      const { results, total_count } = res.data;
      setArticleList({
        list: results,
        count: total_count,
      });
    };
    fetchArticleList();
    getChannelList();
  }, [params]);

  return { channelList, article, params, setParams };
}

export { useChanel };
