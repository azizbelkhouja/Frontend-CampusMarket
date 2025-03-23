import React from 'react';
import { studyresourcesleveltwo } from '../../data/category/level-two/studyresourcesleveltwo';
import { electronicsleveltwo } from '../../data/category/level-two/electronicsleveltwo';
import { clothingleveltwo } from '../../data/category/level-two/clothingleveltwo';
import { furnituresleveltwo } from '../../data/category/level-two/furnituresleveltwo';
import { studyResourcesItems } from '../../data/category/level-three/studyresourceslevelthree';
import { electronicsItems } from '../../data/category/level-three/electronicslevelthree';
import { clothingItems } from '../../data/category/level-three/clothinglevelthree';
import { furnitureAndDormItems } from '../../data/category/level-three/furnitureslevelthree';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categoryTwo: { [key: string]: any[] } = {
  study_resources: studyresourcesleveltwo,
  electronics: electronicsleveltwo,
  clothing: clothingleveltwo,
  furniture_dorm: furnituresleveltwo,
};

const categoryThree: { [key: string]: any[] } = {
  study_resources: studyResourcesItems,
  electronics: electronicsItems,
  clothing: clothingItems,
  furniture_dorm: furnitureAndDormItems,
};

const CategorySheet = ({ selectedCategory }: { selectedCategory: string }) => {
  
  const navigate=useNavigate();
  const levelTwoCategories = categoryTwo[selectedCategory] || [];
  const levelThreeCategories = categoryThree[selectedCategory] || [];

  if (!levelTwoCategories.length) {
    console.warn(`No categories found for "${selectedCategory}"`);
    return null;
  }

  const childCategory = (category: any, parentCategoryId: any) =>
    category.filter((child: any) => child.parentCategoryId === parentCategoryId);

  return (
    <Box sx={{ zIndex: 2 }} className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
      <div className="flex text-sm flex-wrap">
        {levelTwoCategories.map((item: any, index: number) => (
          <div
            key={item.categoryId}
            className={`p-8 lg:w-[20%] ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
          >
            <p className="text-black mb-5 font-semibold">{item.name}</p>
            <ul className="space-y-3">
              {childCategory(levelThreeCategories, item.categoryId).map((item: any) => (
                <li onClick={() => navigate("/products/" + item.categoryId)} key={item.categoryId} className="hover:text-gray-400 cursor-pointer text-black font-light">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;
