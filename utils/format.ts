
export const formatCurrency = (amount: number) => {
    const value = amount || 0; // Ensure the amount is a number, defaulting to 0 if it's undefined or null
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
};

export const formatDate=(date:Date)=>{
    return new Intl.DateTimeFormat('en-US',{
        year:'numeric',month:'long',day:'numeric'
    }).format(date);
};