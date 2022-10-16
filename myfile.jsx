import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ContactList.css';

import { ContactService } from '../../../services/ContactService';
import Spinner from '../../Spinner/Spinner';

let ContactList = () => {

                    let [state,
                                        setState] = useState({
                                                            loading: false, //to show delay
                                                            contacts: [],
                                                            errorMessage: ''
                                        });

                    useEffect(() => {
                                        async function fetchData() {
                                                            try {
                                                                                setState(state => ({
                                                                                                    ...state, loading: true
                                                                                }));
                                                                                let response = await ContactService.getAllContacts();

                                                                                // console.log(response.data);
                                                                                setState(state => ({
                                                                                                    ...state,
                                                                                                    loading: false,
                                                                                                    contacts: response.data
                                                                                }));
                                                            }

                                                            catch (error) {
                                                                                setState(state => ({
                                                                                                    ...state,
                                                                                                    loading: false,
                                                                                                    errorMessage: error.message
                                                                                }));
                                                            }
                                        }

                                        fetchData();
                    }

                                        , []);

                    let {
                                        loading,
                                        contacts,
                                        errorMessage
                    }

                                        = state;
                    console.log(loading, errorMessage);

                    return (<> {
                                        /* <pre>{JSON.stringify(contacts)}</pre> */
                    }

                                        <section className='contact search p-3' > <div className='container' > <div className='grid' > <div className='row' > <div className='col' > <p className='h3' > Contact Manager <Link to={
                                                            '/contacts/add'
                                        }

                                                            className='btn btn-primary ms-2' > <i className='fa fa-plus-circle me-2' /> New </Link> </p> <p className='fst-italic  ' >this is an contact Manager</p> </div> </div> <div className='row' > <div className='col-md-6' > <form className='row' > <div className="col" > <div className='mb-2' > <input type="text" className='form-control' placeholder='Search Names' /> </div> </div> <div className="col" > <div className='mb-2' > <input type="submit" className='btn btn-outline-dark' value='Search' /> </div> </div> </form> </div> </div> </div> </div> </section> {
                                                            loading ? <Spinner /> : <> <section className='contact-list' > <div className="container" > <div className="row" > {
                                                                                contacts.length > 0 && contacts.map(contacts => {
                                                                                                    return (<div className="col-md-" > <div className="card my-1" > <div className="card-body" > <div className="row" > <div className="col-md-2" > <img src={
                                                                                                                        contacts.photo
                                                                                                    }

                                                                                                                        alt='' className='contact-img' /> </div> <div className='col-md-7' > <ul className='list-group' > <li className='list-group-item list-group-item-action' > Name : <span className='fw-bold' > {
                                                                                                                                            contacts.name
                                                                                                                        }

                                                                                                                        </span> </li> <li className='list-group-item list-group-item-action' > Mobile : <span className='fw-bold' > {
                                                                                                                                            contacts.mobile
                                                                                                                        }
                                                                                                                        </span> </li> {
                                                                                                                                                                /* <li className='list-group-item list-group-item-action'>
                                                                                                                                                                                        Email : <span className='fw-bold'>{contacts.email}</span>
                                                                                                                                                                                      </li> */
                                                                                                                                            }

                                                                                                                        </ul> </div> <div className='col-md-2 p-4 ' > <Link to={
                                                                                                                                            `/contacts/view/${contacts.id}`
                                                                                                                        }

                                                                                                                                            className='btn btn-warning my-1' > <i className='fa fa-eye' ></i> </Link> <Link to={
                                                                                                                                                                `/contacts/edit/${contacts.id}`
                                                                                                                                            }

                                                                                                                                                                className='btn btn-primary my-1' > <i className='fa fa-pen' ></i> </Link> <button className='btn btn-danger my-1' > <i className='fa fa-trash' ></i> </button> </div> </div> </div> </div> </div>)
                                                                                })
                                                            }

                                                            </div> </div> </section> </>
                                        }

                    </>)
}

export default ContactList