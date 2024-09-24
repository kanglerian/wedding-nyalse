import { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function Galery({ invitation, flash }) {
    const [modalCreate, setModalCreate] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);

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
        delete: destroy,
        reset,
        errors,
        data,
        setData,
    } = useForm({
        id: "",
        invitation_id: invitation.invitation.id,
        cover: null,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const submitAction = modalCreate ? post : patch;
        const routeAction = modalCreate
            ? route("galery.store")
            : route("galery.update", data.id);
        submitAction(routeAction, {
            preserveScroll: true,
            forceFormData: true,
            onSuccess: (page) => {
                setShowAlert(true);
                setModalCreate(false);
                setModalEdit(false);
                reset();
            },
            onError: (errors) => {
                console.log(errors);
            }
        });
    };

    const handleEditClick = (story) => {
        setData({
            id: story.id,
            invitation_id: story.invitation_id,
            cover: story.cover,
        });
        setModalEdit(true);
    };

    const handleCloseModal = () => {
        reset();
        setModalCreate(false);
        setModalEdit(false);
        setModalDelete(false);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const handleDeleteClick = (story) => {
        setData({
            id: story.id
        });
        setModalDelete(true);
    };

    const handleDelete = (id) => {
        destroy(route("galery.destroy", id), {
            onSuccess: () => {
                setShowAlert(true);
                setModalDelete(false);
            },
            onError: (errors) => {
                console.log(errors);
            },
            onFinish: () => reset(),
        });
    }
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Galeri</h3>
                    <button onClick={() => setModalCreate(!modalCreate)} type="button" className="flex text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2"><i className="fa-solid fa-circle-plus"></i></button>
                </div>
                <hr className="my-3.5" />
                {
                    invitation.galeries.length > 0 ? (
                        <section className="space-y-3">
                            {
                                invitation.galeries.map((story, index) =>
                                    <div key={story.id} className="relative">
                                        <div onClick={() => handleEditClick(story)} className="cursor-pointer relative transition-all ease-in-out p-5 rounded-2xl text-white bg-gray-100 hover:bg-gray-200 border border-gray-200 space-y-2">
                                            <img src={`/storage/covers/${story.cover}`} alt={`Foto ${index}`} className="rounded-2xl" />
                                        </div>
                                        <button disabled={processing}
                                            onClick={() => handleDeleteClick(story)}
                                            type="button"
                                            className="absolute top-[-5px] right-[-5px] rounded-full h-8 w-8 flex items-center justify-center text-white bg-red-500 hover:bg-red-600"
                                        >
                                            <i className="fa-solid fa-trash-alt text-[11px]"></i>
                                        </button>
                                    </div>
                                )
                            }
                        </section>
                    ) : (
                        <p className="text-center text-sm">Belum ada galeri foto kedua mempelai.</p>
                    )
                }
            </div>
            {(modalCreate || modalEdit) && (
                <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-2xl">
                            {/* Modal header */}
                            <div className="flex items-center justify-between px-6 py-4 md:p-5 border-b rounded-t">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {modalCreate
                                        ? "Tambah Foto Mempelai"
                                        : "Ubah Foto Mempelai"}
                                </h3>
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-xl transition-all ease-in-out text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                            {/* Modal body */}
                            <form onSubmit={handleSubmit} enctype="multipart/form-data" className="px-6 py-4">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="cover"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Foto
                                        </label>
                                        <input
                                            type="file"
                                            onChange={(e) =>
                                                setData("cover", e.target.files[0])
                                            }
                                            name="cover"
                                            id="cover"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3"
                                            accept="image/jpeg, image/jpg, image/png"
                                            required={false}
                                        />
                                        {errors.cover && (
                                            <p className="text-xs text-red-600 mt-2">
                                                {errors.cover}
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
                                        {modalCreate
                                            ? "Simpan"
                                            : "Simpan perubahan"}
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {modalDelete && (
                <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-2xl shadow">
                            <button onClick={handleCloseModal} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 transition-all ease-in-out hover:text-gray-900 rounded-xl text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                            <div className="px-5 py-7 text-center">
                                <i className="fa-solid fa-circle-exclamation text-red-500 fa-3x"></i>
                                <h3 className="my-5 text-lg font-normal text-gray-500">Are you sure you want to delete this category?</h3>
                                <button onClick={() => handleDelete(data.id)} type="button" className="text-white bg-red-600 hover:bg-red-800 transition-all ease-in-out font-medium rounded-xl text-sm inline-flex items-center px-5 py-2.5 text-center">
                                    Yes, I'm sure
                                </button>
                                <button onClick={handleCloseModal} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900  transition-all ease-in-out bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:ring-4 focus:ring-gray-100">No, cancel</button>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </main>
    )
}
