import { useState } from "react";
import { Modal, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import avater1 from "../../../../images/project/16.png";
import project1 from "../../../../icons/project/svgs/vcoincheck.svg";
import PageTitle from "../../../layouts/PageTitle";
import StarRating from './StarRating';

const ProjectDetail = () => {
	const [reviewToggle, setReviewToggle] = useState(false);

	return (
		<>
			<PageTitle motherMenu="Project" activeMenu="Project detail" />
			<div className="row">
				<div className="col-lg-12">
					<div className="card">
						<div className="card-body">
							<div className="row">
								<div className="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
									{/* Tab panes */}
									<Tab.Container defaultActiveKey="first">
										<Tab.Content>
											<Tab.Pane eventKey="first">
												<img className="img-fluid" src={project1} alt="" />
											</Tab.Pane>
										</Tab.Content>
										
									</Tab.Container>
								</div>
								{/*Tab slider End*/}

								<div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
									<div className="product-detail-content">
										{/*Product details*/}
										<div className="new-arrival-content pr">
											<h4>vcoincheck</h4>
											<div className="comment-review star-rating">
												<ul>
													<li className="star" title="Poor" data-value={1}>
														<i className="fa fa-star fa-fw" />
													</li>
													<li className="star" title="Fair" data-value={2}>
														<i className="fa fa-star fa-fw" />
													</li>
													<li className="star" title="Good" data-value={3}>
														<i className="fa fa-star fa-fw" />
													</li>
													<li className="star" title="Excellent" data-value={4}>
														<i className="fa fa-star fa-fw" />
													</li>
													<li className="star" title="WOW!!!" data-value={5}>
														<i className="fa fa-star fa-fw" />
													</li>
												</ul>
												<span className="review-text">(325 vote) / </span>
												<Link onClick={() => setReviewToggle(true)} className="product-review" data-toggle="modal" data-target="#reviewModal">Voted?</Link>
											</div>
											<div className="d-table mb-2">
												<p className="price float-left d-block">325</p>
											</div>
											<p> Project code: <span className="item">VCCH</span>{" "}</p>
											<p>Brand: <span className="item">Reply chain</span></p>
											<p>
												Project tags:&nbsp;&nbsp;
												<span className="badge badge-success light mr-1">polkadot</span>
												<span className="badge badge-success light mr-1">blockchain</span>
												<span className="badge badge-success light mr-1">nft</span>
											</p>
											<p className="text-content">
												VcoinCheck is a website built with content from the community. Those who want to know if a Blockchain project is good or not can evaluate Blockchain projects for themselves by answering the questions in Vcoincheck. Vcoincheck will let users know if the project is good or not through the user's answers. In addition, the community can see the reviews of knowledgeable people to get objective information about a project.
											</p>
											<p className="text-content">
												VcoinCheck is an extremely reliable tool that helps investors reduce risks when making investment decisions, without losing money due to lack of knowledge and experience in project evaluation.
											</p>
											<p className="text-content">
												VcoinCheck is a project funded by Catalyst Fund, a project with the spirit of contributing good and useful values to the investor community in Vietnam and around the world.
Learn more about us here (link to About us)

											</p>
											<p className="text-content">
												At Vcoincheck, the quality of a project will be quantified in terms of scores and will not be fixed. The score will always change based on the performance of a project. This will help investors get the most accurate information and judgment and thereby make the best investment decisions for themselves.
											</p>
											
											
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* review */}
				<Modal show={reviewToggle} className="modal fade" id="reviewModal">
					<>
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Vote</h5>
								<button
									type="button"
									onClick={() => setReviewToggle(false)}
									className="close"
									data-dismiss="modal"
								>
									<span>×</span>
								</button>
							</div>
							<div className="modal-body">
								<form
									onSubmit={(e) => {
										e.preventDefault();
										setReviewToggle(false);
									}}
								>
									<div className="text-center mb-4">
										<img
											className="img-fluid rounded"
											width={78}
											src={avater1}
											alt="vKnightHub"
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
		</>
	);
};

export default ProjectDetail;
