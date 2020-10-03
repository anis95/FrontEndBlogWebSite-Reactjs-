import React , {Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import {connect} from 'react-redux';
import * as Yup from 'yup';
import * as authActions from '../../store/actions/authActions';

const field = [
    {name : 'email', elementName: 'input', type: 'email', placeholder: ' Your email'},
    {name : 'password', elementName: 'input', type: 'password', placeholder: 'Your password'}
]

class Login extends Component{

    render(){
        return(
            <div className="login-page">
                <div className="container">
                    <div className="login-form">
                        <div className="row">
                            <h1>Login</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                         <form onSubmit={e => {
                             e.preventDefault();
                             this.props.login(this.props.values.email, this.props.values.password);
                         }}>
                            {
                                field.map((f,i) =>{
                                    return <Field 
                                           {...f} //passing all proporties of the field  
                                           key= {i}
                                           onChange = {this.props.handleChange}
                                           onBlur= {this.props.handleBlur}
                                           touched= {(this.props.touched[f.name])}
                                           value= {this.props.values[f.name]}
                                           name= {f.name}
                                           errors={this.props.errors[f.name]}
                                    
                                           />
                                })
                            }
                            <div className="col-md-12">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 const mapStateToProps = state => {
     return {
         auth: state.auth
     }
 }
 const mapDispatcheToProps = dispatch =>{
        return {
            login: (email, pass) => {
                dispatch(authActions.login(email, pass));
            }
        }
 }
export default connect (
    mapStateToProps,
    mapDispatcheToProps
)(withFormik({
 mapPropsToValues: () => ({
     email: '',
     password: ''
 }),
 validationSchema : Yup.object().shape({
     email : Yup.string().email('Email is invalid').required('You need to login with email adress'),
     password: Yup.string().required('You need to enter you password')
 }),
 handleSubmit : (values, {setSubmitting}) => {
     console.log('login attempts', values);
     //login(values.email, values.password);
 }
})(Login)); 