import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Gift({ invitation, flash }) {
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
        video: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const submitAction = isCreate ? post : patch;
        const routeAction = isCreate
            ? route("video.store")
            : route("video.update", data.id);
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
        if (invitation && invitation.video) {
            setData({
                id: invitation.video.id,
                invitation_id: invitation.invitation.id,
                video: invitation.video.video,
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Video</h3>
                </div>
                <hr className="my-3.5" />
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        {
                            data.video &&
                            <div className="col-span-2">
                                <iframe className="w-full aspect-video rounded-2xl" src={`https://www.youtube.com/embed/${data.video}?si=4E4sNW5fWS7urZ6l`} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            </div>
                        }
                        <div className="col-span-2">
                            <label
                                htmlFor="video"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Link Video Youtube
                            </label>
                            <input
                                type="text"
                                value={data.video}
                                onChange={(e) =>
                                    setData("video", e.target.value)
                                }
                                name="video"
                                id="video"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3"
                                placeholder="Link Youtube"
                                required={true}
                            />
                            {errors.video && (
                                <p className="text-xs text-red-600 mt-2">
                                    {errors.video}
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
