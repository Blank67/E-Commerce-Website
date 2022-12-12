import { Button } from 'react-bootstrap';
import css from './CartItem.module.css';

const CartItem = (props) => {
    return (
        <li className={css['cart-item']}>
            <div>
                <h6 className="text-dark">{props.title}</h6>
                <span className={css.price}>Rs. {props.price}</span>
            </div>
            <div className={css.actions}>
                <Button onClick={props.onRemove} variant="danger">Remove</Button>
            </div>
        </li>
    );
}

export default CartItem;