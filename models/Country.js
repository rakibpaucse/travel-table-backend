const {Schema , model , mongoose } = require('mongoose')

const countrySchema = new Schema({

    slug : String,
    imageThumb : String,
    image : String,
    objectID : String,
    name : String,

    _highlightResult:{
        name:{
            value:String,
            matchLevel:String,
            matchedWords : []
        }
    }
 })

const Country = model('Country' , countrySchema)

Country.create( countrySchema , () => {
    
} )

 module.exports = Country;