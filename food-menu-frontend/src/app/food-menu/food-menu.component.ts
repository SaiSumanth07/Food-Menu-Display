import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent {
  activeTab: string = 'all';
  searchQuery: string = '';
  showFilters: boolean = false;
  itemsToShow: number = 6;
  quickViewItem: any = null;
  detailsExpanded: boolean = false;
  
  menuItems = [
    { 
      id: 1,
      name: 'Garden Fresh Salad', 
      category: 'starters',
      price: 220, 
      description: 'Mixed greens, cherry tomatoes, cucumber, olives, and feta cheese',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      rating: 4.5,
      reviews: 85,
      orders: 320,
      badge: 'Popular',
      isVeg: true,
      isFavorite: false,
      spiceLevel: 1,
      allergens: 'Dairy',
      ingredients: ['Mixed greens', 'Cherry tomatoes', 'Cucumber', 'Olives', 'Feta cheese'],
      nutrition: [
        { label: 'Calories', value: '320 kcal' },
        { label: 'Protein', value: '8g' },
        { label: 'Carbs', value: '12g' },
        { label: 'Fat', value: '25g' }
      ],
    },
    { 
      id: 2,
      name: 'Spicy Chicken Wings', 
      category: 'starters',
      price: 280, 
      description: 'Spicy, crispy wings coated in fiery signature sauce—bold, crunchy, and irresistibly hot. Perfect for heat lovers!',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      rating: 4.7,
      reviews: 112,
      orders: 450,
      badge: "Chef's Special",
      isVeg: false,
      isFavorite: false,
      spiceLevel: 4,
      allergens: 'Gluten',
      ingredients: ['Chicken wings', 'Hot sauce', 'Butter', 'Garlic', 'Spices'],
      nutrition: [
        { label: 'Calories', value: '450 kcal' },
        { label: 'Protein', value: '28g' },
        { label: 'Carbs', value: '5g' },
        { label: 'Fat', value: '35g' }
      ],
    },
    { 
      id: 3,
      name: 'Tomato Bruschetta', 
      category: 'starters',
      price: 190, 
      description: 'Toasted bread topped with tomatoes, garlic, and fresh basil',
      image: 'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d',
      rating: 4.3,
      reviews: 67,
      isVeg: true,
      isFavorite: false
    },
    { 
      id: 4,
      name: 'Margherita Pizza', 
      category: 'main',
      price: 350, 
      description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
      rating: 4.8,
      reviews: 120,
      badge: "Chef's Special",
      isVeg: true,
      isFavorite: false
    },
    { 
      id: 5,
      name: 'Classic Cheeseburger', 
      category: 'main',
      price: 280, 
      description: 'Beef patty with cheddar cheese, lettuce, tomato, and special sauce',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      rating: 4.7,
      reviews: 95,
      isVeg: false,
      isFavorite: false
    },
    { 
      id: 6,
      name: 'Pasta Alfredo', 
      category: 'main',
      price: 320, 
      description: 'Fettuccine pasta with creamy alfredo sauce and parmesan cheese',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
      rating: 4.6,
      reviews: 78,
      badge: 'New',
      isVeg: true,
      isFavorite: false
    },
    { 
      id: 7,
      name: 'Double Bacon Burger', 
      category: 'main',
      price: 380, 
      description: 'Two beef patties with bacon, american cheese, and barbecue sauce',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
      rating: 4.9,
      reviews: 142,
      badge: 'Bestseller',
      isVeg: false,
      isFavorite: false
    },
    { 
      id: 8,
      name: 'Veggie Supreme Burger', 
      category: 'main',
      price: 260, 
      description: 'Plant-based patty with avocado, lettuce, tomato, and vegan mayo',
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae',
      rating: 4.4,
      reviews: 58,
      isVeg: true,
      isFavorite: false
    },
    { 
      id: 9,
      name: 'Stuffed French Toast', 
      category: 'desserts',
      price: 240, 
      description: 'Brioche bread stuffed with cream cheese and topped with berries',
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
      rating: 4.7,
      reviews: 92,
      badge: 'Popular',
      isVeg: true,
      isFavorite: false
    },
    { 
      id: 10,
      name: 'Chocolate Lava Cake', 
      category: 'desserts',
      price: 290, 
      description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
      rating: 4.9,
      reviews: 135,
      isVeg: true,
      isFavorite: false
    },
    { 
      id: 11,
      name: 'Tropical Smoothie', 
      category: 'drinks',
      price: 180, 
      description: 'Blend of mango, pineapple, banana, and coconut milk',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
      rating: 4.4,
      reviews: 65,
      badge: 'Healthy',
      isVeg: true,
      isFavorite: false
    },
    { 
      id: 12,
      name: 'Iced Caramel Latte', 
      category: 'drinks',
      price: 160, 
      description: 'Espresso with milk, ice and caramel syrup',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd',
      rating: 4.5,
      reviews: 87,
      isVeg: true,
      isFavorite: false
    },
    { 
      id: 13,
      name: 'Strawberry Lemonade', 
      category: 'drinks',
      price: 140, 
      description: 'Freshly squeezed lemonade with strawberry puree',
      image: 'https://images.unsplash.com/photo-1551029506-0807df4e2031',
      rating: 4.6,
      reviews: 73,
      badge: 'New',
      isVeg: true,
      isFavorite: false
    }
  ];

  filteredItems: any[] = [];
  cartItems: any[] = [];

  constructor() {
    this.filterItems();
  }
  clearSearch() {
    this.searchQuery = '';
    this.filterItems();
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.filterItems();
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  filterItems() {
    this.filteredItems = this.menuItems.filter(item => {
      const categoryMatch = 
        this.activeTab === 'all' || 
        item.category === this.activeTab;
      
      const searchMatch = 
        !this.searchQuery || 
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      return categoryMatch && searchMatch;
    });
  }

  onSearch() {
    this.filterItems();
  }

  toggleFavorite(item: any) {
    item.isFavorite = !item.isFavorite;
  }

  openQuickView(item: any) {
    this.quickViewItem = { 
      ...item,
      quantity: 1,
      specialInstructions: '',
      images: [item.image, ...(item.additionalImages || [])],
      spiceLevel: item.spiceLevel || 0,
      allergens: item.allergens || '',
      orders: item.orders || 0,
      ingredients: item.ingredients || ['Not specified'],
      nutrition: item.nutrition || [
        { label: 'Calories', value: 'Not specified' },
        { label: 'Protein', value: 'Not specified' },
        { label: 'Carbs', value: 'Not specified' },
        { label: 'Fat', value: 'Not specified' }
      ],
      options: item.options ? JSON.parse(JSON.stringify(item.options)) : []
    };
    this.detailsExpanded = false;
    document.body.style.overflow = 'hidden';
  }

  closeQuickView() {
    this.quickViewItem = null;
    document.body.style.overflow = '';
  }

  updateQuantity(change: number) {
    if (this.quickViewItem) {
      const newQuantity = this.quickViewItem.quantity + change;
      if (newQuantity > 0 && newQuantity < 10) {
        this.quickViewItem.quantity = newQuantity;
      }
    }
  }

  addToCart(item: any) {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({...item, quantity: 1});
    }
  }

  addToCartFromQuickView() {
    if (this.quickViewItem) {
      let totalPrice = this.quickViewItem.price;
      let selectedOptions: any[] = [];
      
      if (this.quickViewItem.options) {
        this.quickViewItem.options.forEach((group: any) => {
          group.items.forEach((option: any) => {
            if (option.selected) {
              totalPrice += option.price;
              selectedOptions.push({
                group: group.name,
                option: option.name,
                price: option.price
              });
            }
          });
        });
      }

      const itemToAdd = {
        ...this.quickViewItem,
        price: totalPrice,
        specialInstructions: this.quickViewItem.specialInstructions,
        selectedOptions: selectedOptions
      };

      this.addToCart(itemToAdd);
      this.closeQuickView();
    }
  }

  calculateTotalPrice(): number {
    if (!this.quickViewItem) return 0;
    
    let total = this.quickViewItem.price * this.quickViewItem.quantity;
    
    if (this.quickViewItem.options) {
      this.quickViewItem.options.forEach((group: any) => {
        group.items.forEach((option: any) => {
          if (option.selected) {
            total += option.price * this.quickViewItem.quantity;
          }
        });
      });
    }
    
    return total;
  }

  loadMore() {
    this.itemsToShow += 6;
  }

  getVisibleItems() {
    return this.filteredItems.slice(0, this.itemsToShow);
  }

  getCategoryTitle(category: string): string {
    switch(category) {
      case 'starters': return 'Starters & Appetizers';
      case 'main': return 'Main Course';
      case 'desserts': return 'Desserts';
      case 'drinks': return 'Drinks & Beverages';
      default: return 'All Items';
    }
  }

  getItemsByCategory(category: string) {
    return this.filteredItems.filter(item => item.category === category);
  }

  getUniqueCategories(): string[] {
    const categories = new Set(this.filteredItems.map(item => item.category));
    return Array.from(categories).sort().reverse();
  }
}
