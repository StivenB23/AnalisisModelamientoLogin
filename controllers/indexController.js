import { desempenoModel } from "../models/desempenoModel.js"

export const index = (req, res) => {
    res.render('index')
}

export const register = (req, res) => {
    res.render('registro')
}

export const dashboard = (req, res) => {
    const data = desempenoModel()
    res.render('dashboard',{
        desempenos: data
    })
}