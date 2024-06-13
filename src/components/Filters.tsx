import React, { useState, useEffect } from 'react';
import { Button, Select, Typography } from 'antd';
import { getCategories, getProductsByCategory } from '../services/api';
import { StyledFilterBox } from '../styles';

const { Option } = Select;

interface FiltersProps {
  onCategoryChange: (category: string) => void;
  onProductChange: (products: string[]) => void;
}

const Filters: React.FC<FiltersProps> = ({ onCategoryChange, onProductChange }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const fetchProducts = async () => {
        const products = await getProductsByCategory(selectedCategory);
        setProducts(products.products);
      };

      fetchProducts();
    }
  }, [selectedCategory]);

  const handleClear = () => {
    setSelectedCategory(undefined);
    setSelectedProducts([]);
    setProducts([]);
    onCategoryChange('');
    onProductChange([]);
  };

  return (
    <div>
      <Typography.Title level={4}>Filters</Typography.Title>
      <StyledFilterBox>
        <Select
          placeholder="Select Category"
          value={selectedCategory}
          onChange={(value) => {
            setSelectedCategory(value);
            setSelectedProducts([]);
            onCategoryChange(value);
          }}
          style={{ width: '100%' }}
        >
          {categories.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </StyledFilterBox>
      <StyledFilterBox>
        <Select
          mode="multiple"
          placeholder="Select Products"
          value={selectedProducts}
          onChange={(value) => {
            setSelectedProducts(value);
            onProductChange(value);
          }}
          style={{ width: '100%' }}
          disabled={!selectedCategory}
        >
          {products.map((product) => (
            <Option key={product.id} value={product.title}>
              {product.title}
            </Option>
          ))}
        </Select>
      </StyledFilterBox>
      <Button onClick={handleClear}>
        Clear
      </Button>
    </div>
  );
};

export default Filters;
