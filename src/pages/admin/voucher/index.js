import $ from "jquery";
import Swal from "sweetalert2";
import HeaderTop from "../../../components/admin/headerTop";
import AdminNav from "../../../components/admin/nav";
import { remove, getAll, search } from "../../../api/voucher";
import { formatDate, reRender } from "../../../utils";
import AdminVoucherList from "../../../components/admin/voucherList";
import Pagination from "../../../components/admin/pagination";

const AdminVoucherListPage = {
    getTitle() {
        return "Voucher List | Administrator";
    },
    async render(pageNumber) {
        const { data } = await getAll();
        const total = data.length; // tổng số
        const limit = 10;
        const currentPage = pageNumber ?? 1; // lấy số trang hiện tại

        // ds theo limit
        const { data: voucherList } = await getAll(currentPage, limit);

        return /* html */ `
        <section class="min-h-screen bg-gray-50 dashboard">
            ${AdminNav.render("voucher")}
            
            <div class="ml-0 transition md:ml-60">
                <header class="left-0 md:left-60 fixed right-0 top-0">
                    ${HeaderTop.render()}

                    <div class="px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                        <div class="flex items-center text-sm text-gray-600">
                            <h5 class="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                            Voucher
                            </h5>
                            <span>DS voucher</span>
                        </div>

                        <a href="/#/admin/voucher/add">
                            <button type="button" class="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Thêm voucher
                            </button>
                        </a>
                    </div>
                </header>

                <div class="p-6 mt-24 overflow-hidden">
                <!-- search -->
                    <form action="" class="flex rounded-md shadow-sm mb-5" method="POST" id="voucher__form-search">
                        <input type="text" name="company-website" id="voucher__form-search-key" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 px-4 py-2 border outline-none" placeholder="Nhập mã voucher">
                        <span class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer hover:bg-gray-200">
                            <i class="fas fa-search"></i>
                        </span>
                    </form>

                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200" id="voucher__list-table">
                                    ${await AdminVoucherList.render(voucherList)}
                                </table>

                                <!-- pagination -->
                                ${Pagination.render(total, limit, +currentPage, "voucher")}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                
            </div>
            <div class="fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 hidden dashboard__overlay"></div>
        </section>
        `;
    },
    afterRender() {
        HeaderTop.afterRender();
        AdminNav.afterRender();

        const btnsDelete = document.querySelectorAll(".voucher__list-btn-delete");

        // xóa voucher
        btnsDelete.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const { id } = e.target.dataset;

                Swal.fire({
                    title: "Bạn có chắc chắn muốn xóa không?",
                    text: "Bạn không thể hoàn tác sau khi xóa!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        remove(id)
                            .then(() => {
                                Swal.fire(
                                    "Thành công",
                                    "Đã xóa danh mục.",
                                    "success",
                                );
                            })
                            .then(() => {
                                reRender(AdminVoucherListPage, "#app");
                            });
                    }
                });
            });
        });

        // search
        $("#voucher__form-search").on("input", async () => {
            const keyword = $("#voucher__form-search-key").val();

            const { data: voucherList } = await search(keyword);
            $("#voucher__list").html(voucherList.map((voucher) => `
                <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${voucher.id}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${voucher.code}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${voucher.quantity}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        -${voucher.condition ? `${voucher.conditionNumber} VNĐ` : `${voucher.conditionNumber}%`}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                        ${formatDate(voucher.timeStart)}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                        ${formatDate(voucher.timeEnd)}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${voucher.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}">
                        ${voucher.status ? "Kích hoạt" : "Khóa"}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/#/admin/voucher/${voucher.id}/edit" class="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</a>
                        <button data-id="${voucher.id}" class="voucher__list-btn-delete h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3">Delete</button>
                    </td>
                </tr>
                `).join(""));

            // ẩn phân trang
            $("#pagination").hide();
        });
    },
};

export default AdminVoucherListPage;