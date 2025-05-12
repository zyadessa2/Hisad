import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../airtable';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('فشل تحميل المنتجات');
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  // Parse Usage Instructions into table rows
  const parseUsageInstructions = (instructions) => {
    if (!instructions) return [];
    return instructions.split(';').map(row => row.split('|'));
  };

  if (loading) return <div>جاري التحميل...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>المنتجات</h1>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '20px' }}>
          <h2>{product.Name}</h2>
          <p><strong>الوزن:</strong> {product.Weight}</p>
          <p><strong>الوصف:</strong> {product.Description}</p>
          <p><strong>الفئة:</strong> {product.Category}</p>
          <p><strong>الفئة الفرعية:</strong> {product.Subcategory}</p>
          <p><strong>المكونات الفعالة:</strong> {product['Active Ingredients']}</p>
          <h3>تعليمات الاستخدام</h3>
          <table className="usage-table">
            <thead>
              <tr>
                <th>المحصول</th>
                <th>الآفة</th>
                <th>الجرعة</th>
                <th>فترة ما قبل الحصاد</th>
              </tr>
            </thead>
            <tbody>
              {parseUsageInstructions(product['Usage Instructions']).map((row, index) => (
                <tr key={index}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ProductList;