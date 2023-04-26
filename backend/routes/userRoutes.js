import express from 'express'
import { getMaleOnPhone, getTopCities, getUserNoDigitEmail, getUsers, getUsersOnQuote } from '../controllers/userControllers.js'

const router = express.Router()

router.get('/users/bmw-mercedes', getUsers) 
router.get('/users/male', getMaleOnPhone)
router.get('/users/quote', getUsersOnQuote)
router.get('/users/email', getUserNoDigitEmail)
router.get('/users/cities', getTopCities)


export default router;