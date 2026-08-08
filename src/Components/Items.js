import React from 'react';

export default function Items() {
  const products = [
    {
      id: 1,
      name: "Premium Dry Figs – Naturally Sweet & Nutrient-Rich Dried Fruit",
      displayName: "Dry Figs",
      description: "Experience the natural sweetness and delightful chewiness of our premium dry figs. Sourced for exceptional quality, these dried figs are a nutrient-dense snack, packed with dietary fiber and essential minerals. Perfect for enjoying on their own, adding to your favorite cheese boards, or using in your baking recipes for a touch of natural sweetness.",
      image: "/images/dry figs.jpg",
      keywords: "dry figs, dried figs, premium dry figs, healthy snacks, dried fruit"
    },
    {
      id: 2,
      name: "Basil Seeds (Tukmaria) – Premium Quality for Drinks & Desserts",
      displayName: "Basil Seeds (Tukmaria)",
      description: "Discover the versatility of our high-quality basil seeds, also known as tukmaria. These tiny seeds are a fantastic source of soluble fiber and expand when soaked in water, creating a unique, gel-like texture that's perfect for refreshing summer drinks, smoothies, or healthy puddings.",
      image: "/images/tukmaria.jpg",
      keywords: "basil seeds, tukmaria, sabja seeds, healthy drinks, superfood seeds"
    },
    {
      id: 3,
      name: "Green Raisins – Premium Quality Dried Grapes for Snacking & Baking",
      displayName: "Green Raisins",
      description: "Our premium green raisins are sun-dried from the finest green grapes to preserve their naturally sweet and tangy flavor. These dried grapes are a wholesome, fat-free snack that's perfect for on-the-go energy.",
      image: "/images/raisins.jpg",
      keywords: "green raisins, dried grapes, healthy snacks, baking ingredients, dried fruit"
    },
    {
      id: 4,
      name: "Premium Hard Almonds – Crunchy, Wholesome & Perfect for Gifting",
      displayName: "Hard Almonds",
      description: "Enjoy the satisfying crunch and rich, nutty flavor of our premium hard almonds. These almonds are a powerhouse of nutrition, packed with healthy fats, protein, and vitamin E. Ideal for healthy snacking, they are equally delicious as a gift or as a versatile ingredient in your home cooking and baking.",
      image: "/images/Solid Almonds.jpg",
      keywords: "hard almonds, premium almonds, crunchy almonds, healthy nuts, almond gift"
    },
    {
      id: 5,
      name: "Golden Raisins (Munnaka) – Sweet, Chewy & Ideal for Healthy Snacking",
      displayName: "Golden Raisins (Munnaka)",
      description: "Our golden raisins, often known as munnaka, are a naturally sweet and chewy delight. They offer a softer, milder flavor compared to darker raisins, making them a favorite for baking, adding to salads, or enjoying as a simple, healthy snack.",
      image: "/images/munakka.jpg",
      keywords: "golden raisins, munnaka, dried grapes, healthy snacks, baking raisins"
    },
    {
      id: 6,
      name: "Black Raisins – Rich in Antioxidants & Naturally Sweet Dried Fruit",
      displayName: "Black Raisins",
      description: "Indulge in the rich, deep sweetness of our premium black raisins. These naturally sweet dried fruits are an excellent source of iron and antioxidants, making them a healthy choice for everyone.",
      image: "/images/black raisins.jpg",
      keywords: "black raisins, dried grapes, healthy snacks, iron-rich foods, dry fruits"
    }
  ];

  return (
    <section id="items" className="items-section">
      <h2 style={{ 
        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
        textAlign: 'center',
        color: '#2d2a3e',
        marginBottom: '8px',
        fontWeight: '800'
      }}>
        🛒 Our Premium Dry Fruits Collection
      </h2>
      <p style={{
        textAlign: 'center',
        color: '#6a6588',
        fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
        marginBottom: '30px',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0 15px'
      }}>
        Discover the finest quality dry fruits, nuts, and seeds sourced from the best farms worldwide
      </p>
      
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img 
              src={product.image} 
              alt={product.displayName}
              loading="lazy"
              title={product.name}
            />
            <div className="product-card-body">
              <h3>{product.displayName}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-btn-wrapper">
                <a 
                  href="#contact" 
                  className="btn-primary product-btn"
                  aria-label={`Inquire about ${product.displayName}`}
                >
                  Inquire Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}