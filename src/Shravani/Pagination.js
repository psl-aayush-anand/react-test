import React from "react";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i=1; 1<= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);  
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => {
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination;