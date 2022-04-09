import React from 'react'

export default function Program() {

  let f = 0;
  class Graph {
    constructor(noOfVertices) {
      this.noOfVertices = noOfVertices;
      this.AdjList = new Map();
    }
    addNode = (v) => {
      // console.log(v);
      this.AdjList.set(v, []);
    }
    addEdge = (v, w) => {
      // console.log(v)
      // console.log(w)
      this.AdjList.get(v).push(w);
      this.AdjList.get(w).push(v);
    }
    dfs(startingNode, endingNode, stack) {
      var visited = {};
      this.DFSUtil(startingNode, visited, endingNode, stack);
    }
    DFSUtil(vert, visited, endingNode, stack) {
      stack.push(vert)
      if (f == 0 && vert == endingNode) {
        f = 1;
        let ans = ''
        for (let i = 0; i < stack.length - 1; i++) {
          console.log(stack[i])
          ans += stack[i];
          ans += " > "
        }
        ans += stack[stack.length - 1]
        console.log(ans)
        document.getElementById('result').innerHTML = `The relation between the two people is :- ${ans}`
        return
      }
      visited[vert] = true;
      var get_neighbours = this.AdjList.get(vert);
      for (var i in get_neighbours) {
        var get_elem = get_neighbours[i];
        if (!visited[get_elem])
          this.DFSUtil(get_elem, visited, endingNode, stack);
      }
      stack.pop()
    }
  }
  let g = new Graph();

  const Add = () => {
    let text = document.getElementById('messageInp')
    g.addNode(text.value);
    text.value = '';
  }
  const Connect = () => {
    let text1 = document.getElementById('messageInp1')
    let text2 = document.getElementById('messageInp2')
    g.addEdge(text1.value, text2.value)
    text1.value = ''
    text2.value = ''
  }
  const Show = () => {
    let text1 = document.getElementById('messageInp3')
    let text2 = document.getElementById('messageInp4')
    let stack = [];
    f = 0;
    g.dfs(text1.value, text2.value, stack)

    text1.value = ''
    text2.value = ''
  }
  return (


    <div className="continer-fluid text-center">

      <div className="container my-5">
        <h1>Add People to the network !</h1>
        <h4>Enter the name of the person to be added :- </h4>
        <input type="text" name="messageInp" id="messageInp" />
        <button className="btn btn-dark mx-2" onClick={Add}>Add</button>
      </div>

      <div className="container my-5">
        <h1>Add Relationship between two people !</h1>
        <h4>Enter the name of Person 1 :- </h4>
        <input type="text" name="messageInp1" id="messageInp1" />
        <h4>Enter the name of Person 2 :- </h4>
        <input type="text" name="messageInp2" id="messageInp2" /><br />
        <button className="btn btn-dark m-3" onClick={Connect}>Make friend !</button>
      </div>

      <div className="container mt-5">
        <h1>Show Relationship between two people !</h1>
        <h4>Enter the name of Person 1 :- </h4>
        <input type="text" name="messageInp" id="messageInp3" />
        <h4>Enter the name of Person 2 :- </h4>
        <input type="text" name="messageInp" id="messageInp4" /><br />
        <button className="btn btn-dark m-3" onClick={Show}>Show Relationship!</button>
      </div>

      <div className="container-fluid text-center my-3">
        <h1 id="result"></h1>
      </div>
    </div>

  )
}
