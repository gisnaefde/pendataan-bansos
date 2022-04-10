import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import { unstable_batchedUpdates } from "react-dom";

const Form = () => {

    const [input, setInput] = useState({})

    const handleChange = (event) => {
        const nama = event.target.name
        const value = event.target.value
        // console.log(input.nik.length)
        setInput({ ...input, [nama]: value })


    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const waktu = Math.floor(Math.random() * 2600);
        setTimeout(() => {

            if (waktu <= 1500) {
                if (input.nik.length == 16) {
                    if (input.no_kk.length == 16) {
                        if (input.alamat.length <= 225) {
                            alert("Berhasil Terkirim")
                        } else {
                            alert("Jumlah Karakter Tidak Boleh lebih 225 Karakter")
                            return false
                        }
                    } else {
                        alert("No KK tidak sesuai")
                        return false
                    }
                } else {
                    alert("NIk tidak sesuai")
                    return false
                }
            } else {
                alert("Gagal terkirim, waktu respon server habis")
                return false
            }
            console.log(input)
        }, waktu);
    }


    const digit = (params) => {
        if (params <= 16) {
            console.log("kurang")
        } else {
            console.log("sukses")
        }
    }

    return (
        <>
            <div className="container mx-auto bg-kuning">
                <h1 className="text-2xl font-bold  underline text-center pt-24">Isi kan Data Warga Anda</h1>
                <form onSubmit={handleSubmit} className="mx-9 md:mx-56 mt-20 pb-10">
                    <div class="md:mb-6">
                        <label class="text-xl block mb-2 font-medium text-gray-900 ">NAMA</label>
                        <input type="text" onChange={handleChange} name="nama" class="bg-gray-50 border text-lg border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="md:mb-6">
                        <label class="text-xl block mb-2 font-medium text-gray-900 ">NIK</label>
                        <input id={digit} type="number" onChange={handleChange} name="nik" class="bg-gray-50 border text-lg border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="md:mb-6">
                        <label class="text-xl block mb-2 font-medium text-gray-900 ">NO KARTU KELUARGA</label>
                        <input type="number" onChange={handleChange} name="no_kk" class="bg-gray-50 border text-lg border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="md:mb-6">
                        <label class="text-xl block mb-2 font-medium text-gray-900 ">FOTO KTP</label>
                        <input type="file" size={1024} onChange={handleChange} name="foto_ktp" accept='image/*' class="bg-gray-50 border text-lg border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="md:mb-6">
                        <label class="text-xl block mb-2 font-medium text-gray-900 ">FOTO KARTU KELUARGA</label>
                        <input type="file" onChange={handleChange} name="foto_kk" accept='image/*' class="bg-gray-50 border text-lg border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="md:mb-6">
                        <label class="text-xl block mb-2 font-medium text-gray-900 ">UMUR</label>
                        <input id="umur" type="number" onChange={handleChange} name="umur" min={25} class="bg-gray-50 border text-lg border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="md:mb-6">
                        <label class="text-xl block mb-2 font-medium text-gray-900 ">JENIS KELAMIN</label>
                        <select type="text" onChange={handleChange} name="jk" class="bg-gray-50 border text-lg border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
                            <option >
                                Laki-Laki
                            </option>
                            <option value="Perempuan">
                                Perempuan
                            </option>
                        </select>
                    </div>
                    <div class="md:mb-6">
                        <label class="text-xl block mb-2 font-medium text-gray-900 ">ALAMAT</label>
                        <input type="text" onChange={handleChange} name="alamat" maxlength="225" class="bg-gray-50 border text-lg border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="md:mb-6">
                        <label class="text-xl block mb-2 font-medium text-gray-900 ">RT</label>
                        <input type="number" onChange={handleChange} name="rt" class="bg-gray-50 border text-lg border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="md:mb-6">
                        <label class="text-xl block mb-2 font-medium text-gray-900 ">RW</label>
                        <input type="number" onChange={handleChange} name="rw" class="bg-gray-50 border text-lg border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="md:mb-6">
                        <label class="text-xl block mb-2 font-medium text-gray-900 ">Penghasilan Sebelum Pandemi</label>
                        <input type="number" onChange={handleChange} name="p_sebelum" class="bg-gray-50 border text-lg border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="md:mb-6">
                        <label class="text-xl block mb-2 font-medium text-gray-900 ">Penghasilan Setelah Pandemi</label>
                        <input type="number" onChange={handleChange} name="p_sesudah" class="bg-gray-50 border text-lg border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="md:mb-6">
                        <label class="text-xl block mb-2 font-medium text-gray-900 ">Alasan Membutuhkan Bantuan</label>
                        <select type="text" onChange={handleChange} name="alasan_bantuan" class="bg-gray-50 border text-lg border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
                            <option value="Kehilangan Pekerjaan">
                                Kehilangan Pekerjaan
                            </option>
                            <option value="Kepala keluarga terdampak atau korban Covid">
                                Kepala keluarga terdampak atau korban Covid
                            </option>
                            <option value="Tergolong fakir/miskin semenjak sebelum Covid">
                                Tergolong fakir/miskin semenjak sebelum Covid
                            </option>
                            <option value="">
                                Lainnya
                            </option>
                        </select>
                    </div>

                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 " required />
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="remember" class="font-lg text-gray-900 ">Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.</label>
                        </div>
                    </div>
                    <button type="submit" class="text-white bg-hijau focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Kirim</button>
                </form>
            </div>
        </>
    )
}

export default Form