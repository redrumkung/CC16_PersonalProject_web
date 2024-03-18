import { useContext } from 'react';
import { PostContext } from '../features/create/contexts/PostContext';

export default function usePost() {
  return useContext(PostContext);
}
