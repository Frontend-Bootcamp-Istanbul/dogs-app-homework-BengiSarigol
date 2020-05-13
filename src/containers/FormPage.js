import React from 'react';
import { Col, Row, ButtonToggle, Form, FormGroup, Label, Input,FormFeedback } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is a required field"),
  lastname: Yup.string().required("Last name is a required field"),
  email: Yup.string().required('Email is a required field'),
  url: Yup.string().required('Please enter a Url')

});



const FormPage = (props) => {
  return(
  <div>
    <Formik
      initialValues={{
        lastname:'',
        firstname:'',
        email: '',
        number:'',
        company:'',
        url:''
       
      }}
  

      validationSchema={SignupSchema}
      onSubmit={(values,{resetForm} )=> {
        resetForm({});
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        validateForm,
        validateField,
        handleChange,
        resetForm,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit} >
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label >First Name</Label>
                <Input  name="firstname"   value={values.firstname} onChange={handleChange}
                invalid={errors.firstname}   />
                {
                    errors.firstname && <FormFeedback>{errors.firstname}</FormFeedback>
                }
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Last Name</Label>
                <Input name="lastname" id="lastname" value={values.lastname} onChange={handleChange}
                invalid={errors.lastname}   />
                {
                    errors.firstname && <FormFeedback>{errors.lastname}</FormFeedback>
                }
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label >Company</Label>
                <Input name="company" id="company"/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Phone Number</Label>
                <Input  type="number" name="number"  />
                
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email"value={values.email}  onChange={handleChange} invalid={errors.email}
            />
               {
                 errors.email && <FormFeedback>{errors.email}</FormFeedback>
               }
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label >Your Website</Label>
                <Input type="url" name="url"  value={values.url}  onChange={handleChange} invalid={errors.url}
            />
                {
                    errors.url && <FormFeedback>{errors.url}</FormFeedback>
                }
              </FormGroup>
            </Col>
            </Row>

            <FormGroup tag="fieldset">
        <h6>When is the best time of day to reach you?</h6>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           Morning
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
           Evening
          </Label>
        </FormGroup>
      </FormGroup>
           
      <h6>Would you like to recieve our email newsletter?</h6>
          <FormGroup check>
            
            <Input type="checkbox" name="check" id="exampleCheck"/>
            <Label for="exampleCheck" check>Sure</Label>
          </FormGroup>
          <ButtonToggle color="info" type="submit"  disabled={isSubmitting}
          onClick={() => !errors ? alert("Form gönderildi.") : alert("Lütfen zorunlu alanları doldurun")}> Submit </ButtonToggle>{' '}
        </Form>
      )}
      </Formik>
     </div>
     )
    };



export default FormPage;