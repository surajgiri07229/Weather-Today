function TodoItem2() {
  let todoName2 = "Buy Milk";
  let todoDate2 = "20/05/2025";
  return (
    <div class="row kg-row">
      <div class="col-4">{todoName2}</div>
      <div class="col-4">{todoDate2}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger kg-button">
          <i class="fa fa-trash" id="delete-icon"></i> Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem2;
