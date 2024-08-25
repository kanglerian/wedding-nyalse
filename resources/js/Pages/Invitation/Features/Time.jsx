import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Time({ invitation, flash }) {
    const [isCreate, setIsCreate] = useState(true);

    const [showAlert, setShowAlert] = useState(flash.message ? true : false);

    const codeMap = {
        200: { icon: 'fa-check', textClass: 'text-emerald-500', bgClass: 'bg-emerald-100' },
        201: { icon: 'fa-check', textClass: 'text-blue-500', bgClass: 'bg-blue-100' },
        204: { icon: 'fa-check', textClass: 'text-blue-500', bgClass: 'bg-blue-100' },
        23000: { icon: 'fa-times', textClass: 'text-red-500', bgClass: 'bg-red-100' },
        500: { icon: 'fa-exclamation-triangle', textClass: 'text-yellow-500', bgClass: 'bg-yellow-100' },
        default: { icon: 'fa-info', textClass: 'text-gray-500', bgClass: 'bg-gray-100' }
    };

    const { icon, textClass, bgClass } = codeMap[flash.code] || codeMap.default;

    const {
        post,
        patch,
        processing,
        errors,
        data,
        setData,
    } = useForm({
        id: "",
        invitation_id: invitation.invitation.id,
        marriage: "",
        reception: "",
        location_marriage: "",
        location_reception: "",
        gmaps: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const submitAction = isCreate ? post : patch;
        const routeAction = isCreate
            ? route("time.store")
            : route("time.update", data.id);
        submitAction(routeAction, {
            preserveScroll: true,
            onSuccess: (page) => {
                setShowAlert(true);
                setIsCreate(false);
            },
            onError: (errors) => {
                console.log(errors);
            }
        });
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    useEffect(() => {
        if (invitation && invitation.time) {
            setData({
                id: invitation.time.id,
                invitation_id: invitation.invitation.id,
                marriage: invitation.time.marriage,
                reception: invitation.time.reception,
                location_marriage: invitation.time.location_marriage,
                location_reception: invitation.time.location_reception,
                gmaps: invitation.time.gmaps,
            });
            setIsCreate(false);
        }
    }, []);
    return (
        <main className="w-full">
            <div className="px-5">
                {showAlert && (
                    <div
                        className="flex items-center w-full p-4 mb-4 text-gray-500 bg-white rounded-2xl shadow-sm"
                        role="alert"
                    >
                        <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-xl ${textClass} ${bgClass}`}>
                            <i className={`fa-solid ${icon}`}></i>
                        </div>
                        <div className="ms-3 text-sm font-normal">
                            {flash.message}
                        </div>
                        <button
                            onClick={handleCloseAlert}
                            type="button"
                            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-xl focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                )}
            </div>
            <div className="p-6 bg-gray-50 text-medium shadow-sm text-gray-500 md:rounded-2xl w-full">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Data Tanggal & Lokasi</h3>
                </div>
                <hr className="my-3.5" />
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-1">
                            <label
                                htmlFor="marriage"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Waktu & Tanggal Akad Nikah
                            </label>
                            <input
                                type="datetime-local"
                                value={data.marriage}
                                onChange={(e) =>
                                    setData("marriage", e.target.value)
                                }
                                name="marriage"
                                id="marriage"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3"
                                required={true}
                            />
                            {errors.marriage && (
                                <p className="text-xs text-red-600 mt-2">
                                    {errors.marriage}
                                </p>
                            )}
                        </div>
                        <div className="col-span-1">
                            <label
                                htmlFor="reception"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Waktu & Tanggal Resepsi
                            </label>
                            <input
                                type="datetime-local"
                                value={data.reception}
                                onChange={(e) =>
                                    setData("reception", e.target.value)
                                }
                                name="reception"
                                id="reception"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3"
                                required={true}
                            />
                            {errors.marriage && (
                                <p className="text-xs text-red-600 mt-2">
                                    {errors.marriage}
                                </p>
                            )}
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="location_marriage"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Lokasi Akad Nikah
                            </label>
                            <input
                                type="text"
                                value={data.location_marriage}
                                onChange={(e) =>
                                    setData("location_marriage", e.target.value)
                                }
                                name="location_marriage"
                                id="location_marriage"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3"
                                placeholder="Jl. ..."
                                required={true}
                            />
                            {errors.location_marriage && (
                                <p className="text-xs text-red-600 mt-2">
                                    {errors.location_marriage}
                                </p>
                            )}
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="location_reception"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Lokasi Resepsi
                            </label>
                            <input
                                type="text"
                                value={data.location_reception}
                                onChange={(e) =>
                                    setData("location_reception", e.target.value)
                                }
                                name="location_reception"
                                id="location_reception"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3"
                                placeholder="Jl. ..."
                                required={true}
                            />
                            {errors.location_reception && (
                                <p className="text-xs text-red-600 mt-2">
                                    {errors.location_reception}
                                </p>
                            )}
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="gmaps"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Google Maps
                            </label>
                            <input
                                type="text"
                                value={data.gmaps}
                                onChange={(e) =>
                                    setData("gmaps", e.target.value)
                                }
                                name="gmaps"
                                id="gmaps"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3"
                                placeholder="Jl. ..."
                                required={true}
                            />
                            {errors.location_reception && (
                                <p className="text-xs text-red-600 mt-2">
                                    {errors.location_reception}
                                </p>
                            )}
                        </div>
                    </div>
                    <button
                        disabled={processing}
                        type="submit"
                        className="text-white inline-flex items-center bg-sky-500 hover:bg-sky-600 font-medium rounded-xl text-sm px-5 py-2.5 text-center space-x-1.5"
                    >
                        <i className="fa-solid fa-save"></i>
                        <span>
                            {isCreate
                                ? "Simpan"
                                : "Simpan perubahan"}
                        </span>
                    </button>
                </form>
            </div>
        </main>
    )
}
