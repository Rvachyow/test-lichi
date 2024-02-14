import { AppInputSearch } from '@/shared/ui/AppInputSearch/AppInputSearch';

export function Header() {
  return (
    <header className="h-16 flex justify-between items-center">
      <h1 className="text-purple-900 text-2xl">BLOG-APP</h1>
      <AppInputSearch />
    </header>
  );
}
