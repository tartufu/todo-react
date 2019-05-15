class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.submitHandler = this.submitHandler.bind( this );
  }

  state = {
    list : ["hahahah", "hehehehehe", "hohohohoho"],
    word : ""
  }

  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
  }

    submitHandler(event) {
        console.log("word", this.state.word);
        console.log("list", this.state.list);
        let updatedList = this.state.list;
        updatedList.push(this.state.word);
        console.log(updatedList)
        this.setState({list: updatedList});
    }

  render() {
      // render the list with a map() here

      let listItems = this.state.list.map( (item) => {
        return <p> {item} </p>
      })

      console.log("rendering");
      return (
        <div className="list">
          <input onChange={this.changeHandler}  value={this.state.word}/>
          <button onClick={this.submitHandler}>add item</button>
          <p> {listItems} </p>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);