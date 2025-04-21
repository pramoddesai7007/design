import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Blog from '../pages/blog/Blog';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import NotFound from '../pages/NotFound'; 
import GraphicDesign from '../pages/services/GraphicDesign';
import UiUxDesign from '../pages/services/UiUxDesign';
import PageLayout from './PageLayout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout><Home /></PageLayout>} />
      <Route path="/blog" element={<PageLayout><Blog /></PageLayout>} />
      <Route path="/about" element={<PageLayout><About /></PageLayout>} />
      <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
      <Route path="/graphic-design" element={<PageLayout><GraphicDesign /></PageLayout>} />
      <Route path="/uiux-design" element={<PageLayout><UiUxDesign /></PageLayout>} />

      {/* No layout for NotFound */}
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
};

export default AppRoutes;
