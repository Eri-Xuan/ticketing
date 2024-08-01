import { Publisher, Subjects, OrderCancelledEvent } from "@yukikutickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}