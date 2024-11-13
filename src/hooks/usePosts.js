"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const usePosts = (initialPage = 1) => {
  const [page, setPage] = useState(initialPage);
  const [posts, setPosts] = useState([]);

  const { data, error, isValidating } = useSWR(
    `https://dev.to/api/articles?page=${page}&per_page=10`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000,
    }
  );

  useEffect(() => {
    if (data) {
      setPosts((prevPosts) => [...prevPosts, ...data]);
    }
  }, [data]);

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  return {
    posts,
    loading: !data && !error,
    error,
    isValidating,
    loadMore,
    page,
  };
};

export default usePosts;
