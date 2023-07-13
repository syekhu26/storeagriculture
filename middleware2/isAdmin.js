export default function({ $auth, redirect }) {

    if(!$auth.loggedIn) {
        return redirect('/admin/login')
    }
    if($auth.strategy.name !== "admin") {
        return redirect('/admin/login')
    } 

}