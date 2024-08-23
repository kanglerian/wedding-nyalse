import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import Couple from "./Features/Couple";
import { useState } from "react";

export default function EditInvitation({ auth }) {
    const { invitation, flash } = usePage().props;
    const [iframeSrc, setIframeSrc] = useState(route('invitation.show', invitation.invitation.invoice));

    const refreshInvitation = () => {
        setIframeSrc(route('invitation.show', invitation.invitation.invoice) + `?timestamp=${new Date().getTime()}`);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight text-center md:text-left">Invoice: {invitation.invitation.invoice}</h2>}
        >
            <Head title="Invitations" />

            <div className="py-12">
                <section className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto sm:px-6 lg:px-8">
                    <div>
                        <div className="md:flex">
                            <ul className="flex justify-center flex-row flex-wrap gap-3 md:flex-col text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0">
                                <li>
                                    <button type="button" className="inline-flex items-center px-4 py-3 text-white border border-sky-500 bg-sky-600 hover:bg-sky-700 transition-all ease-in-out rounded-xl active w-full space-x-2">
                                        <i className="fa-solid fa-people-pulling"></i>
                                        <span>Pasangan</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex items-center px-4 py-3 rounded-xl shadow-sm hover:text-gray-900 bg-gray-50 hover:bg-gray-200 transition-all ease-in-out space-x-2 w-full">
                                        <i className="fa-solid fa-calendar-day"></i>
                                        <span>Waktu</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex items-center px-4 py-3 rounded-xl shadow-sm hover:text-gray-900 bg-gray-50 hover:bg-gray-200 transition-all ease-in-out space-x-2 w-full">
                                        <i className="fa-solid fa-map-location-dot"></i>
                                        <span>Lokasi</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex items-center px-4 py-3 rounded-xl shadow-sm hover:text-gray-900 bg-gray-50 hover:bg-gray-200 transition-all ease-in-out space-x-2 w-full">
                                        <i className="fa-solid fa-images"></i>
                                        <span>Galeri</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex items-center px-4 py-3 rounded-xl shadow-sm hover:text-gray-900 bg-gray-50 hover:bg-gray-200 transition-all ease-in-out space-x-2 w-full">
                                        <i className="fa-solid fa-video"></i>
                                        <span>Video</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex items-center px-4 py-3 rounded-xl shadow-sm hover:text-gray-900 bg-gray-50 hover:bg-gray-200 transition-all ease-in-out space-x-2 w-full">
                                        <i className="fa-solid fa-book"></i>
                                        <span>Story</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex items-center px-4 py-3 rounded-xl shadow-sm hover:text-gray-900 bg-gray-50 hover:bg-gray-200 transition-all ease-in-out space-x-2 w-full">
                                        <i className="fa-solid fa-gifts"></i>
                                        <span>Gift/Hadiah</span>
                                    </button>
                                </li>
                            </ul>
                            <Couple invitation={invitation} flash={flash} />
                        </div>

                    </div>
                    <div>
                        <button type="button" onClick={refreshInvitation} className="bg-sky-500 hover:bg-sky-600 text-amber-100 shadow-sm transition-all ease-in-out px-5 py-2.5 rounded-xl text-sm mb-2"><i className="fa-solid fa-arrows-rotate"></i></button>
                        <iframe src={iframeSrc} className="w-full h-screen md:rounded-3xl shadow-lg border-4 border-gray-400" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </section>
            </div>
        </AuthenticatedLayout>
    );
}
