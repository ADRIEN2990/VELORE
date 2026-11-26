
const products = [
    {
        id: 1,
        name: "Leather Cross Jeans",
        brand: "Chrome Hearts",
        category: "clothing",
        price: 19000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnm4hA0gZINRkZAvDza2CqIOBs-dBVesmW0z3FpdIDVHl0pCpgETTBghM&s=10",
        tag: "Exclusive"
    },
    {
        id: 2,
        name: "Alexander McQueen Oversized Lace-Up Sneakers",
        brand: "Alexander McQueen",
        category: "shoes",
        price: 13043,
        image: "https://images.stockx.com/360/Alexander-McQueen-Oversized-Black-Shiny-Sole/Images/Alexander-McQueen-Oversized-Black-Shiny-Sole/Lv2/img01.jpg?w=480&q=60&dpr=1&updated_at=1635342558&h=320",
        tag: "New Season"
    },
    {
        id: 3,
        name: "Hoodie Nano BB",
        brand: "Balenciaga",
        category: "clothing",
        price: 20650,
        image: "https://cdn-images.farfetch-contents.com/30/88/51/64/30885164_59811857_1000.jpg",
        tag: "Sale"
    },
    {
        id: 4,
        name: "Chamarra Verith capitonada con capucha",
        brand: "Moncler",
        category: "clothing",
        price: 37492,
        image: "https://cdn-images.farfetch-contents.com/36/76/23/70/36762370_72504011_1000.jpg",
        tag: "New Season"
    },
    {
        id: 5,
        name: "Knight Bellmount Hooded Jacket",
        brand: "Burberry",
        category: "clothing",
        price: 1387,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_4wU-CIunPtE3_CGD9G4r3MsbsfVyWmt_ebTfTWNAPS9HaaOG49S-7iqarc0o6s_kLs8R-cdw_EHbWyfDbSRyBtxmOCRx0cquiaEVOcSpAMWuvkyXwO20iDk",
        tag: ""
    },
    {
        id: 6,
        name: "Zucca FF Logo Leather Sneakers",
        brand: "Fendi",
        category: "shoes",
        price: 3547,
        image: "https://images.stockx.com/images/Fendi-FF-Leather-Low-Top-White-Brown.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=60&dpr=1&trim=color&updated_at=1621532388",
        tag: "Sale"
    },
    {
        id: 7,
        name: "Hove Check Hoodie Khaki",
        brand: "Burberry",
        category: "clothing",
        price: 11074,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJYkaS9RNRsBfpqWkWYSXWuQG4GKw_BIy7BmqfM7qRlHn-kHAm31sSPGqlV84cSPe-OGIXmulFiT_hXmPGr_mwH7HyG6KE4vinH0Q9N1IuHSU4NpYAm80W4A",
        tag: "Sale"
    },
    {
        id: 8,
        name: "Nike P-6000",
        brand: "Nike",
        category: "shoes",
        price: 1889,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRSNTz6X6u8qZLDE9cspc2veak-FlWF284AU8RVCuoi3NhkvgfpYYwPEFEurhf0UdWnQFrXO9BJo-TBT7AYrG2ispHG8yBhQYwtgIbEYO5bibUfFcCzLRFRcvM",
        tag: "Sale"
    },
    {
        id: 9,
        name: "Nike Air Max Nuaxis",
        brand: "Nike",
        category: "shoes",
        price: 1970,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZOGIC0gtFTBe0G1ASMpUq5qzM2prFjH1trtZqVfuBBEFq3uxzjypo7GqkrOm1RZeS9W2vfwtZlkV7Sa-7FWccbRHTY87YNnE3Tv3lleYxwkotJpYNOWbjyEw",
        tag: ""
    },
    {
        id: 10,
        name: "Essentials Cat Cap",
        brand: "PUMA",
        category: "accessories",
        price: 5911,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSoZmK2qjWDdK5s3dAQB1q52c1CTl_667v1LHw9H-kOPxN8auyMCUWCVYa_mY8pVFYtI-a-Qq9LAS6Qhb9BAz-P7YmaVAejLsHi1N-jg0cJo4Vmyqe_yvqqHg",
        tag: ""
    },
    {
        id: 11,
        name: "Dunamis EVO SP0106",
        brand: "adidas",
        category: "accessories",
        price: 3383,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTq3Y8sTS6eajZ38qYjv58mYwHrKQ9Y0ss5m3H--kYkQJJX9m1TH6L-KxEvKTDTSWq8QXApHFtvOOz1qvMkL7qO1hGS6zKEpwm3svlD0picaWV7XAt0V-1-qw",
        tag: "New"
    },
    {
        id: 12,
        name: "Grant Chronograph FS4812",
        brand: "Fossil",
        category: "accessories",
        price: 3000,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQO6slfTG6i2YN5TYESZTO1Id4MZyPQH1mqfhTnur6gMC7X3jTyrJagf8GT6K5kiN_ZhcggXSvwAXe_QuGYW3KSFXkNxDQrYA",
        tag: ""
    },
    {
        id: 13,
        name: "Sports Pack Backpack Negra",
        brand: "New Era",
        category: "accessories",
        price: 2299,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfjU1w1R87z9k6Isg22Y0zytF5ats4uDcGQwSui5wmYtdexNpAp_ZJU6Bzp997iWdY-U08We7iHPjsC0XxOTYOZ9fALjmbfTVao0gGCpvzAuWbyw_RZJOHm4c",
        tag: ""
    },
    {
        id: 14,
        name: "Hydrenalite Down Jacket",
        brand: "The North Face",
        category: "clothing",
        price: 2994,
        image: "https://assets.thenorthface.eu/images/t_img/f_auto%2Ch_1300%2Ce_sharpen%3A60%2Cw_1300/dpr_2.0/v1773072445/NF0A88XUJK3-ALT20/Mens-Hydrenalite-Down-Jacket-TNF-TNF-Black-ALT20.jpg",
        tag: "Sale"
    },
    {
        id: 15,
        name: "Hybrid RE:FIBRE Sherpa Jacket",
        brand: "PUMA",
        category: "clothing",
        price: 2299,
        image: "https://sportmania.hu/cdn/shop/files/puma-hybrid-re-fibre-sherpa-694562-ferfi-dzseki-bezs-beige-cream-sportmaniahu-2.jpg?v=1792996965&width=1780",
        tag: ""
    },
    {
        id: 16,
        name: "Blazer Mid '77 Vintage Reverse Logo",
        brand: "Nike",
        category: "shoes",
        price: 2024,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR3qihFW6VILMooNTn9E9GvzYh8QdwVClEoFB_YP3P2Pl4d4tTQYtSjwmETzddQIeoO9_8Y5xG5eUzH1lIqqjKDJQf4AD1yHshqTiN5eIAbvpZSeFDLE0s",
        tag: ""
    },
    {
        id: 17,
        name: "Superstar Home of Classics",
        brand: "adidas",
        category: "shoes",
        price: 2399,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSAqyPCCnmeubPDVCd_AM4hXWTekMJnJWCuKbsBokGU7kEm57Y5xtguSfeDYPo2EISX8UvKEgsWd3VUfT2jNqFUlPaG3UjgFNp-hz6hrS4VC5Dejc7LuSUsnw",
        tag: ""
    },
    {
        id: 18,
        name: "Osborn Cargo Pants",
        brand: "Carhartt WIP",
        category: "clothing",
        price: 3014,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMViQO8fOofoN5Qbx1DUkMRiVw8Od-h0InjrEngNPUoLPqgxxX8ae4OqNrQ-8koa7kZ1NN6qc2HpDSl12NBmTbzNpIt_r-Ow0nq8xCG1m_n9YsaiRCj0Thiw",
        tag: ""
    },
    {
        id: 19,
        name: "ACG Therma-FIT Fleece Allover Print Pullover Hoodie",
        brand: "Nike",
        category: "clothing",
        price: 1951,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8Ac4HgGzOey7AQHNaRAFi-Fzz5Q6TkYc5tqI9tlf5qROFJ9vLC7viNejGct-zdTRsN-alxteIJzp1VZ78yb9W6Jb1kV39JR9ZBa_5AMnTGqNavjcbCujRcg",
        tag: "Sale"
    },
    {
        id: 20,
        name: "Sportswear Tech Fleece Joggers",
        brand: "Nike",
        category: "clothing",
        price: 2099,
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSL-UH01ACqxaCC4Ls-AtPJd0p515g0szHtb0aKoUVdWIbgcImk",
        tag: ""
    }
];
