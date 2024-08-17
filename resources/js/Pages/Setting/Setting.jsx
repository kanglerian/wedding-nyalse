import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Setting({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight text-center md:text-left">Setting</h2>}
        >
            <Head title="Setting" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        <Link href={route('category.index')} className="overflow-hidden border-2 text-white border-sky-400 bg-sky-500 hover:bg-sky-600 rounded-2xl transition ease-in-out">
                            <div className="flex items-center gap-2 py-5 px-4">
                                <i className="fa-solid fa-gear"></i>
                                <span className="text-sm">Master Categories</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
