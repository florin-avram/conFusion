import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
        }

    }

    render() {
        const dish = this.props.selectedDish;
        if (dish == null) {
            return (<div></div>);
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-12 m-1">
                        {this.renderDish(dish)}
                    </div>
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        )
    }

    renderDish(dish) {
        if (dish == null) {
            return (<div></div>);
        }
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    renderComments(comments) {
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
}

export default DishDetail;