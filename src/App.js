import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx(Layout, { children: _jsx(Suspense, { fallback: _jsx("div", { className: "page-loading", children: "\u52A0\u8F7D\u4E2D..." }), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/product", element: _jsx(ProductPage, {}) }), _jsx(Route, { path: "/solutions", element: _jsx(SolutionsPage, {}) }), _jsx(Route, { path: "/download", element: _jsx(DownloadPage, {}) }), _jsx(Route, { path: "/pricing", element: _jsx(PricingPage, {}) }), _jsx(Route, { path: "/opensource", element: _jsx(OpenSourcePage, {}) }), _jsx(Route, { path: "/sponsor", element: _jsx(SponsorPage, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) })] }) }) }));
};
export default App;
