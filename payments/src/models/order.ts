import mongoose from "mongoose";
import { OrderStatus } from "@yukikutickets/common";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";

interface OrderAttrs {
    id: string;
    version: number;
    userId: string;
    price: number;
    status: OrderStatus;
}

interface OrderDoc extends mongoose.Document {
    version: number;
    userId: string;
    price: number;
    status: OrderStatus;
}

interface OrderModel extends mongoose.Model<OrderDoc> {
    build(attrs: OrderAttrs): OrderDoc;
}

const ordderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {
    toJSON: {
        transform(doc,ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});

ordderSchema.set('versionKey', 'version');
ordderSchema.plugin(updateIfCurrentPlugin);

ordderSchema.statics.build = (attrs: OrderAttrs) => {
    return new Order({
        _id: attrs.id,
        version: attrs.version,
        price: attrs.price,
        userId: attrs.userId,
        status: attrs.status
    });
}

const Order = mongoose.model<OrderDoc, OrderModel>('Order', ordderSchema);

export { Order };