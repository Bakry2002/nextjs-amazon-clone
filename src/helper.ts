interface Props {
    amount: number; 
}

export const formattedPrice = ({ amount }: Props) => {
    const formattedAmount = new Number(amount).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2, 
    }); 
    return formattedAmount;
}