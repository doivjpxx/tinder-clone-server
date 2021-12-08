export class UserActedEvent {
  constructor(
    public readonly userId: string,
    public readonly userTargetRecId: number,
    public readonly actionRecId: number
  ) { }
}
