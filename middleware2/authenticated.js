export default function({ $auth, redirect }) {
    if($auth.loggedIn) {
        if($auth.strategy.name === "admin") {
            return redirect('/admin/dashboard')
        }
        if($auth.strategy.name === "customer") {

            return redirect('/customer/dashboard')

        }
    }

}