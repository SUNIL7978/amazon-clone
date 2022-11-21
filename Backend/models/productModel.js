import mangoose from 'mongoose'

const productSchema = new mangoose.Schema(
    {
        slug: { type: String, required: true, unique: true },
        title: { type: String, required: true, unique: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        brand: { type: String, required: true },
        image: { type: String, required: true },
        images: [
            {
                width: { type: Number, required: true },
                height: { type: Number, required: true },
                url: { type: String, required: true },
                filename: { type: String, required: true },
                size: { type: Number, required: true },
                type: { type: String, required: true },

            },
            {
                width: { type: Number, required: true },
                height: { type: Number, required: true },
                url: { type: String, required: true },
                filename: { type: String, required: true },
                size: { type: Number, required: true },
                type: { type: String, required: true },
            },
            {
                width: { type: Number, required: true },
                height: { type: Number, required: true },
                url: { type: String, required: true },
                filename: { type: String, required: true },
                size: { type: Number, required: true },
                type: { type: String, required: true },
            },
            {
                width: { type: Number, required: true },
                height: { type: Number, required: true },
                url: { type: String, required: true },
                filename: { type: String, required: true },
                size: { type: Number, required: true },
                type: { type: String, required: true },
            }
        ],
        inStock: { type: Number, required: true },
        rating: {
            rate: { type: Number, required: true },
            review: { type: Number, required: true },
            count: { type: Number, required: true }
        }
    },
    {
        timestamps: true,
    }
)

const Product = mangoose.model('Product', productSchema)

export default Product;



