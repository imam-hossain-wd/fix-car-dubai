import Link from "next/link";

export const CategoryCard = ({ category }) => {
  return (
    <Link
      href={`/blog/category/${category.slug}`}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative h-32 overflow-hidden md:h-40">
        <div className={`absolute inset-0 ${category.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white p-4 text-center">
            <category.icon className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-bold text-lg mb-1">{category.name}</h3>
            <p className="text-sm opacity-90">{category.count} articles</p>
          </div>
        </div>
      </div>
    </Link>
  );
};