import Footer from "../../components/user/footer";
import Header from "../../components/user/header";

const ProductsPage = {
    render() {
        return /* html */ `
        ${Header.render()}

        <!-- content -->
        <main>
            <section class="container max-w-6xl mx-auto px-3 pt-8 mb-5 text-center">
                <div class="flex justify-center">
                    <a href="" class="transition duration-300 ease-linear hover:text-[#D9A953] block pr-6 font-semibold relative after:content-[''] after:absolute after:right-3 after:bg-gray-500 after:w-[1px] after:h-4 after:rotate-12 after:top-1/2 after:-translate-y-1/2">Trang chủ</a>
                    <a href="" class="transition duration-300 ease-linear hover:text-[#D9A953] font-semibold">Sản phẩm</a>
                </div>
                <h1 class="text-[#D9A953] font-semibold text-3xl mt-1">Trà sữa</h1>
            </section>

            <section class="container max-w-6xl mx-auto px-3 grid grid-cols-12 gap-6 mb-8">
                <aside class="hidden lg:block lg:col-span-3 pt-3">
                    <div>
                        <h2 class="uppercase font-bold pb-2 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Danh mục sản phẩm</h2>

                        <ul class="grid grid-cols-1 divide-y mt-3">
                            <li>
                                <a href="" class="block uppercase py-2 text-[#D9A953] transition duration-300 ease-linear hover:text-black">Trà sữa</a>
                            </li>
                            <li>
                                <a href="" class="block uppercase py-2 text-[#D9A953] transition duration-300 ease-linear hover:text-black">Trà sữa</a>
                            </li>
                            <li>
                                <a href="" class="block uppercase py-2 text-[#D9A953] transition duration-300 ease-linear hover:text-black">Trà sữa</a>
                            </li>
                            <li>
                                <a href="" class="block uppercase py-2 text-[#D9A953] transition duration-300 ease-linear hover:text-black">Trà sữa</a>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-3">
                        <h2 class="uppercase font-bold pb-2 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Lọc theo giá</h2>

                    </div>

                    <div class="mt-5">
                        <h2 class="uppercase font-bold pb-2 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Sản phẩm đánh giá cao</h2>

                        <ul class="grid grid-cols-1 divide-y mt-2">
                            <li class="py-3 flex">
                                <a href="" class="block bg-[#f7f7f7]">
                                    <img class="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" alt="">
                                </a>

                                <div class="ml-3 flex-1">
                                    <a href="" class="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                                    <span class="font-semibold">25,000 ₫</span>
                                </div>
                            </li>
                            <li class="py-3 flex">
                                <a href="" class="block bg-[#f7f7f7]">
                                    <img class="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" alt="">
                                </a>

                                <div class="ml-3 flex-1">
                                    <a href="" class="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                                    <span class="font-semibold">25,000 ₫</span>
                                </div>
                            </li>
                            <li class="py-3 flex">
                                <a href="" class="block bg-[#f7f7f7]">
                                    <img class="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" alt="">
                                </a>

                                <div class="ml-3 flex-1">
                                    <a href="" class="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                                    <span class="font-semibold">25,000 ₫</span>
                                </div>
                            </li>
                            <li class="py-3 flex">
                                <a href="" class="block bg-[#f7f7f7]">
                                    <img class="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" alt="">
                                </a>

                                <div class="ml-3 flex-1">
                                    <a href="" class="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                                    <span class="font-semibold">25,000 ₫</span>
                                </div>
                            </li>
                            <li class="py-3 flex">
                                <a href="" class="block bg-[#f7f7f7]">
                                    <img class="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" alt="">
                                </a>

                                <div class="ml-3 flex-1">
                                    <a href="" class="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                                    <span class="font-semibold">25,000 ₫</span>
                                </div>
                            </li>
                            <li class="py-3 flex">
                                <a href="" class="block bg-[#f7f7f7]">
                                    <img class="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png" alt="">
                                </a>

                                <div class="ml-3 flex-1">
                                    <a href="" class="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                                    <span class="font-semibold">25,000 ₫</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>

                <div class="col-span-12 lg:col-span-9">
                    <!-- filter -->
                    <div class="border-b pb-2 flex justify-between items-center">
                        <div class="flex items-center">
                            <ul class="flex">
                                <li class="text-xl cursor-pointer mr-2 text-gray-600 transition ease-linear duration-150 hover:text-[#D9A953]">
                                    <i class="fas fa-th"></i>
                                </li>
                                <li class="text-xl cursor-pointer mr-2 text-gray-600 transition ease-linear duration-150 hover:text-[#D9A953]">
                                    <i class="fas fa-th-list"></i>
                                </li>
                            </ul>

                            <span>Hiển thị 1 - 12 trong 36 kết quả</span>
                        </div>

                        <form action="" class="flex items-center">
                            <label for="">Sắp xếp theo</label>

                            <div class="flex ml-2 relative group">
                                <div class="text-gray-600 flex items-center justify-between px-2 py-2 min-w-[130px] rounded-md border cursor-pointer group-hover:rounded-b-none">
                                    <span class="mr-4">Mặc định</span>
                                    <i class="fas fa-chevron-down"></i>
                                </div>

                                <ul class="hidden group-hover:block absolute top-full left-0 right-0 bg-white border z-10 px-2 py-1">
                                    <li class="flex justify-between items-center py-1 text-gray-600 hover:text-[#D9A953] cursor-pointer">
                                        <span>Mặc định</span>
                                        <div class="">
                                            <i class="fas fa-check"></i>
                                        </div>
                                    </li>
                                    <li class="flex justify-between items-center py-1 text-gray-600 hover:text-[#D9A953] cursor-pointer">
                                        <span>Mặc định</span>
                                        <div class="">
                                            <i class="fas fa-check"></i>
                                        </div>
                                    </li>
                                    <li class="flex justify-between items-center py-1 text-gray-600 hover:text-[#D9A953] cursor-pointer">
                                        <span>Mặc định</span>
                                        <div class="">
                                            <i class="fas fa-check"></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                    <!-- end filter -->

                    <div>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                            <div class="group">
                                <div class="relative bg-[#f7f7f7] overflow-hidden">
                                    <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png)" class="bg-cover pt-[100%] bg-center block"></a>
                                    <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                    <button class="absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                        <i class="fas fa-heart"></i>
                                    </button>
                                </div>
        
                                <div class="text-center py-3">
                                    <p class="uppercase text-xs text-gray-400">Trà sữa</p>
                                    <a href="" class="block font-semibold text-lg">Trà sữa ô long bạch kim</a>
                                    <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </ul>
                                    <div class="text-sm pt-1">
                                        20,000 ₫ <span class="pl-2 line-through text-gray-500">20,000 ₫</span>
                                    </div>
                                </div>
                            </div>
    
                            <div class="group">
                                <div class="relative bg-[#f7f7f7] overflow-hidden">
                                    <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png)" class="bg-cover pt-[100%] bg-center block"></a>
                                    <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                    <button class="absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                        <i class="fas fa-heart"></i>
                                    </button>
                                </div>
        
                                <div class="text-center py-3">
                                    <p class="uppercase text-xs text-gray-400">Trà sữa</p>
                                    <a href="" class="block font-semibold text-lg">Trà sữa ô long bạch kim</a>
                                    <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </ul>
                                    <div class="text-sm pt-1">
                                        20,000 ₫ <span class="pl-2 line-through text-gray-500">20,000 ₫</span>
                                    </div>
                                </div>
                            </div>
    
                            <div class="group">
                                <div class="relative bg-[#f7f7f7] overflow-hidden">
                                    <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png)" class="bg-cover pt-[100%] bg-center block"></a>
                                    <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                    <button class="absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                        <i class="fas fa-heart"></i>
                                    </button>
                                </div>
        
                                <div class="text-center py-3">
                                    <p class="uppercase text-xs text-gray-400">Trà sữa</p>
                                    <a href="" class="block font-semibold text-lg">Trà sữa ô long bạch kim</a>
                                    <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </ul>
                                    <div class="text-sm pt-1">
                                        20,000 ₫ <span class="pl-2 line-through text-gray-500">20,000 ₫</span>
                                    </div>
                                </div>
                            </div>
    
                            <div class="group">
                                <div class="relative bg-[#f7f7f7] overflow-hidden">
                                    <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png)" class="bg-cover pt-[100%] bg-center block"></a>
                                    <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                    <button class="absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                        <i class="fas fa-heart"></i>
                                    </button>
                                </div>
        
                                <div class="text-center py-3">
                                    <p class="uppercase text-xs text-gray-400">Trà sữa</p>
                                    <a href="" class="block font-semibold text-lg">Trà sữa ô long bạch kim</a>
                                    <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </ul>
                                    <div class="text-sm pt-1">
                                        20,000 ₫ <span class="pl-2 line-through text-gray-500">20,000 ₫</span>
                                    </div>
                                </div>
                            </div>
    
                            <div class="group">
                                <div class="relative bg-[#f7f7f7] overflow-hidden">
                                    <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png)" class="bg-cover pt-[100%] bg-center block"></a>
                                    <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                    <button class="absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                        <i class="fas fa-heart"></i>
                                    </button>
                                </div>
        
                                <div class="text-center py-3">
                                    <p class="uppercase text-xs text-gray-400">Trà sữa</p>
                                    <a href="" class="block font-semibold text-lg">Trà sữa ô long bạch kim</a>
                                    <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </ul>
                                    <div class="text-sm pt-1">
                                        20,000 ₫ <span class="pl-2 line-through text-gray-500">20,000 ₫</span>
                                    </div>
                                </div>
                            </div>
    
                            <div class="group">
                                <div class="relative bg-[#f7f7f7] overflow-hidden">
                                    <a href="" style="background-image: url(https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png)" class="bg-cover pt-[100%] bg-center block"></a>
                                    <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                    <button class="absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                        <i class="fas fa-heart"></i>
                                    </button>
                                </div>
        
                                <div class="text-center py-3">
                                    <p class="uppercase text-xs text-gray-400">Trà sữa</p>
                                    <a href="" class="block font-semibold text-lg">Trà sữa ô long bạch kim</a>
                                    <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </ul>
                                    <div class="text-sm pt-1">
                                        20,000 ₫ <span class="pl-2 line-through text-gray-500">20,000 ₫</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 divide-y">
                            <div class="grid grid-cols-12 py-4 gap-3">
                                <div class="col-span-3 relative group overflow-hidden">
                                    <a href="" class="bg-no-repeat bg-cover bg-center block h-full bg-[#f7f7f7] absolute w-full" style="background-image: url('https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png')"></a>
                                    <button class="absolute w-full h-8 bottom-0 bg-[#D9A953] opacity-90 transition ease-linear duration-300 text-white font-semibold uppercase text-sm hover:opacity-100 translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                    <button class="opacity-0 group-hover:opacity-100 absolute top-3 right-3 border-2 border-gray-400 rounded-full w-8 h-8 text-gray-400 transition ease-linear duration-300 hover:bg-red-700 hover:text-white hover:border-red-700">
                                        <i class="fas fa-heart"></i>
                                    </button>
                                </div>

                                <div class="col-span-9">
                                    <h3>
                                        <a href="" class="block font-semibold text-xl text-gray-800 pb-1 mb-3 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Trà sữa trân châu đường đen</a>
                                    </h3>
                                    <ul class="flex items-center mt-4">
                                        <li class="flex text-yellow-400 text-xs pr-6 relative after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li class="pr-6 relative after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">4 Đánh giá</li>
                                        <li>10 Đã bán</li>
                                    </ul>
                                    <div class="mt-1 mb-2">
                                        <span class="text-xl text-[#D9A953] font-semibold">10,000 ₫</span>
                                        <span class="pl-2 line-through">10,000 ₫</span>
                                    </div>
                                    <p>
                                        Hãy bổ sung dâu tây vào thực đơn khi mang thai để tạo tiền đề tốt cho
                                        sự phát triển em bé. Ăn dâu tây sẽ giúp cung cấp cho hai mẹ con các
                                        vitamin và chất khoáng cần thiết.
                                    </p>
                                    <button class="mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                            <div class="grid grid-cols-12 py-4 gap-3">
                                <div class="col-span-3 relative group overflow-hidden">
                                    <a href="" class="bg-no-repeat bg-cover bg-center block h-full bg-[#f7f7f7] absolute w-full" style="background-image: url('https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png')"></a>
                                    <button class="absolute w-full h-8 bottom-0 bg-[#D9A953] opacity-90 transition ease-linear duration-300 text-white font-semibold uppercase text-sm hover:opacity-100 translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                    <button class="opacity-0 group-hover:opacity-100 absolute top-3 right-3 border-2 border-gray-400 rounded-full w-8 h-8 text-gray-400 transition ease-linear duration-300 hover:bg-red-700 hover:text-white hover:border-red-700">
                                        <i class="fas fa-heart"></i>
                                    </button>
                                </div>

                                <div class="col-span-9">
                                    <h3>
                                        <a href="" class="block font-semibold text-xl text-gray-800 pb-1 mb-3 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Trà sữa trân châu đường đen</a>
                                    </h3>
                                    <ul class="flex items-center mt-4">
                                        <li class="flex text-yellow-400 text-xs pr-6 relative after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li class="pr-6 relative after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">4 Đánh giá</li>
                                        <li>10 Đã bán</li>
                                    </ul>
                                    <div class="mt-1 mb-2">
                                        <span class="text-xl text-[#D9A953] font-semibold">10,000 ₫</span>
                                        <span class="pl-2 line-through">10,000 ₫</span>
                                    </div>
                                    <p>
                                        Hãy bổ sung dâu tây vào thực đơn khi mang thai để tạo tiền đề tốt cho
                                        sự phát triển em bé. Ăn dâu tây sẽ giúp cung cấp cho hai mẹ con các
                                        vitamin và chất khoáng cần thiết.
                                    </p>
                                    <button class="mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                            <div class="grid grid-cols-12 py-4 gap-3">
                                <div class="col-span-3 relative group overflow-hidden">
                                    <a href="" class="bg-no-repeat bg-cover bg-center block h-full bg-[#f7f7f7] absolute w-full" style="background-image: url('https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png')"></a>
                                    <button class="absolute w-full h-8 bottom-0 bg-[#D9A953] opacity-90 transition ease-linear duration-300 text-white font-semibold uppercase text-sm hover:opacity-100 translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                    <button class="opacity-0 group-hover:opacity-100 absolute top-3 right-3 border-2 border-gray-400 rounded-full w-8 h-8 text-gray-400 transition ease-linear duration-300 hover:bg-red-700 hover:text-white hover:border-red-700">
                                        <i class="fas fa-heart"></i>
                                    </button>
                                </div>

                                <div class="col-span-9">
                                    <h3>
                                        <a href="" class="block font-semibold text-xl text-gray-800 pb-1 mb-3 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Trà sữa trân châu đường đen</a>
                                    </h3>
                                    <ul class="flex items-center mt-4">
                                        <li class="flex text-yellow-400 text-xs pr-6 relative after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li class="pr-6 relative after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">4 Đánh giá</li>
                                        <li>10 Đã bán</li>
                                    </ul>
                                    <div class="mt-1 mb-2">
                                        <span class="text-xl text-[#D9A953] font-semibold">10,000 ₫</span>
                                        <span class="pl-2 line-through">10,000 ₫</span>
                                    </div>
                                    <p>
                                        Hãy bổ sung dâu tây vào thực đơn khi mang thai để tạo tiền đề tốt cho
                                        sự phát triển em bé. Ăn dâu tây sẽ giúp cung cấp cho hai mẹ con các
                                        vitamin và chất khoáng cần thiết.
                                    </p>
                                    <button class="mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                            <div class="grid grid-cols-12 py-4 gap-3">
                                <div class="col-span-3 relative group overflow-hidden">
                                    <a href="" class="bg-no-repeat bg-cover bg-center block h-full bg-[#f7f7f7] absolute w-full" style="background-image: url('https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png')"></a>
                                    <button class="absolute w-full h-8 bottom-0 bg-[#D9A953] opacity-90 transition ease-linear duration-300 text-white font-semibold uppercase text-sm hover:opacity-100 translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                    <button class="opacity-0 group-hover:opacity-100 absolute top-3 right-3 border-2 border-gray-400 rounded-full w-8 h-8 text-gray-400 transition ease-linear duration-300 hover:bg-red-700 hover:text-white hover:border-red-700">
                                        <i class="fas fa-heart"></i>
                                    </button>
                                </div>

                                <div class="col-span-9">
                                    <h3>
                                        <a href="" class="block font-semibold text-xl text-gray-800 pb-1 mb-3 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Trà sữa trân châu đường đen</a>
                                    </h3>
                                    <ul class="flex items-center mt-4">
                                        <li class="flex text-yellow-400 text-xs pr-6 relative after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li class="pr-6 relative after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">4 Đánh giá</li>
                                        <li>10 Đã bán</li>
                                    </ul>
                                    <div class="mt-1 mb-2">
                                        <span class="text-xl text-[#D9A953] font-semibold">10,000 ₫</span>
                                        <span class="pl-2 line-through">10,000 ₫</span>
                                    </div>
                                    <p>
                                        Hãy bổ sung dâu tây vào thực đơn khi mang thai để tạo tiền đề tốt cho
                                        sự phát triển em bé. Ăn dâu tây sẽ giúp cung cấp cho hai mẹ con các
                                        vitamin và chất khoáng cần thiết.
                                    </p>
                                    <button class="mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                            <div class="grid grid-cols-12 py-4 gap-3">
                                <div class="col-span-3 relative group overflow-hidden">
                                    <a href="" class="bg-no-repeat bg-cover bg-center block h-full bg-[#f7f7f7] absolute w-full" style="background-image: url('https://res.cloudinary.com/levantuan/image/upload/v1642596048/fpoly/asm-js/d%C3%A2u-n%E1%BB%AF-ho%C3%A0ng_t4r4ce.png')"></a>
                                    <button class="absolute w-full h-8 bottom-0 bg-[#D9A953] opacity-90 transition ease-linear duration-300 text-white font-semibold uppercase text-sm hover:opacity-100 translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                    <button class="opacity-0 group-hover:opacity-100 absolute top-3 right-3 border-2 border-gray-400 rounded-full w-8 h-8 text-gray-400 transition ease-linear duration-300 hover:bg-red-700 hover:text-white hover:border-red-700">
                                        <i class="fas fa-heart"></i>
                                    </button>
                                </div>

                                <div class="col-span-9">
                                    <h3>
                                        <a href="" class="block font-semibold text-xl text-gray-800 pb-1 mb-3 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Trà sữa trân châu đường đen</a>
                                    </h3>
                                    <ul class="flex items-center mt-4">
                                        <li class="flex text-yellow-400 text-xs pr-6 relative after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </li>
                                        <li class="pr-6 relative after:content-[''] after:absolute after:right-3 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">4 Đánh giá</li>
                                        <li>10 Đã bán</li>
                                    </ul>
                                    <div class="mt-1 mb-2">
                                        <span class="text-xl text-[#D9A953] font-semibold">10,000 ₫</span>
                                        <span class="pl-2 line-through">10,000 ₫</span>
                                    </div>
                                    <p>
                                        Hãy bổ sung dâu tây vào thực đơn khi mang thai để tạo tiền đề tốt cho
                                        sự phát triển em bé. Ăn dâu tây sẽ giúp cung cấp cho hai mẹ con các
                                        vitamin và chất khoáng cần thiết.
                                    </p>
                                    <button class="mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- pagination -->
                    <ul class="flex justify-center mt-5">
                        <li class="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                            <button>
                                <i class="fas fa-angle-left"></i>
                            </button>
                        </li>
                        <li class="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">1</li>
                        <li class="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">2</li>
                        <li class="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">3</li>
                        <li class="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                            <button>
                                <i class="fas fa-angle-right"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
};

export default ProductsPage;