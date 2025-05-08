"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Filter, X, ChevronLeft, ChevronRight } from "lucide-react";
import "./GlassRailingsGallery.css";
import { GalleryImages } from "../../assets/Images/productsPageEndUserImages/CompiledImages";
import { Hero } from "../../components";
import { seamless1 } from "../../assets/Images";

// Define types for our data structure
type CategoryName =
  | "application"
  | "structure"
  | "feature"
  | "material"
  | "finish";

type SubCategory = {
  [key in CategoryName]: string[];
};

type ProductImage = {
  src: string;
  categories: string[];
  description?: string;
};

// Product categories definition
const ProductCategories: SubCategory = {
  application: ["staircase", "balcony", "terrace", "pool", "deck"],
  structure: ["villa", "apartment", "building", "duplex"],
  feature: ["seamless", "led", "robust"],
  material: ["aluminium", "stainless-steel", "glass", "wood"],
  finish: ["black", "champagne", "brown", "silver"],
};

// Sample product images data
const sampleProductImages: ProductImage[] = [...GalleryImages];

export const GlassRailingsGallery = () => {
  // Using the sample product images directly
  const productImages = sampleProductImages;

  // State for selected filters
  const [filters, setFilters] = useState<Record<CategoryName, string[]>>({
    application: [],
    structure: [],
    feature: [],
    material: [],
    finish: [],
  });

  // State for filtered images
  const [filteredImages, setFilteredImages] =
    useState<ProductImage[]>(productImages);

  // State for filter panel visibility
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  // State for selected image detail view
  const [selectedImage, setSelectedImage] = useState<ProductImage | null>(null);

  // State for scrollbar visibility on mobile
  const [activeScrollCategory, setActiveScrollCategory] = useState<
    string | null
  >(null);

  // State for active category in mobile filter view
  const [activeMobileCategory, setActiveMobileCategory] =
    useState<CategoryName>("application");

  // State for related images in detail view
  const [currentCategoryImages, setCurrentCategoryImages] = useState<
    ProductImage[]
  >([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Refs for scrolling
  const scrollContainerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const scrollTimerRef = useRef<number | null>(null);

  // Track if user is touching the screen (for mobile)
  const isTouchingRef = useRef<boolean>(false);

  // Handle filter change
  const handleFilterChange = (
    category: CategoryName,
    subcategory: string,
    isChecked: boolean
  ) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };

      if (category === "feature") {
        // For features, we allow multiple selections (checkboxes)
        if (isChecked) {
          newFilters[category] = [...newFilters[category], subcategory];
        } else {
          newFilters[category] = newFilters[category].filter(
            (item) => item !== subcategory
          );
        }
      } else {
        // For other categories, we allow only one selection (radio buttons)
        if (isChecked) {
          newFilters[category] = [subcategory];
        } else {
          newFilters[category] = [];
        }
      }

      return newFilters;
    });
  };

  // Filter images based on selected filters
  useEffect(() => {
    const activeFilters = Object.entries(filters).flatMap(
      ([_, values]) => values
    );

    if (activeFilters.length === 0) {
      setFilteredImages(productImages);
      return;
    }

    const filtered = productImages.filter((image) => {
      // Check if the image has all the selected categories
      return activeFilters.every((filter) => image.categories.includes(filter));
    });

    setFilteredImages(filtered);
  }, [filters, productImages]);

  // Group images by category for display
  const getImagesByCategory = (category: string): ProductImage[] => {
    return filteredImages.filter((image) =>
      image.categories.includes(category)
    );
  };

  // Scroll handlers
  const scroll = (category: string, direction: "left" | "right") => {
    const container = scrollContainerRefs.current[category];
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }

      // Make sure scrollbar is visible during programmatic scrolling
      handleScrollStart(category);
    }
  };

  // Handle scroll start for mobile
  const handleScrollStart = (category: string) => {
    setActiveScrollCategory(category);

    // Clear any existing timer
    if (scrollTimerRef.current !== null) {
      window.clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = null;
    }
  };

  // Handle scroll end for mobile
  const handleScrollEnd = () => {
    // Only set timer if user is not actively touching
    if (!isTouchingRef.current) {
      // Set a timer to hide the scrollbar after 5 seconds
      if (scrollTimerRef.current !== null) {
        window.clearTimeout(scrollTimerRef.current);
      }

      scrollTimerRef.current = window.setTimeout(() => {
        setActiveScrollCategory(null);
        scrollTimerRef.current = null;
      }, 5000); // 5 seconds
    }
  };

  // Handle touch start
  const handleTouchStart = (category: string) => {
    isTouchingRef.current = true;
    handleScrollStart(category);
  };

  // Handle touch end
  const handleTouchEnd = () => {
    isTouchingRef.current = false;
    handleScrollEnd();
  };

  // Toggle filter panel
  const toggleFilterPanel = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      application: [],
      structure: [],
      feature: [],
      material: [],
      finish: [],
    });
  };

  // Get active filter count
  const getActiveFilterCount = (): number => {
    return Object.values(filters).flat().length;
  };

  // Find images from the same category as the selected image
  const findRelatedImages = (image: ProductImage): ProductImage[] => {
    // Find a category to group by (prioritize application, then structure, etc.)
    const categoryTypes: CategoryName[] = [
      "application",
      "structure",
      "feature",
      "material",
      "finish",
    ];

    let categoryImages: ProductImage[] = [];

    // Try to find a category with multiple images
    for (const catType of categoryTypes) {
      const matchingCat = image.categories.find((cat) =>
        ProductCategories[catType].includes(cat)
      );

      if (matchingCat) {
        const images = getImagesByCategory(matchingCat);
        if (images.length > 1) {
          categoryImages = images;
          break;
        }
      }
    }

    // If no category with multiple images found, use all filtered images
    if (categoryImages.length <= 1) {
      categoryImages = filteredImages;
    }

    return categoryImages;
  };

  // Open image detail view
  const openImageDetail = (image: ProductImage) => {
    const relatedImages = findRelatedImages(image);
    setCurrentCategoryImages(relatedImages);
    const imageIndex = relatedImages.findIndex((img) => img.src === image.src);
    setCurrentImageIndex(imageIndex >= 0 ? imageIndex : 0);
    setSelectedImage(image);
  };

  // Close image detail view
  const closeImageDetail = () => {
    setSelectedImage(null);
  };

  // Navigate to previous image in detail view
  const goToPreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentCategoryImages.length <= 1) return;

    const newIndex =
      (currentImageIndex - 1 + currentCategoryImages.length) %
      currentCategoryImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(currentCategoryImages[newIndex]);
  };

  // Navigate to next image in detail view
  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentCategoryImages.length <= 1) return;

    const newIndex = (currentImageIndex + 1) % currentCategoryImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(currentCategoryImages[newIndex]);
  };

  // Select a specific image from thumbnails
  const selectThumbnailImage = (index: number) => {
    setCurrentImageIndex(index);
    setSelectedImage(currentCategoryImages[index]);
  };

  // Handle quote request
  const handleGetQuote = () => {
    // This would typically open a form or redirect to a contact page
    alert("Quote request functionality will be implemented here");
  };

  // Set active mobile category
  const setMobileCategory = (category: CategoryName) => {
    setActiveMobileCategory(category);
  };

  // Render category rows
  const renderCategoryRow = (categoryName: string, title: string) => {
    const images = getImagesByCategory(categoryName);

    if (images.length === 0) return null;

    return (
      <div className="category-row" key={categoryName}>
        <div className="category-header">
          <h2>{title}</h2>
        </div>
        <div className="scroll-container-wrapper">
          <button
            className="scroll-button left"
            onClick={() => scroll(categoryName, "left")}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            className="scroll-container-outer"
            onMouseEnter={() => handleScrollStart(categoryName)}
            onMouseLeave={() => setActiveScrollCategory(null)}
          >
            <div
              className={`scroll-container ${
                activeScrollCategory === categoryName ? "scrolling" : ""
              }`}
              ref={(el) => (scrollContainerRefs.current[categoryName] = el)}
              onTouchStart={() => handleTouchStart(categoryName)}
              onTouchEnd={handleTouchEnd}
              onScroll={() => {
                if (activeScrollCategory !== categoryName) {
                  handleScrollStart(categoryName);
                  handleScrollEnd();
                }
              }}
            >
              {images.map((image, index) => (
                <div
                  className="image-card"
                  key={`${categoryName}-${index}`}
                  onClick={() => openImageDetail(image)}
                >
                  <div className="image-container">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={`${categoryName} ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="image-overlay">
                    <div className="image-categories">
                      {image.categories.slice(0, 3).map((cat) => (
                        <span key={cat} className="category-tag">
                          {cat}
                        </span>
                      ))}
                      {image.categories.length > 3 && (
                        <span className="category-tag">
                          +{image.categories.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="scroll-button right"
            onClick={() => scroll(categoryName, "right")}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    );
  };

  // Render desktop filter section
  const renderDesktopFilters = () => {
    return (
      <div className="filters-container">
        {Object.entries(ProductCategories).map(([category, subcategories]) => (
          <div className="filter-category" key={category}>
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="filter-options">
              {subcategories.map((subcategory) => {
                const isFeature = category === "feature";
                const isChecked =
                  filters[category as CategoryName].includes(subcategory);

                return (
                  <label
                    className={`filter-option ${isChecked ? "selected" : ""}`}
                    key={subcategory}
                  >
                    <input
                      type={isFeature ? "checkbox" : "radio"}
                      name={isFeature ? `${category}-${subcategory}` : category}
                      checked={isChecked}
                      onChange={(e) =>
                        handleFilterChange(
                          category as CategoryName,
                          subcategory,
                          e.target.checked
                        )
                      }
                    />
                    <span>{subcategory}</span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Render mobile two-panel filter section
  const renderMobileFilters = () => {
    return (
      <div className="mobile-filters-container">
        {/* Left panel - Categories */}
        <div className="mobile-filter-categories">
          {Object.keys(ProductCategories).map((category) => (
            <div
              key={category}
              className={`mobile-category-item ${
                activeMobileCategory === category ? "active" : ""
              }`}
              onClick={() => setMobileCategory(category as CategoryName)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
          ))}
        </div>

        {/* Right panel - Subcategories */}
        <div className="mobile-filter-subcategories">
          <div className="filter-options">
            {ProductCategories[activeMobileCategory].map((subcategory) => {
              const isFeature = activeMobileCategory === "feature";
              const isChecked =
                filters[activeMobileCategory].includes(subcategory);

              return (
                <label
                  className={`filter-option ${isChecked ? "selected" : ""}`}
                  key={subcategory}
                >
                  <input
                    type={isFeature ? "checkbox" : "radio"}
                    name={
                      isFeature
                        ? `${activeMobileCategory}-${subcategory}`
                        : activeMobileCategory
                    }
                    checked={isChecked}
                    onChange={(e) =>
                      handleFilterChange(
                        activeMobileCategory,
                        subcategory,
                        e.target.checked
                      )
                    }
                  />
                  <span>{subcategory}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Render filter section
  const renderFilters = () => {
    return (
      <div className={`filters-section ${isFilterOpen ? "open" : "closed"}`}>
        <div className="filters-header">
          <h2>Filters</h2>
          <button className="clear-filters" onClick={clearAllFilters}>
            Clear All
          </button>
        </div>
        {/* Desktop filters */}
        {renderDesktopFilters()}

        {/* Mobile two-panel filters */}
        {renderMobileFilters()}
      </div>
    );
  };

  // Render active filters
  const renderActiveFilters = () => {
    const activeFilters = Object.entries(filters).flatMap(
      ([category, values]) => values.map((value) => ({ category, value }))
    );

    if (activeFilters.length === 0) return null;

    return (
      <div className="active-filters">
        {activeFilters.map(({ category, value }) => (
          <div className="active-filter-tag" key={`${category}-${value}`}>
            <span>{value}</span>
            <button
              onClick={() =>
                handleFilterChange(category as CategoryName, value, false)
              }
              aria-label={`Remove ${value} filter`}
            >
              <X size={12} />
            </button>
          </div>
        ))}
      </div>
    );
  };

  // Render image detail view
  const renderImageDetail = () => {
    if (!selectedImage) return null;

    return (
      <div className="image-detail-overlay" onClick={closeImageDetail}>
        <div
          className="image-detail-container"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-detail" onClick={closeImageDetail}>
            <X size={24} />
          </button>

          {/* Navigation buttons */}

          <div className="image-detail-content">
            <div className="image-detail-main">
              {currentCategoryImages.length > 1 && (
                <>
                  <button
                    className="image-detail-nav prev"
                    onClick={goToPreviousImage}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    className="image-detail-nav next"
                    onClick={goToNextImage}
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
              <div className="detail-image-container">
                <img
                  src={selectedImage.src || "/placeholder.svg"}
                  alt="Selected railing"
                />
              </div>
            </div>
            <div className="image-detail-info">
              <div className="image-detail-categories">
                <h3>Categories</h3>
                <div className="detail-categories-list">
                  {selectedImage.categories.map((category) => (
                    <span className="detail-category-tag" key={category}>
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {selectedImage.description && (
                <div className="image-detail-description">
                  <h3>Description</h3>
                  <p>{selectedImage.description}</p>
                </div>
              )}

              <div className="quote-cta-container">
                <button className="quote-cta-button" onClick={handleGetQuote}>
                  Get a Quote
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail gallery */}
          {currentCategoryImages.length > 1 && (
            <div className="detail-thumbnails-container">
              <div className="detail-thumbnails-scroll">
                {currentCategoryImages.map((image, index) => (
                  <div
                    key={`thumbnail-${index}`}
                    className={`detail-thumbnail ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                    onClick={() => selectThumbnailImage(index)}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Main render
  return (
    <>
      <Hero
        img={seamless1}
        // img="https://github.com/Tech3Imperio/Imperio-Website/blob/main/src/assets/Images/about/about.webp"
        header="Explore our Gallery"
        altText="hero for aboutus"
        subHeader="Elevate your space with Imperio's elegant, frameless glass railing systems, offering unparalleled security and a sleek, minimalist look."
        curve
      />

      <div className="glass-railings-gallery">
        <div className="gallery-header">
          <h1>Glass Railings Gallery</h1>
          <div className="filter-controls">
            <button
              className={`filter-toggle ${isFilterOpen ? "active" : ""} ${
                getActiveFilterCount() > 0 ? "has-filters" : ""
              }`}
              onClick={toggleFilterPanel}
              aria-label="Toggle filters"
            >
              <Filter size={14} />
              {getActiveFilterCount() > 0 && (
                <span className="filter-count">{getActiveFilterCount()}</span>
              )}
            </button>
            {renderActiveFilters()}
          </div>
        </div>

        {renderFilters()}

        <div className="gallery-content">
          {/* Application Categories */}
          {ProductCategories.application.map((category) =>
            renderCategoryRow(
              category,
              `${category.charAt(0).toUpperCase() + category.slice(1)} Railings`
            )
          )}

          {/* Structure Categories */}
          {ProductCategories.structure.map((category) =>
            renderCategoryRow(
              category,
              `${category.charAt(0).toUpperCase() + category.slice(1)} Railings`
            )
          )}

          {/* Feature Categories */}
          {ProductCategories.feature.map((category) =>
            renderCategoryRow(
              category,
              `${category.charAt(0).toUpperCase() + category.slice(1)} Railings`
            )
          )}

          {/* Material Categories */}
          {ProductCategories.material.map((category) =>
            renderCategoryRow(
              category,
              `${category.charAt(0).toUpperCase() + category.slice(1)} Railings`
            )
          )}

          {/* Finish Categories */}
          {ProductCategories.finish.map((category) =>
            renderCategoryRow(
              category,
              `${category.charAt(0).toUpperCase() + category.slice(1)} Railings`
            )
          )}
        </div>

        {renderImageDetail()}
      </div>
    </>
  );
};

export default GlassRailingsGallery;
