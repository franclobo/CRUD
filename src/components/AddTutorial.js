import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTutorial } from '../actions/tutorials';

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    publiched: false,
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };
  const saveTutorial = () => {
    const { title, description } = tutorial;
    dispatch(createTutorial(title, description))
      .then((data) => {
        setTutorial({
          id: data.id,
          title: data.title,
          description: data.description,
          publiched: data.publiched,
        });
        setSubmitted(true);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    };
    const newtutorial = () => {
      setTutorial(initialTutorialState);
      setSubmitted(false);
    };
    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newtutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                required
                value={tutorial.title}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn btn-success" onClick={saveTutorial}>
              Submit
            </button>
          </div>
        )}
      </div>
    );
  };
  export default AddTutorial;