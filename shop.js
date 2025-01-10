// generate shop page
let shop = document.getElementById("product-list");

let shopItemDetails = [
  {
    id: "product-1",
    name: "Ear Rings",
    price: "$100",
    img: "images/I1.jpeg",
    desc: `Earrings are a symbol of beauty and romance, and they have been worn since ancient times. These pieces of jewelry are usually made of metal, but they can also be made of a variety of materials. Some common materials used to make earrings are gold, silver, and bronze. 
            Product Features:
            • Unique design
            • Durable and lightweight.
            • Easy to wear.
            • Available in various colors and designs.
            • Can be personalized.
            • Comes in a gift box.
    `,
  },
  {
    id: "product-2",
    name: "Ear Ring",
    price: "$100",
    img: "images/I2.jpeg",
    desc: `Earrings are a symbol of beauty and romance, and they have been worn since ancient times. These pieces of jewelry are usually made of metal, but they can also be made of a variety of materials. Some common materials used to make earrings are gold, silver, and bronze. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-3",
    name: "Stud",
    price: "$100",
    img: "images/I3.jpeg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-4",
    name: "Ear Ring",
    price: "$100",
    img: "images/I4.jpeg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-5",
    name: "Jhumka",
    price: "$100",
    img: "images/I5.jpeg",
    desc: `Bangles are a unique jewelry accessory that can be worn as bracelets or necklaces. They come in many different colors and styles, including sterling silver, gold plated, and more!

        Product Features:
        • Unique design - Wear them as bracelets or necklace.
        • Durable and lightweight.
        • Easy to wear.
        • Available in various colors and designs.
        • Can be personalized.
        • Comes in a gift box.`,
  },
  {
    id: "product-6",
    name: "Jhumka",
    price: "$100",
    img: "images/I6.jpeg",
    desc: `Bangles are a unique jewelry accessory that can be worn as bracelets or necklaces. They come in many different colors and styles, including sterling silver, gold plated, and more!

          Product Features:
        • Unique design - Wear them as bracelets or necklace.
        • Durable and lightweight.
        • Easy to wear.
        • Available in various colors and designs.
        • Can be personalized.
        • Comes in a gift box.`,
  },
  {
    id: "product-7",
    name: "Necklace",
    price: "$100",
    img: "images/I7.jpeg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-8",
    name: "Full Set",
    price: "$100",
    img: "images/I8.jpeg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-9",
    name: "Full Set",
    price: "$100",
    img: "images/I9.jpeg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-10",
    name: "Bangles",
    price: "$100",
    img: "images/I10.jpeg",
    desc: `Earrings are a symbol of beauty and romance, and they have been worn since ancient times. These pieces of jewelry are usually made of metal, but they can also be made of a variety of materials. Some common materials used to make earrings are gold, silver, and bronze. 
            Product Features:
            • Unique design
            • Durable and lightweight.
            • Easy to wear.
            • Available in various colors and designs.
            • Can be personalized.
            • Comes in a gift box.
    `,
  },
  {
    id: "product-11",
    name: "Kada",
    price: "$100",
    img: "images/I11.jpeg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-12",
    name: "Golden Kada",
    price: "$100",
    img: "images/I12.jpeg",
    desc: `Bangles are a unique jewelry accessory that can be worn as bracelets or necklaces. They come in many different colors and styles, including sterling silver, gold plated, and more!

          Product Features:
        • Unique design - Wear them as bracelets or necklace.
        • Durable and lightweight.
        • Easy to wear.
        • Available in various colors and designs.
        • Can be personalized.
        • Comes in a gift box.`,
  },
  {
    id: "product-13",
    name: "Ear Ring",
    price: "$100",
    img: "images/I13.jpeg",
    desc: `Bangles are a unique jewelry accessory that can be worn as bracelets or necklaces. They come in many different colors and styles, including sterling silver, gold plated, and more!

          Product Features:
        • Unique design - Wear them as bracelets or necklace.
        • Durable and lightweight.
        • Easy to wear.
        • Available in various colors and designs.
        • Can be personalized.
        • Comes in a gift box.`,
  },
  {
    id: "product-14",
    name: "Drop Earring",
    price: "$100",
    img: "images/I14.jpeg",
    desc: `Bangles are a unique jewelry accessory that can be worn as bracelets or necklaces. They come in many different colors and styles, including sterling silver, gold plated, and more!

          Product Features:
        • Unique design - Wear them as bracelets or necklace.
        • Durable and lightweight.
        • Easy to wear.
        • Available in various colors and designs.
        • Can be personalized.
        • Comes in a gift box.`,
  },
  {
    id: "product-15",
    name: "Chandelier Earring",
    price: "$100",
    img: "images/I15.jpeg",
    desc: `Bangles are a unique jewelry accessory that can be worn as bracelets or necklaces. They come in many different colors and styles, including sterling silver, gold plated, and more!

          Product Features:
        • Unique design - Wear them as bracelets or necklace.
        • Durable and lightweight.
        • Easy to wear.
        • Available in various colors and designs.
        • Can be personalized.
        • Comes in a gift box.`,
  },
  {
    id: "product-16",
    name: "Chandelier Earring",
    price: "$100",
    img: "images/I16.jpeg",
    desc: `Bangles are a unique jewelry accessory that can be worn as bracelets or necklaces. They come in many different colors and styles, including sterling silver, gold plated, and more!

          Product Features:
        • Unique design - Wear them as bracelets or necklace.
        • Durable and lightweight.
        • Easy to wear.
        • Available in various colors and designs.
        • Can be personalized.
        • Comes in a gift box.`,
  },
  {
    id: "product-17",
    name: "Jhumka",
    price: "$100",
    img: "images/I17.jpeg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-18",
    name: "Jhumka",
    price: "$100",
    img: "images/I18.jpeg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-19",
    name: "Ear Rings",
    price: "$100",
    img: "images/I19.jpeg",
    desc: `Earrings are a symbol of beauty and romance, and they have been worn since ancient times. These pieces of jewelry are usually made of metal, but they can also be made of a variety of materials. Some common materials used to make earrings are gold, silver, and bronze. 
            Product Features:
            • Unique design
            • Durable and lightweight.
            • Easy to wear.
            • Available in various colors and designs.
            • Can be personalized.
            • Comes in a gift box.
    `,
  },
  {
    id: "product-20",
    name: "Necklace",
    price: "$100",
    img: "images/I20.jpeg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones.
          Product Features -
          1. Necklace length -  14 inches
          2. Pendant size: 3mm x 4mm
          3. Chain length - 16 inches
          4. Weight: 0.5 grams
          5. Material -  18k Gold Plated Metal + Stainless Steel
          6. Color: As shown
          7. Gift box included
          8. Customized service available
          9. Free shipping
          10. 100% satisfaction guaranteed`,
  },
];
//onclick="window.location.href='product-description.html';"
let generateShop = () => {
  return (shop.innerHTML = shopItemDetails
    .map((x) => {
      let { name, price, img } = x;
      return `
    <div class="pro" onclick="window.location.href='description01.html';">
    <div class="product-img">
      <img src=${img} alt="">
    </div>
      
      <div class="description">
          <span>Jewllery</span>
          <h5 class="product-Name">${name}</h5>
          <div class="star">
            <ion-icon name="star" class="checked"></ion-icon>
            <ion-icon name="star" class="checked"></ion-icon>
            <ion-icon name="star" class="checked"></ion-icon>
            <ion-icon name="star" class="checked"></ion-icon>
            <ion-icon name="star" class="checked"></ion-icon>
          </div>
          <h4>${price}</h4>
      </div>
      <a href="#">
        <ion-icon name="cart" class="cart"></ion-icon>
      </a>
  </div>
  `;
    })
    .join(""));
};

generateShop();
