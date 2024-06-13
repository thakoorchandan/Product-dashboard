import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getProductsByCategory } from '../services/api';
import { Card } from 'antd';
import { ChartContainer } from '../styles';

interface ProductsChartProps {
  category: string;
  products: string[];
}

const ProductsChart: React.FC<ProductsChartProps> = ({ category, products }) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (category) {
        const productsData = await getProductsByCategory(category);
        setData(productsData.products);
      }
    };

    fetchData();
  }, [category]);

  const pieOptions = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Products in selected category',
    },
    series: [
      {
        name: 'Products',
        data: data.map((prod) => ({
          name: prod.title,
          y: prod.price,
          sliced: products.includes(prod.title),
          selected: products.includes(prod.title),
        })),
      },
    ],
  };

  const barOptions = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Products in selected category',
    },
    xAxis: {
      categories: data.map(prod => prod.title),
      title: {
        text: 'Products'
      }
    },
    yAxis: {
      title: {
        text: 'Price'
      }
    },
    series: [
      {
        name: 'Products',
        data: data.map(prod => ({
          name: prod.title,
          y: prod.price,
          color: products.includes(prod.title) ? '#ff4d4f' : undefined,
        })),
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
      },
    ],
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
      },
    },
  };

  return (
    <ChartContainer>
      <Card style={{ marginBottom: '20px' }}>
        <div className="chart-wrapper">
          <HighchartsReact highcharts={Highcharts} options={pieOptions} />
        </div>
      </Card>
      <Card>
        <div className="chart-wrapper">
          <HighchartsReact highcharts={Highcharts} options={barOptions} />
        </div>
      </Card>
    </ChartContainer>
  );
};

export default ProductsChart;
