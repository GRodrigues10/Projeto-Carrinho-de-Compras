const formatCurrency = (cel, currency) => {
    return cel.toLocaleString('pt-br',{
        style:'currency',
        currency: currency
    });
}

export default formatCurrency;