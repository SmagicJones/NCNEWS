import { useSearchParams } from 'react-router-dom';

const SortArticles = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sort-by');
  const order = searchParams.get('order');

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  return (
    <>
      <div className="dropdown inline-block relative">
      <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
        <span className="mr-1">Topics</span>
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
        </svg>
      </button>
      <select className="dropdown-menu absolute hidden text-gray-700 pt-1" name='sort-by' value={sortBy} onChange={handleSort}>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
      </select>
    </div>
    </>
  );
};

export default SortArticles;
