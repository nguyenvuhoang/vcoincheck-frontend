
const ProjectDetail = (props) => {
	return (
		<>
		<div className="row">
			<div className="col-lg-12">
				<h1>{props.match.params.name}</h1>
			</div>
		</div>
		</>
	);
};

export default ProjectDetail;
