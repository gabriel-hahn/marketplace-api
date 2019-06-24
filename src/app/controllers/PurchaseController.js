const Ad = require('../models/Ad')
const User = require('../models/User')
const Purchase = require('../models/Purchase')
const PurchaseEmail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')

class PurchaseController {
  async store (req, res) {
    const { ad, content } = req.body

    const purchaseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    Queue.create(PurchaseEmail.key, {
      ad: purchaseAd,
      user,
      content
    }).save()

    Purchase.create(req.body)

    return res.send()
  }
}

module.exports = new PurchaseController()
