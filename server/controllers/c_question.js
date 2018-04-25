var mongoose = require('mongoose');
const Question = require('../models/m_question')

module.exports = {
    create: function (req, res) {
        console.log('ini create ')
        console.log('=====>',req.body)
        let newQuestion = new Question ({
            title: req.body.title,
            content: req.body.content,
            userId: req.body.userId
        })

        newQuestion.save(function(err, response) {
            if(!response) {
                res.status(200).json({
                    message: 'data berhasil tersimpan',
                    data: response
                })
            } else {
                res.status(500).json({
                    message: 'internal server error'
                })
            }
        })
    },
    list: function (req, res) {
        Question.find()
        .then(response => {
            res.status(200).json({
                message: 'berhasil mendapatkan daftar question',
                data: response
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'internal server error',
            })
        })
        // console.log('data question banyak nih')
    }
}