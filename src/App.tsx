import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

function App() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                fatherfirstName : '',
                fatherlastName : ''
            }}
            validationSchema={Yup.object().shape({
                firstName: Yup.string()
                    .required('First Name is required'),
                fatherlastName: Yup.string()
                .required('Father Last Name is required'),
                lastName: Yup.string()
                    .required('Last Name is required'),
                fatherfirstName: Yup.string()
                .required('Father First Name is required'),
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                phone: Yup.string()
                .required("rPhone is equired")
                .matches(phoneRegExp, 'Phone number is not valid')
                .min(10, "Phone is incmplete")
                .max(11, "Invalid Phone")
            })}
            onSubmit={fields => {
                alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
            }}
            render={({ errors, status, touched }) => (
                <Form>
                    <div className="row">
                        <div className="col-md-12">
                            <h5>Personal Information</h5>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mr-10 form-group">
                            <label htmlFor="firstName">First Name<span className="ml-1" style={{color : 'red',}}>*</span></label>
                            <Field name="firstName" placeholder="Enter First Name" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="lastName">Last Name<span className="ml-1" style={{color : 'red',}}>*</span></label>
                            <Field name="lastName" type="text" placeholder="Enter Last Name" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mr-10 form-group">
                            <label htmlFor="email">Email<span className="ml-1" style={{color : 'red',}}>*</span></label>
                            <Field name="email" type="text" placeholder="Enter Email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone">Phone<span className="ml-1" style={{color : 'red',}}>*</span></label>
                            <Field name="phone" type="number" placeholder="Enter Phone Number" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
                            <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="form-contact-country">Gender</label>
                                <select name="gender">
                                    <option value="" disabled hidden selected>Select Gender</option>
                                    <option>Hello</option>
                                    <option>world</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <h5>Parents Information</h5>
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mr-10 form-group">
                            <label htmlFor="fatherfirstName">Father First Name<span className="ml-1" style={{color : 'red',}}>*</span></label>
                            <Field name="fatherfirstName" placeholder="Enter Father First Name" type="text" className={'form-control' + (errors.fatherfirstName && touched.fatherfirstName ? ' is-invalid' : '')} />
                            <ErrorMessage name="fatherfirstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="fatherlastName">Father Last Name<span className="ml-1" style={{color : 'red',}}>*</span></label>
                            <Field name="fatherlastName" type="text" placeholder="Enter Father Last Name" className={'form-control' + (errors.fatherlastName && touched.fatherlastName ? ' is-invalid' : '')} />
                            <ErrorMessage name="fatherlastName" component="div" className="invalid-feedback" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mr-10 form-group">
                            <label htmlFor="firstName">Mother First Name</label>
                            <Field name="firstName" type="text" placeholder="Enter Mother First Name" className={'form-control'} />
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="lastName">Mother Last Name</label>
                            <Field name="lastName" type="text" placeholder="Enter Mother Last Name" className={'form-control'} />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <h5>Last Education Information</h5>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mr-10 form-group">
                            <label htmlFor="class">Class</label>
                            <Field name="class" placeholder="Enter Class" type="text" className={'form-control'} />
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="grade">Grade</label>
                            <Field name="grade" placeholder="Enter Grade" type="text" className={'form-control'} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mr-10 form-group">
                            <label htmlFor="instituition">Institute</label>
                            <Field name="instituition"  placeholder="Enter Last Institute" type="text" className={'form-control'} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mr-10 form-group">
                            <label htmlFor="yop">Year of passing</label>
                            <Field name="yop" type="text"  placeholder="Enter Passing Year"className={'form-control'} />
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="duration">Duration</label>
                            <Field name="duration" type="text"  placeholder="Enter Duration" className={'form-control'} />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary submit-button">Register</button>
                    </div>
                </Form>
            )}
        />
    )
}
export default App;
