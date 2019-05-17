class ToDoApp extends React.Component {

    constructor(props) {
        super(props)
        this.submitHandler = this.submitHandler.bind( this );
        this.changeHandler = this.changeHandler.bind( this );
        this.removeHandler = this.removeHandler.bind( this );

        this.state = {
            list : ["hahahah", "hehehehehe", "hohohohoho"],
            word : ""
        }
    }


  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);

    // if (this.state.word.length < 5 && this.state.word.length < 200) {
    //     document.getElementById("error").innerHTML = "ERRORRR, 5 Chars or Moreeee"
    //     console.log("ASFAFASFASF");
    // } else {
    //     document.getElementById("error").innerHTML = "";
    // }
  }

    submitHandler(event) {
        console.log("word", this.state.word);
        console.log("list", this.state.list);
        let updatedList = this.state.list;
        updatedList.push(this.state.word);
        console.log(updatedList)
        this.setState({list: updatedList});
    }

    removeHandler(index) {
        let updatedList = this.state.list;
        updatedList.splice(index,1);
        // console.log(updatedList);
        this.setState({list: updatedList});
    }


    render() {

        let list = this.state.list
        let word = this.state.word

        return(
        <React.Fragment>
         <Form onSubmit={this.submitHandler} change={this.changeHandler}/>
         <ItemList list={list} remove={this.removeHandler}/>
         <DeletedItems />
        </React.Fragment>
        );
    }
}

class Form extends React.Component {
    render() {
        return (
            <form action="#">
            <label> To Do </label>
            <br/>
            <input type="text" onChange={this.props.change}/>
            <button type="submit" onClick={this.props.onSubmit}> Submit </button>
            </form>
        )
    }
}

class ItemList extends React.Component {
    render() {

        let list = this.props.list
        return (
            <ul>
            <ToDoItem list={list} remove={this.props.remove}/>
            </ul>
        );
    }
}

class ToDoItem extends React.Component {
    render() {

        let listItem = this.props.list.map( (item) => {
            return(
                <React.Fragment>
                <li> {item}</li>
                <button onClick={this.props.remove}> Remove </button>
                </React.Fragment>
            )
        })

        return(
            <React.Fragment>
                {listItem}
            </React.Fragment>
        )
    }
}

class DeletedItems extends React.Component {
    render() {
        return (
            <React.Fragment>
              <h1> Deleted Item 1 </h1>
              <h1> Deleted Item 2 </h1>
            </React.Fragment>
        )
    }
}



ReactDOM.render(<ToDoApp />, document.getElementById('root'))