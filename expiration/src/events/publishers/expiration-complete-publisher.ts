import { Subjects, Publisher, ExpirationCompleteEvent } from "@yukikutickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject= Subjects.ExpirationComplete;
}