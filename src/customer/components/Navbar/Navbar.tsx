import Box from '@mui/material/Box';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CategorySheet from './CategorySheet';
import { mainCategory } from '../../data/category/mainCategory';

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCategorySheet, setShowCategorySheet] = useState(false);

  const handleMouseEnter = (categoryId: string) => {
    setSelectedCategory(categoryId.toLowerCase());
    setShowCategorySheet(true);
  };

  const handleMouseLeave = () => {
    setShowCategorySheet(false);
  };

  const navigate = useNavigate();

  return (
    <>
      <Box className="sticky top-0 left-0 right-0 bg-black" sx={{ zIndex: 2 }}>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] bg-white border-b-black border-b">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              { !isLarge && (
                <IconButton>
                  <MenuIcon sx={{ color: 'black' }} />
                </IconButton>
              )}
              <h1 onClick={() => navigate("/")} className="logo cursor-pointer text-lg font-bold md:text-2xl text-black">CampusMarket</h1>
            </div>
            <ul className="flex items-center text-black font-light relative">
              {mainCategory.map((item) => (
                <li
                  key={item.categoryId}
                  onMouseEnter={() => handleMouseEnter(item.categoryId)}
                  className={`mainCategories px-4 flex items-center cursor-pointer ${
                    item.isHighlighted ? "text-darkblue font-bold underline" : "hover:text-gray-400"
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-1 lg:gap-4 items-center">
            <IconButton>
              <SearchIcon sx={{ color: 'black' }} />
            </IconButton>
            { true ?
              <Button onClick={() => navigate("/account/orders")} className="flex items-center gap-2">
                <Avatar sx={{ width: 29, height: 29 }} src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg" />
                <h1 className="font-semibold hidden lg:block text-black">Aziz</h1>
              </Button> : <Button variant='contained'>Login</Button>
            }
            <IconButton>
              <FavoriteBorderIcon sx={{ fontSize: 29, color: 'black' }} />
            </IconButton>
            <IconButton>
              <AddShoppingCartIcon onClick={() => navigate("/cart")} sx={{ fontSize: 29, color: 'black' }} />
            </IconButton>

            { isLarge && (
              <Button
                startIcon={<StorefrontIcon />}
                variant="outlined"
                onClick={() => navigate("/become-seller")}
                sx={{
                  color: 'black',
                  borderColor: 'black',
                  '&:hover': { borderColor: 'black', color: 'white', backgroundColor: 'black' },
                }}
              >
                Become a Seller
              </Button>
            )}
          </div>
        </div>

        <div
          onMouseEnter={() => setShowCategorySheet(true)}
          onMouseLeave={handleMouseLeave}
          className="categorySheet absolute top-[4.41rem] left-20 right-20"
        >
          { showCategorySheet && (
            <div className="absolute top-full left-0 w-full">
              <CategorySheet selectedCategory={selectedCategory} />
            </div>
          )}
        </div>
      </Box>
    </>
  );
};

export default Navbar;
