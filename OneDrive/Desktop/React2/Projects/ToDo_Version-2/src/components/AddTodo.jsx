function AddTodo() {
  return (
    <div  className="row kg-row">
      <div  className="col-4">
        <input type="text" placeholder="Enter Your ToDo" />
      </div>
      <div  className="col-4">
        <input type="date" />
      </div>
      <div  className="col-2">
        <button type="button"  className="btn btn-success kg-button">
          <i  className="fa fa-plus-circle"></i> ADD
        </button>
      </div>
    </div>
  );
}

export default AddTodo;