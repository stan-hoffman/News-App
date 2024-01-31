import { ExpressFunction } from "../types/expressFunction";
import Todo from "../models/todoModel";



// Creating a new arrow function controller that returns callback function which has a request and response
// ExpressFunction: type declaration for the function and its parameters (res, req)
// the express function bascially defines what properties and methods are accessible to req and res, also the type of return value 
//  e.g: export const getAllTodos = async (req: Request, res: Response ) Promise<void> => { would also work the same 
// This is an async function awaits the request from mongodb (await Todo.find()), Todo.find returns all the values from the database 
//  Todo is the model which we have declared in the newsModel.ts file 
// once the data has been awaited we store the return value in a variable called todos and return that back to the user if the request from the database was successful, if not we return 404 along with the error to the user
// res.status(200) : the user request was successful so we sent the back
// res.status(400): the user request was unsuccessful.
export const getAllTodos: ExpressFunction = async (req, res) => {
  try {
    const todos = await Todo.find();

    res.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const addTodo: ExpressFunction = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        todo: newTodo,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
