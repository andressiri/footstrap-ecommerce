'use strict';
const { v4: UUIDV4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        id: UUIDV4(),
        name: 'Ultraboost 22',
        description: 'Introduced in 2015, the Ultraboost has long been the star of the Adidas running shoe lineup. It’s a capable performer, especially if you’re looking for a cushioned shoe. The Boost foam midsole creates a well-cushioned, bouncy ride, and the shoe features a stiffer torsion system for added responsiveness. The full Continental rubber outsole creates dependable grip in wet or dry conditions (it improves the shoe’s durability, too).',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/adidas/ultraboost_22.jpg',
        price: 119.16,
        brandId: 1,
        gender: 'Male',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Ultraboost 22',
        description: 'Introduced in 2015, the Ultraboost has long been the star of the Adidas running shoe lineup. It’s a capable performer, especially if you’re looking for a cushioned shoe. The Boost foam midsole creates a well-cushioned, bouncy ride, and the shoe features a stiffer torsion system for added responsiveness. The full Continental rubber outsole creates dependable grip in wet or dry conditions (it improves the shoe’s durability, too). Better yet, the women’s version of the 22 was created with a new last developed through extensive research on the shape of women’s feet, so female runners can expect an improved fit.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/adidas/ultraboost_22_women.jpg',
        price: 115,
        brandId: 1,
        gender: 'Female',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Supernova',
        description: 'Supernova Cushion Running Shoe is one of the most-beloved cushioning shoes on the road today. Designed to take you far and fast, this latest generation shoe offers greater comfort and breathability with even less weight. Features include a breathable, quick drying open-mesh upper; a molded ortholite anti-microbial moisture-wicking sock liner; a QuickStrike outsole for increased flexibility and durability; and an Adiwear outsole for best durability in high-wear areas. Generations of runners have loved the cushioned, neutral ride and the versatility of this day-in, day-out trainer.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/adidas/supernova_men.jpg',
        price: 44.96,
        brandId: 1,
        gender: 'Male',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Supernova',
        description: 'Built for performance and endless energy return, these women\'s adidas shoes help make every run your best. Made with insights from women, they have a soft step-in, fine-tuned fit and an outsole pattern that helps guide the foot through the gait cycle. Responsive BOOST cushioning and a soft and flexible textile upper combine for extra comfort.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/adidas/supernova_women.jpg',
        price: 24.31,
        brandId: 1,
        gender: 'Female',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Adizero Adios Pro 2.0',
        description: 'Instead of a plate, the Adios Adizero Pro uses five carbon-fiber rods placed in line with the metatarsal bones. This makes the ride a little more controlled than a shoe with a full plate, which can sometimes feel unpredictable at toe-off. Even with its towering 39-millimeter midsole of Adidas’s LightstrikePro foam, the unisex shoe felt quick, responsive, and reliable. (Plus, a part-carbon fiber, part-nylon heel plate also boosts stability at the ankle joint, which can help when your form fatigues in those final marathon miles.) The one real drawback is that the outsole skimps on traction; it’ll suffice for dry roads but won’t deliver the grip of Continental rubber.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/adidas/adizero_adios_pro.jpg',
        price: 132,
        brandId: 1,
        gender: 'Genderless',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Solarboost 4',
        description: 'The Solarboost is designed as a workhorse trainer, and it’s well-suited to high-mileage efforts. Highlights include a full-length Boost midsole for a cushioned-yet-responsive feel underfoot, and it’s paired with an EVA guide rail and a torsion system to support your feet—especially helpful features when you’re fatigued and your form starts to suffer. The durable Continental rubber outsole creates good grip, and the mesh upper offers a supportive, breathable fit.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/adidas/solarboost_4.jpg',
        price: 124,
        brandId: 1,
        gender: 'Genderless',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Originals Pro Model',
        description: 'Look And Play Like The Legends Of The Hardwood. These Basketball Shoes Have Lightweight Cushioning In The Midsole So You Can Drive And Slash In Comfort. A Synthetic Leather Upper And A Classic Shell Toe Are A Nod To Classic Adidas Basketball Style.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/adidas/originals_pro_model.jpg',
        price: 39.95,
        brandId: 1,
        gender: 'Male',
        type: 'Sneakers',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Harden Vol 5',
        description: 'Elevate your game with these signature shoes from James Harden and adidas Basketball. Designed with Futurenatural construction, these shoes have an anatomical last for a super snug fit and added lockdown. The midsole is a combination of Boost and Lightstrike for responsive cushioning that\'s also ultra-lightweight.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/adidas/harden_vol_5.jpg',
        price: 79.99,
        brandId: 1,
        gender: 'Genderless',
        type: 'Basketball',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Grand Court',
        description: 'A \'70s style reborn. These women\'s shoes take inspiration from iconic sport styles of the past and move them into the future. They\'re crafted with a suede upper and leather-like details. Signature 3-Stripes flash along the sides. Plush midsole cushioning gives comfort to every step.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/adidas/grand_court.jpg',
        price: 144.95,
        brandId: 1,
        gender: 'Female',
        type: 'Sneakers',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Air Zoom Pegasus 38',
        description: 'Your workhorse with wings, the women\'s Nike Air Zoom Pegasus 38 road-running shoes put a spring in your step with responsive foam and boast a wider fit at the toes for even more comfort.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/nike/air_zoom_pegasus_38_women.jfif',
        price: 120,
        brandId: 2,
        gender: 'Female',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Air Zoom Pegasus 38',
        description: 'Give strength to your step with the Nike Air Zoom Pegasus 38 shoe. Ensuring the fit loved by the runners. The shoe is equipped with a brand new cushioning unit on the forefoot and foam for maximum responsiveness. The result is a durable and lightweight shoe designed for your everyday runs. Nike React foam in the midsole for lightness. elasticity and strength. More foam means more cushioning. No bulk. The Air Zoom unit in the forefoot is twice as large as previous versions. thus offering greater elasticity at every step. It is closer to the foot for better responsiveness.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/nike/air_zoom_pegasus_38_man.jpg',
        price: 114.98,
        brandId: 2,
        gender: 'Male',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Wildhorse 7',
        description: 'The Wildhorse has proven itself a capable performer through all kinds of off-road conditions. In this version, Nike swapped in React foam for a more responsive ride, added a softer ring of cushioning beneath the heel, and totally redesigned the outsole. The forefoot and heel feature abrasion-resistant rubber for good durability, whereas the midfoot is covered in sticky rubber for solid grip in wet trails and mud. Beyond that, a mesh panel at the forefoot helps these shoes breathe well. Overall, the plusher cushioning and thicker midsole make the Wildhorse a reliable, comfy option for running long and easy.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/nike/wildhorse+7.jpg',
        price: 130,
        brandId: 2,
        gender: 'Male',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'React Infinity Run Flyknit 2',
        description: 'The new trend in stability shoes is less interference, and the Infinity Run adheres to that principle by providing comfort, support, and a smooth ride without impeding your natural movement. Its generous React midsole has a soft step-in feel but firm response, and the rocker-shaped sole promotes a smooth stride. Guide rails along the heel and new Flywire cables at the eyelets combine for a secure, stable feel. Most testers loved it, and according to Nike, the Infinity Run 2 reduced the occurrence of injuries (compared to its longtime stability offering, the Structure 22).',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/nike/react_infinity_run.jpg',
        price: 127,
        brandId: 2,
        gender: 'Female',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Classic Basketball Shoe',
        description: 'The Air Jordan 1 Mid-Man shoe replicates the style of the original AJ 1985. The upper is made of full-bodied leather and nabuk for endurance, comfort and a refined look.The Air Jordan model comes with Air-Sole unit offers a long-lasting comfort and a sustained cushion.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/nike/classic+basketball+shoes.jpg',
        price: 77.95,
        brandId: 2,
        gender: 'Male',
        type: 'Basketball',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Court Legacy',
        description: 'Honoring a history rooted in tennis culture, the Nike Court Legacy brings you a comfy slip-on in a modern, street-worthy design. Made with soft, durable fabric and featuring heritage stitching and a mini-Swoosh design, it lets you blend sport and fashion.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/nike/court_legacy.jpg',
        price: 41.70,
        brandId: 2,
        gender: 'Female',
        type: 'Tenis',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Court Vision Lo Mens',
        description: 'Team up your favorite retro-inspired hoops sneaker design with materials built for modern-day wear when you choose the Nike men\'s Court Vision Low casual sneakers. Retro hoops-inspired casual sneaker design Drawing inspiration from classic 80\'s models Leather and synthetic leather upper Embossed Swoosh for an iconic look Rubber cupsole for durability and traction Style number. Athletic footwear from Finish Line Leather and Synthetic Leather Upper, Rubber Sole Wipe Clean',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/nike/court_vision_lo_mens.jpg',
        price: 89.80,
        brandId: 2,
        gender: 'Male',
        type: 'Sneakers',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Axelion',
        description: 'The Axelion is a timeless favorite. The unique midsole design provides stable arch support and control from the midfoot through the heel. A metalic heel piece with shock-absorbing foam adds cushioning and an eye-catching design in and out of the gym.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/puma/axelion.jpg',
        price: 51.05,
        brandId: 3,
        gender: 'Male',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Cell Fraction',
        description: 'The all new Cell Fraction Wn\'s maximizes our 10CELL technology and combines it with an extremely valuable upper. The tooling features a large 10CELL piece on both the lateral and medial sides for added style, comfort, and stability through a supportive, cell-like structure. Sculpted, full length EVA provides long lasting comfort while rubber in the outsole provides traction. The upper features a bold clamshell construction for fit and ease of entry. A valuable TPU cage and fresh Formstrip branding provide extreme shelf appeal and brand awareness. The Cell Fraction truly pushes our 10CELL offering to new limits.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/puma/cell_fraction.jpg',
        price: 52.20,
        brandId: 3,
        gender: 'Female',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Smash V2',
        description: 'The PUMA smash V2 is the new interpretation of the PUMA smash icon. The tennis inspired silhouette features a soft suede upper with an improved fit. The updated outsole offers a clean look and premium grip and durability. The all time classic is made for daily wear!.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/puma/smash_v2.jpg',
        price: 31.07,
        brandId: 3,
        gender: 'Genderless',
        type: 'Sneaker',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Carina',
        description: 'Carina is taking inspiration from styles from the 80\'s - interpreted to fit today\'s laid-back sneaker look of californian beach towns. The full suede leather upper is accented by a perforated vamp and a synthetic leather PUMA formstripe. The highlight of the shoe is the new cupsole tooling though with a slightly elevated platform sole with texture interest in toe and heel area and cat branding in the medial. The SoftFoam+ sockliner provides superior cushioning and optimal comfort for every step of your day.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/puma/carina.jpg',
        price: 45.95,
        brandId: 3,
        gender: 'Female',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Flashfilm 2.0',
        description: 'These women\'s running shoes add flash to your daily miles. A super comfortable midsole is wrapped in polyurethane film for an eye-catching look. The breathable mesh upper has integrated midfoot support.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/reebok/flashfilm_2.jpg',
        price: 67.30,
        brandId: 4,
        gender: 'Female',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'ZigWild TR 6',
        description: 'These men\'s running shoes look to the unpredictably of the trail to inform their innovative design. The rugged, material-mix upper brings a \'90s vibe into your everyday routine. Fueling every step, the cushioned outsole offers total comfort from heel strike to toe-off.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/reebok/zigwild_tr_6.jpg',
        price: 70.45,
        brandId: 4,
        gender: 'Male',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Princess',
        description: 'Reebok Women\'s Princess Shoes cast their spell with timeless style. You will fall hard for the clean leather upper design with subtle perforations and stitching. The logo sits right below the laces for heritage style. This Reebok sneaker comes with die-cut EVA lightweight cushioning for comfort and high-abrasion rubber outsole for moisture absorption and comfort. The padded foam sockliner adds cushion for support and comfort.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/reebok/princess.jpg',
        price: 60,
        brandId: 4,
        gender: 'Female',
        type: 'Sneaker',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Classic Renaissance',
        description: 'Be legit in these men\'s archive-inspired shoes. Stitching and woven Union Jack logos give them a retro vibe. The upper is made of supple leather for a soft feel and clean look. A memory foam sockliner adds plush comfort.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/reebok/classic_renaissance.jpg',
        price: 49.99,
        brandId: 4,
        gender: 'Male',
        type: 'Sneaker',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Chuck Taylor',
        description: 'The iconic chuck taylor all star high top sneaker shows off our heritage with a classic silhouette and famed star ankle patch. Lightweight canvas and flat laces are emblems of the signature design. Updated with a durable outsole. Ortholite insole for cushioning takes comfort to the next level. Ortholite is a trademark of O2 partners, llc.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/converse/chuck_taylor.jpg',
        price: 85,
        brandId: 5,
        gender: 'Male',
        type: 'Basketball',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Core Ox',
        description: 'Color splash. The low-cut legend since ’57. The Chuck taylor all star low top sneaker keeps it classic. Light and bright color treatments bring a cool wash to the icon. Iconic elements like an Ortholite insole and canvas upper help keep it comfortable. Full spectrum.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/converse/core_ox.jpg',
        price: 50,
        brandId: 5,
        gender: 'Genderless',
        type: 'Sneaker',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: UUIDV4(),
        name: 'Lift Clean Ox',
        description: 'Mood. The laidback legend since \'57. The Converse chuck taylor all star lift sneaker flirts with feminine construction. Canvas upper sits above a platform sole, adding just enough lift.',
        image_url: 'https://footstrapdevbucket.s3.sa-east-1.amazonaws.com/products/converse/lift_clean_ox.jpg',
        price: 109,
        brandId: 5,
        gender: 'Female',
        type: 'Running',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
