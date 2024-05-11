import jobInfo from "../jobInfo";
import { useParams } from "react-router-dom";
import Weather from "../field-notes/Weather";
import JobHeader from "../field-notes/JobHeader";
import CrewList from "../field-notes/CrewList";

export default function FieldBook() {
    const {jobNumber} = useParams()
    const job = jobInfo.find(job => job.number === jobNumber)
    return <>
        <JobHeader job={job} />
        <Weather />
        <CrewList />
    </>
}