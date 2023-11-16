export const formatAmount = (amount:number, currency: string = 'vnd'): string => {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: currency });
}

export const empty = (value: any): boolean => {
    if (typeof value === 'string') value = value.trim();
    let result = !value;
    
    if (Array.isArray(value)) result = value.length == 0 || Object.values(value[0]).length == 0;
    else if (value && typeof value === 'object') result = Object.keys(value).length == 0;
    
    return result;
}
