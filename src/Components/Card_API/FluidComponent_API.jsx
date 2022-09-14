import React, { useState, useEffect } from "react";
import { Card, Button, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import App from "../../Shravani/App";

const FluidComponent_API = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(`http://localhost:8000/projects/`);
        //console.log(response);
        setUsers(await response.json());
    }

    useEffect(() => {
        getUsers();
    }, []);

    const [pageNumber, setPageNumber] = useState(0);
    const cardsPerPage = 5;
    const pagesVisited = pageNumber * cardsPerPage
    const pageCount = Math.ceil(users.length / cardsPerPage)
    console.log(pageCount)

    const displayCards = users.slice(pagesVisited, pagesVisited + cardsPerPage).map(curElem => {
        return (
            <Card className="card__style"
                style={{ cursor: "pointer", width: "15rem",margin: "0.8rem", border: "none",borderRadius: "16px" }}
            >
                {/* <Card.Img variant="top" src={curElem.avatar_url} /> */}
                <Card.Body>
                    <Card.Title>{curElem.project_name}</Card.Title>
                    <Card.Text>
                        {curElem.project_id}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    })

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <div className="mx-auto">
            <div className="row text-center">
                <Row>
                    <h2 className="text-center">
                        Projects
                    </h2>

                    <App />
                </Row>
            </div>

            <div className="contanier-fluid mt-5 cards-div">
                <div className="row text-center">

                    {displayCards}
                    {/* {

                        users.map((curElem) => {
                            return (
                                // <div className="card mb-3" style="max-width: 540px;">
                                //     <div className="row g-0">
                                //         <div className="col-md-4">
                                //         <img src="..." className="img-fluid rounded-start" alt="..."/>
                                //     </div>
                                //     <div className="col-md-8">
                                //         <div className="card-body">
                                //             <h5 className="card-title">
                                //                 {curElem.name}
                                //         </h5>
                                //             <p className="card-text">
                                //                 {curElem.website}
                                //             </p>
                                //             <p className="card-text">
                                //                 <small class="text-muted">{curElem.phone}</small>
                                //             </p>
                                //         </div>
                                //     </div>
                                //     </div>
                                // </div>

                                // <h1>hello</h1>
                                <Card
                                    style={{ cursor: "pointer", width: "15rem" }}
                                >
                                    <Card.Img variant="top" src={curElem.email} />
                                    <Card.Body>
                                        <Card.Title>{curElem.name}</Card.Title>
                                        <Card.Text>
                                            {curElem.username}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>

                            )
                        })
                    } */}
                    <div className="pagination">
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttns"}
                            nextLinkClassName={"nextBttns"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FluidComponent_API