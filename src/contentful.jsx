import React,{ useEffect,useState} from 'react';
import { createClient } from 'contentful';

const SPACE_ID ='gepmmkefmtq6';
const ACCESS_TOEKEN ='peP8oDMYTDjnoO6Ro2mlhhOAvbt_nyUpW2rYI1y_BCQ';

const client  = createClient({
    space : SPACE_ID,
    accessToken : ACCESS_TOEKEN
});

const useContentfulData  = (contentType)=>{
    const [data,setData]  = useState([])
    const [loading,setloading]  = useState(true);

    useEffect(()=>{
        client.getEntries({contentType:contentType})
        .then((entries)=>{
            setData(entries);
            setloading(false);
        })
    },[]);
    return [data,loading];
}


const getEntries = (contentType) => client.getEntries({content_type:contentType}).then(response => response.items);

const getSingleEntity  = (contentType,slug) => client.getEntries({
    content_type : contentType,
      "fields.slug" :  slug
  }).then(response=>response.items)




export {useContentfulData,getEntries,getSingleEntity};






