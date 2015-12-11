/**
 * Created by Administrator on 2015/12/11.
 * Description DataBase Connect test
 */
var mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/EamonDB');


var schema = mongoose.Schema({
    name: String,
    result:Boolean
});

var Product=  mongoose.model('Product',schema);

var product = new Product({name:'Eamon',result:true});

product.save(function (err) {
    if(err){
        console.log('Failed');
    }else{
        console.log('Saved');
    }
});
