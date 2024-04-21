import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
export function TodoComponent() {
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const { id } = useParams();
  const authContext = useAuth();
  const navigate = useNavigate();
  const username = authContext.username;
  if (id != -1) {
    useEffect(() => {
      axios
        .get(`http://localhost:8080/users/${username}/todos/${id}`)
        .then((response) => {
          setDescription(response.data.description);
          setTargetDate(response.data.targetDate);
        });
    }, [id]);
  }

  function handleSubmit(values) {
    const todo = {
      id: id,
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: false,
    };
    if (id == -1) {
      axios
        .post(`http://localhost:8080/users/${username}/todos`, todo)
        .then((response) => {
          console.log("Todo created successfully:", response.data);

          navigate("/todos");
        })
        .catch((error) => {
          console.error("Error creating todo:", error);
        });
    } else {
      axios
        .put(`http://localhost:8080/users/${username}/todos/${id}`, todo)
        .then((response) => {
          console.log("Todo saved successfully:", response.data);

          navigate("/todos");
        })
        .catch((error) => {
          console.error("Error saving todo:", error);
        });
    }
  }

  function handleValidate(values) {
    let errors = {};
    if (values.description.length < 5) {
      errors.description = "Please Enter atleast 5 chars";
    }
    if (values.targetDate == null) {
      errors.targetDate = "Enter date";
    }
    return errors;
  }
  return (
    <div className="container">
      <h1>Enter Todo Details</h1>

      <Formik
        className="w-25"
        initialValues={{ description, targetDate }}
        enableReinitialize
        onSubmit={handleSubmit}
        validate={handleValidate}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {(props) => (
          <Form>
            <ErrorMessage
              name="description"
              component="div"
              className="alert alert-warning"
            />
            <ErrorMessage
              name="targetDate"
              component="div"
              className="alert alert-warning"
            />
            <fieldset>
              <label className="form-label mt-3">Description</label>
              <Field type="text" className="form-control" name="description" />
            </fieldset>
            <fieldset>
              <label className="form-label mt-3">Target Date</label>
              <Field type="date" className="form-control" name="targetDate" />
            </fieldset>
            <div className="mt-4 d-flex justify-content-center">
              <button className="btn btn-warning w-25" type="submit">
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
