import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <Link href="/section">
          <span className="text-3xl font-bold cursor-pointer">NationalDecisionMaking</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/section">
                <span className="text-lg hover:underline cursor-pointer">Topics</span>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <span className="text-lg hover:underline cursor-pointer">Login</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
