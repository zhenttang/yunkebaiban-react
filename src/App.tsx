import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const DownloadPage = lazy(() => import('./pages/DownloadPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const OpenSourcePage = lazy(() => import('./pages/OpenSourcePage'));
const SponsorPage = lazy(() => import('./pages/SponsorPage'));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div className="page-loading">加载中...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/opensource" element={<OpenSourcePage />} />
          <Route path="/sponsor" element={<SponsorPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
