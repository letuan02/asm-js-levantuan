/* eslint-disable no-plusplus */
import toastr from "toastr";
import { add, checkHeart } from "../../../api/favoritesProduct";
import { get, getAllJoinCategory, update } from "../../../api/product";
import { formatCurrency, getUser, reRender } from "../../../utils";
import WishList from "../wishlist";
import WishListLabel from "../wishlistLabel";

const Products = {
    async render() {
        const { data: listProduct } = await getAllJoinCategory(0, 8);

        const renderRating = (listRating) => {
            let htmlRating = "";

            if (listRating) {
                const sum = listRating.reduce((total, rating) => total + rating.ratingNumber, 0);
                const ratingAvg = sum / listRating.length;

                for (let i = 0; i < Math.ceil(ratingAvg); i++) {
                    htmlRating += /* html */`
                    <div class="text-yellow-400">
                        <i class="fas fa-star"></i>
                    </div>
                `;
                }

                for (let i = 0; i < 5 - Math.ceil(ratingAvg); i++) {
                    htmlRating += /* html */`
                    <div class="text-gray-300">
                        <i class="fas fa-star"></i>
                    </div>
                `;
                }
            } else {
                htmlRating = `
                <div class="text-gray-300">
                    <i class="fas fa-star"></i>
                </div>
                <div class="text-gray-300">
                    <i class="fas fa-star"></i>
                </div>
                <div class="text-gray-300">
                    <i class="fas fa-star"></i>
                </div>
                <div class="text-gray-300">
                    <i class="fas fa-star"></i>
                </div>
                <div class="text-gray-300">
                    <i class="fas fa-star"></i>
                </div>
                `;
            }

            return htmlRating;
        };

        return /* html */ `
        <section class="container max-w-6xl mx-auto py-9 px-3">
            <div class="text-center">
                <h2 class="uppercase text-[#D9A953] text-2xl font-semibold">S???N PH???M N???I B???T</h2>
                <p>Ch??o m???ng b???n ?????n v???i thi??n ???????ng v??? gi??c c???a Yotea. Menu Yotea r???t ??a d???ng m??n u???ng, ????? ????? ????p ???ng kh???u v??? ?????a chua chu???ng b??o??? c???a b???n. Order v?? th?????ng th???c ngay nh??.</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                ${listProduct.map((item) => `
                    <div class="group">
                        <div class="relative bg-[#f7f7f7] overflow-hidden">
                            <a href="/#/product/${item.id}" style="background-image: url(${item.image})" class="bg-cover pt-[100%] bg-center block"></a>
                            <button class="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                            <button data-id="${item.id}" class="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>

                        <div class="text-center py-3">
                            <p class="uppercase text-xs text-gray-400">${item.category.name}</p>
                            <a href="/#/product/${item.id}" class="block font-semibold text-lg">${item.name}</a>
                            <ul class="flex text-yellow-500 text-xs justify-center pt-1">
                            ${renderRating(item.ratings.length ? item.ratings : 0)}
                            </ul>
                            <div class="text-sm pt-1">
                                ${formatCurrency(item.price)}
                            </div>
                        </div>
                    </div>
                    `).join("")}
            </div>
        </section>
        `;
    },
    afterRender() {
        // y??u th??ch sp
        const btnsHeart = document.querySelectorAll(".btn-heart");
        btnsHeart.forEach((btn) => {
            const { id } = btn.dataset;

            btn.addEventListener("click", async () => {
                const userLogged = getUser();

                if (!userLogged) {
                    toastr.info("Vui l??ng ????ng nh???p ????? y??u th??ch s???n ph???m");
                } else {
                    const { data: heartList } = await checkHeart(userLogged.id, id);

                    if (heartList.length) {
                        toastr.info("S???n ph???m ???? t???n t???i trong danh s??ch y??u th??ch");
                    } else {
                        const { data: productInfo } = await get(id);
                        productInfo.favorites += 1;

                        // c???p nh???t s??? l?????t y??u th??ch
                        update(id, productInfo);

                        // l??u th??ng tin
                        const date = new Date();
                        add({
                            userId: userLogged.id,
                            productId: +id,
                            createdAt: date.toISOString(),
                        })
                            .then(() => toastr.success("???? th??m v??o danh s??ch y??u th??ch"))
                            .then(() => reRender(WishListLabel, ".header-icon-heart"))
                            .then(() => reRender(WishList, "#wishlist"))
                            .then(() => document.querySelector("#wishlist").classList.add("active"));
                    }
                }
            });
        });
    },
};

export default Products;