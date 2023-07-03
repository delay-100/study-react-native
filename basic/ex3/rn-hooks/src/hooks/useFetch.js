import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [inProgress, setInProgress] = useState(false); // api 호출이 어떤 상태인지 알아보는 상태

  useEffect(() => {
    const getData = async () => {
      try {
        setInProgress(true);
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (e) {
        setError(e);
      } finally {
        setInProgress(false);
      }
    };
    getData();
  }, []); // mount 되었을 때만 실행
  //   useEffect(async () => {
  //     try {
  //       const res = await fetch(url);
  //       const result = await res.json();
  //       setData(result);
  //     } catch (e) {
  //       setError(e);
  //     }
  //   }, []); // mount 되었을 때만 실행

  return { data, error, inProgress };
};
