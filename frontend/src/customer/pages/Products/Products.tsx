import { FilterAlt } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import FilterSection from './FilterSection'
import ProductCard from './ProductCard'
import { Box, Divider, FormControl, IconButton, InputLabel, MenuItem, Select, useMediaQuery, useTheme, Pagination } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../State/Store'
import { useParams, useSearchParams } from 'react-router-dom'
import { getAllProducts } from '../../../State/customer/ProductSlice'

const Products = () => {
  
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryId } = useParams();
  const { product } = useAppSelector((store => store))

  const handleSortChange = (event:any) => {
    setSort(event.target.value);
  }
  const handlePageChange = (value:number) => {
    setPage(value);
  }

  useEffect(() => {
    const [minPrice, maxPrice] = searchParams.get("price")?.split("-") || [];
    const newFilters = {
      brand: searchParams.get("brand") || "",
      color: searchParams.get("color") || "",
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      pageNumber: page-1,
      minDiscount: searchParams.get("discount")
        ? Number(searchParams.get("discount"))
        : undefined,
    };

    dispatch(getAllProducts({ category: categoryId, sort, ...newFilters }));
  }, [searchParams, categoryId, sort, page, dispatch]);

  return (
    <div className='mt-25'>
      <div>
        <h1 className='text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2'>{categoryId?.split("_").map((item) => (<span>{item}</span>))}</h1>
      </div>
      <div className='lg:flex'>
        <section className='filter_section hidden lg:block w-[20%]'>
          <FilterSection />
        </section>
        <div className='w-full lg:w-[80%] space-y-5'>
          <div className='flex justify-between items-center px-9 h-[40px]'>
            <div className='relative w-[50%]'>
              {
                !isLarge && (<IconButton>
                  <FilterAlt/>
                </IconButton>)
              }
              {
                !isLarge && (<Box>
                  <FilterSection/>
                </Box>)
              }
            </div>
            <FormControl size="small" sx = {{width : "200px"}}>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sort"
                onChange={handleSortChange}
              >
                <MenuItem value={"low_to_high"}>Low to High</MenuItem>
                <MenuItem value={"high_to_low"}>High to Low</MenuItem>
              </Select>
            </FormControl>
          </div>
            <Divider/>
            <section className='products_section mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center'>
              {product.products.map((item) => <ProductCard item={item} />)}
            </section>

            <div className='flex justify-center py-10'>
              <Pagination 
                page={page}
                count={product?.totalPages}
                onChange={(e, value) => handlePageChange(value)}
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Products