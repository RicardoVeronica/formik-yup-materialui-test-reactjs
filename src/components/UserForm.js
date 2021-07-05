import { Container, Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'

const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
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
          type="text"
          placeholder="Email"
          name="email"
        />
        <Form.Input
          onChange={ formik.handleChange }
          type="password"
          placeholder="Password"
          name="password"
        />
        <Form.Input
          onChange={ formik.handleChange }
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
