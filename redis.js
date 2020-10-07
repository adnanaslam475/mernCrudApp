// const express = require('express')
// const fetch = require('node-fetch')
// const app = express()
// const redis = require('redis')
// const { date } = require('faker')

// const redis_Port = process.env.PORT || 6379
// const client = redis.createClient(redis_Port)
// async function getRepos(req, res, next) {
//     try {
//         const { username } = req.params
//         const response = await fetch(`https://api.github.com/users/${username}`)
//        const data= await response.json(response)
//         res.status(200).send(data)
//     } catch (error) {
//         console.error(error)
//     }
// }

// app.get('/repos/:username', getRepos)


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log("Server red is running on Port: " + PORT);
// });