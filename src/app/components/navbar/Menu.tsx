import Link from 'next/link';

const Menu: React.FC = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Logo</span>
            </div>
            <div className="block lg:hidden">
                <button title="menu" className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:border-gray-300">
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path
                            d="M0 4h20v2H0zm0 5h20v2H0zm0 5h20v2H0z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href="/" className='mr-4'>
                        Home
                    </Link>
                    <Link href="/posts" className='mr-4'>
                        Posts
                    </Link>
               
                </div>
            </div>
        </nav>
    );
};

export default Menu;
