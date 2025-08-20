function max(array) {
    let maximo;
    for (let index = 0; index < array.length; index++) {

        if (!maximo) { maximo = array[index] }

        if (maximo < array[index]) {
            maximo = array[index];
        }
    }
    return maximo;
}

export { max };