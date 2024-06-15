export interface ITicketItem {
  discussionHeader: string;
  lastModified: string;
  discussionDetails: string;
}

export interface ITicket {
  ticketId: string;
  ticketDescription: string;
  ticketItems: ITicketItem[];
}
