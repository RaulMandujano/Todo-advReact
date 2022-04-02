import '../../src/index.css';

const Body = () => {
    
    return (
    
        <>
        <div class="inputField">
          <input type="text" placeholder="Enter new task" />
          <button> <i class="fas fa-plus"></i> </button>
        </div>

        <ul class="todoList">
          <li className='done'>Todo Item 1 (Done example)<span> <i class="fa fa-trash"></i></span></li>
          <li>Todo Item 2<span> <i class="fa fa-trash"></i></span></li>
        </ul>
        </>

    )
}

export default Body