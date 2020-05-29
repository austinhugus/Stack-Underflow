import ValuesController from "./Controllers/ValuesController.js";
import QuestionsController from "./Controllers/QuestionsController.js";
import CommentsController from "./Controllers/CommentsController.js";


class App {
  debugger;
  valuesController = new ValuesController();
  questionsController = new QuestionsController();
  commentsController = new CommentsController();

}

window["app"] = new App();
