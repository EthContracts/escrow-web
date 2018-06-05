export enum Action {
  None,
  Accept,
  Cancel,
}

export enum Terms {
  BackToSender,
  BackToReceiver,
  HalfHalf,
}

export enum Status {
  Ongoing,
  Fullfilled,
  Cancelled,
}

export interface Transaction {
  sender: string;
  receiver: string;
  broker: string;
  goal: number;
  paid: number;
  deadline: Date;
  terms: Terms;
  senderAction: Action;
  receiverAction: Action;
  status: Status;
}
