import Order from '../../entity/Order'

export default function createOrderResponse(order: Order) {
    return {
        ...order,
        items: order.items.map((item) => ({
            quantity: item.quantity,
            dish: item.dish,
            itemPrice: item.quantity * item.dish.price
        }))
    }
}