import './Try.css';
function Try(){
    return (
        <div>
         {/* <div className="mt-5 div19">
    <h1 className="mt-5 mx-5 div19h1">Frequently Asked Questions</h1>
    
    <div className="accordion" id="accordionExample">
    
        <div className="card">
            <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h4><i>What Is Our BBA degree at Amity Online all about?</i></h4>
                </a>
            </div>
            <div id="collapseOne" className="collapse" data-bs-parent="#accordionExample">
                <div className="card-body bg-dark text-white div19s">
                    <p>Our program offers a comprehensive business management perspective, encompassing contemporary tools and decision-making skills. Amity's Online MBA stands as India's sole online MBA program.</p>
                </div>
            </div>
        </div>
        <hr />


        <div className="card">
            <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo">
                    <h4><i>Is This Program UGC Approved?</i></h4>
                </a>
            </div>
            <div id="collapseTwo2" className="collapse" data-bs-parent="#accordionExample">
                <div className="card-body bg-dark text-white div19s">
                    <p>Yes, we are India’s first online university approved by the University Grants Commission. Please check the link for further information -</p>
                </div>
            </div>
        </div>
        <hr />

        
        <div className="card">
            <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseThree3" aria-expanded="false" aria-controls="collapseThree">
                    <h4><i>What Is The Eligibility Criteria?</i></h4>
                </a>
            </div>
            <div id="collapseThree3" className="collapse" data-bs-parent="#accordionExample">
                <div className="card-body bg-dark text-white div19s">
                    <p>Aspiring candidates with a Bachelor’s degree or Graduate Certificate in any discipline from a recognized university can apply for this program.</p>
                </div>
            </div>
        </div>
        <hr />

    
        <div className="card">
            <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseFour4" aria-expanded="false" aria-controls="collapseFour">
                    <h4><i>Do You Offer Placement Assistance?</i></h4>
                </a>
            </div>
            <div id="collapseFour4" className="collapse" data-bs-parent="#accordionExample">
                <div className="card-body bg-dark text-white div19s">
                    <p>Yes, our Virtual Job Fair at Amity University Online offers comprehensive placement assistance. It's a unique digital platform connecting various recruiters across disciplines.</p>
                </div>
            </div>
        </div>
        <hr />

    
        <div className="card">
            <div className="card-header">
                <a className="btn" data-bs-toggle="collapse" href="#collapseFive5" aria-expanded="false" aria-controls="collapseFive">
                    <h4><i>How Are The Exams Conducted In Online Mode?</i></h4>
                </a>
            </div>
            <div id="collapseFive5" className="collapse" data-bs-parent="#accordionExample">
                <div className="card-body bg-dark text-white div19s">
                    <p>Examinations are conducted through the Online Technology Enabled Proctored mode. The exam pattern comprises internal and external assessments, with a weightage of 30% for internal assignments and 70% for end-term exams, including subjective, case studies, and MCQs.</p>
                </div>
            </div>
        </div>
    </div>
</div> */}

{/* close */}
{/* <div className="card">
    <div className="card-header">
        <a className="btn tooltip-container" href="#">
            <h4><i>Do You Offer Placement Assistance?</i></h4>
            <span className="tooltip-text">Yes, our Virtual Job Fair at Amity University Online offers comprehensive placement assistance. It's a unique digital platform connecting various recruiters across disciplines.</span>
        </a>
    </div>
</div>
<hr />

<div className="card">
    <div className="card-header">
        <a className="btn tooltip-container" href="#">
            <h4><i>How Are The Exams Conducted In Online Mode?</i></h4>
            <span className="tooltip-text">Examinations are conducted through the Online Technology Enabled Proctored mode. The exam pattern comprises internal and external assessments, with a weightage of 30% for internal assignments and 70% for end-term exams, including subjective, case studies, and MCQs.</span>
        </a>
    </div>
</div> */}

<div className="mt-5 div19">
    <h1 className="mt-5 mx-5 div19h1">Frequently Asked Questions</h1>
    
    <div className="accordion" id="accordionExample">
        <div className="card">
            <div className="card-header tooltip-container"> 
                <a className="btn" data-bs-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h4><i>What Is Our BBA degree at Amity Online all about?</i></h4>
                </a>
                <span className="tooltip-text">Tooltip on the right</span>
            </div>
            <div id="collapseOne" className="collapse" data-bs-parent="#accordionExample">
                <div className="card-body bg-dark text-white div19s">
                    <p>Our program offers a comprehensive business management perspective, encompassing contemporary tools and decision-making skills. Amity's Online MBA stands as India's sole online MBA program.</p>
                </div>
            </div>
        </div>
        {/* <!-- Repeat for other FAQ items --> */}
    </div>
</div>



        </div>
    )
}
export default Try;