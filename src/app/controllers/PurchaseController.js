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

    const purchase = { ...req.body, userId: req.userId }

    Purchase.create(purchase)

    return res.send()
  }

  async purchased (req, res) {
    const { id } = req.params

    const purchase = await Purchase.findById(id)

    if (!purchase) {
      return res.status(400).json({ error: 'Purchase not found' })
    }

    const ad = await Ad.findById(purchase.ad)

    ad.purchasedBy = req.userId
    ad.save()

    purchase.closed = true
    purchase.save()

    return res.send()
  }
}

module.exports = new PurchaseController()
