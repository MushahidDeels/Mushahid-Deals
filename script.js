
// Sample product data
const products = [
    {
        id: 1,
        name: "Smart Watch Pro",
        description: "Stay connected with this feature-packed smartwatch. Track your fitness goals, receive notifications, and monitor your heart rate with this sleek wearable. With a battery that lasts up to 7 days and water resistance up to 50 meters, it's perfect for active lifestyles. The always-on display and customizable watch faces let you express your style. Stay connected with this feature-packed smartwatch. Track your fitness goals, receive notifications, and monitor your heart rate with this sleek wearable. With a battery that lasts up to 7 days and water resistance up to 50 meters, it's perfect for active lifestyles. The always-on display and customizable watch faces let you express your style.",
        category: "electronics",
        affiliateLink: "https://amzn.to/3GwgVc0",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1553545985-1e0d8781d5db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1558126319-c9feecbf57ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
    },
    {
        id: 2,
        name: "Air Purifier Deluxe",
        description: "Breathe easier with our advanced air purifier. Removes 99.97% of airborne particles including dust, pollen, and pet dander. Features a 4-stage filtration system with true HEPA filter and activated carbon. Smart sensors automatically adjust fan speed based on air quality. Whisper-quiet operation makes it perfect for bedrooms and offices.",
        category: "home",
        affiliateLink: "https://amzn.to/3GwgVc0",
        image: "https://images.unsplash.com/photo-1581578021470-9c7e138d45ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1581578021470-9c7e138d45ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1595526114035-0c45a16a0422?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 3,
        name: "Wireless Headphones",
        description: "Experience crystal-clear sound with our premium wireless headphones. Featuring advanced noise cancellation technology, these headphones let you immerse yourself in your music without distractions. With 30-hour battery life, Bluetooth 5.0 connectivity, and memory foam ear cushions for all-day comfort, they're perfect for travel, work, or relaxation. The built-in microphone allows for clear calls, and the sleek design makes them a stylish accessory.",
        category: "electronics",
        affiliateLink: "https://amzn.to/3GwgVc0",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 4,
        name: "Blender Pro 5000",
        description: "Powerful 1500W blender with 8 preset programs for smoothies, soups, nut butters, and more. The durable stainless steel blades and BPA-free pitcher make it perfect for daily use. Self-cleaning function and dishwasher-safe parts for easy maintenance. The large LCD display and intuitive controls make operation simple.",
        category: "home",
        affiliateLink: "https://amzn.to/3GwgVc0",
        image: "https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1603105037880-8802c0f0a71a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1603532648955-a039f2e7da43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1581093458798-4b4b1b0b5b0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 5,
        name: "Yoga Mat Premium",
        description: "Eco-friendly yoga mat made from natural tree rubber. Extra thick 6mm cushioning provides joint support and comfort. Non-slip surface ensures stability during all poses. The moisture-resistant technology prevents slipping even during intense workouts. Lightweight and comes with a carrying strap for easy transport.",
        category: "health",
        affiliateLink: "https://amzn.to/3GwgVc0",
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1593810451137-5dc55105dace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1599067323476-8ea1b76f204f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 6,
        name: "Designer Handbag",
        description: "Luxurious designer handbag crafted from premium vegan leather. Spacious interior with multiple compartments for organization. Features a detachable shoulder strap for versatile carrying options. The timeless design and quality craftsmanship make it a perfect accessory for any occasion. Water-resistant and durable for everyday use.",
        category: "fashion",
        affiliateLink: "https://amzn.to/3GwgVc0",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 7,
        name: "Water Pack",
        description: "Luxurious designer handbag crafted from premium vegan leather. Spacious interior with multiple compartments for organization. Features a detachable shoulder strap for versatile carrying options. The timeless design and quality craftsmanship make it a perfect accessory for any occasion. Water-resistant and durable for everyday use.",
        category: "fashion",
        affiliateLink: "https://amzn.to/3GwgVc0",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 8,
        name: "Water Pack",
        description: "Luxurious designer handbag crafted from premium vegan leather. Spacious interior with multiple compartments for organization. Features a detachable shoulder strap for versatile carrying options. The timeless design and quality craftsmanship make it a perfect accessory for any occasion. Water-resistant and durable for everyday use.",
        category: "fashion",
        affiliateLink: "https://amzn.to/3GwgVc0",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ]
    }
];

// DOM Elements
const navMenu = document.getElementById('navMenu');
const mobileToggle = document.getElementById('mobileToggle');
const productsGrid = document.getElementById('productsGrid');
const allproducts = document.getElementById('allproducts');
const filterButtons = document.querySelectorAll('.filter-btn');
const relatedGrid = document.getElementById('relatedProductsGrid');
const productDetailContainer = document.getElementById('productDetailContainer');
const copyToast = document.getElementById('copyToast');

// Mobile Menu Toggle
mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Generate product cards
function generateProductCards(productsToShow, container) {
    if (!container) {
        console.error("Container element not found");
        return;
    }

    container.innerHTML = '';
    
    productsToShow.forEach(product => {
        try {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-content">
                    <span class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">
                        ${product.description}
                        <span class="read-more">Read more</span>
                    </p>
                    <div class="product-actions">
                        <a href="${product.affiliateLink}" target="_blank" class="btn btn-deal btn-sm">See Deal</a>
                        <button class="btn btn-copy copy-link" data-product-id="${product.id}">
                            <i class="fas fa-copy"></i> Copy Link
                        </button>
                    </div>
                </div>
            `;
            // Add click event to show product detail
            card.addEventListener('click', (e) => {
                // Don't open detail if clicked on buttons
                if (e.target.classList.contains('btn') || e.target.classList.contains('read-more')) {
                    return;
                }
                showProductDetail(product.id);
                showPage('product-detail');

                // Update URL without reloading page
                window.history.pushState({productId: product.id}, '', `#product-${product.id}`);
            });
            container.appendChild(card);
        } catch (e) {
            console.error("Error generating product card: ", e);
        }
    });
    
    // Initialize read more functionality
    initReadMore();
    // Initialize copy link functionality
    initCopyLink();
}

