import React, { Component } from 'react';
import {
    Navbar, Nav,NavItem,
    Button,Modal, ModalHeader, ModalBody,
     Label, Row,Col
} from 'reactstrap';

import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength =(len) => (val) => !(val) || (val.length <= len )
const minLength =(len) => (val) => (val) && (val.length >= len )


class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState(
            {
                isModalOpen: !this.state.isModalOpen
            }
        )
    }
    handleSubmit(values) {
      this.toggleModal();
      this.props.postComment(this.props.dishId,values.rating,values.author,values.comment)
    }

    render() {
        return (
            <React.Fragment>
                <Navbar light expand="md">
                    <div className="container">
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span className="fa fa-pencil fa-lg"> Submit Comment</span>
                                </Button>
                            </NavItem>
                        </Nav>

                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Subbmit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                        <Label htmlFor="ratings" md={2}>Ratings</Label>
                        <Col md={10}>
                        <Control.select model=".ratings" name="ratings"
                        className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>

                        </Control.select>
                                </Col>
                                </Row>
                        
                        <Row className="form-group">
                                <Label htmlFor="name" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{required,minLength:minLength(3), maxLength : maxLength(15)}}
                                        />
                                        <Errors 
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required : "required ",
                                            minLength:"Must be greater than 2 chars",
                                            maxLength:'must be 15 chars or less'
                                        }}
                                        />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comments</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        placeholder="Add your comments"
                                        rows="5"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>

                        </LocalForm>
                    </ModalBody>
                </Modal>


            </React.Fragment>
        )
    }

}
export default CommentForm;