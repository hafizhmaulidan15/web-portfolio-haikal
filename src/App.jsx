import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import './index.css';
import { Analytics } from '@vercel/analytics/react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { usePageMeta } from './hooks/usePageMeta';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const NotFound = lazy(() => import('./components/NotFound'));
const BackToTop = lazy(() => import('./components/BackToTop'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin mb-3"></div>
      <div className="text-text-tertiary text-xs font-mono">~$ loading...</div>
    </div>
  );
}

function App() {
  useSmoothScroll();
  usePageMeta();

  return (
    <div className="app bg-background min-h-screen flex flex-col">
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Navbar />
        <main className="flex-1 pt-14 md:pt-16 page-fade">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
      <BackToTop />
      <Analytics />
    </div>
  );
}

export default App;