// Initialize read more functionality
function initReadMore() {
    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const description = this.parentElement;
            description.classList.toggle('expanded');
            this.textContent = description.classList.contains('expanded') ? 'Read less' : 'Read more';
        });
    });
}

// Initialize copy link functionality
function initCopyLink() {
    document.querySelectorAll('.copy-link').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-product-id');
           
            // Create a shareable link that works with GitHub Pages
            const productLink = `${window.location.origin}${window.location.pathname}#product-${productId}`;
            
            // Copy to clipboard
            navigator.clipboard.writeText(productLink).then(() => {
                showCopyToast();
            });
        });
    });
}

// Show copy toast notification
function showCopyToast() {
    copyToast.classList.add('show');
    
    setTimeout(() => {
        copyToast.classList.remove('show');
    }, 3000);
}

// Initialize thumbnail gallery
function initThumbnailGallery() {
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            const mainImg = document.getElementById('mainProductImage');
            if (mainImg) {
                mainImg.src = this.src;
            }
            
            // Update active state
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Initialize category filtering
function initCategoryFilter() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            let filteredProducts;
            if (category === 'all') {
                filteredProducts = products;
            } else {
                filteredProducts = products.filter(product => product.category === category);
            }
            
            // generateProductCards(filteredProducts, productsGrid);
            generateProductCards(filteredProducts, allproducts);
        });
    });
}

// Show product detail
function showProductDetail(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;
    
    productDetailContainer.innerHTML = `
        <div class="gallery">
            <img id="mainProductImage" src="${product.image}" class="gallery-main" alt="${product.name}">
            <div class="thumbnail-container">
                ${product.thumbnails.map((thumb, index) => `
                    <img src="${thumb}" class="thumbnail ${index === 0 ? 'active' : ''}" alt="Thumbnail ${index + 1}">
                `).join('')}
            </div>
        </div>
        
        <div class="detail-content">
            <h1>${product.name}</h1>
            <div class="product-meta">
                <span class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
            </div>
            
            
            <p class="product-description expanded">
                ${product.description}
            </p>
            
            <div class="detail-actions">
            <a href="${product.affiliateLink}" target="_blank" class="btn btn-primary btn-lg">See Deal</a>
            <button class="btn btn-copy btn-lg copy-link" data-product-id="${product.id}">
                <i class="fas fa-copy"></i> Copy Link
            </button>
            </div>
        </div>
    `;
    
    // Initialize thumbnail gallery
    initThumbnailGallery();
    // Initialize copy link functionality
    initCopyLink();
    
    // Generate related products
    generateRelatedProducts(product.id, product.category);
}

// Generate related products
function generateRelatedProducts(currentId, category) {
    // Filter products in same category (excluding current product)
    const relatedProducts = products.filter(
        p => p.category === category && p.id !== currentId
    );
    
    generateRelatedProductCards(relatedProducts.slice(0, 3), relatedGrid);
}

// Generate related product cards
function generateRelatedProductCards(productsToShow, container) {
    container.innerHTML = '';
    
    productsToShow.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <span class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-actions">
                    <a href="${product.affiliateLink}" target="_blank" class="btn btn-deal btn-sm">See Deals</a>
                </div>
            </div>
        `;
        // Add click event to show product detail
        card.addEventListener('click', () => {
            showProductDetail(product.id);
            showPage('product-detail');
                    
                    // Update URL without reloading page
                    window.history.pushState({productId: product.id}, '', `#product-${product.id}`);
        });
        container.appendChild(card);
    });
}

// Page navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const pageElement = document.getElementById(pageId);
            if (pageElement) {
                pageElement.classList.add('active');
            } else {
                console.error(`Page with id ${pageId} not found`);
            }
    // document.getElementById(pageId).classList.add('active');
    
    // Update navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Set home as active if not on a nav page
    if (pageId !== 'home' && pageId !== 'products' && pageId !== 'about' && 
        pageId !== 'contact' && pageId !== 'privacy') {
        document.querySelector('.nav-link').classList.add('active');
    } else {
        document.querySelector(`.nav-link[onclick="showPage('${pageId}')"]`).classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});


 // Handle browser back/forward buttons
 window.addEventListener('popstate', (event) => {
    const hash = window.location.hash;
    
    if (hash.startsWith('#product-')) {
        const productId = hash.split('-')[1];
        showProductDetail(productId);
        showPage('product-detail');
    } else {
        // Show the page based on hash
        const pageId = hash.substring(1) || 'home';
        showPage(pageId);
    }
});

// Check URL on initial load
function checkInitialURL() {
    const hash = window.location.hash;
    
    if (hash.startsWith('#product-')) {
        const productId = hash.split('-')[1];
        showProductDetail(productId);
        showPage('product-detail');
    } else if (hash) {
        // Show the page based on hash
        const pageId = hash.substring(1);
        showPage(pageId);
    }
}


// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Generate initial product cards
    generateProductCards(products, productsGrid);
    generateProductCards(products, allproducts);
    
    // Initialize category filtering
    initCategoryFilter();
    
    // Initialize copy link functionality
    initCopyLink();

    // Check URL for deep linking
    checkInitialURL();
});
