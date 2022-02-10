export const addItem = (cartItems, cartItemsToAdd) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, cartItemsToAdd) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: Math.max(1, cartItem.quantity - 1) }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};
