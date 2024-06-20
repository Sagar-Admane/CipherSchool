import { useState } from "react";

const AddTask = () => {

    const [task, setTask] = useState({
        title : "",
        description : "",
    });

    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
    }

    let handleInputChange = (e) => {
        setTask({
            ...task, [e.target.name] : e.target.value,
        })
    }

  return (
    <>
    <h3 className="ui heading center">Add New Task</h3>
    <div className="ui form">
      <form onSubmit={onFormSubmit}>
        <div className="field">
          <label>Title</label>
          <input type="text" placeholder="Task Title" name="title" spellCheck={false} data-ms-editor={true} onChange={handleInputChange}/>
        </div>
        <div className="field">
          <label>Description</label>
          <textarea rows="2" placeholder="Task Description" name="description" onChange={handleInputChange} spellCheck={false} data-ms-editor={true}></textarea>
        </div>
        <button type="submit" className="ui primary button">Submit</button>
      </form>
    </div>
    </>
  );
};

export default AddTask;
