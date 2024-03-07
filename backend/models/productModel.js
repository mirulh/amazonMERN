import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
  },
  {
    // [1]
    timestamps: true,
  }
);

// [2]
const Product = mongoose.model('Product', productSchema);
export default Product;

/* 

[1] 
whenever a new record is created from the object model, a new field of timestamps will be added into the record as well (createdAt, and updatedAt)

[2]
create a model from the schema. the first parameter "Product" is the name of this model, the second parameter is the schema that will be used 


*/
