import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AnimatedText from "../others/AnimatedText";
import mainImg from "../Assets/hero section.webp";
import leaf from "../Assets/leaveAbout.svg";
import ex from "../Assets/ex.png";
import RecentProducts from "../components/recentProducts/RecentProducts";
import { fetchProducts } from "../airtable";
import { Helmet } from "react-helmet";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("نبذة");
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        const foundProduct = data.find((p) => p.Name === id);
        setProduct(foundProduct);
        setLoading(false);
      } catch (err) {
        setError("فشل تحميل المنتجات");
        setLoading(false);
      }
    };
    getProducts();
  }, [id]);
  console.log(product);

  const hasTabContent = (tabName) => {
    switch (tabName) {
      case "نبذة":
        return !!product?.Overview;
      case "الوصف":
        return !!product?.Description;
      case "معدلات الاستخدام":
        return !!(product?.Usage_Instructions || product?.usage);
      case "المواد الفعالة":
        return !!product?.Active_Ingredients;
      case "ملاحظات":
        return !!product?.Notes;
      default:
        return false;
    }
  };

  const tabs = [
    { name: "نبذة", key: "نبذة" },
    { name: "الوصف", key: "الوصف" },
    { name: "معدلات الاستخدام", key: "معدلات الاستخدام" },
    { name: "المواد الفعالة", key: "المواد الفعالة" },
    { name: "ملاحظات", key: "ملاحظات" },
  ].filter((tab) => hasTabContent(tab.key));

  useEffect(() => {
    if (product && !hasTabContent(activeTab) && tabs.length > 0) {
      setActiveTab(tabs[0].key);
    }
  }, [product, activeTab, tabs]);

  if (loading) return <div>جاري التحميل...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>المنتج غير موجود</div>;
//..
  const getTabContent = () => {
    switch (activeTab) {
      case "نبذة":
        return product.Overview || "";
      case "الوصف":
        return product.Description || "";
      case "معدلات الاستخدام":
        return product.Usage_Instructions || product.usage || "";
      case "المواد الفعالة":
        return product.Active_Ingredients || "";
      case "ملاحظات":
        return product.Notes || "";
      default:
        return "";
    }
  };

  return (
    <>
      <Helmet>
        <title>{product.Name} - حصاد للتقنية</title>
        <meta
          name="description"
          content={`حصاد للتقنية الزراعية - تفاصيل المنتج: ${product.Name}. ${
            product.Overview || ""
          } ${product.Description || ""} ${
            product.Usage_Instructions || product.usage || ""
          } ${product.Active_Ingredients || ""} ${product.Notes || ""}`}
        />
        <meta
          name="keywords"
          content={`حصاد للتقنية الزراعية, ${product.Name}, ${
            product.Category === "fertilizers"
              ? "الأسمدة"
              : product.Category === "pesticides"
              ? "المبيدات"
              : "المكملات"
          } ${product.Overview || ""} ${product.Description || ""} ${
            product.Usage_Instructions || product.usage || ""
          } ${product.Active_Ingredients || ""} ${product.Notes || ""}`}
        />
      </Helmet>

      <div className="productDetails">
        <div className="hero relative h-[70vh] overflow-hidden shadow-lg bg-light">
          <img
            className="absolute inset-0 w-full h-[100vh] object-cover z-0 shadow-lg"
            src={mainImg}
            alt="حصاد للتقنيه الزراعيه المتطوره"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#163720]/70 flex flex-col justify-center items-center z-10">
            <AnimatedText
              dir="rtl"
              text={product.Name}
              ClassName="text-center mt-6 lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl text-white z-20"
            />
            <div className="w-full flex justify-center mt-4 z-20">
              <ul className="flex items-center gap-4 text-lg sm:text-xl">
                <li>
                  <Link to={"/"} className="text-light no-underline">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <span className="text-light">{"<"}--</span>
                </li>
                <li>
                  <Link
                    to={`/category/${product.Category}`}
                    className="text-light no-underline"
                  >
                    {product.Category === "fertilizers"
                      ? "الأسمدة"
                      : product.Category === "pesticides"
                      ? "المبيدات"
                      : "المكملات"}
                  </Link>
                </li>
                <li>
                  <span className="text-light">{"<"}--</span>
                </li>
                <li>
                  <span className="text-light no-underline border-b-2 border-light">
                    {product.Name}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="datails py-16 relative">
          <img
            className="absolute top-0 right-0 rotate-6 sm:w-[80px] animate-leaf"
            src={leaf}
            alt=""
          />
          <div className="container">
            <div className="m-auto row justify-center items-center max-w-6xl mx-auto w-full">
              <div className="col-md-7">
                <div dir="rtl" className="content text-right">
                  <h2 className="text-4xl text-dark font-bold">
                    {product.Name}
                  </h2>
                  {tabs.length > 0 && (
                    <div className="n flex justify-around items-center w-full text-lg my-10 bg-[#ebebeb] p-3">
                      {tabs.map((tab) => (
                        <span
                          key={tab.key}
                          className={`px-3 py-1 rounded-md cursor-pointer ${
                            activeTab === tab.key
                              ? "bg-[#d1d1d1] font-bold"
                              : "bg-transparent"
                          }`}
                          onClick={() => setActiveTab(tab.key)}
                        >
                          {tab.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="border-s-2 ps-2 text-lg leading-loose w-full whitespace-pre-line">
                    {getTabContent()}
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="image flex flex-col justify-center align-items-center text-center">
                  <img
                    className="w-75"
                    src={
                      product.Image && product.Image[0] && product.Image[0].url
                        ? product.Image[0].url
                        : ex
                    }
                    alt={`${product.Name} - ${product.Weight}`}
                  />
                  <p className="bg-[#254C00] w-75 py-2 rounded-tr-lg rounded-tl-lg rounded-br-lg text-lg text-white">
                    {product.Weight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RecentProducts />
      </div>
    </>
  );
};

export default ProductDetails;
