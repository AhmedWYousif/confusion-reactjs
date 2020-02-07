
import React from 'react';
import { Card, CardImg,CardText, CardBody, CardTitle } from 'reactstrap';



function RenderDish({ dish }) {

    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}


function RenderComments({ comments }) {
    if (comments != null)
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map(comment => <li key={comment.id} >{comment.comment}<br />-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}</li>)}
                </ul>
            </div>

        );
    else
        return (
            <div></div>
        );
    //Each comment should be displayed on two lines, the first one showing the comment, and the second line showing the comment author's name and the date.

}



const DishDetail = ({ dish }) => {

    if (dish != null)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish} />
                    </div >
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={dish.comments} />
                    </div >
                </div>
            </div >
        );
    else
        return (
            <div></div >
        );
}

export default DishDetail;