import p1 from "@images/h1.webp";
import p2 from "@images/h1b.webp";
import p3 from "@images/h2.webp";
import p4 from "@images/h2b.webp";
import p5 from "@images/h3.webp";
import p6 from "@images/h3b.webp";
import p7 from "@images/h4.webp";
import p8 from "@images/h4b.webp";
import p9 from "@images/h5.webp";
import p10 from "@images/h5b.webp";
import p11 from "@images/h6.webp";
import p12 from "@images/h6b.webp";
import p13 from "@images/h7.webp";
import p14 from "@images/h7b.webp";
import p15 from "@images/h8.webp";
import p16 from "@images/h8b.webp";

export interface Article {
  id: number;
  name: string;
  image: string;
  hoverImage: string;
  price: number;
  originalPrice: number | null;
  discountPercentage: number | null;
  inStock: boolean;
  isNew: boolean;
  rating?: number;
  description: string;
  sustainability: string;
  shippingInfo: string;
  composition: string;
  payement: string;
}

export const articles: Article[] = [
  {
    id: 1,
    name: "T-shirt brodé Eden Park",
    price: 135,
    originalPrice: 150,
    discountPercentage: 30,
    isNew: true,
    inStock: true,
    rating: 3,
    image: p1,
    hoverImage: p2,
    description:
      "Conçu en jersey de coton doux, ce t-shirt à manches courtes affiche une broderie Eden Park bicolore avec deux noeud papillons au dos.",
    shippingInfo: "Livraison gratuite",
    sustainability:
      "Ce produit est fabriqué en coton biologique. Nous croyons fermement qu'habiller devrait être une démarche éthique, avec des normes strictes de durabilité.",
    composition: "100% coton biologique.",
    payement:
      "Les paiements par carte bancaire sont sécurisés par notre partenaire Stripe. À aucun moment, Look n'a accès à vos informations bancaires.",
  },

  {
    id: 2,
    name: "T-shirt noir Eden Park",
    price: 135,
    originalPrice: 200,
    discountPercentage: 0,
    isNew: false,
    inStock: true,
    rating: 2,
    image: p3,
    hoverImage: p4,
    description:
      "Conçu en jersey de coton doux, ce t-shirt à manches courtes affiche une broderie Eden Park bicolore avec deux noeud papillons au dos.",
    shippingInfo: "Livraison gratuite",
    sustainability:
      "Ce produit est fabriqué en coton biologique. Nous croyons fermement qu'habiller devrait être une démarche éthique, avec des normes strictes de durabilité.",
    composition: "100% coton biologique.",
    payement:
      "Vous pouvez régler vos achats facilement avec divers moyens de paiement modernes comme Apple Pay.",
  },

  {
    id: 3,
    name: "T-shirt navy Eden Park",
    price: 135,
    originalPrice: 35,
    discountPercentage: 20,
    isNew: true,
    inStock: false,
    rating: 5,
    image: p5,
    hoverImage: p6,
    description:
      "Conçu en jersey de coton doux, ce t-shirt à manches courtes affiche une broderie Eden Park bicolore avec deux noeud papillons au dos.",
    shippingInfo: "Livraison gratuite",
    sustainability:
      "Ce produit est fabriqué en coton biologique. Nous croyons fermement qu'habiller devrait être une démarche éthique, avec des normes strictes de durabilité.",
    composition: "100% coton biologique.",
    payement:
      "Vous pouvez régler vos achats facilement avec divers moyens de paiement modernes comme Apple Pay.",
  },
  {
    id: 4,
    name: "T-shirt blue Club Eden Park",
    price: 135,
    originalPrice: 200,
    discountPercentage: 30,
    isNew: true,
    inStock: true,
    rating: 3,
    image: p7,
    hoverImage: p8,
    description:
      "Conçu en jersey de coton doux, ce t-shirt à manches courtes affiche une broderie Eden Park bicolore avec deux noeud papillons au dos.",
    shippingInfo: "Livraison gratuite",
    sustainability:
      "Ce produit est fabriqué en coton biologique. Nous croyons fermement qu'habiller devrait être une démarche éthique, avec des normes strictes de durabilité.",
    composition: "100% coton biologique.",
    payement:
      "Vous pouvez régler vos achats facilement avec divers moyens de paiement modernes comme Apple Pay.",
  },
  {
    id: 5,
    name: "T-shirt green Eden Park",
    price: 135,
    originalPrice: 200,
    discountPercentage: 30,
    isNew: false,
    inStock: false,
    rating: 4,
    image: p9,
    hoverImage: p10,
    description:
      "Conçu en jersey de coton doux, ce t-shirt à manches courtes affiche une broderie Eden Park bicolore avec deux noeud papillons au dos.",
    shippingInfo: "Livraison gratuite",
    sustainability:
      "Ce produit est fabriqué en coton biologique. Nous croyons fermement qu'habiller devrait être une démarche éthique, avec des normes strictes de durabilité.",
    composition: "100% coton biologique.",
    payement:
      "Vous pouvez régler vos achats facilement avec divers moyens de paiement modernes comme Apple Pay.",
  },

  {
    id: 6,
    name: "T-shirt Super Eden Park",
    price: 135,
    originalPrice: 200,
    discountPercentage: 30,
    isNew: false,
    inStock: true,
    rating: 4,
    image: p11,
    hoverImage: p12,
    description:
      "Conçu en jersey de coton doux, ce t-shirt à manches courtes affiche une broderie Eden Park bicolore avec deux noeud papillons au dos.",
    shippingInfo: "Livraison gratuite",
    sustainability:
      "Ce produit est fabriqué en coton biologique. Nous croyons fermement qu'habiller devrait être une démarche éthique, avec des normes strictes de durabilité.",
    composition: "100% coton biologique.",
    payement:
      "Vous pouvez régler vos achats facilement avec divers moyens de paiement modernes comme Apple Pay.",
  },

  {
    id: 7,
    name: "T-shirt 2000 Eden Park",
    price: 135,
    originalPrice: 135,
    discountPercentage: 0,
    isNew: false,
    inStock: true,
    rating: 4,
    image: p13,
    hoverImage: p14,
    description:
      "Conçu en jersey de coton doux, ce t-shirt à manches courtes affiche une broderie Eden Park bicolore avec deux noeud papillons au dos.",
    shippingInfo: "Livraison gratuite",
    sustainability:
      "Ce produit est fabriqué en coton biologique. Nous croyons fermement qu'habiller devrait être une démarche éthique, avec des normes strictes de durabilité.",
    composition: "100% coton biologique.",
    payement:
      "Vous pouvez régler vos achats facilement avec divers moyens de paiement modernes comme Apple Pay.",
  },

  {
    id: 8,
    name: "Polo Club Eden Park",
    price: 135,
    originalPrice: 200,
    discountPercentage: 30,
    isNew: false,
    inStock: true,
    rating: 4,
    image: p15,
    hoverImage: p16,
    description:
      "Conçu en jersey de coton doux, ce t-shirt à manches courtes affiche une broderie Eden Park bicolore avec deux noeud papillons au dos.",
    shippingInfo: "Livraison gratuite",
    sustainability:
      "Ce produit est fabriqué en coton biologique. Nous croyons fermement qu'habiller devrait être une démarche éthique, avec des normes strictes de durabilité.",
    composition: "100% coton biologique.",
    payement:
      "Vous pouvez régler vos achats facilement avec divers moyens de paiement modernes comme Apple Pay.",
  },
];
