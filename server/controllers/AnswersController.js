import express from "express";
import BaseController from "../utils/BaseController";
import { questionsService } from "../services/QuestionsService";
import { answersService} from "../services/AnswersService";

export class AnswersController extends BaseController {
  constructor() {
    super("api/answers");
    this.router
    .get("", this.getAll)
    .get("/:id", this.getById)
    .post("", this.create)
    .delete("/:id", this.delete)
    
  }
  async getAll(req, res, next) {
    try {
      let data = await answersService.find(req.query)
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await answersService.findById(req.params.id)
      return res.send(data)
    } catch(error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await answersService.create(req.body)
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try{
      await answersService.delete(req.params.id)
      return res.send("Deleted")
    } catch (error) {
      next(error)
    }
  }
}