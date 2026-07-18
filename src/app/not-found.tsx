import Link from "next/link";
import { ArrowLeft, Home, Package, Phone } from "lucide-react";
import { company } from "@/data/company";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--black)] text-white flex items-center justify-center p-6 text-center">
      <div className="max-w-lg mx-auto">
        <span className="text-8xl font-black text-[var(--red-primary)] block mb-4">
          404
        </span>
        <h1 className="text-3xl font-bold mb-3 text-white">
          Page Not Found
        </h1>
        <p className="text-white/70 text-base leading-relaxed mb-8">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[var(--red-primary)] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#a0182d] transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-all border border-white/10"
          >
            <Package className="w-4 h-4" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
