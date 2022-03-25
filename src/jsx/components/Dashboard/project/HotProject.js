import { Link } from "react-router-dom";

const getImage = (image) => {
    if (image.length > 0 )  {
        return <img width={24} height={24} src={require(`../../../../icons/project/svgs/${image}.svg`).default} alt=""/>
    }
}

const HotProject = ( {project,index} ) => {
    return (
        <tr>
            <td>
                <span className="bgl-success p-3 d-inline-block">
                    {index+1}
                </span>
            </td>
            <td>
                <div className="font-w600 wspace-no">
                    <span className="mr-1">
                        {getImage(project.proicon)}
                    </span>
                    {project.proname}
                </div>
            </td>
            <td className="font-w500">{project.Ecosystem}</td>
            <td className="font-w600 text-center">{project.protype}</td>
            <td>
                <Link
                    className="btn-link text-success float-center"
                    to="/"
                >
                    {project.prosts}
                </Link>
            </td>
            <td>{project.totalereview}</td>
            <td>20/03/2022 06:00 AM</td>
        </tr>
    );
};

export default HotProject;
