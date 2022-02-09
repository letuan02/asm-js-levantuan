import Footer from "../../components/user/footer";
import Header from "../../components/user/header";

const LoginPage = {
    render() {
        return /* html */ `
        ${Header.render()}

        <!-- content -->
        <main>
            <section class="container max-w-6xl mx-auto px-3">
                <h1 class="uppercase mt-8 font-semibold text-2xl text-gray-600">Đăng nhập</h1>

                <form action="" class="mb-14">
                    <div class="mt-3">
                        <label for="" class="font-semibold block mb-1">Tên tài khoản hoặc địa chỉ email *</label>
                        <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập tên đăng nhập hoặc email">
                    </div>

                    <div class="mt-3">
                        <label for="" class="font-semibold block mb-1">Mật khẩu *</label>
                        <input type="text" class="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Mật khẩu">
                    </div>

                    <div class="flex mt-3 items-center">
                        <input type="checkbox" name="" id="login_remember">
                        <label for="login_remember" class="ml-2 font-semibold select-none">Ghi nhớ mật khẩu</label>
                    </div>

                    <button class="select-none mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Đăng nhập</button>

                    <a href="/#/forgot" class="block mt-1">Quên mật khẩu?</a>
                </form>
            </section>
        </main>
        <!-- end content -->

        ${Footer.render()}
        `;
    },
};

export default LoginPage;