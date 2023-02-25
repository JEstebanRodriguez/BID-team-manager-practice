import asyncHandler from "express-async-handler";
import Player from "../models/Player.js";

export const getAllPlayers = asyncHandler(async (req, res, next) => {
    const players = await Player.find()
    res.json({players})
})

export const getPlayerById = asyncHandler(async (req, res, next) => {
    const { _id } = req.params
    const player = await Player.findById(_id)
    res.json({player})
})

export const newPlayer = asyncHandler(async (req, res, next) => {
    try {
        const player = await Player.create(req.body)
        res.json({ message: 'Player was created successfully' })
    } catch (err) {
        res.json(err)
    }
})

export const updatePlayer = asyncHandler(async (req, res, next) => {
    const { _id } = req.params
    const player = await Player.findByIdAndUpdate(_id, req.body, {new: true})
    res.json({player})
})

export const deletePlayerById = asyncHandler(async (req, res, next) => {
    const { _id } = req.params
    const player = await Player.findByIdAndDelete(_id)
    res.json({message: 'Player was deleted successfully'})
})
