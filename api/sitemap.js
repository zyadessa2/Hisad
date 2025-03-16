// api/sitemap.js
import productsData from "../src/products.json"; // استبدل المسار حسب مكان الـ JSON بتاعك

export default function handler(req, res) {
  const baseUrl = "https://hisad.vercel.app";
  const currentDate = new Date().toISOString().split("T")[0];

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

  // جمع المنتجات من الـ JSON
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

  const productPages = allProducts.map((product) => ({
    path: `/product/${product.id}`,
    priority: "0.8",
    changefreq: "weekly",
  }));

  const allUrls = [...staticPages, ...productPages];

  // توليد الـ XML
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

  // إرجاع الـ XML كـ response
  res.setHeader("Content-Type", "application/xml");
  res.write(sitemapContent);
  res.end();
}