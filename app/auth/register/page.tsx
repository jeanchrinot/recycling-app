"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

const RegisterPage = () => {
  const router = useRouter()
  const [name, setName] = useState("Ahmet Kaya")
  const [email, setEmail] = useState("ahmet@test.com")
  const [password, setPassword] = useState("12345678")

  const onSubmit = () => {
    if (email && password && name) {
      const userInfo = {
        name,
        email,
        password,
      }
      localStorage.setItem("userInfo", JSON.stringify(userInfo))
      toast.success("Hesap oluşturdu!")
      router.push("/home")
    } else {
      toast.error("Lütfen, bilgileri giriniz!")
    }
  }
  return (
    <main className="flex min-h-screen w-screen overflow-hidden flex-col items-center justify-between">
      <div className="mt-24 px-4 py-24 relative flex place-items-center">
        <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <h2 className="mb-3 text-3xl font-bold text-green-700">
            Hesap Oluştur{" "}
          </h2>
          <p className="m-0 max-w-[30ch] text-gray-800 text-md opacity-90 text-center m-auto">
            Yeşil bir dünyaya adım atmak için hesabınızı oluşturun.
          </p>
          <div className="flex w-full justify-center items-center"></div>
          <div className="mt-3 px-6 w-full">
            {/* <form onSubmit={onSubmit}> */}
            <label className="block mb-3">
              <span className="block text-left text-sm text-gray-700">
                Ad Soyad
              </span>
              <input
                type="text"
                defaultValue="Ahmet Kaya"
                placeholder="Adınızı yazın"
                className="mt-1 block w-full px-3 py-2 text-gray-800 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="block mb-3">
              <span className="block text-left text-sm text-gray-700">
                E-posta
              </span>
              <input
                type="email"
                defaultValue="ahmet@test.com"
                placeholder="test@example.com"
                className="mt-1 block w-full px-3 py-2 text-gray-800 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="block mb-3">
              <span className="block text-left text-sm text-gray-700">
                Şifre
              </span>
              <input
                type="password"
                defaultValue="12345678"
                placeholder=""
                className="mt-1 block w-full px-3 py-2 text-gray-800 text-gray-800 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label className="block mb-3">
              <span className="block text-left text-sm text-gray-700">
                Şifre tekrar
              </span>
              <input
                type="password"
                defaultValue="12345678"
                placeholder=""
                className="mt-1 block w-full px-3 py-2 text-gray-800 text-gray-800 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </label>
            <button
              className="w-full mb-3 border bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={onSubmit}
            >
              Hesap Oluştur
            </button>
            {/* </form> */}
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  )
}

export default RegisterPage
