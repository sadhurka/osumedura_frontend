// src/api/index.js

const API_URL = import.meta.env.VITE_API_URL.replace(/\/$/, '');

export async function fetchProducts() {
  try {
    const url = `${API_URL}/products`;
    console.log('Fetching all products from:', url);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.log('Products fetched successfully:', data.length);
    if (data.length > 0) {
      console.log('Sample product structure:', Object.keys(data[0]));
      console.log('All unique categories in data:', [...new Set(data.map(p => p.category).filter(Boolean))]);
    }
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}
