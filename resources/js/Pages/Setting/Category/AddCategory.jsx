import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react'

export default function AddCategory({ auth }) {
    const { categories, flash } = usePage().props;
    const [showAlert, setShowAlert] = useState(flash.message ? true : false);

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const handleDelete = (id) => {
        if (confirm(`Are you sure you want to delete this category? ${id}`)) {
            router.delete(route('category.destroy', id), {
                onSuccess: () => {
                    setShowAlert(true);
                }
            })
        }
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <nav className="flex justify-center md:justify-start" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <Link href={route('setting')} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                                <i className="fa-solid fa-gears me-1.5"></i>
                                Setting
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <i className="fa-solid fa-angle-right text-gray-400"></i>
                                <Link href={route('category.index')} className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                                    Master Categories
                                </Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <i className="fa-solid fa-angle-right text-gray-400"></i>
                                <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">Master Categories</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            }
        >
            <Head title="Category" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-3">
                    {showAlert && (
                        <div className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-2xl shadow-sm" role="alert">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-emerald-500 bg-emerald-100 rounded-lg">
                                <i className="fa-solid fa-check"></i>
                            </div>
                            <div className="ms-3 text-sm font-normal">{flash.message}</div>
                            <button onClick={handleCloseAlert} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    )}
                    <button type="button" class="text-white bg-sky-500 hover:bg-sky-600 transition-all ease-in-out font-medium rounded-xl text-sm px-5 py-2.5 space-x-2">
                        <i className="fa-solid fa-plus"></i>
                        <span>New Category</span>
                    </button>
                    <div className="bg-white shadow-sm sm:rounded-3xl p-8">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 rounded-tl-xl">
                                            No.
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-4 rounded-tr-xl">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories.data.length > 0 ? (
                                            categories.data.map((category, index) =>
                                                <tr key={category.id} className="bg-white border-b">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        {index + 1}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {category.name}
                                                    </td>
                                                    <td className="px-6 py-4 space-x-1">
                                                        <button type="button" class="text-white bg-amber-500 hover:bg-amber-600 transition-all ease-in-out font-medium rounded-xl text-sm px-3 py-1.5 text-center">
                                                            <i className="fa-solid fa-pen-to-square"></i>
                                                        </button>
                                                        <button onClick={() => handleDelete(category.id)} type="button" class="text-white bg-red-500 hover:bg-red-600 transition-all ease-in-out font-medium rounded-xl text-sm px-3 py-1.5 text-center">
                                                            <i className="fa-solid fa-trash-can"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        ) : (
                                            <tr className="bg-white border-b">
                                                <td colSpan="3" className="px-6 py-4 text-center">Data not found.</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="pt-8 pb-2">
                            {categories.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || '#'}
                                    className={`mr-2 px-4 py-2 text-sm rounded-xl transition-all ease-in-out
                                        ${link.active ? 'bg-sky-500 hover:bg-sky-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}
                                        ${link.label.includes('Previous') ? 'rounded-lg text-sm' : ''}
                                        ${link.label.includes('Next') ? 'rounded-lg text-sm' : ''}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                ></Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
