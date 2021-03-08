import React, {
  Component
} from 'react';
import {
  Container, Form, FormGroup, FormFeedback, Label, Input, Button
} from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Section from './Section';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values, bags) {
    console.log(values, bags);
  }

  render() {
    return (
      <Section className="section-contact">
        <Container>
          <h2 className="title title-responsive text-white text-center">
            I want to
            <span className="font-weight-bold"> receive a quote</span>
          </h2>
          <div className="action-form">
            <Formik
              initialValues={{
                name: '',
                company_name: '',
                email_address: '',
                phone_number: '',
                comments: ''
              }}
              validationSchema={
                Yup.object().shape({
                  name: Yup.string().required('This field is required!'),
                  email_address: Yup.string().required('This field is required!')
                })
              }
              onSubmit={this.handleSubmit}
              render={({
                values,
                touched,
                errors,
                handleBlur,
                handleChange,
                handleSubmit
              }) => (
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Input
                      name="name"
                      id="name"
                      type="text"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      invalid={touched.name && !!errors.name}
                    />
                    <Label htmlFor="name">Your name</Label>
                    <FormFeedback>{errors.name}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      name="company_name"
                      id="company_name"
                      type="text"
                      value={values.company_name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <Label htmlFor="company_name">Your company name</Label>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      name="email_address"
                      id="email_address"
                      type="email"
                      value={values.email_address}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      invalid={touched.email_address && !!errors.email_address}
                    />
                    <Label htmlFor="email_address">Your email address</Label>
                    <FormFeedback>{errors.email_address}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      name="phone_number"
                      id="phone_number"
                      type="text"
                      value={values.phone_number}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <Label htmlFor="phone_number">Your phone number</Label>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      name="comments"
                      id="comments"
                      type="textarea"
                      placeholder=" "
                      rows={7}
                      value={values.comments}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <Label htmlFor="comments">Comments</Label>
                  </FormGroup>
                  <FormGroup className="text-center">
                    <Button
                      color="white"
                      type="submit"
                      style={{ width: 216 }}
                    >
                      Submit
                    </Button>
                  </FormGroup>
                </Form>
              )}
            />
          </div>
        </Container>
      </Section>
    );
  }
}

export default Contact;
