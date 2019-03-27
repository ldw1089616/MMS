export * from './authController.service';
import { AuthControllerService } from './authController.service';
export * from './orderController.service';
import { OrderControllerService } from './orderController.service';
export const APIS = [AuthControllerService, OrderControllerService];
