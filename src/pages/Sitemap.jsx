import React from "react";
import productsData from "../products.json"; // استيراد داتا المنتجات

const Sitemap = () => {
  const baseUrl = "https://yourdomain.com"; // استبدلها بالدومين بتاعك
  const currentDate = new Date().toISOString().split("T")[0]; // التاريخ الحالي (مثل 2025-03-16)

  // الصفحات الثابتة
  const staticPages = [
    { path: "/", priority: "1.0", changefreq: "daily" },
    { path: "/about", priority: "0.8", changefreq: "weekly" },
    { path: "/contactUs", priority: "0.7", changefreq: "monthly" },
    { path: "/products", priority: "0.9", changefreq: "weekly" },
    { path: "/category/fertilizers", priority: "0.9", changefreq: "weekly" },
    { path: "/category/pesticides", priority: "0.9", changefreq: "weekly" },
    { path: "/category/supplements", priority: "0.9", changefreq: "weekly" },
  ];

  // جمع كل المنتجات من الـ JSON
  const allProducts = [
    ...productsData.fertilizers.liquid_foliar,
    ...productsData.fertilizers.suspension,
    ...productsData.fertilizers.liquid_powder,
    ...productsData.pesticides.liquid_foliar,
    ...productsData.pesticides.suspension,
    ...productsData.pesticides.liquid_powder,
    ...productsData.supplements.liquid_foliar,
    ...productsData.supplements.suspension,
    ...productsData.supplements.liquid_powder,
    ...productsData.latest_products,
  ];

  // مسارات المنتجات الديناميكية
  const productPages = allProducts.map((product) => ({
    path: `/product/${product.id}`,
    priority: "0.8",
    changefreq: "weekly",
  }));

  // دمج الصفحات الثابتة والديناميكية
  const allUrls = [...staticPages, ...productPages];

  // توليد محتوى الـ XML
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (url) => `
    <url>
      <loc>${baseUrl}${url.path}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return (
    <pre
      style={{ margin: 0, whiteSpace: "pre-wrap" }}
      dangerouslySetInnerHTML={{ __html: sitemapContent }}
    />
  );
};

// تصدير الكومبوننت مع تعيين نوع المحتوى
export default function SitemapWrapper() {
  return (
    <React.Fragment>
      <Sitemap />
    </React.Fragment>
  );
};

// اختياري: لو بتستخدم loader للـ SSR
export const loader = () => {
  return new Response(<Sitemap />, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};