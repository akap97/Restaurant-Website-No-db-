import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, CardDeck
} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import '../App.css'



function RenderCard({ item, isLoading, errMess }) {

    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card raised className='cardHeight'>
            <CardImg src={item.image} alt={item.name} style={{height:'200px'}} />
                <CardBody>
                    <CardTitle><strong>{item.name}</strong></CardTitle>
                    {item.designation ? <div><CardSubtitle>{item.designation}</CardSubtitle><br/></div> : null}
                    <CardText><i>{item.description}</i></CardText>
                </CardBody>
            </Card>
            </FadeTransform>
        );

}

function Home(props) {
    return (
        <div className="container cardHeight">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}
                        isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess}
                    />
                </div>
                <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion} 
                isLoading={props.promoLoading}
                 errMess={props.promoErrMess} />
                </div>
                <div className="col-12 col-md m-1" >
                <RenderCard item={props.leader} 
                isLoading={props.leaderLoading}
                errMess={props.leaderErrMess}
                />
            </div>
            </div>
        </div>
    )
}


export default Home;
