import { useState ,useEffect} from 'react';
import { getEntries} from '../contentful';
const promise  = getEntries('posts');

export default function usePosts(){
    const [posts,setPosts]  = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        promise.then(posts=>{
            setPosts(posts);
            setLoading(false);
        })
    },[])
  return [posts, loading]
}


