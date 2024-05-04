import { GermanPage,Programming,Math,ChemPage } from "./subjectPages/subjectPages"
import './theSubjectStyling.css'
import { useParams } from "react-router-dom"
import Header from "../../../header/header"

export const SubjectPage = ()=>{
    const {subject} = useParams()
    return <div>
        <Header></Header>
        <div className="subjectPageContainer flexCenter flexColumn">
            {subject==="chemistry"&&
                <ChemPage></ChemPage>
            }
            {subject==="math"&&
                <Math></Math>
            }
            {subject==="programming"&&
                <Programming></Programming>
            }
            {subject==="german"&&
                <GermanPage></GermanPage>
            }
        </div>
    </div>
}