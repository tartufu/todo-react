class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.submitHandler = this.submitHandler.bind( this );
    this.removeHandler = this.removeHandler.bind( this );
  }

  state = {
    list : ["hahahah", "hehehehehe", "hohohohoho"],
    word : ""
  }

  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);

    if (this.state.word.length < 5 && this.state.word.length < 200) {
        document.getElementById("error").innerHTML = "ERRORRR, 5 Chars or Moreeee"
        console.log("ASFAFASFASF");
    } else {
        document.getElementById("error").innerHTML = "";
    }
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
      // render the list with a map() here

      let listItems = this.state.list.map( (item, index) => {
        return <div style={{display:"flex"}}>
        <p> {item} </p>
        <button onClick={()=>this.removeHandler(index)}> you touch my tralala </button>
        <br/><br/>
        </div>
      })

      console.log("rendering");
      return (
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word}/>
          <button onClick={this.submitHandler}> add item </button>
          <h3 id="error"> </h3>
          <div>
          <p > {listItems} </p>
          </div>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);