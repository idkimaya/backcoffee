export class CreateOrderDto {
  userID: number;
  quantity: number;
  totalPrice: number;
  orderDate: Date;
  status: string;
}