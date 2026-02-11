import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          Página no encontrada
        </h2>
        <p className="text-lg text-secondary-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link href="/">
          <Button size="lg" className="shadow-xl">
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  );
}
