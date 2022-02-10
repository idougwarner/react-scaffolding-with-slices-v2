import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik, FormikHelpers } from 'formik';
import { signupValidation } from '@/validations';
import Label from '@/components/core/Label';
import Input from '@/components/core/FieldInput/FieldInput';
import Button from '@/components/core/Button';
import { signupService } from '@/services/user/signup.service';
import { setToken, setUser } from '@/store/user';
import { StylesFormStyles } from './index.styles';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm = () => {
  const dispatch = useDispatch();

  /**
   * Submit form handler.
   * @param values user object
   * @param param1 formik helper
   */
  const onFormSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    setSubmitting(true);
    signupService(values).then((res) => {
      setSubmitting(false);
      dispatch(setToken(res.token));
      dispatch(
        setUser({
          email: values.email,
          name: values.firstName + values.lastName,
        })
      );
    });
  };

  return (
    <StylesFormStyles>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={signupValidation}
        onSubmit={onFormSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" name="firstName" placeholder="John" className="mb-3" />
            {errors.firstName && touched.firstName ? <div className="text-red-500">{errors.firstName}</div> : null}
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" name="lastName" placeholder="Doe" className="mb-3" />
            {errors.lastName && touched.lastName ? <div className="text-red-500">{errors.lastName}</div> : null}
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="john@acme.com" type="email" className="mb-3" />
            {errors.email && touched.email ? <div className="text-red-500">{errors.email}</div> : null}
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" placeholder="Enter Password" type="password" className="mb-3" />
            {errors.password && touched.password ? <div className="text-red-500">{errors.password}</div> : null}
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your Password"
              type="password"
              className="mb-3"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div className="text-red-500">{errors.confirmPassword}</div>
            ) : null}
            <Button className="btn" disabled={Object.keys(errors).length > 0} type="submit">
              Continue
            </Button>
          </Form>
        )}
      </Formik>
    </StylesFormStyles>
  );
};

export default SignupForm;
