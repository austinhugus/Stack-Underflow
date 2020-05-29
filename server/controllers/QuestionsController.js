import express from "express";
import BaseController from "../utils/BaseController";
import { questionsService } from "../services/QuestionsService";
import { answersService } from "../services/AnswersService";

export class QuestionsController extends BaseController {
  constructor() {
    super("api/questions");
    this.router
    .get("", this.getAll)
    .get("/:id", this.getById)
    .get("/:id/answers", this.getAnswersByQuestionId)
    .post("", this.create)
    .put("/:id", this.edit)
    .delete("/:id", this.delete)
    
  }
  async getAll(req, res, next) {
    try {
      let data = await questionsService.find(req.query)
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await questionsService.findById(req.params.id)
      return res.send(data)
    } catch(error) {
      next(error);
    }
  }

  async getAnswersByQuestionId(req, res, next){
    try{
      let data = await answersService.find({questionId: req.params.id})
      return res.send(data)
    } catch(error){
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await questionsService.create(req.body)
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
      try{
        req.body.id = req.params.id
        let data = await questionsService.edit(req.body)
        return res.send(data)
      } catch (error) {
        next(error)
      }
      }

  async delete(req, res, next) {
    try{
      await questionsService.delete(req.params.id)
      return res.send("Deleted")
    } catch (error) {
      next(error)
    }
  }
}
