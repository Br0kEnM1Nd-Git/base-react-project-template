import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<div>Layout</div>}>
          <Route index element={<div>Index</div>} />
          <Route path="test" element={<div>Test</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
