const db = require('../database')

exports.postOrderHandler = async(req, res) => {
  const orders = await db.query('SELECT * FROM `orders`');
  console.log(orders)
  res.json({ msg: orders})

}
// exports.orderController = (req , res , next ) => {
    
//   req.session.destroy((err) => {
//       if(err){
//           console.log(err);
//           return next(err)
//       }

//      return res.redirect('')
//   })
// }