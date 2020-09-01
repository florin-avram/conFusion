import React from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom'

const DishDetail = (props) => {
    const dish = props.dish;
    if (dish == null) {
        return (<div></div>);
    }
    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/menu'>Menu</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>
            <div className="row">
                <RenderDish dish = {props.dish} />
                <RenderComments comments={props.comments} />
            </div>
        </div>
    )
}

function RenderDish({dish}) {
    if (dish == null) {
        return (<div></div>);
    }
    return (
        <div className="col-md-5 col-sm-12 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderComments({comments}) {
    if (comments == null) {
        return (<div></div>);
    }
    const commentsDOM = comments.map((comment) => {
        return (
            <li key={comment.id}>
                <p> {comment.comment} </p>
                <p> -- {comment.author},
                    &nbsp; 
                    {
                        new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(comment.date))
                    } 
                </p>
            </li>
        )
    }) 
    return (
        <div className="col-md-5 col-sm-12 m-1">
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {commentsDOM}
            </ul>
        </div>
    )

}

export default DishDetail;