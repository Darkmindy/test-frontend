import product1Image from '../assets/images/product1.png';
import product2Image from '../assets/images/product2.png';
import product3Image from '../assets/images/product3.png';
import product4Image from '../assets/images/product4.png';
import styles from './Products.module.css';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
}

function FormattedText({ text }: { text: string }) {
  const parts = text.split('<strong>');
  return parts.map((part, index) => {
    if (index === 0) {
      return <span key={index}>{part}</span>;
    }
    const subParts = part.split('</strong>');
    return (
      <span key={index}>
        <strong>{subParts[0]}</strong>
        {subParts[1]}
      </span>
    );
  });
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles['product-card']} key={product.id}>
      <img
        src={product.image}
        alt={product.name}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = 'placeholder.png';
        }}
      />
      <h3>{product.name}</h3>
      <p>
        <FormattedText text={product.description} />
      </p>
    </div>
  );
}

function Products() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Sabato in Planetario',
      image: product1Image,
      description:
        "L'azienda è certificata <strong>biologica</strong> ed è composta da orto, frutteto e pascolo, colture cerealicole, vigneto e medicaio.",
    },
    {
      id: 2,
      name: 'Prodotto 2',
      image: product2Image,
      description:
        "L'azienda è certificata <strong>biologica</strong> ed è composta da orto, frutteto e pascolo, colture cerealicole, vigneto e medicaio.",
    },
    {
      id: 3,
      name: 'Prodotto 3',
      image: product3Image,
      description:
        "L'azienda è certificata <strong>biologica</strong> ed è composta da orto, frutteto e pascolo, colture cerealicole, vigneto e medicaio.",
    },
    {
      id: 4,
      name: 'Prodotto 4',
      image: product4Image,
      description:
        "L'azienda è certificata <strong>biologica</strong> ed è composta da orto, frutteto e pascolo, colture cerealicole, vigneto e medicaio.",
    },
    {
      id: 5,
      name: 'Prodotto 5',
      image: product4Image,
      description:
        "L'azienda è certificata <strong>biologica</strong> ed è composta da orto, frutteto e pascolo, colture cerealicole, vigneto e medicaio.",
    },
    {
      id: 6,
      name: 'Prodotto 6',
      image: product4Image,
      description:
        "L'azienda è certificata <strong>biologica</strong> ed è composta da orto, frutteto e pascolo, colture cerealicole, vigneto e medicaio.",
    },
  ];

  return (
    <section className={styles.products}>
      <h2>I Nostri Prodotti</h2>
      <div className={styles['product-grid']}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default Products;