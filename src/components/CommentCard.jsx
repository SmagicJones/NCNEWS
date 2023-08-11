import { useContext } from 'react';
import DeleteComment from './DeleteComment';
import { UserContext } from '../contexts/UserContext';

export default function CommentCard({
  article_id,
  author,
  body,
  comment_id,
  created_at,
  votes,
  setIsDeleting = { setIsDeleting },
}) {
  const { user } = useContext(UserContext);
  return (
    <li className="flex-1 max-w-sm bg-cyan-500 hover:bg-cyan-400 rounded-xl pb-4">
      <p className='text-center text-1xl text-black'>Comment {comment_id}</p>
      <p>Author: {author}</p>
      <p>{body}</p>
      <p>{created_at}</p>
      <p>Votes: {votes}</p>
      <p>{article_id}</p>
      {user === author ? <DeleteComment comment_id={comment_id} setIsDeleting={setIsDeleting} /> : <></>}
    </li>
  );
}
