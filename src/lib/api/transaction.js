 
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const getAllTransactions = async () => {

 
  const res = await fetch(`${baseUrl}/api/transactions`);
  return res.json();
};
