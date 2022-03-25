import { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
// images
import avatar1 from "../../../icons/project/svgs/cardano.svg";
import PageTitle from "../../layouts/PageTitle";
import StarRating from './project/StarRating';
import ProjectTable from "./project/ProjectTable";



const getImage = (image) => {
    if (image.length > 0 )  {
        return <img className="img-fluid" src={require(`../../../icons/project/svgs/${image}.svg`).default} alt=""/>
    }
}

const projectlist = [
    {
        proname: 'CARDANO',
        procd: 'CAR',
        proicon: 'cardano',
        Ecosystem: 'Cardano',
        status: 'Approve',
        totalreview: 1500,
        content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
        proname: 'VCOINCHECK',
        procd: 'VCCH',
        proicon: 'vcoincheck',
        Ecosystem: 'Cardano',
        status: 'Approve',
        totalreview: 325,
        content:"VcoinCheck is a website built with content from the community. Those who want to know if a Blockchain project is good or not can evaluate Blockchain projects for themselves by answering the questions in Vcoincheck..."
    },
    {
        proname: 'SUNDAESWAP',
        procd: 'SUNWAP',
        proicon: 'sundaeswap',
        Ecosystem: 'Cardano',
        status: 'Approve',
        totalreview: 480,
        content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
        proname: 'LIQWID',
        procd: 'LIQ',
        proicon: 'liwqid',
        Ecosystem: 'Cardano',
        status: 'Approve',
        totalreview: 658,
        content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
        proname: 'SINGULARITYDAO',
        procd: 'SGLDAO',
        proicon: 'sdao',
        Ecosystem: 'Cardano',
        status: 'Approve',
        totalreview: 280,
        content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
    {
        proname: 'ERGODEX',
        procd: 'ERG',
        proicon: 'ergodex',
        Ecosystem: 'Cardano',
        status: 'Approve',
        totalreview: 600,
        content:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
    },
]

const Project = () => {
    const [reviewModal, setReviewModal] = useState(false);
    return (
        <Fragment>
            <PageTitle activeMenu="All Project" motherMenu="Project" />

            <div className="row">
                {projectlist.map((project,index) =>(
                    <div className="col-lg-12 col-xl-6" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <div className="row m-b-30">
                                    <div className="col-md-5 col-xxl-12">
                                        <div className="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                                            <div className="new-arrivals-img-contnent">
                                                {getImage(project.proicon)}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-7 col-xxl-12">
                                        <div className="new-arrival-content position-relative">
                                            <h4>
                                                <Link to="ecom-project-detail" className="text-black">
                                                    {project.proname}
                                                </Link>
                                            </h4>
                                            <div className="comment-review star-rating">
                                                <ul>
                                                    {" "}
                                                    <li>
                                                        <i className="fa fa-star" />
                                                    </li>{" "}
                                                    <li>
                                                        <i className="fa fa-star" />
                                                    </li>{" "}
                                                    <li>
                                                        <i className="fa fa-star" />
                                                    </li>{" "}
                                                    <li>
                                                        <i className="fa fa-star-half-empty" />
                                                    </li>{" "}
                                                    <li>
                                                        <i className="fa fa-star-half-empty" />
                                                    </li>
                                                </ul>
                                                <Link
                                                    className="product-review"
                                                    data-toggle="modal"
                                                    onClick={() => setReviewModal(true)}
                                                    data-target="#reviewModal"
                                                >
                                                    Vote?
                                                </Link>
                                                <p className="price">{project.totalreview}</p>
                                            </div>
                                            <p>
                                                Availability:{" "}
                                                <span className="item">
                                                    {" "}
                                                    <i className="fa fa-check-circle text-success" />
                                                </span>
                                            </p>
                                            <p>
                                                Project code: <span className="item">{project.procd}</span>{" "}
                                            </p>
                                            <p>
                                                Ecosystem: <span className="item">{project.Ecosystem}</span>{" "}
                                            </p>
                                            <p className="text-content">
                                                {project.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* review */}
                <Modal show={reviewModal} onHide={setReviewModal} className="modal fade" id="reviewModal">
                    <>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Review</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    onClick={() => setReviewModal(false)}
                                >
                                    <span>×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        setReviewModal(false);
                                    }}
                                >
                                    <div className="text-center mb-4">
                                        <img
                                            className="img-fluid rounded"
                                            width={78}
                                            src={avatar1}
                                            alt="DexignZone"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <div className="rating-widget mb-4 text-center">
                                            {/* Rating Stars Box */}
                                            <div className="rating-stars">
                                                <ul
                                                    id="stars"
                                                    className="d-flex justify-content-center align-items-center"
                                                >
                                                    <StarRating />
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            placeholder="Comment"
                                            rows={5}
                                            defaultValue={""}
                                        />
                                    </div>
                                    <button className="btn btn-success btn-block">RATE</button>
                                </form>
                            </div>
                        </div>
                    </>
                </Modal>
            </div>

            <div className="row">
                <div className="col-xl-12 col-xxl-12 col-lg-12">
                    <div className="card">
                        <ProjectTable title="ALL PROJECT"/>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default Project;
