import { natsWrapper } from "../../../nats-wrapper";
import { OrderCreatedListener } from "../order-created-listener";
import { OrderCreatedEvent, OrderStatus } from "@yukikutickets/common";
import { Message } from "node-nats-streaming";
import { Order } from "../../../models/order";
import mongoose from "mongoose";

const setup = async () => {
    const listener = new OrderCreatedListener(natsWrapper.client);

    const data: OrderCreatedEvent['data'] = {
        id: new mongoose.Types.ObjectId().toHexString(),
        version: 0,
        expiresAt: 'dfsdfs',
        userId: 'asdedew',
        status: OrderStatus.Created,
        ticket: {
            id: 'dfsedfse',
            price: 10
        }
    };

    // @ts-ignore
    const msg: Message = {
        ack: jest.fn()
    };
    return { listener, data, msg };
}

it('replicates the order info', async () => {
    const { listener, data, msg} = await setup();

    await listener.onMessage(data, msg);
    
    const order = await Order.findById(data.id);

    expect(order!.price).toEqual(data.ticket.price);
});

it('acks the message', async () => {
    const { listener, data, msg} = await setup();

    await listener.onMessage(data, msg);

    expect(msg.ack).toHaveBeenCalled();
})