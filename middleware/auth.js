export default function ({ app, store, redirect }) {
  if (!app.$storage.getToken()) {
    return redirect('/', {redirect_url: app.router.currentRoute.path})
  }
  return true;
}