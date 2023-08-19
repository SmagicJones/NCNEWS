import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Pagination(articleCount) {
  // console.log(articleCount.articleCount, "Article Count")
  // console.log(articleCount.limit, "article count limit")
  // console.log(articleCount, "article count in pagination")

  const [searchParams, setSearchParams] = useSearchParams() 

  const totalPage = Math.ceil(articleCount.articleCount / articleCount.limit);
  console.log(totalPage, 'total Page');

  const [page, setPage] = useState(1);

  const pages = Array.from({ length: Math.ceil(articleCount.articleCount / articleCount.limit) }, (_, i) => i + 1);

  let pageValue = +searchParams.get('p') || 1;
  useEffect(() => {}, [searchParams, articleCount.limit]);

  console.log(pages);

  return pages.length === 1 ? (
    <>
      <p>There are a total of {articleCount.articleCount} articles</p>
      <p>Currently showing {articleCount.limit} articles per page</p>
    </>
  ) : (
    <section>
      <p>
        There are {articleCount.articleCount} articles. Currently showing {articleCount.limit} per page{' '}
      </p>
      <p>
        You are currently on {page}/{pages.length}{' '}
      </p>
      {pages.map((page) => {
        return (
          <button
            key={page}
            disabled={page === pageValue}
            value={page}
            onClick={(e) => {
              setPage(page);
              const newParams = {
                sort_by: searchParams.get('sort_by'),
                order: searchParams.get('order'),
                limit: searchParams.get('limit'),
                p: searchParams.get('p'),
              };
              if (!newParams.sort_by) delete newParams.sort_by;
              if (!newParams.order) delete newParams.order;
              if (!newParams.limit) delete newParams.limit;
              newParams.p = e.target.value;
              setSearchParams(newParams);
            }}
          >
            {page}
          </button>
        );
      })}
    </section>
  );
}
