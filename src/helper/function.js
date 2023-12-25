const shorten = (title) => {
    const splitedTitle = title.split(' ');
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;
}

const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result;
}

const quantityCount = (state, id) => {
    const indexx = state.selectedItems.findIndex(item => item.id === id)
    if (indexx === -1) {
        return false;
    } else {
        return state.selectedItems[indexx].quantity;
    }
}

export { shorten, isInCart, quantityCount };