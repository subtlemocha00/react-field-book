import { useNavigate } from "react-router-dom";

export default function JobHeader({job}) {
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate('/jobList')
    }
    return(
    <header className="row mw-100 bg-warning align-items-center m-0 mb-2">
        <button type="button" onClick={handleClickBack} className="col-auto btn btn-lg btn-warning border border-dark border-2 p-4"><i className="fas fa-arrow-left"></i></button>
        <div className="col mw-100 row align-items-end m-0">
            <span className="col fs-2 p-0 m-0">{job.name}</span>
            <span className="col-auto fs-5 text-md-end p-0">Job Number: {job.number}</span>
        </div>
    </header>
)}