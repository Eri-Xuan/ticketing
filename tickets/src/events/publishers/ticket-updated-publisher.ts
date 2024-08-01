import { Publisher, TicketUpdatedEvent, Subjects } from "@yukikutickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}