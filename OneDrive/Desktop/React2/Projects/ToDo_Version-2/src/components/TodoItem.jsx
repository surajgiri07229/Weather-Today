  function TodoItem({todoDate, todoName}) {

  return (
    <div  className="mytasks">
      <div  className="row kg-row">
        <div  className="col-4">{todoName}</div>
        <div  className="col-4">{todoDate}</div>
        <div  className="col-2">
          <button type="button"  className="btn btn-danger kg-button">
            <i  className="fa fa-trash" id="delete-icon"></i> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;