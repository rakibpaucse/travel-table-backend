const {Schema , model , mongoose } = require('mongoose')

const testimonialSchema = new Schema({
    image : String,
    cusName : String,
    comment : String,
 })

const Testimonial = model('Testimonial' , testimonialSchema)

Testimonial.create( testimonialSchema , () => {
    
} )

 module.exports = Testimonial;