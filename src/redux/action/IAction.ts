export default interface IAction<Payload, Data> {
  type: string;
  payload?: Payload;
  data?: Data;
  error?: string;
}
