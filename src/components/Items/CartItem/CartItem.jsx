import React from 'react';
import zagl from '../../../images/no-photo.png';
import { ivaInclude } from 'helpers/functions/ivaIncludeCalculate';
import { Li } from './CartItem.styled';

const CartItem = ({
  id,
  title,
  quantity,
  price,
  productImages,
  deleteItem,
}) => {
  const imageSrc =
    productImages.length > 0 && productImages[0]?.imageURL
      ? productImages[0].imageURL
      : zagl;
  const imageKey =
    productImages.length > 0 && productImages[0]?.imageID
      ? productImages[0].imageID
      : 'zagl';

  const finalPrice = (ivaInclude(price) * quantity).toFixed(2);
  const countCheck = quantity => {
    if (quantity > 1) {
      return `${quantity} botellas`;
    } else {
      return `${quantity} botella`;
    }
  };

  const handleDelete = () => {
    deleteItem(id); // Call the delete function passed from CartList
  };

  return (
    <>
      <Li>
        <div>
          <img key={imageKey} src={imageSrc} alt="" />
        </div>
        <p>{title}</p>
        <p>{countCheck(quantity)}</p>
        <p>{finalPrice}€</p>
        <button type="button" onClick={handleDelete}>
          del
        </button>
      </Li>
    </>
  );
};

export default CartItem;
