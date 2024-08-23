import { useState, useEffect } from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useRef } from "react";

export default function Couple({ invitation, flash }) {
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
        fullname: "",
        father_name: "",
        mother_name: "",
        nickname: "",
        child: "",
        gender: null,
        privilage: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const submitAction = modalCreate ? post : patch;
        const routeAction = modalCreate
            ? route("couple.store")
            : route("couple.update", data.id);
        submitAction(routeAction, {
            preserveScroll: true,
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

    const handleEditClick = (couple) => {
        setData({
            id: couple.id,
            invitation_id: couple.invitation_id,
            fullname: couple.fullname,
            father_name: couple.father_name,
            mother_name: couple.mother_name,
            nickname: couple.nickname,
            child: couple.child,
            gender: couple.gender,
            privilage: couple.privilage
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

    const handleDeleteClick = (couple) => {
        setData({
            id: couple.id
        });
        setModalDelete(true);
    };

    const handleDelete = (id) => {
        console.log(id);

        destroy(route("couple.destroy", id), {
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Data Mempelai</h3>
                    <button onClick={() => setModalCreate(!modalCreate)} type="button" className="flex text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2"><i className="fa-solid fa-circle-plus"></i></button>
                </div>
                <hr className="my-3.5" />
                {
                    invitation.couple.length > 0 ? (
                        <section className="space-y-3">
                            {
                                invitation.couple.map((couple) =>
                                    <div key={couple.id} className="relative">
                                        <div onClick={() => handleEditClick(couple)} className={`cursor-pointer relative transition-all ease-in-out px-5 py-4 rounded-2xl text-white ${couple.gender == '1' ? 'bg-sky-500 hover:bg-sky-600' : 'bg-pink-500 hover:bg-pink-600'}`}>
                                            <h5 className="italic text-sm">Mempelai {couple.gender == '1' ? 'laki-laki' : 'perempuan'}</h5>
                                            <h2 className="font-bold">{couple.fullname} ({couple.nickname})</h2>
                                            <ul className="text-sm list-disc ml-5">
                                                <li>Nama Ayah: {couple.father_name}</li>
                                                <li>Nama Ibu: {couple.mother_name}</li>
                                                <li>Anak ke-: {couple.child}</li>
                                            </ul>
                                            {
                                                couple.privilage &&
                                                <div className="mt-3">
                                                    <h5 className="text-sm font-medium">Keluarga:</h5>
                                                    <p className="text-sm">{couple.privilage}</p>
                                                </div>
                                            }
                                            <i className={`absolute right-10 top-1/2 transform -translate-y-1/2 fa-solid fa-3x ${couple.gender == '1' ? 'fa-mars text-sky-400' : 'fa-venus text-pink-400'}`}></i>
                                        </div>
                                        <button disabled={processing}
                                            onClick={() => handleDeleteClick(couple)}
                                            type="button"
                                            className="absolute bottom-3 right-5 px-5 py-2.5 border rounded-xl text-white hover:bg-white hover:text-red-600"
                                        >
                                            <i className="fa-solid fa-trash-alt"></i>
                                        </button>
                                    </div>
                                )
                            }
                            {/* <div className="cursor-pointer relative bg-pink-500 hover:bg-pink-600 transition-all ease-in-out px-5 py-4 rounded-2xl text-white">
                                <h5 className="italic text-sm">Mempelai Perempuan</h5>
                                <h2 className="font-bold">Naimatus Sya'diah, A.Md.Pjk (Diah)</h2>
                                <ul className="text-sm list-disc ml-5">
                                    <li>Nama Ayah: Sudarsono</li>
                                    <li>Nama Ibu: Daryati</li>
                                    <li>Anak ke-: 5</li>
                                </ul>
                                <i className="absolute right-10 top-1/2 transform -translate-y-1/2 fa-solid fa-venus fa-3x text-pink-400"></i>
                            </div> */}
                        </section>
                    ) : (
                        <p className="text-center text-sm">Belum ada data mempelai.</p>
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
                                        ? "Tambah Data Mempelai"
                                        : "Ubah Data Mempelai"}
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
                            <form onSubmit={handleSubmit} className="px-6 py-4">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="fullname"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Nama lengkap
                                        </label>
                                        <input
                                            type="text"
                                            value={data.fullname}
                                            onChange={(e) =>
                                                setData("fullname", e.target.value)
                                            }
                                            name="fullname"
                                            id="fullname"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3"
                                            placeholder="Type your full name..."
                                            required={true}
                                        />
                                        {errors.fullname && (
                                            <p className="text-xs text-red-600 mt-2">
                                                {errors.fullname}
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-span-1">
                                        <label
                                            htmlFor="father_name"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Nama Ayah
                                        </label>
                                        <input
                                            type="text"
                                            value={data.father_name}
                                            onChange={(e) =>
                                                setData("father_name", e.target.value)
                                            }
                                            name="father_name"
                                            id="father_name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3"
                                            placeholder="Father's name..."
                                            required={true}
                                        />
                                        {errors.father_name && (
                                            <p className="text-xs text-red-600 mt-2">
                                                {errors.father_name}
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-span-1">
                                        <label
                                            htmlFor="mother_name"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Nama Ibu
                                        </label>
                                        <input
                                            type="text"
                                            value={data.mother_name}
                                            onChange={(e) =>
                                                setData("mother_name", e.target.value)
                                            }
                                            name="mother_name"
                                            id="mother_name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3"
                                            placeholder="Mother's name"
                                            required={true}
                                        />
                                        {errors.mother_name && (
                                            <p className="text-xs text-red-600 mt-2">
                                                {errors.mother_name}
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-span-1">
                                        <label
                                            htmlFor="nickname"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Nama Panggilan
                                        </label>
                                        <input
                                            type="text"
                                            value={data.nickname}
                                            onChange={(e) =>
                                                setData("nickname", e.target.value)
                                            }
                                            name="nickname"
                                            id="nickname"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3"
                                            placeholder="Your's nickname"
                                            required={true}
                                        />
                                        {errors.nickname && (
                                            <p className="text-xs text-red-600 mt-2">
                                                {errors.nickname}
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-span-1">
                                        <label
                                            htmlFor="child"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Anak Ke-
                                        </label>
                                        <input
                                            type="number"
                                            value={data.child}
                                            onChange={(e) =>
                                                setData("child", e.target.value)
                                            }
                                            name="child"
                                            id="child"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3"
                                            placeholder="Child"
                                            required={true}
                                        />
                                        {errors.child && (
                                            <p className="text-xs text-red-600 mt-2">
                                                {errors.child}
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="child"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Jenis Kelamin
                                        </label>
                                        <div className="w-full flex items-center gap-3">
                                            <div className="w-full flex items-center bg-gray-50 ps-4 border border-gray-300 rounded-xl">
                                                <input id="gender-1" type="radio" value={1} onChange={(e) => setData("gender", e.target.value)} name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" checked={data.gender == "1"} />
                                                <label htmlFor="gender-1" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Laki-laki</label>
                                            </div>
                                            <div className="w-full flex items-center bg-gray-50 ps-4 border border-gray-300 rounded-xl">
                                                <input id="gender-2" type="radio" value={0} onChange={(e) => setData("gender", e.target.value)} name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" checked={data.gender == "0"} />
                                                <label htmlFor="gender-2" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Perempuan</label>
                                            </div>
                                        </div>
                                        {errors.child && (
                                            <p className="text-xs text-red-600 mt-2">
                                                {errors.child}
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-span-2">
                                        <label
                                            htmlFor="privilage"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Turut mengundang
                                        </label>
                                        <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 px-3" name="privilage" id="privilage" onChange={(e) =>
                                            setData("privilage", e.target.value)
                                        } value={data.privilage} placeholder="Keluarga mempelai" required={false}>{data.privilage}</textarea>
                                        {errors.privilage && (
                                            <p className="text-xs text-red-600 mt-2">
                                                {errors.privilage}
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
