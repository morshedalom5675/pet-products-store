"use client";
import Link from "next/link";
import ProductCard from "../../shared/card/ProductCard";
import Container from "../../shared/container/Container";


const trendingProducts = [
  {
    id: 1,
    name: "Premium Dog Chew Toy",
    price: 25.0,
    category: "Toys",
    image: "https://i.ibb.co.com/pjZ6HCGQ/image.png",
    tag: "Trending",
  },
  {
    id: 2,
    name: "Organic Cat Food - 2kg",
    price: 45.0,
    category: "Food",
    image: "https://i.ibb.co.com/rG9L4rYP/image.png",
    tag: "Top Rated",
  },
  {
    id: 3,
    name: "Soft Padded Dog Harness",
    price: 32.0,
    category: "Accessories",
    image: "https://i.ibb.co.com/69NzGRJ/image.png",
    tag: "New",
  },
  {
    id: 4,
    name: "Cozy Pet Bed - Large",
    price: 55.0,
    category: "Bedding",
    image: "https://i.ibb.co.com/S4YMszpC/image.png",
    tag: "Trending",
  },
];

const TrendingProducts = () => {
  return (
    <section className="py-16 bg-white font-jakarta">
      <Container>
        {/* header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[#FBBF24] font-bold text-sm uppercase tracking-wider">
              Quality Guaranteed
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-2">
              Trending Products
            </h2>
          </div>
          <Link className="text-[#0F172A] font-semibold border-b-2 border-[#FBBF24] hover:text-[#FBBF24] transition-colors cursor-pointer" href="/products">
            View All Products
          </Link>
        </div>

        {/* products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrendingProducts;