function TodoItem1() {
let todoName1 ='Study';
let todoDate1 ='30/05/2025';

  return (
    <div className="mytasks">
      <div class="row kg-row">
        <div class="col-4">{todoName1}</div>
        <div class="col-4">{todoDate1}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            <i class="fa fa-trash" id="delete-icon"></i> Delete
          </button>
        </div>
      </div>
    </div>
  );
}


export default TodoItem1;