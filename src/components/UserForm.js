import { Container, Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Don't forget @").required("Put here your email"),
      password: Yup.string()
        .required("You need a password")
        .oneOf([Yup.ref("confirmPassword")], "Must be the same password"),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password")]),
    }),
    onSubmit: (formData) => {
      console.log(formData);
    }
  })

  return (
    <Container
      style={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <h1>Register Form</h1>

      <Form onSubmit={ formik.handleSubmit } style={{ width: "30%" }}>
        <Form.Input
          onChange={ formik.handleChange }
          error={ formik.errors.email }
          type="text"
          placeholder="Email"
          name="email"
        />
        <Form.Input
          onChange={ formik.handleChange }
          error={ formik.errors.password }
          type="password"
          placeholder="Password"
          name="password"
        />
        <Form.Input
          onChange={ formik.handleChange }
          error={ formik.errors.confirmPassword && true }
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
        />

        <Button type="submit">Register</Button>
      </Form>
    </Container>
  )
}

export default UserForm
