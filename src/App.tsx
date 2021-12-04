import React from "react";
import logo from "./logo.svg";
import "./App.css";
function App() {
  return (
    <div className="rectangle">
      <div className="rectangle-left">
        <h3>New Task</h3>
        <form className="new-task">
          <input
            className="add-new-task"
            type="text"
            placeholder="Add new task..."
          />
          <label className="description">
            Description
            <textarea cols={80} rows={8}></textarea>
          </label>
          <div className="date-piority">
            <label className="date">
              Due Date
              <input type="month" />
            </label>
            <label>
              Piority
              <select className="piority">
                <option> Nomal</option>
                <option> Low</option>
                <option> High</option>
              </select>
            </label>
          </div>
          <input className="add-form" type="submit" value="Add" />
        </form>
      </div>
      <div className="rectangle-right">
        <h3>To Do List</h3>
        <div className="todolist">
          <input className="search" type="search" placeholder="Search" />
          <div className="container-homework">
            <div className="homework">
              <div className="dohomework-left">
                <label>
                  <input type="checkbox" />
                  Do home work
                </label>
              </div>
              <div className="dohomework-bnt">
                <a href="">Detail</a>
                <a href="">Remove</a>
              </div>
            </div>

            <div className="container-dohomework">
              <form className="new-task">
                <input
                  className="add-new-task"
                  type="text"
                  placeholder="Add new task..."
                />
                <label className="description">
                  Description
                  <textarea cols={80} rows={8}></textarea>
                </label>
                <div className="date-piority">
                  <label className="date">
                    Due Date
                    <input type="month" />
                  </label>
                  <label>
                    Piority
                    <select className="piority">
                      <option> Nomal</option>
                      <option> Low</option>
                      <option> High</option>
                    </select>
                  </label>
                </div>
                <input className="update" type="submit" value="Update" />
              </form>
            </div>
          </div>

          <div className="homework one">
            <div className="dohomework-left">
              <label>
                <input type="checkbox" />
                Do home work
              </label>
            </div>
            <div className="dohomework-bnt">
              <a href="">Detail</a>
              <a href="">Remove</a>
            </div>
          </div>
          <div className="homework one">
            <div className="dohomework-left">
              <label>
                <input type="checkbox" />
                Learn something
              </label>
            </div>
            <div className="dohomework-bnt">
              <a href="">Detail</a>
              <a href="">Remove</a>
            </div>
          </div>
          <div className="bulk-action">
            <div className="dohomework-left inhert">
              <span> Bulk Action:</span>
            </div>
            <div className="dohomework-bnt">
              <a href="">Detail</a>
              <a href="">Remove</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
