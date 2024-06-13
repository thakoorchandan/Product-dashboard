import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import Filters from './components/Filters';
import ProductsChart from './components/ProductsChart';
import { Container, FiltersPanel, MainContent, ChartWrapper, StyledButton, Header, NoDataMessage } from './styles';
import 'antd/dist/reset.css';

const App: React.FC = () => {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState<string[]>([]);
  const [showChart, setShowChart] = useState(false);

  const handleCategoryChange = (category: string) => {
    setCategory(category);
    setProducts([]);
    setShowChart(false);
  };

  const handleProductChange = (products: string[]) => {
    setProducts(products);
  };

  return (
    <Container>
      <FiltersPanel>
        <Header>
          <Typography.Title level={3}>Products Dashboard</Typography.Title>
        </Header>
        <Filters onCategoryChange={handleCategoryChange} onProductChange={handleProductChange} />
        <StyledButton>
          <Button
            type="primary"
            onClick={() => setShowChart(true)}
            disabled={!category}
            style={{ marginBottom: '10px' }}
          >
            Run Report
          </Button>
        </StyledButton>
      </FiltersPanel>
      <MainContent>
        {showChart ? (
          <ChartWrapper isVisible={showChart}>
            <ProductsChart category={category} products={products} />
          </ChartWrapper>
        ) : (
          <NoDataMessage isVisible={!showChart}>
            Please select a category and products to view the data
          </NoDataMessage>
        )}
      </MainContent>
    </Container>
  );
};

export default App;
