import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import * as Yup from 'yup';
import { getSchoolData, getStudentData, updateData } from './duck/opertaions';


export const UpdateFormComponent = () => {
    const navigate = useNavigate();
    const [school, setSchool] = useState<any>({});
    const [student, setStudent] = useState<any>({});
    const [initialValues, setInitialValues] = useState<any>('');
    const { schoolPrefix } = useParams();
    const { studentID } = useParams();
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    useEffect(()=>{
        getSchoolData(schoolPrefix).then((res: any) => {
            if (res.success) {
                setSchool(res.data);
            }
        });
    },[schoolPrefix]) 
    useEffect(()=>{
        getStudentData(schoolPrefix,studentID).then((res: any) => {
            if (res.success) {
                setStudent(res.data);
                setInitialValues({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.emailAddress,
                    gender: res.data.sex,
                    phone: res.data.phoneNumber,
                    fatherFirstName: res.data.fatherFirstName,
                    fatherLastName: res.data.fatherLastName,
                    motherfirstName: res.data.motherFirstName,
                    motherlastName: res.data.motherLastName,
                    instituition: res.data.lastEducation.institute,
                    yop: res.data.lastEducation.yearOfPassing,
                    duration: res.data.lastEducation.duration,
                    grade: res.data.lastEducation.grade,
                    class: res.data.lastEducation.classAttended,
                })
            }
        });
    },[schoolPrefix,studentID]) 
    return (
    <>
    <img src={school.logo} alt="logo" className="logo-img" />
    <span className="school-name">{school.name}</span>
    <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          validationSchema={Yup.object().shape({
              firstName: Yup.string()
                  .required('First Name is required'),
              fatherLastName: Yup.string()
                  .required('Father Last Name is required'),
              lastName: Yup.string()
                  .required('Last Name is required'),
              fatherFirstName: Yup.string()
                  .required('Father First Name is required'),
              email: Yup.string()
                  .email('Email is invalid')
                  .required('Email is required'),
              phone: Yup.string()
                  .required("Phone Number is required")
                  .matches(phoneRegExp, 'Phone number is not valid')
                  .min(10, "Phone is incomplete")
                  .max(11, "Invalid Phone")
          })}
          onSubmit={(fields: any) => {
              let data = {
                  firstName: fields.firstName,
                  lastName: fields.lastName,
                  emailAddress: fields.email,
                  phoneNumber: fields.phone,
                  sex: fields.gender,
                  fatherFirstName: fields.fatherFirstName,
                  fatherLastName: fields.fatherLastName,
                  motherFirstName: fields.motherfirstName,
                  motherLastName: fields.motherlastName,
                  lastEducation: {
                      institute: fields.instituition,
                      yearOfPassing: fields.yop,
                      duration: fields.duration,
                      grade: fields.grade,
                      classAttended: fields.class,
                  }
              };
              updateData(schoolPrefix,studentID,data).then((res: any) => {
                  console.log(res);
                  if (res.success) {
                    navigate('/success/updated')
                  }
              });
          } }
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
                          <label htmlFor="firstName">First Name<span className="ml-1" style={{ color: 'red', }}>*</span></label>
                          <Field name="firstName" placeholder="Enter First Name" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                          <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                      </div>
                      <div className="col-md-6 form-group">
                          <label htmlFor="lastName">Last Name<span className="ml-1" style={{ color: 'red', }}>*</span></label>
                          <Field name="lastName" type="text" placeholder="Enter Last Name" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                          <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6 mr-10 form-group">
                          <label htmlFor="email">Email<span className="ml-1" style={{ color: 'red', }}>*</span></label>
                          <Field name="email" type="text" placeholder="Enter Email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                          <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </div>
                      <div className="col-md-6">
                          <label htmlFor="phone">Phone<span className="ml-1" style={{ color: 'red', }}>*</span></label>
                          <Field name="phone" type="string" placeholder="Enter Phone Number" className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} />
                          <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6 col-sm-6">
                          <div className="form-group">
                              <label htmlFor="gender">Gender</label>
                              <Field as="select" name="gender">
                                  <option hidden={true}>Select Gender</option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                              </Field>
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
                          <label htmlFor="fatherFirstName">Father First Name<span className="ml-1" style={{ color: 'red', }}>*</span></label>
                          <Field name="fatherFirstName" placeholder="Enter Father First Name" type="text" className={'form-control' + (errors.fatherFirstName && touched.fatherFirstName ? ' is-invalid' : '')} />
                          <ErrorMessage name="fatherFirstName" component="div" className="invalid-feedback" />
                      </div>
                      <div className="col-md-6 form-group">
                          <label htmlFor="fatherLastName">Father Last Name<span className="ml-1" style={{ color: 'red', }}>*</span></label>
                          <Field name="fatherLastName" type="text" placeholder="Enter Father Last Name" value={student.fatherLastName} className={'form-control' + (errors.fatherLastName && touched.fatherLastName ? ' is-invalid' : '')} />
                          <ErrorMessage name="fatherLastName" component="div" className="invalid-feedback" />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6 mr-10 form-group">
                          <label htmlFor="motherfirstName">Mother First Name</label>
                          <Field name="motherfirstName" type="text" placeholder="Enter Mother First Name" className={'form-control'} />
                      </div>
                      <div className="col-md-6 form-group">
                          <label htmlFor="motherlastName">Mother Last Name</label>
                          <Field name="motherlastName" type="text" placeholder="Enter Mother Last Name" className={'form-control'} />
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
                          <Field name="instituition" placeholder="Enter Last Institute"  type="text" className={'form-control'} />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6 mr-10 form-group">
                          <label htmlFor="yop">Year of passing</label>
                          <Field name="yop" type="text" placeholder="Enter Passing Year" className={'form-control'} />
                      </div>
                      <div className="col-md-6 form-group">
                          <label htmlFor="duration">Duration</label>
                          <Field name="duration" type="text" placeholder="Enter Duration"  className={'form-control'} />
                      </div>
                  </div>
                  <div className="form-group">
                      <button type="submit" className="btn btn-primary submit-button">Update</button>
                  </div>
              </Form>
          )} /></>
  )
}
export default UpdateFormComponent;