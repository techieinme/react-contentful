import { useEffect, useState } from "react";

import { getSingleEntity } from "../contentful";

export default function useSinglePost(contetnType,slug) {

  const promise = getSingleEntity(contetnType,slug);

  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then(result => {
    console.log("single post reuslt",result);
      setPost(result[0].fields);
      setLoading(false);
    });
  }, [promise]);

  return [post, isLoading];
}
