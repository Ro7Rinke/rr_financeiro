export const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign +
            (j ? i.substring(0, j) + thousands : '') +
            i.substring(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
            (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
}

export const colors = {
    appBackground: '#0000ff11',
    primaryColor: '#8c25a1aa',
    primaryColorSolid: '#8c25a1',
    secondaryColor: '#29002944',
    borderColor: '#acacac77',
    categories: {
        '1': '#ff0000',
        '2': '#e900e9',
        '3': '#ede213',
        '4': '#00bf00',
        '5': '#0000ff',
    }
}

export const baseURL = 'http://192.168.200.107:8001'