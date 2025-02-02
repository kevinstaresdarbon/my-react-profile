import React from 'react'

function Project(props) {

    function styleObjMain(isFeatured) {
        if (isFeatured) {
            return ({ minHeight: '34rem', maxHeight: '34rem' })
        } else {
            return ({ minHeight: '27rem', maxHeight: '27rem' })
        }
    }

    function styleObjImg(isFeatured) {
        if (isFeatured) {
            return ({ minHeight: '19rem', maxHeight: '19rem' })
        } else {
            return ({ minHeight: '13rem', maxHeight: '13rem' })
        }
    }

    return (
        <div className="d-flex flex-column justify-content-around align-items-center h-100" style={styleObjMain(props.isFeatured)} >
            <h2 className="fs-4 fw-bold">{props.overlayTitle}</h2>
            <a href={props.link} target="_blank" className="h-50">
                <div className="card text-center w-100 shadow-effect">
                    <img src={props.img} className="card-img profile-style" alt={props.imgAlt}
                    style={styleObjImg(props.isFeatured)} 
                        />
                    <div
                        className="card-img-overlay p-2 m-2 d-flex flex-column justify-content-center mt-auto custom-bg">
                        <h5 className="card-title w-100 fw-bold"> {props.overlayTitle} </h5>
                        <p className="card-text w-100 fw-bold"> {props.overlayContent} </p>
                    </div>
                </div>
            </a>
            <a href={props.git} target="_blank" className="w-75 d-flex justify-content-center text-decoration-none">
               <button type="button" className="p-2 mt-1 shadow-effect fs-5"> Click here for the {props.overlayTitle} repository</button>
            </a>
        </div>
    )
}

export default Project;