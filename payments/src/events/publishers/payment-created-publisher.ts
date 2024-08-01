import { Subjects, Publisher, PaymentCreatedEvent } from "@yukikutickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject= Subjects.PaymentCreated;
}