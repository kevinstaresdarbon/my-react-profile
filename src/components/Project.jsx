import React from 'react'

function Project(props) {

    function styleObj(isFeatured) {
        if (isFeatured) {
            return ({ minHeight: '24rem', maxHeight: '24rem' })
        } else {
            return ({ minHeight: '14rem', maxHeight: '14rem' })
        }
    }

    return (
        <div className="d-flex flex-column justify-content-around">
            <a href={props.link} target="_blank" className="h-75">
                <div className="card text-center h-75 w-100 shadow-effect">
                    <img src={props.img} className="card-img profile-style" alt={props.imgAlt}
                        style={styleObj(props.isFeatured)} />
                    <div
                        className="card-img-overlay p-2 d-flex flex-column justify-content-center mt-auto custom-bg">
                        <h5 className="card-title w-100 fw-bold"> {props.overlayTitle} </h5>
                        <p className="card-text w-100 fw-bold"> {props.overlayContent} </p>
                    </div>
                </div>
            </a>
            <a href={props.git} target="_blank">
               <button type="button" className="p-3 shadow-effect w-100"> Click here for the repository</button>
            </a>
        </div>
    )
}

export default Project;