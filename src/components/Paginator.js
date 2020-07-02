import React, { useCallback } from 'react';
import ReactPaginate from 'react-paginate';
import {
  GrFormPrevious,
  GrFormNext,
} from 'react-icons/gr';
import './Paginator.scss';

const Paginator = ({ page, onPageClick }) => {
  const handlePageClick = useCallback(
    data => {
      window.scrollTo(0, 0);
      onPageClick(data.selected + 1);
    },
    []
  );

  return (
    <React.Fragment>
      <ReactPaginate 
        onPageChange={handlePageClick}
        pageCount={10}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        forcePage={page-1}
        previousLabel={<GrFormPrevious />}
        previousLinkClassName={"prev-link"}
        nextLabel={<GrFormNext />}
        nextLinkClassName={"next-link"}
        breakLabel={"···"}
        breakClassName={"break-me"}
        containerClassName={"Paginator"}
        activeLinkClassName={"active"}
      />
    </React.Fragment>
  );
};

export default Paginator;