import { createContext } from 'react';
import { useState } from 'react';
import * as postApi from '../../../api/post';


export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [cards, setCards] = useState([]);
console.log(cards)
  const createPost = async formData => {
    await postApi.createPost(formData);
  };

  return (
    <PostContext.Provider value={{ createPost, cards , setCards }}>
      {children}
    </PostContext.Provider>
  );
}
