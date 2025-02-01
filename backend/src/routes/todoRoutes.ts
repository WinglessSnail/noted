import express from "express"
import Todo from "../models/Todo"

const router = express.Router()

router.route("/")
    .get(async (req, res) => {
        const todos = await Todo.find()
        res.json(todos)
    })
    .post(async (req, res) => {
        const { title } = req.body
        if (!title) {
            res.status(400).json({ error: "Title is required" })
            return
        }
        const newTodo = new Todo({ title })
        await newTodo.save()
        res.status(201).json(newTodo)
    })
    .put(async (req, res) => {
        const { id, title, completed } = req.body
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { title, completed },
            { new: true }
        )
        if (!updatedTodo) {
            res.status(404).json({ error: "Todo not found" })
            return
        }
        res.json(updatedTodo)
    })
    .delete(async (req, res) => {
        const { id } = req.body
        const deleteTodo = await Todo.findByIdAndDelete(id)
        if (!deleteTodo) {
            res.status(404).json({ error: "Todo not found" })
            return
        }
        res.json({ message: "Todo deleted successfully" })
    })

export default router