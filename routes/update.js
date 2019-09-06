const router = require('express').Router();
const ExtUsers = require('../models/extUser');
const IntUsers = require('../models/intUser');
const jwt = require('jsonwebtoken');

DecodeToken = function (token) {
    try {
        console.log(token)
        decoded = jwt.verify(token, 'abc123');
        return decoded;
    } catch (e) {
        console.log(e.message)
        console.log('Error decoding token');
    }
}

router.post('/update', (req, res) => {
    console.log(777777777777, req.body)
    var dtok = DecodeToken(req.body.token);
    console.log("update route dtok", dtok);
    if (dtok.state == 'int') {
        if (req.body.hostelroom) {
            IntUsers.findByIdAndUpdate(dtok._id, {
                $set: {
                    hostelroom: req.body.hostelroom,
                    phno: req.body.phone
                }
            }, { new: true }).then((updated) => {
                if (updated) {
                    //return res.send(``);
                    console.log('Updated')
                    res.send(updated);
                }
                else return res.statusCode(404).send();
            }).catch((e) => {
                res.status(400).send();
            })

        }
    } else if (dtok.state == 'ext') {
        if (req.body.collegename) {
            ExtUsers.findByIdAndUpdate(dtok._id, {
                $set: {
                    CollegeName: req.body.collegename,
                    phno: req.body.phone
                }
            }, { new: true }).then((updated) => {
                if (updated) {
                    // return res.send(``);
                    console.log('Updated')
                    res.send(updated);
                }
                else return res.statusCode(404).send();
            }).catch((e) => {
                return res.status(400).send();
            })
        }
    } else {
        return res.status(400).send();
    }

});

module.exports = router;