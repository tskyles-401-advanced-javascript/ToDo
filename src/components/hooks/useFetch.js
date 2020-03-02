import { useState, useEffect } from "react";

const useFetch = () => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIstLoading] = useState(false);
  const [request, setRequest] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!request) return;
      setIstLoading(true);
      try {
        request.options.headers = { "Content-Type": "application/json" };
        const result = await fetch(request.url, request.options);
        const json = await result.json();
        setResponse(json);
        setIstLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [request]);
  return [setRequest, response, error, isLoading];
};

export default useFetch;
