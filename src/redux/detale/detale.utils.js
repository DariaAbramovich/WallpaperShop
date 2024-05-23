
export const addItemToDetalet = (detaletItems, detaletItemToAdd) => {
    const existingDetaletItem = detaletItems.find(
        detaletItem => detaletItem.id === detaletItemToAdd.id
    );
  
    if (existingDetaletItem) {
      return detaletItems.map(detaletItem => 
        detaletItem.id === detaletItemToAdd.id
          ? { ...detaletItem, quantity: detaletItem.quantity + 1}
          : detaletItem
      );
    }
  
    return [...detaletItems, { ...detaletItemToAdd, quantity: 1 }];
  }
  export const removeItemFromDetalet = (detaletItems, id) => detaletItems.filter(item => item.id !== id);
