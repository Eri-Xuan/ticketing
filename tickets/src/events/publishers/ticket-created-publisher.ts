import { Publisher, TicketCreatedEvent, Subjects } from "@yukikutickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}